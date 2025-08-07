import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  MessageSquare, 
  BarChart3, 
  ShieldCheck, 
  FileDown, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Plus,
  Eye,
  UserCheck,
  Database,
  Smartphone,
  Lock,
  Globe,
  Zap,
  Activity
} from 'lucide-react';

interface SidebarProps {
  activeModule: string;
  onModuleChange: (module: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeModule, onModuleChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const modules = [
    { 
      id: 'dashboard', 
      name: 'Dashboard', 
      icon: LayoutDashboard, 
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-700'
    },
    { 
      id: 'survey-management', 
      name: 'Survey Management', 
      icon: FileText, 
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-700',
      subItems: [
        { id: 'survey-designer', name: 'Create Survey', icon: Plus },
        { id: 'view-surveys', name: 'View Surveys', icon: Eye }
      ]
    },
    { 
      id: 'agent-management', 
      name: 'Agents', 
      icon: Users, 
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      borderColor: 'border-indigo-200 dark:border-indigo-700',
      subItems: [
        { id: 'assign-track', name: 'Assign & Track', icon: UserCheck }
      ]
    },
    { 
      id: 'validation-engine', 
      name: 'Validation Engine', 
      icon: ShieldCheck, 
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-700'
    },
    { 
      id: 'analytics', 
      name: 'Reports & Analytics', 
      icon: BarChart3, 
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-700'
    },
    { 
      id: 'citizen-channels', 
      name: 'Citizen Channels', 
      icon: Smartphone, 
      color: 'text-cyan-600 dark:text-cyan-400',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      borderColor: 'border-cyan-200 dark:border-cyan-700'
    },
    { 
      id: 'compliance-privacy', 
      name: 'Compliance & Privacy', 
      icon: Lock, 
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-200 dark:border-red-700'
    },
    { 
      id: 'settings', 
      name: 'Settings', 
      icon: Settings, 
      color: 'text-gray-600 dark:text-gray-400',
      bgColor: 'bg-gray-50 dark:bg-gray-900/20',
      borderColor: 'border-gray-200 dark:border-gray-700'
    },
  ];

  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-80'} bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-r border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col shadow-2xl`}>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">SATARK.AI</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Survey Intelligence</p>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors duration-200 shadow-md"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {modules.map((module) => {
          const Icon = module.icon;
          const isActive = activeModule === module.id || (module.subItems && module.subItems.some(sub => activeModule === sub.id));
          
          return (
            <div key={module.id} className="space-y-1">
              <button
                onClick={() => onModuleChange(module.id)}
                className={`w-full flex items-center px-4 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                  isActive
                    ? `${module.bgColor} border-2 ${module.borderColor} shadow-xl transform scale-105`
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800 border-2 border-transparent hover:shadow-lg hover:scale-102'
                }`}
                title={isCollapsed ? module.name : ''}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
                )}
                <div className={`p-2 rounded-xl ${isActive ? module.bgColor : 'bg-gray-100 dark:bg-gray-800'} group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <Icon className={`h-5 w-5 ${isActive ? module.color : 'text-gray-600 dark:text-gray-300'} transition-colors duration-200`} />
                </div>
                {!isCollapsed && (
                  <div className="ml-4 flex-1 text-left">
                    <span className={`font-semibold transition-colors duration-200 ${
                      isActive ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {module.name}
                    </span>
                    {module.subItems && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {module.subItems.length} items
                      </div>
                    )}
                  </div>
                )}
                {!isCollapsed && isActive && (
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg animate-pulse"></div>
                )}
              </button>

              {/* Sub Items */}
              {!isCollapsed && module.subItems && isActive && (
                <div className="ml-6 space-y-1 animate-fadeIn">
                  {module.subItems.map((subItem) => {
                    const SubIcon = subItem.icon;
                    const isSubActive = activeModule === subItem.id;
                    return (
                      <button
                        key={subItem.id}
                        onClick={() => onModuleChange(subItem.id)}
                        className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                          isSubActive
                            ? 'bg-white dark:bg-gray-700 shadow-md border border-gray-200 dark:border-gray-600'
                            : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                      >
                        <SubIcon className={`h-4 w-4 mr-3 ${isSubActive ? module.color : 'text-gray-500 dark:text-gray-400'}`} />
                        <span className={`text-sm font-medium ${
                          isSubActive ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'
                        }`}>
                          {subItem.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
        <div className={`${isCollapsed ? 'text-center' : 'text-left'} space-y-2`}>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            {!isCollapsed && (
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                System Status: Online
              </div>
            )}
          </div>
          {!isCollapsed && (
            <>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                SATARK.AI v2.1.3
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                Last updated: 2 hours ago
              </div>
              <div className="flex items-center space-x-2 mt-3">
                <Globe className="h-3 w-3 text-orange-500" />
                <span className="text-xs text-gray-600 dark:text-gray-400">भारत सरकार</span>
              </div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;