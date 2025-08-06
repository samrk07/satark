import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  LayoutDashboard,
  FileText,
  Users,
  MessageSquare,
  BarChart3,
  Shield,
  FileOutput,
  Settings,
  Activity,
  MapPin,
  Zap,
  Eye
} from 'lucide-react';

interface SidebarProps {
  activeModule: string;
  onModuleChange: (module: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeModule, onModuleChange }) => {
  const { language } = useLanguage();

  const menuItems = [
    {
      id: 'dashboard',
      icon: LayoutDashboard,
      label: language === 'en' ? 'Dashboard' : 'डैशबोर्ड',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'survey-designer',
      icon: FileText,
      label: language === 'en' ? 'Survey Designer' : 'सर्वे डिज़ाइनर',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'agent-management',
      icon: Users,
      label: language === 'en' ? 'Agent Management' : 'एजेंट प्रबंधन',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'response-tracker',
      icon: MessageSquare,
      label: language === 'en' ? 'Response Tracker' : 'प्रतिक्रिया ट्रैकर',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'analytics',
      icon: BarChart3,
      label: language === 'en' ? 'Analytics' : 'विश्लेषण',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'data-quality',
      icon: Shield,
      label: language === 'en' ? 'Data Quality' : 'डेटा गुणवत्ता',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'reporting',
      icon: FileOutput,
      label: language === 'en' ? 'Reporting' : 'रिपोर्टिंग',
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'settings',
      icon: Settings,
      label: language === 'en' ? 'Settings' : 'सेटिंग्स',
      color: 'from-gray-500 to-gray-600'
    }
  ];

  return (
    <aside className="w-80 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-2xl border-r border-gray-200 dark:border-gray-700 h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {language === 'en' ? 'Control Center' : 'नियंत्रण केंद्र'}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {language === 'en' ? 'Survey Intelligence Platform' : 'सर्वे इंटेलिजेंस प्लेटफॉर्म'}
          </p>
        </div>

        <nav className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onModuleChange(item.id)}
                className={`w-full flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 group ${
                  isActive
                    ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-xl transform scale-105'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-lg hover:transform hover:scale-102'
                }`}
              >
                <div className={`p-2 rounded-xl ${
                  isActive 
                    ? 'bg-white/20' 
                    : 'bg-gradient-to-r ' + item.color + ' group-hover:shadow-lg'
                }`}>
                  <Icon className={`h-5 w-5 ${
                    isActive ? 'text-white' : 'text-white'
                  }`} />
                </div>
                <span className="font-semibold text-base">{item.label}</span>
                {isActive && (
                  <div className="ml-auto">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick Stats */}
        <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-700">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">
            {language === 'en' ? 'Quick Stats' : 'त्वरित आंकड़े'}
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600 dark:text-gray-400">Active Surveys</span>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600 dark:text-gray-400">Field Agents</span>
              <span className="text-sm font-bold text-green-600 dark:text-green-400">48</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600 dark:text-gray-400">Responses Today</span>
              <span className="text-sm font-bold text-purple-600 dark:text-purple-400">1,247</span>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-700">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-green-800 dark:text-green-300">
              {language === 'en' ? 'All Systems Operational' : 'सभी सिस्टम चालू'}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;