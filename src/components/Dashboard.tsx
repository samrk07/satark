import React from 'react';
import { 
  Users, 
  FileText, 
  MessageSquare, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Active Surveys', value: '47', change: '+12%', icon: FileText, color: 'bg-green-500' },
    { title: 'Field Agents', value: '2,847', change: '+5%', icon: Users, color: 'bg-blue-500' },
    { title: 'Responses Today', value: '15,429', change: '+23%', icon: MessageSquare, color: 'bg-purple-500' },
    { title: 'Completion Rate', value: '87.3%', change: '+2.1%', icon: TrendingUp, color: 'bg-orange-500' },
  ];

  const recentSurveys = [
    { name: 'Rural Healthcare Access Survey 2024', status: 'Active', responses: 8423, completion: 78 },
    { name: 'Digital Literacy Assessment', status: 'Draft', responses: 0, completion: 0 },
    { name: 'Agricultural Income Survey', status: 'Completed', responses: 12567, completion: 100 },
    { name: 'Urban Employment Study', status: 'Active', responses: 3241, completion: 45 },
  ];

  const alerts = [
    { type: 'warning', message: 'Low response rate detected in Rajasthan region', time: '2 mins ago' },
    { type: 'error', message: 'Data validation failed for Survey #AIS-2024-03', time: '15 mins ago' },
    { type: 'info', message: 'New agent verification completed successfully', time: '1 hour ago' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Welcome back, Dr. Priya Sharma. Here's your survey intelligence summary.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-sm text-gray-500 dark:text-gray-400">Last refreshed: 2 mins ago</div>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">{stat.change}</p>
                </div>
                <div className={`${stat.color} rounded-xl p-3`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Surveys */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Surveys</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentSurveys.map((survey, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">{survey.name}</h4>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <span>{survey.responses.toLocaleString()} responses</span>
                      <span>{survey.completion}% complete</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      survey.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      survey.status === 'Draft' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {survey.status}
                    </span>
                    {survey.status === 'Active' && (
                      <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${survey.completion}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alerts & Notifications */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">System Alerts</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700">
                  <div className={`mt-1 ${
                    alert.type === 'warning' ? 'text-yellow-500' :
                    alert.type === 'error' ? 'text-red-500' : 'text-blue-500'
                  }`}>
                    {alert.type === 'warning' && <AlertTriangle className="h-5 w-5" />}
                    {alert.type === 'error' && <AlertTriangle className="h-5 w-5" />}
                    {alert.type === 'info' && <CheckCircle className="h-5 w-5" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 dark:text-white">{alert.message}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map & Analytics Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Response Heatmap</h3>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-xl h-64 flex items-center justify-center">
            <div className="text-center">
              <Globe className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 dark:text-gray-400">Interactive map loading...</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weekly Trends</h3>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-xl h-64 flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 dark:text-gray-400">Analytics chart loading...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;