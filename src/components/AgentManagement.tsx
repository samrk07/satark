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
  Grid,
  List
} from 'lucide-react';

const AgentManagement: React.FC = () => {
  const { language } = useLanguage();
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const agents = [
    {
      id: 'AGT001',
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@field.gov.in',
      phone: '+91 98765 43210',
      state: 'Gujarat',
      district: 'Ahmadabad',
      status: 'active',
      surveysAssigned: 12,
      surveysCompleted: 8,
      accuracy: 96.5,
      lastActive: '2 hours ago',
      joinDate: '2023-08-15',
      specialization: ['Rural Surveys', 'Healthcare'],
      performance: 'excellent'
    },
    {
      id: 'AGT002',
      name: 'Priya Sharma',
      email: 'priya.sharma@field.gov.in',
      phone: '+91 87654 32109',
      state: 'Maharashtra',
      district: 'Mumbai',
      status: 'active',
      surveysAssigned: 15,
      surveysCompleted: 12,
      accuracy: 94.2,
      lastActive: '1 hour ago',
      joinDate: '2023-07-20',
      specialization: ['Urban Planning', 'Education'],
      performance: 'excellent'
    },
    {
      id: 'AGT003',
      name: 'Amit Singh',
      email: 'amit.singh@field.gov.in',
      phone: '+91 76543 21098',
      state: 'Uttar Pradesh',
      district: 'Lucknow',
      status: 'busy',
      surveysAssigned: 10,
      surveysCompleted: 6,
      accuracy: 91.8,
      lastActive: '30 minutes ago',
      joinDate: '2023-09-10',
      specialization: ['Agriculture', 'Rural Development'],
      performance: 'good'
    },
    {
      id: 'AGT004',
      name: 'Sunita Patel',
      email: 'sunita.patel@field.gov.in',
      phone: '+91 65432 10987',
      state: 'Gujarat',
      district: 'Surat',
      status: 'offline',
      surveysAssigned: 8,
      surveysCompleted: 8,
      accuracy: 98.1,
      lastActive: '1 day ago',
      joinDate: '2023-06-05',
      specialization: ['Women Empowerment', 'Social Welfare'],
      performance: 'excellent'
    },
    {
      id: 'AGT005',
      name: 'Vikram Reddy',
      email: 'vikram.reddy@field.gov.in',
      phone: '+91 54321 09876',
      state: 'Telangana',
      district: 'Hyderabad',
      status: 'active',
      surveysAssigned: 14,
      surveysCompleted: 9,
      accuracy: 93.7,
      lastActive: '15 minutes ago',
      joinDate: '2023-08-01',
      specialization: ['Technology Adoption', 'Digital Literacy'],
      performance: 'good'
    },
    {
      id: 'AGT006',
      name: 'Meera Nair',
      email: 'meera.nair@field.gov.in',
      phone: '+91 43210 98765',
      state: 'Kerala',
      district: 'Kochi',
      status: 'active',
      surveysAssigned: 11,
      surveysCompleted: 10,
      accuracy: 97.3,
      lastActive: '45 minutes ago',
      joinDate: '2023-07-12',
      specialization: ['Healthcare', 'Nutrition'],
      performance: 'excellent'
    }
  ];

  const states = ['Gujarat', 'Maharashtra', 'Uttar Pradesh', 'Telangana', 'Kerala'];
  const statuses = ['active', 'busy', 'offline'];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'busy': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'offline': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getPerformanceColor = (performance: string) => {
    switch(performance) {
      case 'excellent': return 'text-green-600 dark:text-green-400';
      case 'good': return 'text-blue-600 dark:text-blue-400';
      case 'average': return 'text-yellow-600 dark:text-yellow-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === 'all' || agent.state === selectedState;
    const matchesStatus = selectedStatus === 'all' || agent.status === selectedStatus;
    
    return matchesSearch && matchesState && matchesStatus;
  });

  const stats = {
    totalAgents: agents.length,
    activeAgents: agents.filter(a => a.status === 'active').length,
    avgAccuracy: (agents.reduce((sum, a) => sum + a.accuracy, 0) / agents.length).toFixed(1),
    totalSurveys: agents.reduce((sum, a) => sum + a.surveysCompleted, 0)
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {language === 'en' ? 'Agent Management' : 'एजेंट प्रबंधन'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {language === 'en' 
                ? 'Manage field agents, assignments, and performance tracking'
                : 'फील्ड एजेंट, असाइनमेंट और प्रदर्शन ट्रैकिंग का प्रबंधन करें'
              }
            </p>
          </div>
          
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>{language === 'en' ? 'Add New Agent' : 'नया एजेंट जोड़ें'}</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  {language === 'en' ? 'Total Agents' : 'कुल एजेंट'}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalAgents}</p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-2xl">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  {language === 'en' ? 'Active Now' : 'अभी सक्रिय'}
                </p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{stats.activeAgents}</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-2xl">
                <Activity className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  {language === 'en' ? 'Avg Accuracy' : 'औसत सटीकता'}
                </p>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{stats.avgAccuracy}%</p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-2xl">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  {language === 'en' ? 'Surveys Completed' : 'पूर्ण सर्वेक्षण'}
                </p>
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">{stats.totalSurveys}</p>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-2xl">
                <TrendingUp className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
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
                placeholder={language === 'en' ? 'Search agents, districts, or IDs...' : 'एजेंट, जिले या ID खोजें...'}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">{language === 'en' ? 'All States' : 'सभी राज्य'}</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">{language === 'en' ? 'All Status' : 'सभी स्थिति'}</option>
              <option value="active">{language === 'en' ? 'Active' : 'सक्रिय'}</option>
              <option value="busy">{language === 'en' ? 'Busy' : 'व्यस्त'}</option>
              <option value="offline">{language === 'en' ? 'Offline' : 'ऑफलाइन'}</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-2xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-xl transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-xl transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`p-2 rounded-xl transition-colors ${
                  viewMode === 'map' 
                    ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Map className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Agents Display */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <div key={agent.id} className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              {/* Agent Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{agent.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{agent.id}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(agent.status)}`}>
                  {agent.status}
                </span>
              </div>

              {/* Agent Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {agent.district}, {agent.state}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{agent.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400 truncate">{agent.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {language === 'en' ? 'Last active:' : 'अंतिम सक्रिय:'} {agent.lastActive}
                  </span>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {agent.surveysCompleted}/{agent.surveysAssigned}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {language === 'en' ? 'Surveys' : 'सर्वेक्षण'}
                  </p>
                </div>
                <div className="text-center">
                  <p className={`text-2xl font-bold ${getPerformanceColor(agent.performance)}`}>
                    {agent.accuracy}%
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {language === 'en' ? 'Accuracy' : 'सटीकता'}
                  </p>
                </div>
              </div>

              {/* Specializations */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {language === 'en' ? 'Specializations:' : 'विशेषज्ञता:'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {agent.specialization.map((spec, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-lg">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <button className="flex-1 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors font-semibold text-sm flex items-center justify-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>{language === 'en' ? 'View' : 'देखें'}</span>
                </button>
                <button className="flex-1 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors font-semibold text-sm flex items-center justify-center space-x-2">
                  <Edit className="h-4 w-4" />
                  <span>{language === 'en' ? 'Edit' : 'संपादित करें'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewMode === 'list' && (
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    {language === 'en' ? 'Agent' : 'एजेंट'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    {language === 'en' ? 'Location' : 'स्थान'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    {language === 'en' ? 'Status' : 'स्थिति'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    {language === 'en' ? 'Surveys' : 'सर्वेक्षण'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    {language === 'en' ? 'Accuracy' : 'सटीकता'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    {language === 'en' ? 'Last Active' : 'अंतिम सक्रिय'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    {language === 'en' ? 'Actions' : 'कार्य'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredAgents.map((agent) => (
                  <tr key={agent.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{agent.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{agent.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-900 dark:text-white">
                          {agent.district}, {agent.state}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(agent.status)}`}>
                        {agent.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {agent.surveysCompleted}/{agent.surveysAssigned}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-semibold ${getPerformanceColor(agent.performance)}`}>
                        {agent.accuracy}%
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {agent.lastActive}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {viewMode === 'map' && (
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Map className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'en' ? 'Interactive Map View' : 'इंटरैक्टिव मैप व्यू'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {language === 'en' 
                ? 'Map integration coming soon - visualize agent locations and coverage areas'
                : 'मैप एकीकरण जल्द आ रहा है - एजेंट स्थान और कवरेज क्षेत्रों को देखें'
              }
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors font-semibold">
              {language === 'en' ? 'Enable Map View' : 'मैप व्यू सक्षम करें'}
            </button>
          </div>
        </div>
      )}

      {filteredAgents.length === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-12 text-center">
          <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'en' ? 'No agents found' : 'कोई एजेंट नहीं मिला'}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {language === 'en' 
              ? 'Try adjusting your search criteria or filters'
              : 'अपने खोज मानदंड या फिल्टर को समायोजित करने का प्रयास करें'
            }
          </p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedState('all');
              setSelectedStatus('all');
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors font-semibold"
          >
            {language === 'en' ? 'Clear Filters' : 'फिल्टर साफ़ करें'}
          </button>
        </div>
      )}
    </div>
  );
};

export default AgentManagement;