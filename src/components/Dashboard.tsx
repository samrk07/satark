import React from 'react';
import { 
  BarChart3, 
  Users, 
  FileText, 
  AlertTriangle, 
  TrendingUp, 
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Activity,
  Database,
  Shield,
  Zap,
  Globe,
  Download,
  Settings,
  Bell,
  Search,
  Filter,
  Calendar,
  Eye,
  Edit,
  Trash2,
  Plus,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Active Surveys',
      value: '47',
      change: '+12%',
      trend: 'up',
      icon: FileText,
      color: 'bg-blue-500'
    },
    {
      title: 'Field Agents',
      value: '234',
      change: '+8%',
      trend: 'up',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Responses Today',
      value: '1,847',
      change: '+23%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-purple-500'
    },
    {
      title: 'Data Quality Score',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      icon: Shield,
      color: 'bg-orange-500'
    },
    {
      title: 'AI Validations',
      value: '12,456',
      change: '+15%',
      trend: 'up',
      icon: Zap,
      color: 'bg-indigo-500'
    },
    {
      title: 'Districts Covered',
      value: '28',
      change: '+4',
      trend: 'up',
      icon: MapPin,
      color: 'bg-teal-500'
    }
  ];

  const quickActions = [
    { title: 'Create Survey', icon: Plus, color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
    { title: 'Assign Agents', icon: Users, color: 'bg-gradient-to-r from-green-500 to-green-600' },
    { title: 'View Reports', icon: BarChart3, color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
    { title: 'Export Data', icon: Download, color: 'bg-gradient-to-r from-orange-500 to-orange-600' }
  ];

  const recentSurveys = [
    {
      id: 1,
      title: 'Rural Healthcare Access Survey',
      region: 'Uttar Pradesh',
      status: 'Active',
      progress: 78,
      deadline: '2025-02-15',
      priority: 'High',
      responses: 1247
    },
    {
      id: 2,
      title: 'Digital Literacy Assessment',
      region: 'Maharashtra',
      status: 'Active',
      progress: 45,
      deadline: '2025-02-20',
      priority: 'Medium',
      responses: 892
    },
    {
      id: 3,
      title: 'Agricultural Practices Study',
      region: 'Punjab',
      status: 'Completed',
      progress: 100,
      deadline: '2025-01-30',
      priority: 'High',
      responses: 2156
    }
  ];

  const alerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Data Quality Alert',
      message: 'Inconsistent responses detected in Survey #47',
      time: '2 hours ago',
      severity: 'medium'
    },
    {
      id: 2,
      type: 'error',
      title: 'Agent Connectivity Issue',
      message: '12 agents offline in Rajasthan region',
      time: '4 hours ago',
      severity: 'high'
    },
    {
      id: 3,
      type: 'success',
      title: 'Survey Completed',
      message: 'Healthcare survey in Kerala completed successfully',
      time: '6 hours ago',
      severity: 'low'
    }
  ];

  const systemHealth = [
    { name: 'API Response Time', value: '245ms', status: 'good', color: 'text-green-500' },
    { name: 'Database Performance', value: '98.7%', status: 'excellent', color: 'text-green-500' },
    { name: 'Agent Connectivity', value: '94.2%', status: 'good', color: 'text-green-500' },
    { name: 'Data Sync Status', value: '99.1%', status: 'excellent', color: 'text-green-500' }
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Welcome back! Here's what's happening with your surveys today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Last 30 days</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span className="text-sm">New Survey</span>
          </button>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
              </div>
              <div className={`flex items-center gap-1 text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className={`${action.color} text-white p-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-3`}
            >
              <action.icon className="w-5 h-5" />
              <span className="font-medium">{action.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Surveys */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Surveys</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {recentSurveys.map((survey) => (
              <div key={survey.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{survey.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{survey.region}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      survey.priority === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                      survey.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    }`}>
                      {survey.priority}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      survey.status === 'Active' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    }`}>
                      {survey.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{survey.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${survey.progress}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>{survey.responses} responses</span>
                  <span>Due: {survey.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts & System Health */}
        <div className="space-y-6">
          {/* Alerts */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">System Alerts</h2>
              <Bell className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className={`p-3 rounded-lg border-l-4 ${
                  alert.severity === 'high' ? 'border-red-500 bg-red-50 dark:bg-red-900/20' :
                  alert.severity === 'medium' ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' :
                  'border-green-500 bg-green-50 dark:bg-green-900/20'
                }`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">{alert.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">{alert.message}</p>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Health */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">System Health</h2>
            <div className="space-y-4">
              {systemHealth.map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{metric.name}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${metric.color}`}>{metric.value}</span>
                    <div className={`w-2 h-2 rounded-full ${metric.color.replace('text-', 'bg-')}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Preview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Analytics Overview</h2>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Detailed Analytics</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Response Rate</h3>
            <p className="text-2xl font-bold text-blue-600 mt-1">87.3%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">+5.2% from last month</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <Activity className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Data Accuracy</h3>
            <p className="text-2xl font-bold text-green-600 mt-1">94.7%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">+2.1% from last month</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Avg. Completion Time</h3>
            <p className="text-2xl font-bold text-purple-600 mt-1">4.2 min</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">-0.8 min from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;