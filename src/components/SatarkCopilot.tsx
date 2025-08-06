import React, { useState } from 'react';
import { 
  Bot, 
  X, 
  ChevronRight, 
  Send, 
  Lightbulb,
  AlertTriangle,
  TrendingUp,
  MessageCircle
} from 'lucide-react';

interface CopilotProps {
  isOpen: boolean;
  onClose: () => void;
}

const SatarkCopilot: React.FC<CopilotProps> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m SATARK Copilot, your AI assistant. I can help you analyze survey data, suggest improvements, and flag anomalies. How can I assist you today?',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const quickActions = [
    { icon: TrendingUp, label: 'Analyze response patterns', color: 'text-blue-600' },
    { icon: AlertTriangle, label: 'Check for data anomalies', color: 'text-red-600' },
    { icon: Lightbulb, label: 'Suggest survey improvements', color: 'text-yellow-600' },
    { icon: MessageCircle, label: 'Review response quality', color: 'text-green-600' },
  ];

  const insights = [
    {
      type: 'warning',
      title: 'Low Response Rate Alert',
      description: 'Rajasthan region showing 23% below average response rate',
      action: 'View Details'
    },
    {
      type: 'success',
      title: 'High Quality Responses',
      description: 'Karnataka region maintains 94% data quality score',
      action: 'Learn More'
    },
    {
      type: 'info',
      title: 'Optimization Suggestion',
      description: 'Consider reducing survey length by 2-3 questions to improve completion',
      action: 'Apply'
    }
  ];

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      type: 'user',
      content: message,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: 'Based on your query, I\'ve analyzed the current data trends. The response patterns indicate a strong correlation between survey length and completion rates. I recommend implementing adaptive questioning to optimize user experience.',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickAction = (action: string) => {
    const botResponse = {
      type: 'bot',
      content: `Analyzing ${action.toLowerCase()}... I've identified several key insights that require your attention. Please review the highlighted sections in your dashboard.`,
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, botResponse]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 shadow-2xl z-50 flex flex-col transform transition-transform duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">SATARK Copilot</h3>
            <p className="text-xs text-blue-100">AI Survey Intelligence Assistant</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
        >
          <X className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <p className="text-sm font-medium text-gray-900 dark:text-white mb-3">Quick Actions</p>
        <div className="grid grid-cols-2 gap-2">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                onClick={() => handleQuickAction(action.label)}
                className="flex items-center space-x-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-left"
              >
                <Icon className={`h-4 w-4 ${action.color}`} />
                <span className="text-xs font-medium text-gray-900 dark:text-white">{action.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Insights */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <p className="text-sm font-medium text-gray-900 dark:text-white mb-3">AI Insights</p>
        <div className="space-y-3">
          {insights.map((insight, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">{insight.title}</h4>
                <div className={`w-2 h-2 rounded-full ${
                  insight.type === 'warning' ? 'bg-yellow-500' :
                  insight.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                }`} />
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{insight.description}</p>
              <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                {insight.action}
                <ChevronRight className="h-3 w-3 ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl ${
                msg.type === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
              }`}>
                <p className="text-sm">{msg.content}</p>
                <p className={`text-xs mt-1 ${
                  msg.type === 'user' ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask SATARK Copilot..."
            className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <button
            onClick={handleSendMessage}
            className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SatarkCopilot;