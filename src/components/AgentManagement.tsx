import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Users, 
  MapPin, 
  Search, 
  Filter, 
  Plus, 
  Eye, 
  Edit, 
  Trash2,
  CheckCircle,
  Clock,
  AlertTriangle,
  User,
  Phone,
  Mail,
  Calendar,
  Award,
  TrendingUp,
  Activity,
  Map,
  Navigation,
  Smartphone,
  Wifi,
  Battery,
  Signal
} from 'lucide-react';

const AgentManagement: React.FC = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  const agents = [
    {
      id: 'AG-001',
      name: 'Rajesh Kumar',
      nameHi: 'राजेश कुमार',
      email: 'rajesh.kumar@field.gov.in',
      phone: '+91 98765 43210',
      district: 'Ahmadabad',
      districtHi: 'अहमदाबाद',
      state: 'Gujarat',
      stateHi: 'गुजरात',
      status: 'active',
      assignedSurveys: 3,
      completedSurveys: 12,
      accuracy: 96.5,
      lastActive: '2 hours ago',
      joinDate: '2023-08-15',
      skills: ['Hindi', 'Gujarati', 'Digital Literacy'],
      deviceStatus: {
        battery: 78,
        signal: 4,
        online: true,
        lastSync: '10 minutes ago'
      },
      location: {
        lat: 23.0225,
        lng: 72.5714
      }
    },
    {
      id: 'AG-002',
      name: 'Priya Sharma',
      nameHi: 'प्रिया शर्मा',
      email: 'priya.sharma@field.gov.in',
      phone: '+91 98765 43211',
      district: 'Surat',
      districtHi: 'सूरत',
      state: 'Gujarat',
      stateHi: 'गुजरात',
      status: 'busy',
      assignedSurveys: 2,
      completedSurveys: 18,
      accuracy: 98.2,
      lastActive: '30 minutes ago',
      joinDate: '2023-07-20',
      skills: ['Hindi', 'English', 'Rural Outreach'],
      deviceStatus: {
        battery: 45,
        signal: 3,
        online: true,
        lastSync: '5 minutes ago'
      },
      location: {
        lat: 21.1702,
        lng: 72.8311
      }
    },
    {
      id: 'AG-003',
      name: 'Amit Patel',
      nameHi: 'अमित पटेल',
      email: 'amit.patel@field.gov.in',
      phone: '+91 98765 43212',
      district: 'Vadodara',
      districtHi: 'वडोदरा',
      state: 'Gujarat',
      stateHi: 'गुजरात',
      status: 'offline',
      assignedSurveys: 1,
      completedSurveys: 8,
      accuracy: 94.1,
      lastActive: '1 day ago',
      joinDate: '2023-09-10',
      skills: ['Gujarati', 'Technical Support'],
      deviceStatus: {
        battery: 0,
        signal: 0,
        online: false,
        lastSync: '1 day ago'
      },
      location: {
        lat: 22.3072,
        lng: 73.1812
      }
    }
  ];

  const districts = ['Ahmadabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'];
  const statuses = [
    { value: 'active', label: 'Active', color: 'green' },
    { value: 'busy', label: 'Busy', color: 'yellow' },
    { value: 'offline', label: 'Offline', color: 'red' }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'busy': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'offline': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = selectedDistrict === 'all' || agent.district === selectedDistrict;
    const matchesStatus = selectedStatus === 'all' || agent.status === selectedStatus;
    
    return matchesSearch && matchesDistrict && matchesStatus;
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {language === 'en' ? 'Agent Management' : 'एजेंट प्रबंधन'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {language === 'en' 
                ? 'Manage field agents and survey assignments' 
                : 'फील्ड एजेंटों और सर्वे असाइनमेंट का प्रबंधन करें'
              }
            </p>
          </div>
          
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-2xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
              <Eye className="h-5 w-5" />
              <span className="font-semibold">
                {language === 'en' ? 'View Reports' : 'रिपोर्ट देखें'}
              </span>
            </button>
            
            <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl hover:from-green-700 hover:to-green-800 transition-colors shadow-lg">
              <Plus className="h-5 w-5" />
              <span className="font-semibold">
                {language === 'en' ? 'Add Agent' : 'एजेंट जोड़ें'}
              </span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border-2 border-green-100 dark:border-green-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">Total Agents</p>
                <p className="text-3xl font-bold text-green-600">{agents.length}</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-2xl">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border-2 border-blue-100 dark:border-blue-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">Active Now</p>
                <p className="text-3xl font-bold text-blue-600">
                  {agents.filter(a => a.status === 'active').length}
                </p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl">
                <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border-2 border-purple-100 dark:border-purple-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">Avg Accuracy</p>
                <p className="text-3xl font-bold text-purple-600">
                  {(agents.reduce((sum, a) => sum + a.accuracy, 0) / agents.length).toFixed(1)}%
                </p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-2xl">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border-2 border-orange-100 dark:border-orange-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">Districts Covered</p>
                <p className="text-3xl font-bold text-orange-600">{districts.length}</p>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-2xl">
                <MapPin className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={language === 'en' ? 'Search agents...' : 'एजेंट खोजें...'}
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex space-x-4">
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              >
                <option value="all">{language === 'en' ? 'All Districts' : 'सभी जिले'}</option>
                {districts.map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              >
                <option value="all">{language === 'en' ? 'All Status' : 'सभी स्थिति'}</option>
                {statuses.map(status => (
                  <option key={status.value} value={status.value}>{status.label}</option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-2xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-xl transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-md' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <Users className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`px-4 py-2 rounded-xl transition-colors ${
                    viewMode === 'map' 
                      ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-md' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <Map className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      {viewMode === 'grid' ? (
        /* Grid View */
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredAgents.map((agent) => (
            <div key={agent.id} className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
              {/* Agent Header */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {language === 'en' ? agent.name : agent.nameHi}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {agent.id}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {language === 'en' ? `${agent.district}, ${agent.state}` : `${agent.districtHi}, ${agent.stateHi}`}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(agent.status)}`}>
                    {agent.status}
                  </span>
                </div>

                {/* Device Status */}
                <div className="flex items-center space-x-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl p-4">
                  <div className="flex items-center space-x-2">
                    <Battery className={`h-4 w-4 ${agent.deviceStatus.battery > 50 ? 'text-green-500' : agent.deviceStatus.battery > 20 ? 'text-yellow-500' : 'text-red-500'}`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {agent.deviceStatus.battery}%
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Signal className="h-4 w-4 text-blue-500" />
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-1 h-3 rounded-full ${i < agent.deviceStatus.signal ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${agent.deviceStatus.online ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {agent.deviceStatus.online ? 'Online' : 'Offline'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Agent Stats */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {agent.assignedSurveys}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {language === 'en' ? 'Assigned' : 'असाइन किए गए'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {agent.completedSurveys}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {language === 'en' ? 'Completed' : 'पूर्ण'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {agent.accuracy}%
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {language === 'en' ? 'Accuracy' : 'सटीकता'}
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{agent.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{agent.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {language === 'en' ? 'Joined' : 'शामिल हुए'}: {agent.joinDate}
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {language === 'en' ? 'Skills' : 'कौशल'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-2xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm font-semibold">
                      {language === 'en' ? 'View' : 'देखें'}
                    </span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-2xl hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
                    <Edit className="h-4 w-4" />
                    <span className="text-sm font-semibold">
                      {language === 'en' ? 'Assign' : 'असाइन करें'}
                    </span>
                  </button>
                  <button className="px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <Navigation className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Map View */
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8">
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Map className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {language === 'en' ? 'Interactive Map View' : 'इंटरैक्टिव मैप व्यू'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {language === 'en' 
                  ? 'Map integration coming soon - View agent locations and assignments'
                  : 'मैप एकीकरण जल्द आ रहा है - एजेंट स्थान और असाइनमेंट देखें'
                }
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {filteredAgents.map((agent) => (
                  <div key={agent.id} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        agent.status === 'active' ? 'bg-green-500' :
                        agent.status === 'busy' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">
                          {agent.name}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {agent.district}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentManagement;