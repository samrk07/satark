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
  Mic,
  FileText,
  Eye,
  Download,
  Settings,
  Lock,
  Wifi,
  Brain,
  Target,
  Lightbulb,
  Heart,
  ThumbsUp,
  Quote,
  Trophy,
  AlertTriangle
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
      title: "Turning People’s Voice into Trusted Data",
      subtitle: "Reimagining India’s Surveys - Secure, Scalable, and Ready for Tomorrow.",
      loginAdmin: "🔐 Login as Admin",
      loginAgent: "🧑‍🌾 Login as Field Agent",
      viewDemo: "📘 View Demo / Presentation",
      problemsTitle: "Traditional Survey Challenges",
      solutionsTitle: "SATARK.AI Solutions",
      problems: [
        "Paper-based surveys cause delays",
        "Language barriers limit participation",
        "Manual data entry creates errors",
        "Limited reach in rural areas",
        "Time-consuming validation process",
        "Inconsistent data quality"
      ],
      solutions: [
        "AI-powered digital surveys",
        "15+ Indian language support",
        "Automated OCR and validation",
        "WhatsApp, SMS, IVR integration",
        "Real-time quality checks",
        "Federated data storage"
      ],
      statsTitle: "Platform Impact",
      featuresTitle: "Comprehensive Survey Intelligence",
      testimonialsTitle: "What Our Users Say",
      achievementsTitle: "Recognition & Achievements"
    },
    hi: {
      title: "SATARK.AI – भारत की पहली AI-सक्षम सर्वे प्रणाली",
      subtitle: "भारतीय सरकारी सर्वेक्षणों को तेज़, निष्पक्ष और भविष्य के लिए तैयार बनाना।",
      loginAdmin: "🔐 प्रशासक के रूप में लॉगिन",
      loginAgent: "🧑‍🌾 फील्ड एजेंट के रूप में लॉगिन",
      viewDemo: "📘 डेमो / प्रस्तुति देखें",
      problemsTitle: "पारंपरिक सर्वेक्षण चुनौतियां",
      solutionsTitle: "SATARK.AI समाधान",
      problems: [
        "कागज़ी सर्वेक्षण देरी का कारण",
        "भाषा की बाधाएं भागीदारी सीमित करती हैं",
        "मैन्युअल डेटा एंट्री त्रुटियां बनाती है",
        "ग्रामीण क्षेत्रों में सीमित पहुंच",
        "समय लेने वाली सत्यापन प्रक्रिया",
        "असंगत डेटा गुणवत्ता"
      ],
      solutions: [
        "AI-संचालित डिजिटल सर्वेक्षण",
        "15+ भारतीय भाषा समर्थन",
        "स्वचालित OCR और सत्यापन",
        "WhatsApp, SMS, IVR एकीकरण",
        "रियल-टाइम गुणवत्ता जांच",
        "संघीय डेटा भंडारण"
      ],
      statsTitle: "प्लेटफॉर्म प्रभाव",
      featuresTitle: "व्यापक सर्वेक्षण बुद्धिमत्ता",
      testimonialsTitle: "हमारे उपयोगकर्ता क्या कहते हैं",
      achievementsTitle: "मान्यता और उपलब्धियां"
    }
  };

  const stats = [
    { label: 'Surveys Created', value: '2,847', icon: FileText },
    { label: 'Districts Onboarded', value: '156', icon: MapPin },
    { label: 'Avg Turnaround', value: '18 hrs', icon: Clock },
    { label: 'Data Accuracy', value: '94.7%', icon: Target },
    { label: 'Languages Supported', value: '15+', icon: Globe },
    { label: 'Active Agents', value: '3,200+', icon: Users }
  ];

  const features = [
    {
      title: 'AI Survey Designer',
      description: 'Create comprehensive surveys using natural language prompts with intelligent question generation.',
      icon: Brain,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Agent Management',
      description: 'Efficiently assign and track field agents across districts with real-time location mapping.',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Multi-Channel Response',
      description: 'Collect responses via WhatsApp, SMS, IVR, and mobile apps for maximum reach.',
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Real-Time Analytics',
      description: 'Monitor survey progress with live dashboards, heatmaps, and performance metrics.',
      icon: BarChart3,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Data Quality Validation',
      description: 'AI-powered validation ensures data accuracy with anomaly detection and triangulation.',
      icon: Shield,
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Smart OCR Processing',
      description: 'Convert handwritten forms to digital data with 95%+ accuracy using advanced OCR.',
      icon: Eye,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Multilingual Support',
      description: 'Support for 15+ Indian languages with automatic translation and voice recognition.',
      icon: Globe,
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Compliance & Security',
      description: 'DPDP compliant with end-to-end encryption and government-grade security protocols.',
      icon: Lock,
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Joint Secretary, MoSPI',
      content: 'SATARK.AI has revolutionized our survey operations. The AI-powered insights and real-time validation have improved our data quality by 40%.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Field Agent, UP',
      content: 'The multilingual interface and offline capabilities have made my field work so much easier. I can now cover remote villages efficiently.',
      rating: 5,
      avatar: '👩‍🌾'
    },
    {
      name: 'Amit Patel',
      role: 'Data Analyst, Gujarat',
      content: 'The automated validation and triangulation features save us hours of manual work. The export options are exactly what we needed.',
      rating: 5,
      avatar: '👨‍💻'
    }
  ];

  const achievements = [
    { title: 'MoSPI Innovation Award 2024', icon: Award },
    { title: 'Digital India Excellence', icon: Star },
    { title: 'Best Gov-Tech Solution', icon: Trophy },
    { title: 'AI Innovation Recognition', icon: Lightbulb }
  ];

  const techLogos = [
    { name: 'LangChain', color: 'text-blue-600' },
    { name: 'Tesseract OCR', color: 'text-green-600' },
    { name: 'OpenAI Whisper', color: 'text-purple-600' },
    { name: 'DPDP Compliant', color: 'text-orange-600' },
    { name: 'NDSAP Certified', color: 'text-red-600' },
    { name: 'GSBPM Standard', color: 'text-indigo-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
     <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
  <div className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1"> {/* Reduced gap from 4 to 2 */}
        <img 
          src="/Satark AI.png" 
          alt="SATARK.AI Logo" 
          className="h-13 w-auto" // slightly reduced height for better alignment
        />
        <div className="-mt-1"> {/* Slightly shifts text up to align better with image */}
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">SATARK.AI</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Survey Intelligence System</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors font-medium"
              >
                {language === 'en' ? 'हिंदी' : 'English'}
              </button>
              <button
                onClick={() => window.location.href = '/login'}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Login
              </button>
              <div className="h-8 w-1 bg-gradient-to-b from-orange-500 via-white to-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-orange-600/10">
          <img 
            src="/image1.png" 
            alt="Government Survey Banner" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Powered by Advanced AI Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {content[language].title}
            </h1>
            
           {/* Banner Image */}
<div className="mb-8 px-4 sm:px-6 lg:px-8">
  <img 
    src="/image.png" 
    alt="Government Survey Banner" 
    className="w-full max-w-6xl mx-auto rounded-2xl shadow-xl border border-white/20 transition-all duration-500 object-cover"
  />
</div>
 <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {content[language].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.location.href = '/login?role=admin'}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold flex items-center gap-2"
              >
                <Shield className="w-5 h-5" />
                {content[language].loginAdmin}
              </button>
              <button
                onClick={() => window.location.href = '/login?role=agent'}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                {content[language].loginAgent}
              </button>
              <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 font-semibold flex items-center gap-2">
                <Eye className="w-5 h-5" />
                {content[language].viewDemo}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {content[language].statsTitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real-time metrics showcasing the transformative impact of SATARK.AI across India
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl mb-4 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {content[language].problemsTitle}
                </h3>
              </div>
              <ul className="space-y-4">
                {content[language].problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {content[language].solutionsTitle}
                </h3>
              </div>
              <ul className="space-y-4">
                {content[language].solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {content[language].featuresTitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive suite of AI-powered tools designed specifically for government survey operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
                  <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {content[language].testimonialsTitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hear from government officials and field agents who are transforming survey operations with SATARK.AI
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech & Compliance */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Technology & Compliance Standards
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Built with cutting-edge technology and adhering to government compliance standards
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {techLogos.map((tech, index) => (
              <div key={index} className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${tech.color.replace('text-', 'bg-')}`}></div>
                <span className={`font-medium ${tech.color}`}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Survey Operations?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of government officials and field agents who are already using SATARK.AI to revolutionize data collection across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/login?role=admin'}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold flex items-center gap-2 justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="Satark AI.png" alt="SATARK.AI" className="h-10 w-auto" />
                <div>
                  <h3 className="text-xl font-bold">SATARK.AI</h3>
                  <p className="text-gray-400 text-sm">Survey Intelligence</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                India's first AI-powered survey intelligence system, transforming government data collection.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Survey Designer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agent Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Export</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Ministry of Statistics & Programme Implementation</p>
                <p>Government of India</p>
                <p>Email: support@satark.ai</p>
                <p>Phone: +91-9136347884</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 SATARK.AI - Built by Team Yukt for MoSPI Statathon 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
