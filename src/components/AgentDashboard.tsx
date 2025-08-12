import React from 'react';
import { 
  Users, 
  MapPin, 
  Activity, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  TrendingUp,
  FileText,
  Smartphone,
  Wifi,
  WifiOff
} from 'lucide-react';
import MapComponent from './MapComponent';
import { mapData } from '../data/mapData';

const AgentDashboard: React.FC = () => {
  const agentStats = {
    totalAgents: 1247,
    activeAgents: 892,
    offlineAgents: 355,
    tasksCompleted: 3456,
    tasksInProgress: 234,
    averageAccuracy: 94.2,
    responseTime: '2.3 min'
  };

  const recentActivities = [
    {
      id: 1,
      agent: 'Priya Sharma',
      action: 'Completed survey in Sector 15',
      time: '5 min ago',
      status: 'success'
    },
    {
      id: 2,
      agent: 'Rajesh Kumar',
      action: 'Started new survey assignment',
      time: '12 min ago',
      status: 'active'
    },
    {
      id: 3,
      agent: 'Anita Singh',
      action: 'Flagged data inconsistency',
      time: '18 min ago',
      status: 'warning'
    },
    {
      id: 4,
      agent: 'Vikram Patel',
      action: 'Submitted daily report',
      time: '25 min ago',
      status: 'success'
    }
  ];

  const topPerformers = [
    { name: 'Priya Sharma', location: 'Delhi NCR', surveys: 45, accuracy: 98.5 },
    { name: 'Rajesh Kumar', location: 'Mumbai', surveys: 42, accuracy: 97.2 },
    { name: 'Anita Singh', location: 'Bangalore', surveys: 38, accuracy: 96.8 },
    { name: 'Vikram Patel', location: 'Chennai', surveys: 35, accuracy: 95.9 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Agent Management</h1>
            <p className="text-sm text-gray-600 mt-1">Monitor and manage field agents across regions</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">System Status: Online</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Agents</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{agentStats.totalAgents.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600">+12% from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Now</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{agentStats.activeAgents}</p>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <Wifi className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-gray-500">{agentStats.offlineAgents} offline</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tasks Completed</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{agentStats.tasksCompleted.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-gray-500">{agentStats.tasksInProgress} in progress</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Accuracy</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{agentStats.averageAccuracy}%</p>
              </div>
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-gray-500">Avg response: {agentStats.responseTime}</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Regional Agent Activity</h2>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    Live View
                  </button>
                </div>
              </div>
              <MapComponent 
                data={mapData} 
                height="600px" 
                showConnections={true}
                interactive={true}
              />
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === 'success' ? 'bg-green-500' :
                      activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.agent}</p>
                      <p className="text-sm text-gray-600">{activity.action}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Performers */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performers</h3>
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {performer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{performer.name}</p>
                        <p className="text-xs text-gray-500">{performer.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{performer.surveys}</p>
                      <p className="text-xs text-green-600">{performer.accuracy}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;