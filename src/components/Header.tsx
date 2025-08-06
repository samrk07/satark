import React, { useState } from 'react';
import { Bell, Search, Globe, User, Settings, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(3);
  const [currentLang, setCurrentLang] = useState('EN');

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <img src="/Satark AI.png" alt="SATARK.AI Logo" className="h-10 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">SATARK.AI</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ministry of Statistics & Programme Implementation</p>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search surveys, agents, responses..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white transition-colors duration-200"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setCurrentLang(currentLang === 'EN' ? 'HI' : 'EN')}
            className="flex items-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <Globe className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{currentLang}</span>
          </button>

          <button 
            onClick={toggleTheme}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </button>

          <div className="relative">
            <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Dr. Priya Sharma</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Senior Statistical Officer</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
