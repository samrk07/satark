import React, { useState } from 'react';
import MapComponent from './MapComponent';
import { sampleMapData } from '../data/mapData';
import { 
  Users, 
  FileText, 
  CheckCircle, 
  TrendingUp,
  AlertTriangle,
  Clock,
  Globe,
  MapPin,
  Shield,
  Activity,
  BarChart3,
  Eye,
  Plus,
  Download,
  RefreshCw,
  Bell,
  Calendar,
  Target,
  Database,
  Zap
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('today');

  const stats = [
    { 
      title: 'Active Surveys', 
      value: '47', 
      change: '+12%', 
      icon: FileText, 
      color: 'text-accent',
      bgColor: 'bg-navy-50',
      trend: 'up'
    },
    { 
      title: 'Validated Responses', 
      value: '15,429', 
      change: '+23%', 
      icon: CheckCircle, 
      color: 'text-success',
      bgColor: 'bg-emerald-50',
      trend: 'up'
    },
    { 
      title: 'Data Accuracy', 
      value: '94.7%', 
      change: '+2.1%', 
      icon: Target, 
      color: 'text-warning',
      bgColor: 'bg-yellow-50',
      trend: 'up'
    },
    { 
      title: 'Field Agents', 
      value: '2,847', 
      change: '+5%', 
      icon: Users, 
      color: 'text-accent',
      bgColor: 'bg-navy-50',
      trend: 'up'
    },
  ];

  const districtProgress = [
    { district: 'Ahmadabad', progress: 87, responses: 2340, target: 2700, status: 'on-track' },
    { district: 'Surat', progress: 92, responses: 1840, target: 2000, status: 'ahead' },
    { district: 'Vadodara', progress: 78, responses: 1560, target: 2000, status: 'on-track' },
    { district: 'Rajkot', progress: 65, responses: 1300, target: 2000, status: 'behind' },
    { district: 'Bhavnagar', progress: 71, responses: 1420, target: 2000, status: 'on-track' },
  ];

  const recentAlerts = [
    { 
      type: 'warning', 
      title: 'Data Validation Required', 
      message: 'Survey AIS-2024-03 requires manual review for 15 responses',
      time: '5 mins ago',
      priority: 'high'
    },
    { 
      type: 'info', 
      title: 'Agent Check-in Overdue', 
      message: 'Agent AG-001 has not checked in for 4 hours',
      time: '1 hour ago',
      priority: 'medium'
    },
    { 
      type: 'success', 
      title: 'Survey Completed', 
      message: 'Digital Literacy Assessment 2024 completed in 12 districts',
      time: '3 hours ago',
      priority: 'low'
    },
  ];

  const quickActions = [
    { title: 'Create Survey', icon: Plus, color: 'bg-accent', description: 'AI-powered survey generation' },
    { title: 'Assign Agent', icon: Users, color: 'bg-success', description: 'Deploy field agents' },
    { title: 'View Analytics', icon: BarChart3, color: 'bg-warning', description: 'Comprehensive insights' },
    { title: 'Validate Data', icon: Shield, color: 'bg-error', description: 'Quality assurance' },
  ];

  const getAlertIcon = (type: string) => {
    switch(type) {
      case 'warning': return <AlertTriangle className="h-5 w-5 text-warning" />;
      case 'success': return <CheckCircle className="h-5 w-5 text-success" />;
      default: return <Bell className="h-5 w-5 text-accent" />;
    }
  };

  const getAlertBg = (type: string) => {
    switch(type) {
      case 'warning': return 'bg-yellow-50 border-yellow-200';
      case 'success': return 'bg-emerald-50 border-emerald-200';
      default: return 'bg-navy-50 border-navy-200';
    }
  };

  const getProgressColor = (status: string) => {
    switch(status) {
      case 'ahead': return 'bg-success';
      case 'behind': return 'bg-error';
      default: return 'bg-accent';
    }
  };

  return (
    <div className="min-h-screen bg-corporate-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div className="bg-white rounded-2xl shadow-card border border-corporate-200 p-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-corporate-900">
                    Welcome, Dr. Priya Sharma
                  </h1>
                  <p className="text-lg text-corporate-600">
                    Senior Statistical Officer • Ministry of Statistics & Programme Implementation
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm text-corporate-500">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-success" />
                  <span className="text-success">System Online</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-4 py-2 bg-corporate-50 border border-corporate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-corporate-900"
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
              </select>
              <button className="flex items-center space-x-2 px-4 py-2 bg-accent text-white rounded-xl hover:bg-navy-700 transition-colors">
                <RefreshCw className="h-4 w-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card border border-corporate-200 hover:shadow-medium transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.bgColor} p-3 rounded-xl`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-corporate-900">{stat.value}</div>
                    <div className="text-sm text-success font-medium">{stat.change}</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-corporate-600 mb-2">{stat.title}</h3>
                  <div className="w-full bg-corporate-200 rounded-full h-2">
                    <div className={`${stat.color.replace('text-', 'bg-')} h-2 rounded-full transition-all duration-500`} style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* District Progress */}
          <div className="bg-white rounded-2xl shadow-card border border-corporate-200">
            <div className="p-6 border-b border-corporate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-corporate-900">Survey Progress</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-corporate-50 rounded-lg transition-colors">
                    <Eye className="h-4 w-4 text-corporate-600" />
                  </button>
                  <button className="p-2 hover:bg-corporate-50 rounded-lg transition-colors">
                    <Download className="h-4 w-4 text-corporate-600" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              {districtProgress.slice(0, 4).map((district, index) => (
                <div key={index} className="bg-corporate-50 rounded-xl p-4 hover:bg-corporate-100 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span className="font-medium text-corporate-900">{district.district}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-corporate-900">{district.progress}%</div>
                      <div className="text-xs text-corporate-600">{district.responses}/{district.target}</div>
                    </div>
                  </div>
                  <div className="w-full bg-corporate-200 rounded-full h-3">
                    <div 
                      className={`${getProgressColor(district.status)} h-3 rounded-full transition-all duration-1000`}
                      style={{ width: `${district.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Activity Map */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-corporate-900 mb-2">Regional Survey Activity</h3>
              <p className="text-corporate-600">Real-time visualization of survey operations across India</p>
            </div>
            <MapComponent 
              data={sampleMapData} 
              height="500px" 
              showConnections={true}
              interactive={true}
            />
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-card border border-corporate-200 h-fit">
            <div className="p-6 border-b border-corporate-200">
              <h3 className="text-xl font-semibold text-corporate-900 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-warning" />
                Quick Actions
              </h3>
            </div>
            
            <div className="p-6 space-y-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button key={index} className="w-full flex items-center space-x-4 p-4 bg-corporate-50 rounded-xl hover:bg-corporate-100 transition-colors border border-corporate-200">
                    <div className={`${action.color} p-3 rounded-xl`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left flex-1">
                      <div className="font-medium text-corporate-900">{action.title}</div>
                      <div className="text-sm text-corporate-600">{action.description}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* System Alerts */}
          <div className="bg-white rounded-2xl shadow-card border border-corporate-200">
            <div className="p-6 border-b border-corporate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-corporate-900 flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-error" />
                  System Alerts
                </h3>
                <span className="bg-error/10 text-error px-3 py-1 rounded-full text-sm font-medium">
                  {recentAlerts.filter(alert => alert.priority === 'high').length} High Priority
                </span>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              {recentAlerts.map((alert, index) => (
                <div key={index} className={`p-4 rounded-xl border ${getAlertBg(alert.type)}`}>
                  <div className="flex items-start space-x-3">
                    {getAlertIcon(alert.type)}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-corporate-900 text-sm">{alert.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          alert.priority === 'high' ? 'bg-error/10 text-error' :
                          alert.priority === 'medium' ? 'bg-warning/10 text-warning' :
                          'bg-corporate-100 text-corporate-700'
                        }`}>
                          {alert.priority}
                        </span>
                      </div>
                      <p className="text-sm text-corporate-700 mb-2">{alert.message}</p>
                      <p className="text-xs text-corporate-500">{alert.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-2xl shadow-card border border-corporate-200">
          <div className="p-6 border-b border-corporate-200">
            <h3 className="text-xl font-semibold text-corporate-900 flex items-center">
              <Activity className="h-5 w-5 mr-2 text-success" />
              System Performance Metrics
            </h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                  <Database className="h-8 w-8 text-success mx-auto mb-3" />
                  <div className="text-2xl font-bold text-corporate-900">99.8%</div>
                  <div className="text-sm text-corporate-600">System Uptime</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-navy-50 rounded-xl p-6 border border-navy-200">
                  <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-corporate-900">1.2s</div>
                  <div className="text-sm text-corporate-600">Avg Response Time</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <Shield className="h-8 w-8 text-warning mx-auto mb-3" />
                  <div className="text-2xl font-bold text-corporate-900">100%</div>
                  <div className="text-sm text-corporate-600">Security Score</div>
                </div>
              </div>
            </div>
          </div>

          {/* District Performance Summary */}
          <div className="bg-white rounded-2xl shadow-card border border-corporate-200">
            <div className="p-6 border-b border-corporate-200">
              <h3 className="text-xl font-semibold text-corporate-900 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-accent" />
                District Performance Summary
              </h3>
            </div>
            
            <div className="p-6 space-y-4">
              {sampleMapData.districts.slice(0, 5).map((district, index) => (
                <div key={district.id} className="flex items-center justify-between p-3 bg-corporate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      district.status === 'excellent' ? 'bg-emerald-500' :
                      district.status === 'good' ? 'bg-blue-500' :
                      district.status === 'warning' ? 'bg-amber-500' : 'bg-red-500'
                    }`}></div>
                    <div>
                      <div className="font-medium text-corporate-900">{district.name}</div>
                      <div className="text-sm text-corporate-600">{district.state}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-corporate-900">{district.accuracy}%</div>
                    <div className="text-sm text-corporate-600">{district.surveys.active} active</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;