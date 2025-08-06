import React from 'react';
import { 
  Users, 
  FileText, 
  MessageSquare, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe,
  Activity,
  Target,
  Zap,
  Shield,
  BarChart3,
  MapPin,
  Calendar,
  Download,
  Eye,
  ArrowUp,
  ArrowDown,
  Wifi,
  Database,
  Cpu
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { 
      title: 'Active Surveys', 
      value: '47', 
      change: '+12%', 
      changeType: 'positive',
      icon: FileText, 
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-700'
    },
    { 
      title: 'Field Agents', 
      value: '2,847', 
      change: '+5%', 
      changeType: 'positive',
      icon: Users, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-700'
    },
    { 
      title: 'Responses Today', 
      value: '15,429', 
      change: '+23%', 
      changeType: 'positive',
      icon: MessageSquare, 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-700'
    },
    { 
      title: 'Completion Rate', 
      value: '87.3%', 
      change: '+2.1%', 
      changeType: 'positive',
      icon: TrendingUp, 
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-700'
    },
    { 
      title: 'Data Quality Score', 
      value: '94.2%', 
      change: '+1.8%', 
      changeType: 'positive',
      icon: Shield, 
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      borderColor: 'border-emerald-200 dark:border-emerald-700'
    },
    { 
      title: 'AI Validations', 
      value: '1,247', 
      change: '+45%', 
      changeType: 'positive',
      icon: Cpu, 
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      borderColor: 'border-indigo-200 dark:border-indigo-700'
    }
  ];

  const recentSurveys = [
    { 
      name: 'Rural Healthcare Access Survey 2024', 
      status: 'Active', 
      responses: 8423, 
      completion: 78,
      priority: 'High',
      deadline: '2024-02-15',
      region: 'Gujarat, Rajasthan'
    },
    { 
      name: 'Digital Literacy Assessment', 
      status: 'Draft', 
      responses: 0, 
      completion: 0,
      priority: 'Medium',
      deadline: '2024-02-20',
      region: 'Karnataka, Tamil Nadu'
    },
    { 
      name: 'Agricultural Income Survey', 
      status: 'Completed', 
      responses: 12567, 
      completion: 100,
      priority: 'High',
      deadline: '2024-01-30',
      region: 'Punjab, Haryana'
    },
    { 
      name: 'Urban Employment Study', 
      status: 'Active', 
      responses: 3241, 
      completion: 45,
      priority: 'Low',
      deadline: '2024-02-25',
      region: 'Maharashtra, Delhi'
    },
    { 
      name: 'Water Quality Assessment', 
      status: 'Active', 
      responses: 5678, 
      completion: 62,
      priority: 'High',
      deadline: '2024-02-18',
      region: 'West Bengal, Odisha'
    }
  ];

  const alerts = [
    { 
      type: 'warning', 
      message: 'Low response rate detected in Rajasthan region', 
      time: '2 mins ago',
      action: 'Investigate',
      severity: 'Medium'
    },
    { 
      type: 'error', 
      message: 'Data validation failed for Survey #AIS-2024-03', 
      time: '15 mins ago',
      action: 'Review',
      severity: 'High'
    },
    { 
      type: 'info', 
      message: 'New agent verification completed successfully', 
      time: '1 hour ago',
      action: 'View',
      severity: 'Low'
    },
    { 
      type: 'success', 
      message: 'AI model accuracy improved to 96.8%', 
      time: '2 hours ago',
      action: 'Details',
      severity: 'Low'
    },
    { 
      type: 'warning', 
      message: 'Server capacity at 85% - consider scaling', 
      time: '3 hours ago',
      action: 'Monitor',
      severity: 'Medium'
    }
  ];

  const quickActions = [
    { icon: FileText, label: 'Create Survey', color: 'from-blue-500 to-blue-600' },
    { icon: Users, label: 'Manage Agents', color: 'from-green-500 to-green-600' },
    { icon: BarChart3, label: 'View Analytics', color: 'from-purple-500 to-purple-600' },
    { icon: Download, label: 'Export Data', color: 'from-orange-500 to-orange-600' }
  ];

  const systemHealth = [
    { metric: 'API Response Time', value: '245ms', status: 'good', icon: Activity },
    { metric: 'Database Performance', value: '98.7%', status: 'excellent', icon: Database },
    { metric: 'Network Uptime', value: '99.9%', status: 'excellent', icon: Wifi },
    { metric: 'AI Model Accuracy', value: '96.8%', status: 'excellent', icon: Target }
  ];

  return (
    <div className="p-6 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">Dashboard Overview</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Welcome back, Dr. Priya Sharma. Here's your survey intelligence summary.</p>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">Last refreshed</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">2 mins ago</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">Live</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const ChangeIcon = stat.changeType === 'positive' ? ArrowUp : ArrowDown;
          return (
            <div key={index} className={`${stat.bgColor} rounded-3xl p-6 shadow-xl border-2 ${stat.borderColor} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{stat.title}</p>
                  <p className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</p>
                  <div className="flex items-center space-x-1">
                    <ChangeIcon className={`h-4 w-4 ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`} />
                    <p className={`text-sm font-semibold ${stat.changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {stat.change}
                    </p>
                  </div>
                </div>
                <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button key={index} className={`group flex flex-col items-center p-6 bg-gradient-to-br ${action.color} text-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <Icon className="h-8 w-8 mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-center">{action.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Surveys */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Surveys</h3>
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold flex items-center">
                View All
                <Eye className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              {recentSurveys.map((survey, index) => (
                <div key={index} className="group p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {survey.name}
                      </h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        survey.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        survey.status === 'Draft' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {survey.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">{survey.responses.toLocaleString()} responses</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">{survey.region}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">{survey.deadline}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-gray-400" />
                        <span className={`font-semibold ${
                          survey.priority === 'High' ? 'text-red-600' :
                          survey.priority === 'Medium' ? 'text-yellow-600' : 'text-green-600'
                        }`}>
                          {survey.priority}
                        </span>
                      </div>
                    </div>
                    
                    {survey.status === 'Active' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Progress</span>
                          <span className="font-bold text-gray-900 dark:text-white">{survey.completion}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                        <div 
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500" 
                          style={{ width: `${survey.completion}%` }}
                        ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alerts & Notifications */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">System Alerts</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-red-600 dark:text-red-400">3 Active</span>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              {alerts.map((alert, index) => (
                <div key={index} className="group p-4 rounded-2xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300 border-l-4 ${
                  alert.type === 'warning' ? 'border-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/10' :
                  alert.type === 'error' ? 'border-red-500 hover:bg-red-50 dark:hover:bg-red-900/10' :
                  alert.type === 'success' ? 'border-green-500 hover:bg-green-50 dark:hover:bg-green-900/10' :
                  'border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10'
                }">
                  <div className="flex items-start space-x-4">
                    <div className={`mt-1 p-2 rounded-xl ${
                    alert.type === 'warning' ? 'text-yellow-500' :
                    alert.type === 'error' ? 'text-red-500' : 'text-blue-500'
                  }`}>
                    {alert.type === 'warning' && <AlertTriangle className="h-5 w-5" />}
                    {alert.type === 'error' && <AlertTriangle className="h-5 w-5" />}
                      {alert.type === 'success' && <CheckCircle className="h-5 w-5 text-green-500" />}
                    {alert.type === 'info' && <CheckCircle className="h-5 w-5" />}
                  </div>
                  <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {alert.message}
                        </p>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          alert.severity === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                          alert.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                          'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        }`}>
                          {alert.severity}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500 dark:text-gray-400">{alert.time}</p>
                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-semibold">
                          {alert.action}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* System Health & Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">System Health</h3>
          <div className="space-y-6">
            {systemHealth.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${
                      item.status === 'excellent' ? 'bg-green-100 dark:bg-green-900/30' :
                      item.status === 'good' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                      'bg-red-100 dark:bg-red-900/30'
                    }`}>
                      <Icon className={`h-6 w-6 ${
                        item.status === 'excellent' ? 'text-green-600 dark:text-green-400' :
                        item.status === 'good' ? 'text-yellow-600 dark:text-yellow-400' :
                        'text-red-600 dark:text-red-400'
                      }`} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{item.metric}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Current status</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{item.value}</p>
                    <div className={`w-3 h-3 rounded-full ${
                      item.status === 'excellent' ? 'bg-green-500' :
                      item.status === 'good' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Response Heatmap</h3>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
            <div className="text-center">
              <Globe className="h-16 w-16 text-blue-400 mx-auto mb-4" />
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Interactive India Map</p>
              <p className="text-gray-500 dark:text-gray-400">Real-time response data visualization</p>
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold">
                Launch Map View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Preview */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Weekly Performance Trends</h3>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold">
              View Full Analytics
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.03"%3E%3Cpath d="M0 0h40v40H0V0zm20 20v20h20V20H20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
            <div className="text-center">
                <TrendingUp className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Advanced Analytics Chart</p>
                <p className="text-gray-500 dark:text-gray-400">Interactive data visualization</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-green-800 dark:text-green-300">Response Rate</h4>
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-900 dark:text-green-100 mb-2">87.3%</div>
              <div className="text-sm text-green-700 dark:text-green-400">+5.2% from last week</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6 border border-orange-200 dark:border-orange-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-orange-800 dark:text-orange-300">Avg. Completion Time</h4>
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-900 dark:text-orange-100 mb-2">4.2 min</div>
              <div className="text-sm text-orange-700 dark:text-orange-400">-0.8 min improvement</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-purple-800 dark:text-purple-300">Data Quality</h4>
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-900 dark:text-purple-100 mb-2">94.8%</div>
              <div className="text-sm text-purple-700 dark:text-purple-400">Excellent quality score</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;