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
  LogOut
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
    dataUploaded: 23
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'In Progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  {language === 'en' ? 'Field Agent Portal' : 'फील्ड एजेंट पोर्टल'}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {user?.name} • {user?.district}, {user?.state}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsOffline(!isOffline)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isOffline 
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' 
                    : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                }`}
              >
                {isOffline ? <WifiOff className="h-4 w-4" /> : <Wifi className="h-4 w-4" />}
                <span className="text-sm font-medium">
                  {isOffline ? (language === 'en' ? 'Offline' : 'ऑफलाइन') : (language === 'en' ? 'Online' : 'ऑनलाइन')}
                </span>
              </button>
              
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors text-sm font-medium"
              >
                {language === 'en' ? 'हिंदी' : 'English'}
              </button>
              
              <button
                onClick={logout}
                className="flex items-center space-x-2 px-3 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {language === 'en' ? 'Logout' : 'लॉगआउट'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {language === 'en' ? `Welcome back, ${user?.name}` : `वापसी पर स्वागत, ${user?.name}`}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {language === 'en' 
              ? 'Here are your assigned surveys and today\'s progress' 
              : 'यहाँ आपके असाइन किए गए सर्वेक्षण और आज की प्रगति है'
            }
          </p>
        </div>

        {/* Today's Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {language === 'en' ? 'Surveys Completed' : 'पूर्ण सर्वेक्षण'}
                </p>
                <p className="text-2xl font-bold text-green-600 mt-2">{todayStats.surveysCompleted}</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {language === 'en' ? 'Responses Collected' : 'एकत्रित प्रतिक्रियाएं'}
                </p>
                <p className="text-2xl font-bold text-blue-600 mt-2">{todayStats.responsesCollected}</p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {language === 'en' ? 'Hours Worked' : 'काम के घंटे'}
                </p>
                <p className="text-2xl font-bold text-orange-600 mt-2">{todayStats.hoursWorked}</p>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-xl">
                <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {language === 'en' ? 'Data Uploaded' : 'अपलोड किया गया डेटा'}
                </p>
                <p className="text-2xl font-bold text-purple-600 mt-2">{todayStats.dataUploaded}</p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
                <Upload className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Assigned Surveys */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {language === 'en' ? 'Assigned Surveys' : 'असाइन किए गए सर्वेक्षण'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  {assignedSurveys.length} {language === 'en' ? 'surveys assigned' : 'सर्वेक्षण असाइन किए गए'}
                </p>
              </div>
              
              <div className="p-6 space-y-4">
                {assignedSurveys.map((survey) => (
                  <div 
                    key={survey.id} 
                    className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-md transition-all duration-200 cursor-pointer"
                    onClick={() => setSelectedSurvey(survey.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                          {language === 'en' ? survey.title : survey.titleHi}
                        </h4>
                        <div className="flex items-center space-x-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
                          <MapPin className="h-4 w-4" />
                          <span>{language === 'en' ? survey.location : survey.locationHi}</span>
                        </div>
                        <div className="flex items-center space-x-4 mt-3 text-sm">
                          <span className="text-gray-600 dark:text-gray-400">
                            {language === 'en' ? 'Deadline:' : 'समय सीमा:'} {survey.deadline}
                          </span>
                          <span className="text-gray-600 dark:text-gray-400">
                            {survey.completedResponses}/{survey.totalResponses} {language === 'en' ? 'responses' : 'प्रतिक्रियाएं'}
                          </span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(survey.status)}`}>
                        {survey.status}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          {language === 'en' ? 'Progress' : 'प्रगति'}
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">{survey.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
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
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'en' ? 'Quick Actions' : 'त्वरित कार्य'}
              </h3>
              
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  <Camera className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium text-blue-900 dark:text-blue-100">
                    {language === 'en' ? 'Scan Document' : 'दस्तावेज़ स्कैन करें'}
                  </span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                  <Mic className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <span className="font-medium text-green-900 dark:text-green-100">
                    {language === 'en' ? 'Voice Recording' : 'आवाज़ रिकॉर्डिंग'}
                  </span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                  <MessageSquare className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <span className="font-medium text-purple-900 dark:text-purple-100">
                    {language === 'en' ? 'WhatsApp Helper' : 'व्हाट्सऐप सहायक'}
                  </span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
                  <Navigation className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  <span className="font-medium text-orange-900 dark:text-orange-100">
                    {language === 'en' ? 'Navigate to Location' : 'स्थान पर नेविगेट करें'}
                  </span>
                </button>
              </div>
            </div>

            {/* Sync Status */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'en' ? 'Data Sync Status' : 'डेटा सिंक स्थिति'}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {language === 'en' ? 'Pending Upload' : 'अपलोड लंबित'}
                  </span>
                  <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                    7 {language === 'en' ? 'files' : 'फाइलें'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {language === 'en' ? 'Last Sync' : 'अंतिम सिंक'}
                  </span>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    {language === 'en' ? '2 hours ago' : '2 घंटे पहले'}
                  </span>
                </div>
                
                <button 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  disabled={isOffline}
                >
                  {language === 'en' ? 'Sync Now' : 'अभी सिंक करें'}
                </button>
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'en' ? 'Alerts & Notes' : 'अलर्ट और नोट्स'}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                      {language === 'en' ? 'Survey deadline approaching' : 'सर्वेक्षण की समय सीमा नजदीक'}
                    </p>
                    <p className="text-xs text-yellow-700 dark:text-yellow-400 mt-1">
                      {language === 'en' ? 'RHS-2024-001 due in 3 days' : 'RHS-2024-001 3 दिन में देय'}
                    </p>
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