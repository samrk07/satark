import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  X, 
  Send, 
  Bot, 
  User, 
  Lightbulb, 
  TrendingUp, 
  AlertTriangle, 
  FileText,
  BarChart3,
  Users,
  Zap,
  Sparkles
} from 'lucide-react';

interface SatarkCopilotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

const SatarkCopilot: React.FC<SatarkCopilotProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: language === 'en' 
        ? 'Hello! I\'m SATARK Copilot, your AI assistant for survey intelligence. I can help you with survey design, data analysis, agent management, and insights. How can I assist you today?'
        : 'नमस्ते! मैं सतर्क कोपायलट हूं, सर्वेक्षण बुद्धिमत्ता के लिए आपका AI सहायक। मैं सर्वेक्षण डिज़ाइन, डेटा विश्लेषण, एजेंट प्रबंधन और अंतर्दृष्टि में आपकी सहायता कर सकता हूं। आज मैं आपकी कैसे सहायता कर सकता हूं?',
      timestamp: new Date(),
      suggestions: [
        language === 'en' ? 'Create a healthcare survey' : 'स्वास्थ्य सर्वेक्षण बनाएं',
        language === 'en' ? 'Analyze response patterns' : 'प्रतिक्रिया पैटर्न का विश्लेषण करें',
        language === 'en' ? 'Optimize agent deployment' : 'एजेंट तैनाती को अनुकूलित करें',
        language === 'en' ? 'Generate insights report' : 'अंतर्दृष्टि रिपोर्ट जेनरेट करें'
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    {
      icon: FileText,
      label: language === 'en' ? 'Survey Help' : 'सर्वे सहायता',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      icon: BarChart3,
      label: language === 'en' ? 'Analytics' : 'विश्लेषण',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    },
    {
      icon: Users,
      label: language === 'en' ? 'Agent Insights' : 'एजेंट अंतर्दृष्टि',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    },
    {
      icon: TrendingUp,
      label: language === 'en' ? 'Trends' : 'रुझान',
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
    }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        {
          content: language === 'en' 
            ? 'I can help you create a comprehensive survey. Based on your requirements, I suggest including demographic questions, service satisfaction ratings, and open-ended feedback sections. Would you like me to generate a draft survey structure?'
            : 'मैं आपको एक व्यापक सर्वेक्षण बनाने में मदद कर सकता हूं। आपकी आवश्यकताओं के आधार पर, मैं जनसांख्यिकीय प्रश्न, सेवा संतुष्टि रेटिंग और खुले अंत वाले फीडबैक अनुभाग शामिल करने का सुझाव देता हूं। क्या आप चाहेंगे कि मैं एक मसौदा सर्वेक्षण संरचना तैयार करूं?',
          suggestions: [
            language === 'en' ? 'Yes, generate survey structure' : 'हां, सर्वेक्षण संरचना जेनरेट करें',
            language === 'en' ? 'Add multilingual support' : 'बहुभाषी समर्थन जोड़ें',
            language === 'en' ? 'Include validation rules' : 'सत्यापन नियम शामिल करें'
          ]
        },
        {
          content: language === 'en'
            ? 'I\'ve analyzed your current survey data and found some interesting patterns. Response rates are highest between 10 AM - 2 PM, and rural areas show 23% higher engagement with voice-based surveys. Would you like detailed insights on improving response quality?'
            : 'मैंने आपके वर्तमान सर्वेक्षण डेटा का विश्लेषण किया है और कुछ दिलचस्प पैटर्न पाए हैं। सुबह 10 बजे से दोपहर 2 बजे के बीच प्रतिक्रिया दर सबसे अधिक है, और ग्रामीण क्षेत्र आवाज-आधारित सर्वेक्षणों के साथ 23% अधिक जुड़ाव दिखाते हैं। क्या आप प्रतिक्रिया गुणवत्ता में सुधार पर विस्तृत अंतर्दृष्टि चाहते हैं?',
          suggestions: [
            language === 'en' ? 'Show detailed analytics' : 'विस्तृत विश्लेषण दिखाएं',
            language === 'en' ? 'Optimize timing strategy' : 'समय रणनीति को अनुकूलित करें',
            language === 'en' ? 'Export insights report' : 'अंतर्दृष्टि रिपोर्ट निर्यात करें'
          ]
        }
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: randomResponse.content,
        timestamp: new Date(),
        suggestions: randomResponse.suggestions
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  const handleQuickAction = (action: any) => {
    const actionMessages = {
      'Survey Help': language === 'en' ? 'Help me create an effective survey' : 'मुझे एक प्रभावी सर्वेक्षण बनाने में मदद करें',
      'Analytics': language === 'en' ? 'Show me analytics insights' : 'मुझे विश्लेषण अंतर्दृष्टि दिखाएं',
      'Agent Insights': language === 'en' ? 'Provide agent performance insights' : 'एजेंट प्रदर्शन अंतर्दृष्टि प्रदान करें',
      'Trends': language === 'en' ? 'Show current survey trends' : 'वर्तमान सर्वेक्षण रुझान दिखाएं'
    };
    
    setInputMessage(actionMessages[action.label as keyof typeof actionMessages] || action.label);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-end">
      <div className="w-full max-w-md h-full bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">SATARK Copilot</h2>
                <p className="text-sm opacity-90">
                  {language === 'en' ? 'AI Survey Assistant' : 'AI सर्वेक्षण सहायक'}
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

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action)}
                  className="flex items-center space-x-2 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors text-sm"
                >
                  <Icon className="h-4 w-4" />
                  <span className="truncate">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                <div className={`flex items-start space-x-3 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  }`}>
                    {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <p className={`text-xs mt-2 opacity-70 ${
                      message.type === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString('en-IN', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>

                {/* Suggestions */}
                {message.suggestions && message.type === 'assistant' && (
                  <div className="mt-3 ml-11 space-y-2">
                    {message.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="block w-full text-left px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-sm border border-blue-200 dark:border-blue-700"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-end space-x-3">
            <div className="flex-1">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder={language === 'en' ? 'Ask me anything about surveys, data, or insights...' : 'सर्वेक्षण, डेटा या अंतर्दृष्टि के बारे में कुछ भी पूछें...'}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                rows={2}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex items-center justify-center mt-3 text-xs text-gray-500 dark:text-gray-400">
            <Sparkles className="h-3 w-3 mr-1" />
            <span>
              {language === 'en' 
                ? 'Powered by advanced AI for intelligent survey assistance'
                : 'बुद्धिमान सर्वेक्षण सहायता के लिए उन्नत AI द्वारा संचालित'
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatarkCopilot;