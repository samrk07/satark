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
  FileText,
  Award,
  TrendingUp,
  Database,
  Smartphone,
  Eye,
  Lock,
  Cpu,
  MessageCircle,
  Star,
  Play
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, language, toggleLanguage } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: language === 'en' ? 'AI-Powered Surveys' : 'AI-संचालित सर्वेक्षण',
      description: language === 'en' ? 'Generate intelligent surveys with natural language prompts and advanced branching logic' : 'प्राकृतिक भाषा संकेतों के साथ बुद्धिमान सर्वेक्षण बनाएं'
    },
    {
      icon: Globe,
      title: language === 'en' ? 'Multi-Channel Input' : 'बहु-चैनल इनपुट',
      description: language === 'en' ? 'WhatsApp, Voice, SMS, IVR, USSD and Web-based data collection with real-time sync' : 'व्हाट्सऐप, आवाज़, SMS, और वेब-आधारित डेटा संग्रह'
    },
    {
      icon: Shield,
      title: language === 'en' ? 'DPDP Compliant' : 'DPDP अनुपालित',
      description: language === 'en' ? 'Full compliance with Data Protection, Privacy laws and government security standards' : 'डेटा सुरक्षा और गोपनीयता कानूनों का पूर्ण अनुपालन'
    },
    {
      icon: BarChart3,
      title: language === 'en' ? 'Real-time Analytics' : 'रियल-टाइम एनालिटिक्स',
      description: language === 'en' ? 'Live dashboards with AI-powered insights, anomaly detection and predictive analytics' : 'AI-संचालित अंतर्दृष्टि और सत्यापन के साथ लाइव डैशबोर्ड'
    },
    {
      icon: Smartphone,
      title: language === 'en' ? 'Mobile-First Design' : 'मोबाइल-फर्स्ट डिज़ाइन',
      description: language === 'en' ? 'Optimized for field agents with offline capabilities and smart sync' : 'ऑफलाइन क्षमताओं के साथ फील्ड एजेंटों के लिए अनुकूलित'
    },
    {
      icon: Eye,
      title: language === 'en' ? 'Smart Validation' : 'स्मार्ट सत्यापन',
      description: language === 'en' ? 'AI-powered data validation with triangulation and quality scoring' : 'त्रिकोणीकरण और गुणवत्ता स्कोरिंग के साथ AI-संचालित डेटा सत्यापन'
    },
    {
      icon: Database,
      title: language === 'en' ? 'Federated Storage' : 'संघीय भंडारण',
      description: language === 'en' ? 'Secure, distributed data storage with edge encryption and backup' : 'एज एन्क्रिप्शन और बैकअप के साथ सुरक्षित, वितरित डेटा भंडारण'
    },
    {
      icon: MessageCircle,
      title: language === 'en' ? 'Multilingual Support' : 'बहुभाषी समर्थन',
      description: language === 'en' ? 'Support for 22+ Indian languages with voice and text input' : '22+ भारतीय भाषाओं के लिए आवाज़ और टेक्स्ट इनपुट के साथ समर्थन'
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
    { icon: BarChart3, text: t('solution.storage') },
    { icon: Cpu, text: language === 'en' ? 'Edge AI processing' : 'एज AI प्रसंस्करण' },
    { icon: Lock, text: language === 'en' ? 'End-to-end encryption' : 'एंड-टू-एंड एन्क्रिप्शन' }
  ];

  const testimonials = [
    {
      name: 'Dr. Rajesh Kumar',
      role: language === 'en' ? 'Joint Secretary, MoSPI' : 'संयुक्त सचिव, MoSPI',
      quote: language === 'en' 
        ? 'SATARK.AI has revolutionized our survey operations. What used to take months now completes in weeks with higher accuracy.'
        : 'SATARK.AI ने हमारे सर्वेक्षण संचालन में क्रांति ला दी है। जो काम महीनों में होता था, अब हफ्तों में बेहतर सटीकता के साथ पूरा होता है।',
      avatar: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      role: language === 'en' ? 'Field Supervisor, Gujarat' : 'फील्ड सुपरवाइजर, गुजरात',
      quote: language === 'en'
        ? 'The multilingual support and offline capabilities have made data collection in rural areas seamless and efficient.'
        : 'बहुभाषी समर्थन और ऑफलाइन क्षमताओं ने ग्रामीण क्षेत्रों में डेटा संग्रह को निर्बाध और कुशल बना दिया है।',
      avatar: '👩‍💻'
    },
    {
      name: 'Mohammed Ali',
      role: language === 'en' ? 'Data Analyst, Karnataka' : 'डेटा विश्लेषक, कर्नाटक',
      quote: language === 'en'
        ? 'Real-time validation and AI insights have improved our data quality by 300%. The platform is a game-changer.'
        : 'रियल-टाइम सत्यापन और AI अंतर्दृष्टि ने हमारी डेटा गुणवत्ता में 300% सुधार किया है। यह प्लेटफॉर्म गेम-चेंजर है।',
      avatar: '👨‍🔬'
    }
  ];

  const achievements = [
    { icon: Award, number: '98%', label: language === 'en' ? 'Data Accuracy' : 'डेटा सटीकता' },
    { icon: TrendingUp, number: '75%', label: language === 'en' ? 'Time Reduction' : 'समय की बचत' },
    { icon: Users, number: '50K+', label: language === 'en' ? 'Active Users' : 'सक्रिय उपयोगकर्ता' },
    { icon: MapPin, number: '28', label: language === 'en' ? 'States Covered' : 'राज्य कवर किए गए' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b-4 border-gradient-to-r from-orange-500 to-green-500 sticky top-0 z-50">
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
                <p className="text-xs text-gray-600 dark:text-gray-300">{t('header.subtitle')}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 bg-gradient-to-r from-orange-100 to-green-100 dark:from-orange-900 dark:to-green-900 text-orange-800 dark:text-orange-200 rounded-lg hover:shadow-lg transition-all duration-300 font-medium border border-orange-200 dark:border-orange-700"
              >
                {language === 'en' ? 'हिंदी' : 'English'}
              </button>
              <button
                onClick={() => navigate('/login')}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t('header.login')}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-orange-600/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-green-100 dark:from-orange-900 dark:to-green-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium mb-8 border border-orange-200 dark:border-orange-700 shadow-lg">
                <Shield className="h-4 w-4 mr-2" />
                <span className="font-semibold">Government of India Initiative</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight bg-gradient-to-r from-blue-900 via-purple-800 to-orange-800 bg-clip-text text-transparent">
                {t('hero.title')}
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-medium">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <button
                  onClick={() => navigate('/login?role=admin')}
                  className="group flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                >
                  {t('hero.admin_login')}
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => navigate('/login?role=agent')}
                  className="group flex items-center justify-center px-10 py-5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                >
                  {t('hero.agent_login')}
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <button
                onClick={() => navigate('/demo')}
                className="group inline-flex items-center px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <Play className="mr-2 h-4 w-4" />
                {t('hero.demo')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative lg:pl-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/image.png" 
                alt="SATARK.AI Dashboard Preview" 
                className="relative w-full h-auto rounded-3xl shadow-2xl border-4 border-white/20 backdrop-blur-sm"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="0.03"%3E%3Cpolygon points="50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              {language === 'en' ? 'Transforming India\'s Survey Landscape' : 'भारत के सर्वेक्षण परिदृश्य को बदलना'}
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Trusted by government agencies across India for accurate, efficient, and transparent data collection'
                : 'सटीक, कुशल और पारदर्शी डेटा संग्रह के लिए भारत भर की सरकारी एजेंसियों द्वारा भरोसा किया गया'
              }
            </p>
          </div>
          
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 group-hover:scale-105">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-orange-300 group-hover:text-orange-200 transition-colors" />
                    <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">
                      {achievement.number}
                    </div>
                    <div className="text-blue-100 font-medium text-lg">{achievement.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Live Stats */}
      <section className="py-20 bg-white dark:bg-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-orange-50/50 dark:from-gray-800 dark:to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'en' ? 'Real-Time Platform Statistics' : 'रियल-टाइम प्लेटफॉर्म आंकड़े'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {language === 'en' ? 'Live data from across India' : 'पूरे भारत से लाइव डेटा'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">235</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold text-lg">{t('stats.surveys')}</div>
              <div className="text-sm text-blue-600 dark:text-blue-400 mt-2">+12 this week</div>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-8 border border-green-200 dark:border-green-700 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold text-green-600 dark:text-green-400 mb-4">28</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold text-lg">{t('stats.districts')}</div>
              <div className="text-sm text-green-600 dark:text-green-400 mt-2">Across India</div>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-700 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold text-orange-600 dark:text-orange-400 mb-4">24</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold text-lg">{t('stats.turnaround')} {t('stats.hours')}</div>
              <div className="text-sm text-orange-600 dark:text-orange-400 mt-2">50% faster</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.02"%3E%3Cpath d="M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'en' ? 'Revolutionizing Government Surveys' : 'सरकारी सर्वेक्षणों में क्रांति'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'From traditional paper-based processes to AI-powered intelligent systems'
                : 'पारंपरिक कागज-आधारित प्रक्रियाओं से AI-संचालित बुद्धिमान प्रणालियों तक'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Problems */}
            <div>
              <div className="bg-red-50 dark:bg-red-900/10 rounded-3xl p-8 border-2 border-red-100 dark:border-red-800/30">
                <h3 className="text-2xl lg:text-3xl font-bold text-red-800 dark:text-red-300 mb-8 flex items-center">
                  <AlertTriangle className="mr-3 h-8 w-8" />
                  {t('problem.title')}
                </h3>
                <div className="space-y-6">
                {problems.map((problem, index) => {
                  const Icon = problem.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-red-200 dark:border-red-800/50 hover:shadow-lg transition-all duration-300">
                      <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded-xl">
                        <Icon className="h-7 w-7 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="text-gray-900 dark:text-white font-semibold text-lg">{problem.text}</span>
                    </div>
                  );
                })}
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div className="bg-green-50 dark:bg-green-900/10 rounded-3xl p-8 border-2 border-green-100 dark:border-green-800/30">
                <h3 className="text-2xl lg:text-3xl font-bold text-green-800 dark:text-green-300 mb-8 flex items-center">
                  <CheckCircle className="mr-3 h-8 w-8" />
                  {t('solution.title')}
                </h3>
                <div className="space-y-6">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-200 dark:border-green-800/50 hover:shadow-lg transition-all duration-300">
                      <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded-xl">
                        <Icon className="h-7 w-7 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-900 dark:text-white font-semibold text-lg">{solution.text}</span>
                    </div>
                  );
                })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-orange-50/30 dark:from-blue-900/10 dark:to-orange-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'en' ? 'Key Features' : 'मुख्य विशेषताएं'}
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              {language === 'en' ? 'Powered by cutting-edge AI and designed for Indian government needs' : 'अत्याधुनिक AI द्वारा संचालित और भारतीय सरकारी आवश्यकताओं के लिए डिज़ाइन किया गया'}
            </p>
          </div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group bg-white dark:bg-gray-700 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-700 hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'en' ? 'Trusted by Government Officials' : 'सरकारी अधिकारियों द्वारा भरोसा किया गया'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'See what government officials and field agents are saying about SATARK.AI'
                : 'देखें कि सरकारी अधिकारी और फील्ड एजेंट SATARK.AI के बारे में क्या कह रहे हैं'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'en' ? 'Technology & Compliance' : 'प्रौद्योगिकी और अनुपालन'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {language === 'en' ? 'Built with cutting-edge technology and full government compliance' : 'अत्याधुनिक तकनीक और पूर्ण सरकारी अनुपालन के साथ निर्मित'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'LangChain', 'Tesseract OCR', 'OpenAI Whisper', 
              'DPDP Compliant', 'NDSAP', 'GSBPM'
            ].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 px-6 py-4 rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-600 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
                <span className="font-bold text-gray-800 dark:text-gray-200 text-sm lg:text-base">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="0.05"%3E%3Cpolygon points="120 120 60 120 90 90 60 60 120 0 120 60 90 90 120 120"/%3E%3Cpolygon points="0 120 60 120 30 90 60 60 0 0 0 60 30 90 0 120"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            {language === 'en' ? 'Ready to Transform Your Surveys?' : 'अपने सर्वेक्षणों को बदलने के लिए तैयार हैं?'}
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto">
            {language === 'en' 
              ? 'Join thousands of government officials already using SATARK.AI to make data collection faster, more accurate, and more efficient.'
              : 'हजारों सरकारी अधिकारियों के साथ जुड़ें जो पहले से ही SATARK.AI का उपयोग करके डेटा संग्रह को तेज़, अधिक सटीक और अधिक कुशल बना रहे हैं।'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => navigate('/login?role=admin')}
              className="group px-12 py-6 bg-white text-blue-900 rounded-2xl hover:bg-blue-50 transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center"
            </div>
              {language === 'en' ? 'Start Free Trial' : 'मुफ्त ट्रायल शुरू करें'}
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => navigate('/demo')}
              className="group px-12 py-6 bg-transparent border-2 border-white text-white rounded-2xl hover:bg-white hover:text-blue-900 transition-all duration-300 font-bold text-xl flex items-center"
            >
              <Play className="mr-3 h-6 w-6" />
              {language === 'en' ? 'Watch Demo' : 'डेमो देखें'}
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-3 text-green-300" />
              <p className="text-blue-100">{language === 'en' ? 'No setup fees' : 'कोई सेटअप फीस नहीं'}</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 mx-auto mb-3 text-green-300" />
              <p className="text-blue-100">{language === 'en' ? 'Government compliant' : 'सरकारी अनुपालित'}</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-green-300" />
              <p className="text-blue-100">{language === 'en' ? '24/7 support' : '24/7 सहायता'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-orange-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/Satark AI (1).png" 
                alt="SATARK.AI Logo" 
                    className="h-12 w-12 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
                  <div>
                    <h3 className="text-3xl font-bold">{t('header.title')}</h3>
                    <p className="text-blue-300">{t('header.subtitle')}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {language === 'en' 
                    ? 'Empowering India\'s data collection with AI-powered survey intelligence. Making government surveys faster, fairer, and future-ready.'
                    : 'AI-संचालित सर्वेक्षण बुद्धिमत्ता के साथ भारत के डेटा संग्रह को सशक्त बनाना। सरकारी सर्वेक्षणों को तेज़, निष्पक्ष और भविष्य के लिए तैयार बनाना।'
                  }
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-6 text-orange-300">
                  {language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}
                </h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About SATARK.AI</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-6 text-orange-300">
                  {language === 'en' ? 'Contact' : 'संपर्क'}
                </h4>
                <ul className="space-y-3">
                  <li className="text-gray-300">team.yukt@gov.in</li>
                  <li className="text-gray-300">+91-11-2345-6789</li>
                  <li className="text-gray-300">Ministry of Statistics & PI</li>
                  <li className="text-gray-300">New Delhi, India</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-blue-300 mb-4 text-lg">{t('footer.built')}</p>
              <p className="text-gray-400 text-sm mb-4">{t('footer.contact')}</p>
              <p className="text-gray-500 text-sm">
                © 2025 Government of India. All rights reserved. | Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;