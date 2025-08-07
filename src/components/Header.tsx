import React, { useState } from 'react';
import { Bell, Search, Globe, User, Settings, Moon, Sun, Shield, Zap, Activity } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(5);
  const [currentLang, setCurrentLang] = useState('EN');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-200 shadow-xl">
      <div className="flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img src="/Satark%20AI.png" alt="SATARK.AI Logo" className="h-12 w-auto" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse shadow-lg"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                SATARK.AI
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Ministry of Statistics & Programme Implementation
              </p>
            </div>
          </div>
          
          {/* System Status Indicator */}
          <div className="hidden lg:flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-xl border border-green-200 dark:border-green-700">
            <Activity className="h-4 w-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-semibold text-green-700 dark:text-green-300">System Online</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-indigo-500 transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search surveys, agents, responses, analytics..."
              className="w-full pl-12 pr-6 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 shadow-inner"
            />
            {searchQuery && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Zap className="h-4 w-4 text-indigo-500 animate-pulse" />
              </div>
            )}
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Language Toggle */}
          <button 
            onClick={() => setCurrentLang(currentLang === 'EN' ? 'हिं' : 'EN')}
            className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 rounded-2xl hover:shadow-lg transition-all duration-300 border border-orange-200 dark:border-orange-700 group"
          >
            <Globe className="h-4 w-4 text-orange-600 dark:text-orange-400 group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-bold text-orange-800 dark:text-orange-200">{currentLang}</span>
            <div className="w-2 h-2 bg-orange-500 rounded-full opacity-60"></div>
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-yellow-500 group-hover:rotate-12 transition-transform" />
            ) : (
              <Moon className="h-5 w-5 text-indigo-600 group-hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button className="p-3 bg-gray-100 dark:bg-gray-800 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
              <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:animate-bounce" />
              {notifications > 0 && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                  {notifications}
                </div>
              )}
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-600">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-900 dark:text-white">Dr. Priya Sharma</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Senior Statistical Officer</p>
              <div className="flex items-center space-x-1 mt-1">
                <Shield className="h-3 w-3 text-green-500" />
                <span className="text-xs text-green-600 dark:text-green-400 font-medium">Verified</span>
              </div>
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <User className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 shadow-lg"></div>
            </div>
          </div>

          {/* Settings */}
          <button className="p-3 bg-gray-100 dark:bg-gray-800 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
            <Settings className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="mt-4 flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-4 border border-blue-200 dark:border-blue-700">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">47 Active Surveys</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">2,847 Agents Online</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">15,429 Responses Today</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Activity className="h-4 w-4" />
          <span>Last sync: 2 mins ago</span>
        </div>
      </div>
    </header>
  );
};

export default Header;