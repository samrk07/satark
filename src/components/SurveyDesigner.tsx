import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Wand2, 
  Plus, 
  Eye, 
  Save, 
  Send, 
  Globe, 
  Type, 
  CheckSquare, 
  Circle, 
  ToggleLeft,
  Calendar,
  Hash,
  FileText,
  Trash2,
  Copy,
  Settings,
  Languages,
  Zap,
  Brain,
  Sparkles
} from 'lucide-react';

const SurveyDesigner: React.FC = () => {
  const { language } = useLanguage();
  const [aiPrompt, setAiPrompt] = useState('');
  const [surveyTitle, setSurveyTitle] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState(['en', 'hi']);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      type: 'text',
      question: 'What is your full name?',
      questionHi: 'आपका पूरा नाम क्या है?',
      required: true,
      options: []
    },
    {
      id: 2,
      type: 'multiple-choice',
      question: 'What is your age group?',
      questionHi: 'आपका आयु समूह क्या है?',
      required: true,
      options: ['18-25', '26-35', '36-45', '46-55', '55+']
    }
  ]);

  const questionTypes = [
    { type: 'text', icon: Type, label: 'Text Input' },
    { type: 'multiple-choice', icon: CheckSquare, label: 'Multiple Choice' },
    { type: 'single-choice', icon: Circle, label: 'Single Choice' },
    { type: 'boolean', icon: ToggleLeft, label: 'Yes/No' },
    { type: 'date', icon: Calendar, label: 'Date' },
    { type: 'number', icon: Hash, label: 'Number' },
    { type: 'textarea', icon: FileText, label: 'Long Text' }
  ];

  const supportedLanguages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
    { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
    { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' }
  ];

  const handleAIGenerate = async () => {
    if (!aiPrompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const generatedQuestions = [
        {
          id: Date.now() + 1,
          type: 'text',
          question: 'What is your household monthly income?',
          questionHi: 'आपकी घरेलू मासिक आय क्या है?',
          required: true,
          options: []
        },
        {
          id: Date.now() + 2,
          type: 'multiple-choice',
          question: 'Which government schemes are you aware of?',
          questionHi: 'आप किन सरकारी योजनाओं के बारे में जानते हैं?',
          required: false,
          options: ['PM-KISAN', 'Ayushman Bharat', 'MGNREGA', 'Jan Dhan Yojana', 'None']
        },
        {
          id: Date.now() + 3,
          type: 'single-choice',
          question: 'How satisfied are you with local healthcare services?',
          questionHi: 'स्थानीय स्वास्थ्य सेवाओं से आप कितने संतुष्ट हैं?',
          required: true,
          options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied']
        }
      ];
      
      setQuestions(prev => [...prev, ...generatedQuestions]);
      setSurveyTitle('AI Generated Survey: ' + aiPrompt.slice(0, 50) + '...');
      setIsGenerating(false);
      setAiPrompt('');
    }, 2000);
  };

  const addQuestion = (type: string) => {
    const newQuestion = {
      id: Date.now(),
      type,
      question: 'New question',
      questionHi: 'नया प्रश्न',
      required: false,
      options: type.includes('choice') ? ['Option 1', 'Option 2'] : []
    };
    setQuestions([...questions, newQuestion]);
  };

  const deleteQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const duplicateQuestion = (id: number) => {
    const question = questions.find(q => q.id === id);
    if (question) {
      const duplicated = { ...question, id: Date.now() };
      setQuestions([...questions, duplicated]);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {language === 'en' ? 'AI Survey Designer' : 'AI सर्वे डिज़ाइनर'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {language === 'en' 
                ? 'Create intelligent surveys with AI assistance' 
                : 'AI सहायता के साथ बुद्धिमान सर्वे बनाएं'
              }
            </p>
          </div>
          
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <Save className="h-5 w-5" />
              <span className="font-semibold">
                {language === 'en' ? 'Save Draft' : 'ड्राफ्ट सेव करें'}
              </span>
            </button>
            
            <button className="flex items-center space-x-2 px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-2xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
              <Eye className="h-5 w-5" />
              <span className="font-semibold">
                {language === 'en' ? 'Preview' : 'पूर्वावलोकन'}
              </span>
            </button>
            
            <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl hover:from-green-700 hover:to-green-800 transition-colors shadow-lg">
              <Send className="h-5 w-5" />
              <span className="font-semibold">
                {language === 'en' ? 'Publish' : 'प्रकाशित करें'}
              </span>
            </button>
          </div>
        </div>

        {/* AI Prompt Section */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl p-8 border-2 border-purple-200 dark:border-purple-700 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {language === 'en' ? 'AI Survey Generator' : 'AI सर्वे जेनरेटर'}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {language === 'en' 
                  ? 'Describe your survey needs and let AI create questions for you'
                  : 'अपनी सर्वे आवश्यकताओं का वर्णन करें और AI को आपके लिए प्रश्न बनाने दें'
                }
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <textarea
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder={language === 'en' 
                ? 'Example: Create a survey about rural healthcare access, including questions about distance to hospitals, quality of services, and government scheme awareness...'
                : 'उदाहरण: ग्रामीण स्वास्थ्य सेवा पहुंच के बारे में एक सर्वे बनाएं, जिसमें अस्पतालों की दूरी, सेवाओं की गुणवत्ता और सरकारी योजना जागरूकता के बारे में प्रश्न शामिल हों...'
              }
              className="w-full h-32 p-6 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white resize-none"
            />
            
            <button
              onClick={handleAIGenerate}
              disabled={isGenerating || !aiPrompt.trim()}
              className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-colors shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                  <span className="font-bold text-lg">
                    {language === 'en' ? 'Generating Questions...' : 'प्रश्न बनाए जा रहे हैं...'}
                  </span>
                </>
              ) : (
                <>
                  <Sparkles className="h-6 w-6" />
                  <span className="font-bold text-lg">
                    {language === 'en' ? 'Generate with AI' : 'AI के साथ बनाएं'}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Panel - Tools */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 sticky top-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'en' ? 'Question Types' : 'प्रश्न प्रकार'}
            </h3>
            
            <div className="space-y-3">
              {questionTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.type}
                    onClick={() => addQuestion(type.type)}
                    className="w-full flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                  >
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {type.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Language Settings */}
            <div className="mt-8">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Languages className="h-5 w-5 mr-2" />
                {language === 'en' ? 'Languages' : 'भाषाएं'}
              </h4>
              
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {supportedLanguages.map((lang) => (
                  <label key={lang.code} className="flex items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedLanguages.includes(lang.code)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedLanguages([...selectedLanguages, lang.code]);
                        } else {
                          setSelectedLanguages(selectedLanguages.filter(l => l !== lang.code));
                        }
                      }}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-900 dark:text-white">
                      {lang.nativeName}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Panel - Survey Builder */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
            {/* Survey Header */}
            <div className="p-8 border-b border-gray-200 dark:border-gray-700">
              <input
                type="text"
                value={surveyTitle}
                onChange={(e) => setSurveyTitle(e.target.value)}
                placeholder={language === 'en' ? 'Enter survey title...' : 'सर्वे शीर्षक दर्ज करें...'}
                className="w-full text-3xl font-bold bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-400"
              />
              
              <div className="flex items-center space-x-4 mt-4">
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {selectedLanguages.length} {language === 'en' ? 'languages selected' : 'भाषाएं चुनी गईं'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {questions.length} {language === 'en' ? 'questions' : 'प्रश्न'}
                  </span>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="p-8 space-y-6">
              {questions.map((question, index) => (
                <div key={question.id} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-700 transition-colors group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm font-medium">
                          {question.type}
                        </span>
                        {question.required && (
                          <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg text-xs font-medium">
                            Required
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => duplicateQuestion(question.id)}
                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-colors"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-colors">
                        <Settings className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteQuestion(question.id)}
                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-xl transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={question.question}
                      onChange={(e) => {
                        const updated = questions.map(q => 
                          q.id === question.id ? { ...q, question: e.target.value } : q
                        );
                        setQuestions(updated);
                      }}
                      className="w-full text-lg font-semibold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    />
                    
                    {selectedLanguages.includes('hi') && (
                      <input
                        type="text"
                        value={question.questionHi}
                        onChange={(e) => {
                          const updated = questions.map(q => 
                            q.id === question.id ? { ...q, questionHi: e.target.value } : q
                          );
                          setQuestions(updated);
                        }}
                        placeholder="Hindi translation..."
                        className="w-full text-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white font-hindi"
                      />
                    )}
                    
                    {question.options && question.options.length > 0 && (
                      <div className="space-y-2">
                        {question.options.map((option, optIndex) => (
                          <div key={optIndex} className="flex items-center space-x-3">
                            <div className="w-6 h-6 border-2 border-gray-300 rounded-md"></div>
                            <input
                              type="text"
                              value={option}
                              onChange={(e) => {
                                const updated = questions.map(q => 
                                  q.id === question.id 
                                    ? { ...q, options: q.options?.map((opt, i) => i === optIndex ? e.target.value : opt) }
                                    : q
                                );
                                setQuestions(updated);
                              }}
                              className="flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                            />
                          </div>
                        ))}
                        <button
                          onClick={() => {
                            const updated = questions.map(q => 
                              q.id === question.id 
                                ? { ...q, options: [...(q.options || []), `Option ${(q.options?.length || 0) + 1}`] }
                                : q
                            );
                            setQuestions(updated);
                          }}
                          className="flex items-center space-x-2 px-3 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                          <span className="text-sm font-medium">Add Option</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {questions.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {language === 'en' ? 'No questions yet' : 'अभी तक कोई प्रश्न नहीं'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {language === 'en' 
                      ? 'Use AI to generate questions or add them manually'
                      : 'प्रश्न बनाने के लिए AI का उपयोग करें या उन्हें मैन्युअल रूप से जोड़ें'
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyDesigner;