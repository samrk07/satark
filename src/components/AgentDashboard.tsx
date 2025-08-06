import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  MapPin, 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Upload,
  Mic,
  Camera,
  Wifi,
  WifiOff,
  MessageSquare,
  Navigation,
  User,
  LogOut,
  Battery,
  Signal,
  Smartphone,
  Calendar,
  Target,
  Award,
  TrendingUp,
  Activity,
  Zap,
  Shield,
  Eye,
  Download,
  RefreshCw
} from 'lucide-react';

const AgentDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const { t, language, toggleLanguage } = useLanguage();
  const [isOffline, setIsOffline] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState<string | null>(null);

  const assignedSurveys = [
    {
      id: 'RHS-2024-001',
      title: 'Rural Healthcare Access Survey',
      titleHi: 'ग्रामीण स्वास्थ्य सेवा पहुंच सर्वेक्षण',
      location: 'Ahmadabad District',
      locationHi: 'अहमदाबाद जिला',
      deadline: '2024-02-15',
      progress: 75,
      totalResponses: 120,
      completedResponses: 90,
      status: 'In Progress'
    },
    {
      id: 'AIS-2024-002',
      title: 'Agricultural Income Study',
      titleHi: 'कृषि आय अध्ययन',
      location: 'Rural Ahmadabad',
      locationHi: 'ग्रामीण अहमदाबाद',
      deadline: '2024-02-20',
      progress: 45,
      totalResponses: 80,
      completedResponses: 36,
      status: 'In Progress'
    },
    {
      id: 'DLS-2024-003',
      title: 'Digital Literacy Survey',
      titleHi: 'डिजिटल साक्षरता सर्वेक्षण',
      location: 'Urban Ahmadabad',
      locationHi: 'शहरी अहमदाबाद',
      deadline: '2024-02-25',
      progress: 100,
      totalResponses: 50,
      completedResponses: 50,
      status: 'Completed'
    }
  ];

  const todayStats = {
    surveysCompleted: 12,
    responsesCollected: 45,
    hoursWorked: 6.5,
    dataUploaded: 23,
    accuracy: 96.8,
    efficiency: 87.3
  };

  const recentActivities = [
    { time: '10:30 AM', action: 'Completed survey RHS-2024-001', location: 'Village Kheda', status: 'success' },
    { time: '09:45 AM', action: 'Uploaded 15 responses', location: 'Sync completed', status: 'info' },
    { time: '09:15 AM', action: 'Started survey AIS-2024-002', location: 'Village Anand', status: 'active' },
    { time: '08:30 AM', action: 'Voice recording processed', location: 'AI validation passed', status: 'success' }
  ];

  const deviceStatus = {
    battery: 78,
    signal: 4,
    storage: 65,
    gps: true
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'In Progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl border-b-4 border-gradient-to-r from-green-500 to-blue-500 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <img src="/Satark AI.png" alt="SATARK.AI Logo" className="h-12 w-auto" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {language === 'en' ? 'Field Agent Portal' : 'फील्ड एजेंट पोर्टल'}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {user?.name} • {user?.district}, {user?.state}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Device Status */}
              <div className="hidden lg:flex items-center space-x-4 bg-gray-100 dark:bg-gray-700 rounded-2xl px-4 py-2">
                <div className="flex items-center space-x-1">
                  <Battery className={`h-4 w-4 ${deviceStatus.battery > 50 ? 'text-green-500' : deviceStatus.battery > 20 ? 'text-yellow-500' : 'text-red-500'}`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{deviceStatus.battery}%</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Signal className="h-4 w-4 text-blue-500" />
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-1 h-3 rounded-full ${i < deviceStatus.signal ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                    ))}
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setIsOffline(!isOffline)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-2xl transition-all duration-300 shadow-lg ${
                  isOffline 
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50' 
                    : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50'
                }`}
              >
                {isOffline ? <WifiOff className="h-4 w-4" /> : <Wifi className="h-4 w-4" />}
                <span className="text-sm font-bold">
                  {isOffline ? (language === 'en' ? 'Offline' : 'ऑफलाइन') : (language === 'en' ? 'Online' : 'ऑनलाइन')}
                </span>
              </button>
              
              <button
                onClick={toggleLanguage}
                className="px-4 py-3 bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 text-orange-800 dark:text-orange-200 rounded-2xl hover:shadow-lg transition-all duration-300 text-sm font-bold border border-orange-200 dark:border-orange-700"
              >
                {language === 'en' ? 'हिंदी' : 'English'}
              </button>
              
              <button
                onClick={logout}
                className="flex items-center space-x-2 px-4 py-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-2xl hover:bg-red-200 dark:hover:bg-red-900/50 transition-all duration-300 shadow-lg"
              >
                <LogOut className="h-4 w-4" />
                <span className="text-sm font-bold">
                  {language === 'en' ? 'Logout' : 'लॉगआउट'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'en' ? `Welcome back, ${user?.name}` : `वापसी पर स्वागत, ${user?.name}`}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {language === 'en' 
              ? 'Here are your assigned surveys and today\'s progress' 
              : 'यहाँ आपके असाइन किए गए सर्वेक्षण और आज की प्रगति है'
            }
          </p>
          <div className="mt-4 flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
        </div>

        {/* Today's Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border-2 border-green-100 dark:border-green-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
                  {language === 'en' ? 'Surveys Completed' : 'पूर्ण सर्वेक्षण'}
                </p>
                <p className="text-3xl lg:text-4xl font-bold text-green-600 mb-1">{todayStats.surveysCompleted}</p>
                <p className="text-xs text-green-500 font-semibold">+3 from yesterday</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border-2 border-blue-100 dark:border-blue-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
                  {language === 'en' ? 'Responses Collected' : 'एकत्रित प्रतिक्रियाएं'}
                </p>
                <p className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">{todayStats.responsesCollected}</p>
                <p className="text-xs text-blue-500 font-semibold">+12 from yesterday</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border-2 border-orange-100 dark:border-orange-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
                  {language === 'en' ? 'Hours Worked' : 'काम के घंटे'}
                </p>
                <p className="text-3xl lg:text-4xl font-bold text-orange-600 mb-1">{todayStats.hoursWorked}</p>
                <p className="text-xs text-orange-500 font-semibold">Target: 8 hours</p>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border-2 border-purple-100 dark:border-purple-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
                  {language === 'en' ? 'Data Uploaded' : 'अपलोड किया गया डेटा'}
                </p>
                <p className="text-3xl lg:text-4xl font-bold text-purple-600 mb-1">{todayStats.dataUploaded}</p>
                <p className="text-xs text-purple-500 font-semibold">MB synced</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Upload className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border-2 border-emerald-100 dark:border-emerald-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
                  {language === 'en' ? 'Accuracy Score' : 'सटीकता स्कोर'}
                </p>
                <p className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-1">{todayStats.accuracy}%</p>
                <p className="text-xs text-emerald-500 font-semibold">Excellent</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border-2 border-indigo-100 dark:border-indigo-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
                  {language === 'en' ? 'Efficiency' : 'दक्षता'}
                </p>
                <p className="text-3xl lg:text-4xl font-bold text-indigo-600 mb-1">{todayStats.efficiency}%</p>
                <p className="text-xs text-indigo-500 font-semibold">Above average</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-indigo-800/30 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Assigned Surveys */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700">
              <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {language === 'en' ? 'Assigned Surveys' : 'असाइन किए गए सर्वेक्षण'}
                </h3>
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold flex items-center">
                    <Eye className="mr-2 h-4 w-4" />
                    View All
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {assignedSurveys.length} {language === 'en' ? 'surveys assigned' : 'सर्वेक्षण असाइन किए गए'}
                </p>
              </div>
              
              <div className="p-8 space-y-6">
                {assignedSurveys.map((survey) => (
                  <div 
                    key={survey.id} 
                    className="group bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-gray-200 dark:border-gray-600"
                    onClick={() => setSelectedSurvey(survey.id)}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                          {language === 'en' ? survey.title : survey.titleHi}
                        </h4>
                        <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <MapPin className="h-4 w-4" />
                          <span className="font-medium">{language === 'en' ? survey.location : survey.locationHi}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600 dark:text-gray-400 font-medium">
                            {language === 'en' ? 'Deadline:' : 'समय सीमा:'} {survey.deadline}
                          </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MessageSquare className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600 dark:text-gray-400 font-medium">
                            {survey.completedResponses}/{survey.totalResponses} {language === 'en' ? 'responses' : 'प्रतिक्रियाएं'}
                          </span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-bold ${getStatusColor(survey.status)} shadow-lg`}>
                        {survey.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          {language === 'en' ? 'Progress' : 'प्रगति'}
                        </span>
                        <span className="font-bold text-lg text-gray-900 dark:text-white">{survey.completion}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-500 shadow-inner" 
                          style={{ width: `${survey.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions & Tools */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Zap className="mr-3 h-6 w-6 text-yellow-500" />
                {language === 'en' ? 'Quick Actions' : 'त्वरित कार्य'}
              </h3>
              
              <div className="space-y-4">
                <button className="group w-full flex items-center space-x-4 p-5 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-200 dark:border-blue-700">
                  <div className="bg-blue-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-bold text-blue-900 dark:text-blue-100 text-lg">
                    {language === 'en' ? 'Scan Document' : 'दस्तावेज़ स्कैन करें'}
                  </span>
                </button>
                
                <button className="group w-full flex items-center space-x-4 p-5 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-green-200 dark:border-green-700">
                  <div className="bg-green-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Mic className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-bold text-green-900 dark:text-green-100 text-lg">
                    {language === 'en' ? 'Voice Recording' : 'आवाज़ रिकॉर्डिंग'}
                  </span>
                </button>
                
                <button className="group w-full flex items-center space-x-4 p-5 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-purple-200 dark:border-purple-700">
                  <div className="bg-purple-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-bold text-purple-900 dark:text-purple-100 text-lg">
                    {language === 'en' ? 'WhatsApp Helper' : 'व्हाट्सऐप सहायक'}
                  </span>
                </button>
                
                <button className="group w-full flex items-center space-x-4 p-5 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-orange-200 dark:border-orange-700">
                  <div className="bg-orange-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Navigation className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-bold text-orange-900 dark:text-orange-100 text-lg">
                    {language === 'en' ? 'Navigate to Location' : 'स्थान पर नेविगेट करें'}
                  </span>
                </button>
              </div>
            </div>

            {/* Sync Status */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <RefreshCw className="mr-3 h-6 w-6 text-blue-500" />
                {language === 'en' ? 'Data Sync Status' : 'डेटा सिंक स्थिति'}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border border-orange-200 dark:border-orange-700">
                  <div className="flex items-center space-x-3">
                    <Upload className="h-5 w-5 text-orange-600" />
                    <span className="font-semibold text-gray-900 dark:text-white">
                    {language === 'en' ? 'Pending Upload' : 'अपलोड लंबित'}
                  </span>
                  </div>
                  <span className="font-bold text-orange-600 dark:text-orange-400">
                    7 {language === 'en' ? 'files' : 'फाइलें'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-700">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-gray-900 dark:text-white">
                    {language === 'en' ? 'Last Sync' : 'अंतिम सिंक'}
                  </span>
                  </div>
                  <span className="font-bold text-green-600 dark:text-green-400">
                    {language === 'en' ? '2 hours ago' : '2 घंटे पहले'}
                  </span>
                </div>
                
                <button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                  disabled={isOffline}
                >
                  <RefreshCw className="h-5 w-5" />
                  <span>
                  {language === 'en' ? 'Sync Now' : 'अभी सिंक करें'}
                  </span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Activity className="mr-3 h-6 w-6 text-green-500" />
                {language === 'en' ? 'Recent Activity' : 'हाल की गतिविधि'}
              </h3>
              
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className={`flex items-start space-x-4 p-4 rounded-2xl border-l-4 ${
                    activity.status === 'success' ? 'bg-green-50 dark:bg-green-900/20 border-green-500' :
                    activity.status === 'info' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500' :
                    'bg-orange-50 dark:bg-orange-900/20 border-orange-500'
                  }`}>
                    <div className={`p-2 rounded-xl ${
                      activity.status === 'success' ? 'bg-green-500' :
                      activity.status === 'info' ? 'bg-blue-500' :
                      'bg-orange-500'
                    }`}>
                      {activity.status === 'success' && <CheckCircle className="h-4 w-4 text-white" />}
                      {activity.status === 'info' && <Upload className="h-4 w-4 text-white" />}
                      {activity.status === 'active' && <Activity className="h-4 w-4 text-white" />}
                    </div>
                  <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{activity.action}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{activity.location}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Badge */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-3xl shadow-2xl border-2 border-yellow-200 dark:border-yellow-700 p-8 text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {language === 'en' ? 'Top Performer' : 'शीर्ष प्रदर्शनकर्ता'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {language === 'en' 
                  ? 'You\'re in the top 10% of agents this month!' 
                  : 'आप इस महीने शीर्ष 10% एजेंटों में हैं!'
                }
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div className="text-center">
                  <div className="font-bold text-2xl text-yellow-600">96.8%</div>
                  <div className="text-gray-600 dark:text-gray-400">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl text-orange-600">#3</div>
                  <div className="text-gray-600 dark:text-gray-400">Ranking</div>
                </div>
              </div>
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                {language === 'en' ? 'View Leaderboard' : 'लीडरबोर्ड देखें'}
              </button>
            </div>

            {/* System Alert */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Shield className="mr-3 h-6 w-6 text-red-500" />
                {language === 'en' ? 'System Alert' : 'सिस्टम अलर्ट'}
              </h3>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-6 border-l-4 border-yellow-500">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mt-1" />
                  <div>
                    <p className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">
                      {language === 'en' ? 'Survey deadline approaching' : 'सर्वेक्षण की समय सीमा नजदीक'}
                    </p>
                    <p className="text-sm text-yellow-700 dark:text-yellow-400 mb-3">
                      {language === 'en' ? 'RHS-2024-001 due in 3 days' : 'RHS-2024-001 3 दिन में देय'}
                    </p>
                    <button className="px-4 py-2 bg-yellow-600 text-white rounded-xl hover:bg-yellow-700 transition-colors font-semibold text-sm">
                      {language === 'en' ? 'View Details' : 'विवरण देखें'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
