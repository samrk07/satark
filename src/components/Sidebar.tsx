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
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  activeModule: string;
  onModuleChange: (module: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeModule, onModuleChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const modules = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard, color: 'text-blue-600' },
    { id: 'survey-designer', name: 'Survey Designer', icon: FileText, color: 'text-green-600' },
    { id: 'agent-management', name: 'Agent Management', icon: Users, color: 'text-indigo-600' },
    { id: 'response-tracker', name: 'Response Tracker', icon: MessageSquare, color: 'text-purple-600' },
    { id: 'analytics', name: 'Real-Time Analytics', icon: BarChart3, color: 'text-orange-600' },
    { id: 'data-quality', name: 'Data Quality', icon: ShieldCheck, color: 'text-yellow-600' },
    { id: 'reporting', name: 'Reporting & Exports', icon: FileDown, color: 'text-red-600' },
    { id: 'settings', name: 'Settings & Compliance', icon: Settings, color: 'text-gray-600' },
  ];

  return (
    <aside className={`${isCollapsed ? 'w-16' : 'w-64'} bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col`}>
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && (
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Modules</h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      <nav className="flex-1 px-4 pb-4">
        <ul className="space-y-2">
          {modules.map((module) => {
            const Icon = module.icon;
            const isActive = activeModule === module.id;
            
            return (
              <li key={module.id}>
                <button
                  onClick={() => onModuleChange(module.id)}
                  className={`w-full flex items-center px-3 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-700 shadow-lg'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 border-2 border-transparent'
                  }`}
                  title={isCollapsed ? module.name : ''}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-blue-600 dark:text-blue-400' : module.color} transition-colors duration-200`} />
                  {!isCollapsed && (
                    <span className={`ml-3 font-medium transition-colors duration-200 ${
                      isActive ? 'text-blue-900 dark:text-blue-100' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {module.name}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className={`${isCollapsed ? 'text-center' : 'text-left'}`}>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {isCollapsed ? 'v2.1' : 'SATARK.AI v2.1.3'}
          </div>
          {!isCollapsed && (
            <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              Last updated: 2 hours ago
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;