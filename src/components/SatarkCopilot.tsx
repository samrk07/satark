import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  X, 
  Bot, 
  Send, 
  Lightbulb, 
  AlertTriangle, 
  TrendingUp,
  FileText,
  Users,
  BarChart3,
  Zap,
  Brain,
  MessageSquare
} from 'lucide-react';

interface SatarkCopilotProps {
  isOpen: boolean;
  onClose: () => void;
}

const SatarkCopilot: React.FC<SatarkCopilotProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: language === 'en' 
        ? 'Hello! I\'m SATARK Copilot, your AI assistant. I can help you analyze survey data, suggest improvements, and flag anomalies. How can I assist you today?'
        : 'नमस्ते! मैं SATARK कोपायलट हूं, आपका AI सहायक। मैं सर्वे डेटा का विश्लेषण करने, सुधार सुझाने और विसंगतियों को चिह्नित करने में आपकी मदद कर सकता हूं। आज मैं आपकी कैसे सहायता कर सकता हूं?'
    }
  ]);

  const quickActions = [
    {
      icon: TrendingUp,
      label: language === 'en' ? 'Analyze Trends' : 'रुझान विश्लेषण',
      action: 'analyze_trends'
    },
    {
      icon: AlertTriangle,
      label: language === 'en' ? 'Flag Anomalies' : 'विसंगतियां चिह्नित करें',
      action: 'flag_anomalies'
    },
    {
      icon: Lightbulb,
      label: language === 'en' ? 'Survey Suggestions' : 'सर्वे सुझाव',
      action: 'survey_suggestions'
    },
    {
      icon: BarChart3,
      label: language === 'en' ? 'Data Insights' : 'डेटा अंतर्दृष्टि',
      action: 'data_insights'
    }
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessages = [
      ...messages,
      { type: 'user', content: message },
      { 
        type: 'bot', 
        content: language === 'en' 
          ? 'I\'m analyzing your request. Based on the current survey data, I can see some interesting patterns. Would you like me to generate a detailed report?'
          : 'मैं आपके अनुरोध का विश्लेषण कर रहा हूं। वर्तमान सर्वे डेटा के आधार पर, मैं कुछ दिलचस्प पैटर्न देख सकता हूं। क्या आप चाहते हैं कि मैं एक विस्तृत रिपोर्ट तैयार करूं?'
      }
    ];
    
    setMessages(newMessages);
    setMessage('');
  };

  const handleQuickAction = (action: string) => {
    let response = '';
    switch(action) {
      case 'analyze_trends':
        response = language === 'en' 
          ? '📊 Trend Analysis: I\'ve detected a 23% increase in rural survey participation this month. The highest engagement is in Gujarat and Maharashtra. Would you like detailed state-wise breakdown?'
          : '📊 रुझान विश्लेषण: मैंने इस महीने ग्रामीण सर्वे भागीदारी में 23% की वृद्धि का पता लगाया है। गुजरात और महाराष्ट्र में सबसे अधिक जुड़ाव है। क्या आप राज्यवार विस्तृत विवरण चाहते हैं?';
        break;
      case 'flag_anomalies':
        response = language === 'en' 
          ? '🚨 Anomaly Alert: Found 12 responses with inconsistent age-income patterns in Survey RHS-2024-001. Recommend manual verification for entries from agents AG-045 and AG-078.'
          : '🚨 विसंगति अलर्ट: सर्वे RHS-2024-001 में असंगत आयु-आय पैटर्न के साथ 12 प्रतिक्रियाएं मिलीं। एजेंट AG-045 और AG-078 की प्रविष्टियों के लिए मैनुअल सत्यापन की सिफारिश।';
        break;
      case 'survey_suggestions':
        response = language === 'en' 
          ? '💡 Survey Optimization: Consider adding skip logic to Q7-Q9 to reduce survey fatigue. Also, the current Hindi translation for "household income" may need localization for rural areas.'
          : '💡 सर्वे अनुकूलन: सर्वे थकान को कम करने के लिए Q7-Q9 में स्किप लॉजिक जोड़ने पर विचार करें। साथ ही, "घरेलू आय" के लिए वर्तमान हिंदी अनुवाद को ग्रामीण क्षेत्रों के लिए स्थानीयकरण की आवश्यकता हो सकती है।';
        break;
      case 'data_insights':
        response = language === 'en' 
          ? '📈 Key Insights: WhatsApp responses show 34% higher completion rates than SMS. Voice responses have 89% accuracy vs 76% for text. Recommend prioritizing voice collection in low-literacy areas.'
          : '📈 मुख्य अंतर्दृष्टि: व्हाट्सऐप प्रतिक्रियाएं SMS की तुलना में 34% अधिक पूर्णता दर दिखाती हैं। आवाज प्रतिक्रियाओं में टेक्स्ट के लिए 76% की तुलना में 89% सटीकता है। कम साक्षरता वाले क्षेत्रों में आवाज संग्रह को प्राथमिकता देने की सिफारिश।';
        break;
    }
    
    setMessages(prev => [...prev, { type: 'bot', content: response }]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-end">
      <div className="w-full max-w-md h-full bg-white dark:bg-gray-800 shadow-2xl transform transition-transform duration-300 ease-out">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">SATARK Copilot</h3>
                <p className="text-sm opacity-90">
                  {language === 'en' ? 'AI Survey Assistant' : 'AI सर्वे सहायक'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-xl transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            {language === 'en' ? 'Quick Actions' : 'त्वरित कार्य'}
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.action)}
                  className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-left"
                >
                  <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs font-medium text-gray-900 dark:text-white">
                    {action.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 h-96">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs p-3 rounded-2xl ${
                  msg.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={language === 'en' ? 'Ask me anything...' : 'मुझसे कुछ भी पूछें...'}
              className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatarkCopilot;