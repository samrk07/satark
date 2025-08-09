import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, User, Mail, Lock, ArrowLeft, Globe } from 'lucide-react';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login, isLoading } = useAuth();
  const { t, language, toggleLanguage } = useLanguage();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: (searchParams.get('role') as 'admin' | 'agent') || 'admin'
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    
    const success = await login(formData.email, formData.password, formData.role);
    
    if (success) {
      navigate(formData.role === 'admin' ? '/dashboard/admin' : '/dashboard/agent');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-corporate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-accent hover:text-navy-700 mb-6 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </button>
          
          <div className="flex items-center justify-center mb-6">
            <img src="/Satark AI.png" alt="SATARK.AI Logo" className="h-10 w-auto" />
            <div className="ml-3">
              <h1 className="text-2xl font-semibold text-corporate-900">SATARK.AI</h1>
              <p className="text-sm text-corporate-600">Government Login Portal</p>
            </div>
          </div>
          
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-corporate-200 rounded-lg hover:bg-corporate-50 transition-colors font-medium text-sm mx-auto"
          >
            <Globe className="h-4 w-4 text-corporate-600" />
            <span className="text-corporate-700">{language === 'en' ? 'हिंदी' : 'English'}</span>
          </button>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-card border border-corporate-200 p-8">
          <h2 className="text-2xl font-semibold text-corporate-900 text-center mb-8">
            {t('login.title')}
          </h2>
          
          {error && (
            <div className="bg-error/10 border border-error/20 text-error px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-corporate-700 mb-2">
                {t('login.role')}
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-corporate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white text-corporate-900"
              >
                <option value="admin">{t('login.admin')}</option>
                <option value="agent">{t('login.agent')}</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-corporate-700 mb-2">
                {t('login.email')}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-corporate-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-corporate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white text-corporate-900"
                  placeholder="your.email@gov.in"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-corporate-700 mb-2">
                {t('login.password')}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-corporate-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-corporate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white text-corporate-900"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent text-white py-3 px-4 rounded-xl hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                  Logging in...
                </div>
              ) : (
                t('login.submit')
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-navy-50 rounded-lg border border-navy-200">
            <h3 className="text-sm font-medium text-navy-800 mb-2">Demo Credentials:</h3>
            <div className="text-xs text-navy-700 space-y-1">
              <p><strong>Admin:</strong> admin@mospi.gov.in / password123</p>
              <p><strong>Agent:</strong> agent@field.gov.in / password123</p>
            </div>
          </div>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/register')}
              className="text-accent hover:text-navy-700 text-sm font-medium"
            >
              {t('login.register')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;