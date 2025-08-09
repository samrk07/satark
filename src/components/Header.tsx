import React, { useState } from 'react';
import { Bell, Search, Globe, User, Settings, Moon, Sun, Shield, Activity } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(3);
  const [currentLang, setCurrentLang] = useState('EN');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white border-b border-corporate-200 px-6 py-4 shadow-soft">
      <div className="flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <img src="/Satark%20AI.png" alt="SATARK.AI Logo" className="h-10 w-auto" />
            <div>
              <h1 className="text-xl font-semibold text-corporate-900">
                SATARK.AI
              </h1>
              <p className="text-xs text-corporate-600 font-medium">
                Ministry of Statistics & Programme Implementation
              </p>
            </div>
          </div>
          
          {/* System Status */}
          <div className="hidden lg:flex items-center space-x-2 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200">
            <Activity className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">System Online</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-corporate-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search surveys, agents, responses..."
              className="w-full pl-12 pr-6 py-3 bg-corporate-50 border border-corporate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-corporate-900 transition-all duration-200"
            />
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Language Toggle */}
          <button 
            onClick={() => setCurrentLang(currentLang === 'EN' ? 'हिं' : 'EN')}
            className="flex items-center space-x-2 px-4 py-2 bg-corporate-50 rounded-xl hover:bg-corporate-100 transition-colors border border-corporate-200"
          >
            <Globe className="h-4 w-4 text-corporate-600" />
            <span className="text-sm font-medium text-corporate-700">{currentLang}</span>
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-3 bg-corporate-50 rounded-xl hover:bg-corporate-100 transition-colors border border-corporate-200"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-corporate-600" />
            ) : (
              <Moon className="h-5 w-5 text-corporate-600" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button className="p-3 bg-corporate-50 rounded-xl hover:bg-corporate-100 transition-colors border border-corporate-200">
              <Bell className="h-5 w-5 text-corporate-600" />
              {notifications > 0 && (
                <div className="absolute -top-1 -right-1 bg-error text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {notifications}
                </div>
              )}
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3 bg-corporate-50 rounded-xl p-3 border border-corporate-200">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-corporate-900">Dr. Priya Sharma</p>
              <p className="text-xs text-corporate-600">Senior Statistical Officer</p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-white"></div>
            </div>
          </div>

          {/* Settings */}
          <button className="p-3 bg-corporate-50 rounded-xl hover:bg-corporate-100 transition-colors border border-corporate-200">
            <Settings className="h-5 w-5 text-corporate-600" />
          </button>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="mt-4 flex items-center justify-between bg-corporate-50 rounded-xl p-4 border border-corporate-200">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span className="text-sm font-medium text-corporate-700">47 Active Surveys</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-medium text-corporate-700">2,847 Agents Online</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-warning rounded-full"></div>
            <span className="text-sm font-medium text-corporate-700">15,429 Responses Today</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-corporate-600">
          <Activity className="h-4 w-4" />
          <span>Last sync: 2 mins ago</span>
        </div>
      </div>
    </header>
  );
};

export default Header;