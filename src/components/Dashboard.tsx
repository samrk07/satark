import React, { useState } from 'react';
import { 
  Users, 
  FileText, 
  MessageSquare, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe,
  MapPin,
  Shield,
  Zap,
  Activity,
  BarChart3,
  Eye,
  Plus,
  Download,
  RefreshCw,
  Bell,
  Search,
  Filter,
  Calendar,
  Target,
  Award,
  Lightbulb,
  Database,
  Wifi,
  WifiOff
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('today');
  const [isOnline, setIsOnline] = useState(true);

  const stats = [
    { 
      title: 'Ongoing Surveys', 
      value: '47', 
      change: '+12%', 
      icon: FileText, 
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      textColor: 'text-indigo-600 dark:text-indigo-400'
    },
    { 
      title: 'Validated Responses', 
      value: '15,429', 
      change: '+23%', 
      icon: CheckCircle, 
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-600 dark:text-green-400'
    },
    { 
      title: 'Accuracy Rate', 
      value: '94.7%', 
      change: '+2.1%', 
      icon: Target, 
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      textColor: 'text-orange-600 dark:text-orange-400'
    },
    { 
      title: 'Active Agents', 
      value: '2,847', 
      change: '+5%', 
      icon: Users, 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      textColor: 'text-purple-600 dark:text-purple-400'
    },
  ];

  const districtProgress = [
    { district: 'Ahmadabad', progress: 87, responses: 2340, target: 2700 },
    { district: 'Surat', progress: 92, responses: 1840, target: 2000 },
    { district: 'Vadodara', progress: 78, responses: 1560, target: 2000 },
    { district: 'Rajkot', progress: 65, responses: 1300, target: 2000 },
    { district: 'Bhavnagar', progress: 71, responses: 1420, target: 2000 },
  ];

  const recentAlerts = [
    { 
      type: 'error', 
      title: 'Data Mismatch Detected', 
      message: 'Survey AIS-2024-03 shows inconsistent responses in Rajasthan region',
      time: '5 mins ago',
      priority: 'high'
    },
    { 
      type: 'warning', 
      title: 'Delayed Report Submission', 
      message: 'Agent AG-001 has not submitted daily report for 2 days',
      time: '1 hour ago',
      priority: 'medium'
    },
    { 
      type: 'info', 
      title: 'New Survey Published', 
      message: 'Digital Literacy Assessment 2024 is now live across 15 districts',
      time: '3 hours ago',
      priority: 'low'
    },
    { 
      type: 'success', 
      title: 'Validation Complete', 
      message: 'Rural Healthcare Survey data validation completed with 96.8% accuracy',
      time: '6 hours ago',
      priority: 'low'
    },
  ];

  const quickActions = [
    { title: 'Create Survey', icon: Plus, color: 'from-blue-500 to-blue-600', description: 'AI-powered survey generation' },
    { title: 'Assign Agent', icon: Users, color: 'from-green-500 to-green-600', description: 'Deploy field agents' },
    { title: 'Generate Report', icon: BarChart3, color: 'from-purple-500 to-purple-600', description: 'Analytics & insights' },
    { title: 'Validate Data', icon: Shield, color: 'from-orange-500 to-orange-600', description: 'Quality assurance' },
  ];

  const getAlertIcon = (type: string) => {
    switch(type) {
      case 'error': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'warning': return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'success': return <CheckCircle className="h-5 w-5 text-green-500" />;
      default: return <Bell className="h-5 w-5 text-blue-500" />;
    }
  };

  const getAlertBg = (type: string) => {
    switch(type) {
      case 'error': return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      case 'warning': return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      case 'success': return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      default: return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 p-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Welcome, Dr. Priya Sharma
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                    Senior Statistical Officer • Ministry of Statistics & Programme Implementation
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {isOnline ? <Wifi className="h-4 w-4 text-green-500" /> : <WifiOff className="h-4 w-4 text-red-500" />}
                  <span className={isOnline ? 'text-green-600' : 'text-red-600'}>
                    {isOnline ? 'System Online' : 'System Offline'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-white"
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
              </select>
              <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow-lg">
                <RefreshCw className="h-4 w-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>

        {/* Real-time Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${stat.textColor}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-green-600 dark:text-green-400 font-semibold">{stat.change}</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">{stat.title}</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className={`bg-gradient-to-r ${stat.color} h-2 rounded-full transition-all duration-500`} style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* District-wise Progress */}
          <div className="lg:col-span-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">District-wise Survey Progress</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <Filter className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <Download className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {districtProgress.map((district, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      <span className="font-semibold text-gray-900 dark:text-white">{district.district}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900 dark:text-white">{district.progress}%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{district.responses}/{district.target}</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000 shadow-inner relative"
                      style={{ width: `${district.progress}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                Quick Actions
              </h3>
            </div>
            
            <div className="p-6 space-y-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button key={index} className="group w-full flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-600">
                    <div className={`bg-gradient-to-r ${action.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">{action.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{action.description}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Regional Map Activity */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <Globe className="h-5 w-5 mr-2 text-blue-500" />
                Regional Activity Map
              </h3>
            </div>
            
            <div className="p-6">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl h-64 flex items-center justify-center border-2 border-dashed border-blue-300 dark:border-blue-700">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Interactive Leaflet Map</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Real-time survey activity across India</p>
                </div>
              </div>
            </div>
          </div>

          {/* System Alerts */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-red-500" />
                  System Alerts
                </h3>
                <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm font-semibold">
                  {recentAlerts.filter(alert => alert.priority === 'high').length} High Priority
                </span>
              </div>
            </div>
            
            <div className="p-6 space-y-4 max-h-80 overflow-y-auto">
              {recentAlerts.map((alert, index) => (
                <div key={index} className={`p-4 rounded-xl border-l-4 ${getAlertBg(alert.type)} hover:shadow-md transition-all duration-200`}>
                  <div className="flex items-start space-x-3">
                    {getAlertIcon(alert.type)}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{alert.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          alert.priority === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                          alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                          'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
                        }`}>
                          {alert.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{alert.message}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{alert.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <Activity className="h-5 w-5 mr-2 text-green-500" />
              System Performance Metrics
            </h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
                  <Database className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">99.8%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">System Uptime</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                  <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">1.2s</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Avg Response Time</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Security Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;