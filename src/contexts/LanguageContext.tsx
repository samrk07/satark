import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'en' | 'hi';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'header.title': 'SATARK.AI',
    'header.subtitle': 'Ministry of Statistics & Programme Implementation',
    'header.login': 'Login',
    'header.demo': 'Demo',
    
    // Hero Section
    'hero.title': 'SATARK.AI – India\'s First AI-Powered Survey Intelligence System',
    'hero.subtitle': 'Making Indian government surveys faster, fairer, and future-ready.',
    'hero.admin_login': '🔐 Login as Admin',
    'hero.agent_login': '🧑‍🌾 Login as Field Agent',
    'hero.demo': '📘 View Demo',
    
    // Problem Solution
    'problem.title': 'Challenges in Traditional Surveys',
    'problem.delay': 'Long processing delays',
    'problem.paper': 'Paper-based inefficiencies',
    'problem.errors': 'Manual data entry errors',
    'problem.literacy': 'Language & literacy barriers',
    
    'solution.title': 'SATARK.AI Solutions',
    'solution.ai': 'AI-powered survey generation',
    'solution.whatsapp': 'WhatsApp & voice input',
    'solution.ocr': 'Smart document scanning',
    'solution.storage': 'Federated secure storage',
    
    // Stats
    'stats.surveys': 'Surveys Created',
    'stats.districts': 'Districts Onboarded',
    'stats.turnaround': 'Avg Turnaround',
    'stats.hours': 'hours',
    
    // Footer
    'footer.built': 'Built by Team Yukt for MoSPI Statathon 2025',
    'footer.contact': 'Contact: team.yukt@gov.in',
    
    // Login
    'login.title': 'Login to SATARK.AI',
    'login.role': 'Select Role',
    'login.admin': 'Government Official / Admin',
    'login.agent': 'Field Agent',
    'login.email': 'Email Address',
    'login.password': 'Password',
    'login.submit': 'Login',
    'login.register': 'Register as Field Agent',
    
    // Dashboard
    'dashboard.welcome': 'Welcome back',
    'dashboard.overview': 'System Overview',
  },
  hi: {
    // Header
    'header.title': 'सतर्क.AI',
    'header.subtitle': 'सांख्यिकी और कार्यक्रम कार्यान्वयन मंत्रालय',
    'header.login': 'लॉगिन',
    'header.demo': 'डेमो',
    
    // Hero Section
    'hero.title': 'सतर्क.AI – भारत की पहली AI-सक्षम सर्वे प्रणाली',
    'hero.subtitle': 'भारतीय सरकारी सर्वेक्षणों को तेज़, निष्पक्ष और भविष्य के लिए तैयार बनाना।',
    'hero.admin_login': '🔐 एडमिन लॉगिन',
    'hero.agent_login': '🧑‍🌾 फील्ड एजेंट लॉगिन',
    'hero.demo': '📘 डेमो देखें',
    
    // Problem Solution
    'problem.title': 'पारंपरिक सर्वेक्षणों में चुनौतियां',
    'problem.delay': 'लंबी प्रसंस्करण देरी',
    'problem.paper': 'कागज़-आधारित अक्षमताएं',
    'problem.errors': 'मैनुअल डेटा एंट्री त्रुटियां',
    'problem.literacy': 'भाषा और साक्षरता बाधाएं',
    
    'solution.title': 'सतर्क.AI समाधान',
    'solution.ai': 'AI-संचालित सर्वेक्षण निर्माण',
    'solution.whatsapp': 'व्हाट्सऐप और आवाज़ इनपुट',
    'solution.ocr': 'स्मार्ट दस्तावेज़ स्कैनिंग',
    'solution.storage': 'संघीय सुरक्षित भंडारण',
    
    // Stats
    'stats.surveys': 'सर्वेक्षण बनाए गए',
    'stats.districts': 'जिले शामिल',
    'stats.turnaround': 'औसत समय',
    'stats.hours': 'घंटे',
    
    // Footer
    'footer.built': 'टीम युक्त द्वारा MoSPI स्टेटाथॉन 2025 के लिए निर्मित',
    'footer.contact': 'संपर्क: team.yukt@gov.in',
    
    // Login
    'login.title': 'सतर्क.AI में लॉगिन करें',
    'login.role': 'भूमिका चुनें',
    'login.admin': 'सरकारी अधिकारी / एडमिन',
    'login.agent': 'फील्ड एजेंट',
    'login.email': 'ईमेल पता',
    'login.password': 'पासवर्ड',
    'login.submit': 'लॉगिन',
    'login.register': 'फील्ड एजेंट के रूप में पंजीकरण',
    
    // Dashboard
    'dashboard.welcome': 'वापसी पर स्वागत',
    'dashboard.overview': 'सिस्टम अवलोकन',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};