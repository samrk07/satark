import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  FileText
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, language, toggleLanguage } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: language === 'en' ? 'AI-Powered Surveys' : 'AI-संचालित सर्वेक्षण',
      description: language === 'en' ? 'Generate intelligent surveys with natural language prompts' : 'प्राकृतिक भाषा संकेतों के साथ बुद्धिमान सर्वेक्षण बनाएं'
    },
    {
      icon: Globe,
      title: language === 'en' ? 'Multi-Channel Input' : 'बहु-चैनल इनपुट',
      description: language === 'en' ? 'WhatsApp, Voice, SMS, and Web-based data collection' : 'व्हाट्सऐप, आवाज़, SMS, और वेब-आधारित डेटा संग्रह'
    },
    {
      icon: Shield,
      title: language === 'en' ? 'DPDP Compliant' : 'DPDP अनुपालित',
      description: language === 'en' ? 'Full compliance with Data Protection and Privacy laws' : 'डेटा सुरक्षा और गोपनीयता कानूनों का पूर्ण अनुपालन'
    },
    {
      icon: BarChart3,
      title: language === 'en' ? 'Real-time Analytics' : 'रियल-टाइम एनालिटिक्स',
      description: language === 'en' ? 'Live dashboards with AI-powered insights and validation' : 'AI-संचालित अंतर्दृष्टि और सत्यापन के साथ लाइव डैशबोर्ड'
    }
  ];

  const problems = [
    { icon: Clock, text: t('problem.delay') },
    { icon: FileText, text: t('problem.paper') },
    { icon: Users, text: t('problem.errors') },
    { icon: Globe, text: t('problem.literacy') }
  ];

  const solutions = [
    { icon: Zap, text: t('solution.ai') },
    { icon: Globe, text: t('solution.whatsapp') },
    { icon: Shield, text: t('solution.ocr') },
    { icon: BarChart3, text: t('solution.storage') }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-lg border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <img 
                src="/Satark AI (1).png" 
                alt="SATARK.AI Logo" 
                className="h-12 w-12 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <h1 className="text-2xl font-bold text-blue-900 dark:text-white">{t('header.title')}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('header.subtitle')}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors font-medium"
              >
                {language === 'en' ? 'हिंदी' : 'English'}
              </button>
              <button
                onClick={() => navigate('/login')}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {t('header.login')}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-orange-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Government of India Initiative
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/login?role=admin')}
                  className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  {t('hero.admin_login')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                
                <button
                  onClick={() => navigate('/login?role=agent')}
                  className="flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  {t('hero.agent_login')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              
              <button
                onClick={() => navigate('/demo')}
                className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center"
              >
                {t('hero.demo')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="/image.png" 
                alt="SATARK.AI Dashboard Preview" 
                className="w-full h-auto rounded-2xl shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">235</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{t('stats.surveys')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">12</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{t('stats.districts')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">48</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{t('stats.turnaround')} {t('stats.hours')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Problems */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('problem.title')}</h2>
              <div className="space-y-6">
                {problems.map((problem, index) => {
                  const Icon = problem.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
                      <div className="bg-red-100 dark:bg-red-900/40 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="text-gray-900 dark:text-white font-medium">{problem.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('solution.title')}</h2>
              <div className="space-y-6">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                      <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-900 dark:text-white font-medium">{solution.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'en' ? 'Key Features' : 'मुख्य विशेषताएं'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {language === 'en' ? 'Powered by cutting-edge AI and designed for Indian government needs' : 'अत्याधुनिक AI द्वारा संचालित और भारतीय सरकारी आवश्यकताओं के लिए डिज़ाइन किया गया'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-600">
                  <div className="bg-blue-100 dark:bg-blue-900/40 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'en' ? 'Technology & Compliance' : 'प्रौद्योगिकी और अनुपालन'}
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-sm border">
              <span className="font-semibold text-gray-700 dark:text-gray-300">LangChain</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-sm border">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Tesseract OCR</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-sm border">
              <span className="font-semibold text-gray-700 dark:text-gray-300">OpenAI Whisper</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-sm border">
              <span className="font-semibold text-gray-700 dark:text-gray-300">DPDP Compliant</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-sm border">
              <span className="font-semibold text-gray-700 dark:text-gray-300">NDSAP</span>
            </div>
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-sm border">
              <span className="font-semibold text-gray-700 dark:text-gray-300">GSBPM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 dark:bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img 
                src="/Satark AI (1).png" 
                alt="SATARK.AI Logo" 
                className="h-10 w-10 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h3 className="text-2xl font-bold">{t('header.title')}</h3>
            </div>
            
            <p className="text-blue-200 dark:text-gray-300 mb-4">{t('footer.built')}</p>
            <p className="text-blue-300 dark:text-gray-400">{t('footer.contact')}</p>
            
            <div className="mt-8 pt-8 border-t border-blue-800 dark:border-gray-700">
              <p className="text-blue-300 dark:text-gray-400 text-sm">
                © 2025 Government of India. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;