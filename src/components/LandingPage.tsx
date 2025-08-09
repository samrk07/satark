import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  BarChart3, 
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  MapPin,
  Clock,
  Database,
  Smartphone,
  Lock,
  Brain,
  Target,
  Eye,
  Quote,
  Trophy
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const { login } = useAuth();
  const { language, toggleLanguage } = useLanguage();

  const handleLogin = (role: 'admin' | 'agent') => {
    login({ 
      id: '1', 
      name: role === 'admin' ? 'Admin User' : 'Field Agent', 
      role,
      email: role === 'admin' ? 'admin@mospi.gov.in' : 'agent@mospi.gov.in'
    });
  };

  const content = {
    en: {
      title: "Transforming Government Surveys with AI Intelligence",
      subtitle: "A comprehensive survey intelligence platform designed for the Ministry of Statistics & Programme Implementation, Government of India.",
      loginAdmin: "Admin Portal",
      loginAgent: "Field Agent Portal",
      viewDemo: "View Demo",
      problemsTitle: "Current Challenges",
      solutionsTitle: "Our Solutions",
      problems: [
        "Manual data collection delays",
        "Language barriers in rural areas",
        "Data quality inconsistencies",
        "Limited field agent coordination",
        "Time-consuming validation processes",
        "Fragmented response channels"
      ],
      solutions: [
        "AI-powered survey automation",
        "Multi-language support (15+ languages)",
        "Real-time data validation",
        "Intelligent agent management",
        "Automated quality assurance",
        "Unified response platform"
      ],
      statsTitle: "Platform Impact",
      featuresTitle: "Core Capabilities",
      testimonialsTitle: "Trusted by Government Officials",
      achievementsTitle: "Recognition & Certifications"
    },
    hi: {
      title: "AI बुद्धिमत्ता के साथ सरकारी सर्वेक्षणों का रूपांतरण",
      subtitle: "सांख्यिकी और कार्यक्रम कार्यान्वयन मंत्रालय, भारत सरकार के लिए डिज़ाइन किया गया एक व्यापक सर्वेक्षण बुद्धिमत्ता मंच।",
      loginAdmin: "प्रशासक पोर्टल",
      loginAgent: "फील्ड एजेंट पोर्टल",
      viewDemo: "डेमो देखें",
      problemsTitle: "वर्तमान चुनौतियां",
      solutionsTitle: "हमारे समाधान",
      problems: [
        "मैनुअल डेटा संग्रह में देरी",
        "ग्रामीण क्षेत्रों में भाषा की बाधाएं",
        "डेटा गुणवत्ता में असंगति",
        "सीमित फील्ड एजेंट समन्वय",
        "समय लेने वाली सत्यापन प्रक्रियाएं",
        "खंडित प्रतिक्रिया चैनल"
      ],
      solutions: [
        "AI-संचालित सर्वेक्षण स्वचालन",
        "बहु-भाषा समर्थन (15+ भाषाएं)",
        "रियल-टाइम डेटा सत्यापन",
        "बुद्धिमान एजेंट प्रबंधन",
        "स्वचालित गुणवत्ता आश्वासन",
        "एकीकृत प्रतिक्रिया मंच"
      ],
      statsTitle: "प्लेटफॉर्म प्रभाव",
      featuresTitle: "मुख्य क्षमताएं",
      testimonialsTitle: "सरकारी अधिकारियों द्वारा भरोसेमंद",
      achievementsTitle: "मान्यता और प्रमाणन"
    }
  };

  const stats = [
    { label: 'Active Surveys', value: '2,847', icon: BarChart3 },
    { label: 'Districts Covered', value: '156', icon: MapPin },
    { label: 'Response Time', value: '18 hrs', icon: Clock },
    { label: 'Data Accuracy', value: '94.7%', icon: Target },
    { label: 'Languages', value: '15+', icon: Globe },
    { label: 'Field Agents', value: '3,200+', icon: Users }
  ];

  const features = [
    {
      title: 'AI Survey Designer',
      description: 'Create comprehensive surveys using natural language with intelligent question generation and validation.',
      icon: Brain,
      color: 'text-navy-600'
    },
    {
      title: 'Agent Management',
      description: 'Efficiently deploy and track field agents across districts with real-time coordination.',
      icon: Users,
      color: 'text-emerald-600'
    },
    {
      title: 'Multi-Channel Collection',
      description: 'Collect responses via WhatsApp, SMS, IVR, and mobile apps for maximum reach.',
      icon: MessageSquare,
      color: 'text-navy-600'
    },
    {
      title: 'Real-Time Analytics',
      description: 'Monitor survey progress with live dashboards and comprehensive performance metrics.',
      icon: BarChart3,
      color: 'text-emerald-600'
    },
    {
      title: 'Data Validation',
      description: 'AI-powered validation ensures data accuracy with automated anomaly detection.',
      icon: Shield,
      color: 'text-navy-600'
    },
    {
      title: 'Smart OCR Processing',
      description: 'Convert handwritten forms to digital data with 95%+ accuracy using advanced OCR.',
      icon: Eye,
      color: 'text-emerald-600'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Joint Secretary, MoSPI',
      content: 'SATARK.AI has revolutionized our survey operations. The AI-powered insights have improved our data quality by 40% while reducing collection time significantly.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Field Coordinator',
      content: 'The multilingual interface and offline capabilities have transformed our field operations. We can now reach remote villages more effectively than ever before.',
      rating: 5,
      avatar: '👩‍🌾'
    },
    {
      name: 'Amit Patel',
      role: 'Data Analytics Head',
      content: 'The automated validation and real-time analytics save us countless hours. The export capabilities are exactly what we needed for policy analysis.',
      rating: 5,
      avatar: '👨‍💻'
    }
  ];

  const achievements = [
    { title: 'MoSPI Innovation Award 2024', icon: Award },
    { title: 'Digital India Excellence', icon: Star },
    { title: 'Best Gov-Tech Solution', icon: Trophy },
    { title: 'AI Innovation Recognition', icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-corporate-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/Satark AI.png" 
                alt="SATARK.AI Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-semibold text-corporate-900">SATARK.AI</h1>
                <p className="text-sm text-corporate-600">Survey Intelligence Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 text-sm font-medium text-corporate-700 hover:text-corporate-900 transition-colors"
              >
                {language === 'en' ? 'हिंदी' : 'English'}
              </button>
              <button
                onClick={() => window.location.href = '/login'}
                className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-navy-700 transition-colors font-medium"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-corporate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-navy-50 text-navy-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              <span>Powered by Advanced AI Technology</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-corporate-900 mb-6 leading-tight">
              {content[language].title}
            </h1>
            
            {/* Banner Image */}
            <div className="mb-12">
              <img 
                src="/image.png" 
                alt="Government Survey Platform" 
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-large"
              />
            </div>
            
            <p className="text-xl text-corporate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {content[language].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.location.href = '/login?role=admin'}
                className="bg-accent text-white px-8 py-4 rounded-xl hover:bg-navy-700 transition-all duration-300 font-semibold flex items-center space-x-2 shadow-medium hover:shadow-large"
              >
                <Shield className="w-5 h-5" />
                <span>{content[language].loginAdmin}</span>
              </button>
              <button
                onClick={() => window.location.href = '/login?role=agent'}
                className="bg-success text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all duration-300 font-semibold flex items-center space-x-2 shadow-medium hover:shadow-large"
              >
                <Users className="w-5 h-5" />
                <span>{content[language].loginAgent}</span>
              </button>
              <button className="bg-white text-corporate-700 px-8 py-4 rounded-xl hover:bg-corporate-50 transition-all duration-300 border border-corporate-200 font-semibold flex items-center space-x-2 shadow-soft hover:shadow-medium">
                <Eye className="w-5 h-5" />
                <span>{content[language].viewDemo}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-corporate-900 mb-4">
              {content[language].statsTitle}
            </h2>
            <p className="text-lg text-corporate-600 max-w-2xl mx-auto">
              Real-time metrics showcasing the impact of SATARK.AI across India
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-corporate-50 p-6 rounded-2xl mb-4 group-hover:bg-corporate-100 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-corporate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-corporate-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-20 bg-corporate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-2xl shadow-card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-error/10 rounded-xl">
                  <Clock className="w-6 h-6 text-error" />
                </div>
                <h3 className="text-2xl font-bold text-corporate-900">
                  {content[language].problemsTitle}
                </h3>
              </div>
              <ul className="space-y-4">
                {content[language].problems.map((problem, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-error rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-corporate-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-success/10 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-corporate-900">
                  {content[language].solutionsTitle}
                </h3>
              </div>
              <ul className="space-y-4">
                {content[language].solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-corporate-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-corporate-900 mb-4">
              {content[language].featuresTitle}
            </h2>
            <p className="text-lg text-corporate-600 max-w-3xl mx-auto">
              Comprehensive AI-powered tools designed for government survey operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-medium transition-all duration-300 h-full border border-corporate-100">
                  <div className="bg-corporate-50 p-4 rounded-xl w-fit mb-6 group-hover:bg-corporate-100 transition-colors duration-300">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-corporate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-corporate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-corporate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-corporate-900 mb-4">
              {content[language].testimonialsTitle}
            </h2>
            <p className="text-lg text-corporate-600 max-w-2xl mx-auto">
              Hear from government officials transforming survey operations with SATARK.AI
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-card hover:shadow-medium transition-all duration-300">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-warning fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-corporate-300 mb-4" />
                <p className="text-corporate-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-corporate-900">{testimonial.name}</div>
                    <div className="text-sm text-corporate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-navy-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Survey Operations?
          </h2>
          <p className="text-navy-100 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of government officials using SATARK.AI to revolutionize data collection across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/login?role=admin'}
              className="bg-white text-accent px-8 py-4 rounded-xl hover:bg-corporate-50 transition-all duration-300 font-semibold flex items-center space-x-2 justify-center shadow-medium hover:shadow-large"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-accent transition-all duration-300 font-semibold">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-corporate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/Satark AI.png" alt="SATARK.AI" className="h-8 w-auto" />
                <div>
                  <h3 className="text-lg font-semibold">SATARK.AI</h3>
                  <p className="text-corporate-400 text-sm">Survey Intelligence</p>
                </div>
              </div>
              <p className="text-corporate-400 text-sm leading-relaxed">
                India's premier AI-powered survey intelligence system, transforming government data collection.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-corporate-400">
                <li><a href="#" className="hover:text-white transition-colors">Survey Designer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agent Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Export</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-corporate-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-corporate-400">
                <p>Ministry of Statistics & Programme Implementation</p>
                <p>Government of India</p>
                <p>Email: support@satark.ai</p>
                <p>Phone: +91-9136347884</p>
              </div>
            </div>
          </div>
          <div className="border-t border-corporate-800 mt-12 pt-8 text-center text-sm text-corporate-400">
            <p>© 2025 SATARK.AI - Built by Team Yukt for MoSPI Statathon 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;