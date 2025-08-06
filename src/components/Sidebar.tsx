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
  Bot
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
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      id: 'survey-designer',
      icon: FileText,
      label: language === 'en' ? 'Survey Designer' : 'सर्वे डिज़ाइनर',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      id: 'agent-management',
      icon: Users,
      label: language === 'en' ? 'Agent Management' : 'एजेंट प्रबंधन',
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      id: 'response-tracker',
      icon: MessageSquare,
      label: language === 'en' ? 'Response Tracker' : 'प्रतिक्रिया ट्रैकर',
      color: 'text-orange-600 dark:text-orange-400'
    },
    {
      id: 'analytics',
      icon: BarChart3,
      label: language === 'en' ? 'Analytics' : 'विश्लेषण',
      color: 'text-indigo-600 dark:text-indigo-400'
    },
    {
      id: 'data-quality',
      icon: Shield,
      label: language === 'en' ? 'Data Quality' : 'डेटा गुणवत्ता',
      color: 'text-red-600 dark:text-red-400'
    },
    {
      id: 'reporting',
      icon: FileOutput,
      label: language === 'en' ? 'Reporting' : 'रिपोर्टिंग',
      color: 'text-yellow-600 dark:text-yellow-400'
    },
    {
      id: 'settings',
      icon: Settings,
      label: language === 'en' ? 'Settings' : 'सेटिंग्स',
      color: 'text-gray-600 dark:text-gray-400'
    }
  ];

  return (
    <aside className="w-80 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-2xl border-r border-gray-200 dark:border-gray-700 h-screen sticky top-0 overflow-y-auto">
      <div className="p-8">
        <div className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onModuleChange(item.id)}
                className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 text-left group ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 shadow-lg border-2 border-blue-200 dark:border-blue-700 transform scale-105'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:shadow-md hover:transform hover:scale-102'
                }`}
              >
                <div className={`p-3 rounded-xl ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg' 
                    : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600'
                }`}>
                  <Icon className={`h-6 w-6 ${
                    isActive 
                      ? 'text-white' 
                      : item.color
                  }`} />
                </div>
                <div className="flex-1">
                  <span className={`font-semibold text-lg ${
                    isActive 
                      ? 'text-blue-900 dark:text-blue-100' 
                      : 'text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
                  }`}>
                    {item.label}
                  </span>
                </div>
                {isActive && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* AI Assistant Shortcut */}
        <div className="mt-12 p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl border-2 border-purple-200 dark:border-purple-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                {language === 'en' ? 'SATARK Copilot' : 'सतर्क सहायक'}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {language === 'en' ? 'AI Assistant' : 'AI सहायक'}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {language === 'en' 
              ? 'Get instant help with surveys, data analysis, and insights.'
              : 'सर्वेक्षण, डेटा विश्लेषण और अंतर्दृष्टि के साथ तुरंत सहायता प्राप्त करें।'
            }
          </p>
          <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {language === 'en' ? 'Open Assistant' : 'सहायक खोलें'}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;