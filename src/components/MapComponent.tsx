import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { 
  MapPin, 
  Users, 
  FileText, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  Activity,
  Shield
} from 'lucide-react';

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapData {
  districts: Array<{
    id: string;
    name: string;
    nameHi: string;
    state: string;
    coordinates: [number, number];
    surveys: {
      active: number;
      completed: number;
      total: number;
    };
    agents: {
      online: number;
      offline: number;
      total: number;
    };
    responses: {
      validated: number;
      pending: number;
      total: number;
    };
    accuracy: number;
    lastUpdate: string;
    status: 'excellent' | 'good' | 'warning' | 'critical';
  }>;
  connections: Array<{
    from: [number, number];
    to: [number, number];
    strength: number;
  }>;
}

interface MapComponentProps {
  data: MapData;
  height?: string;
  showConnections?: boolean;
  interactive?: boolean;
}

const MapComponent: React.FC<MapComponentProps> = ({ 
  data, 
  height = "400px", 
  showConnections = true,
  interactive = true 
}) => {
  const mapRef = useRef<L.Map>(null);

  // Custom icons for different statuses
  const createCustomIcon = (status: string, count: number) => {
    const colors = {
      excellent: '#10b981', // emerald-500
      good: '#3b82f6',      // blue-500
      warning: '#f59e0b',   // amber-500
      critical: '#ef4444'   // red-500
    };

    return L.divIcon({
      html: `
        <div class="relative">
          <div class="w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold" 
               style="background-color: ${colors[status as keyof typeof colors]}">
            ${count}
          </div>
          <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent" 
               style="border-top-color: ${colors[status as keyof typeof colors]}"></div>
        </div>
      `,
      className: 'custom-marker',
      iconSize: [32, 40],
      iconAnchor: [16, 40],
      popupAnchor: [0, -40]
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-emerald-600 bg-emerald-50';
      case 'good': return 'text-blue-600 bg-blue-50';
      case 'warning': return 'text-amber-600 bg-amber-50';
      case 'critical': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent': return <CheckCircle className="h-4 w-4" />;
      case 'good': return <TrendingUp className="h-4 w-4" />;
      case 'warning': return <AlertTriangle className="h-4 w-4" />;
      case 'critical': return <Shield className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  // India center coordinates
  const indiaCenter: [number, number] = [20.5937, 78.9629];

  return (
    <div className="relative bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
      <div className="absolute top-4 left-4 z-[1000] bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-medium border border-gray-200">
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-semibold text-gray-900">Survey Activity Map</span>
        </div>
        <div className="text-xs text-gray-600 space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span>Excellent Performance</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Good Performance</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span>Needs Attention</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>Critical Issues</span>
          </div>
        </div>
      </div>

      <MapContainer
        center={indiaCenter}
        zoom={5}
        style={{ height, width: '100%' }}
        ref={mapRef}
        zoomControl={interactive}
        dragging={interactive}
        touchZoom={interactive}
        doubleClickZoom={interactive}
        scrollWheelZoom={interactive}
        boxZoom={interactive}
        keyboard={interactive}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* District Markers */}
        {data.districts.map((district) => (
          <Marker
            key={district.id}
            position={district.coordinates}
            icon={createCustomIcon(district.status, district.surveys.active)}
          >
            <Popup className="custom-popup" maxWidth={320}>
              <div className="p-4 min-w-[280px]">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{district.name}</h3>
                    <p className="text-sm text-gray-600">{district.nameHi}</p>
                    <p className="text-xs text-gray-500">{district.state}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(district.status)}`}>
                    {getStatusIcon(district.status)}
                    <span className="capitalize">{district.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <FileText className="h-4 w-4 text-blue-600" />
                      <span className="text-xs font-medium text-blue-800">Surveys</span>
                    </div>
                    <div className="text-lg font-bold text-blue-900">{district.surveys.active}</div>
                    <div className="text-xs text-blue-600">
                      {district.surveys.completed}/{district.surveys.total} completed
                    </div>
                  </div>

                  <div className="bg-emerald-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Users className="h-4 w-4 text-emerald-600" />
                      <span className="text-xs font-medium text-emerald-800">Agents</span>
                    </div>
                    <div className="text-lg font-bold text-emerald-900">{district.agents.online}</div>
                    <div className="text-xs text-emerald-600">
                      {district.agents.total} total agents
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Responses Validated</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {district.responses.validated}/{district.responses.total}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(district.responses.validated / district.responses.total) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                  <div className="text-xs text-gray-500">
                    Accuracy: <span className="font-semibold text-gray-700">{district.accuracy}%</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Updated: {district.lastUpdate}
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Data Flow Connections */}
        {showConnections && data.connections.map((connection, index) => (
          <Polyline
            key={index}
            positions={[connection.from, connection.to]}
            color="#3b82f6"
            weight={Math.max(1, connection.strength * 3)}
            opacity={0.6}
            dashArray={connection.strength > 0.7 ? undefined : "5, 10"}
          />
        ))}

        {/* Regional Activity Circles */}
        {data.districts.map((district) => (
          <CircleMarker
            key={`circle-${district.id}`}
            center={district.coordinates}
            radius={Math.max(5, district.responses.total / 100)}
            fillColor={
              district.status === 'excellent' ? '#10b981' :
              district.status === 'good' ? '#3b82f6' :
              district.status === 'warning' ? '#f59e0b' : '#ef4444'
            }
            color="white"
            weight={2}
            opacity={0.8}
            fillOpacity={0.3}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;