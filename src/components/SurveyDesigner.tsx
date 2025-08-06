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
  Sparkles
} from 'lucide-react';

const SurveyDesigner: React.FC = () => {
  const { language } = useLanguage();
  const [aiPrompt, setAiPrompt] = useState('');
  const [surveyTitle, setSurveyTitle] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState(['en', 'hi']);
  const [questions, setQuestions] = useState<any[]>([]);

  const questionTypes = [
    { id: 'text', icon: Type, label: 'Text Input', labelHi: 'टेक्स्ट इनपुट' },
    { id: 'multiple', icon: CheckSquare, label: 'Multiple Choice', labelHi: 'बहुविकल्पीय' },
    { id: 'single', icon: Circle, label: 'Single Choice', labelHi: 'एकल विकल्प' },
    { id: 'boolean', icon: ToggleLeft, label: 'Yes/No', labelHi: 'हाँ/नहीं' },
    { id: 'date', icon: Calendar, label: 'Date', labelHi: 'दिनांक' },
    { id: 'number', icon: Hash, label: 'Number', labelHi: 'संख्या' },
    { id: 'textarea', icon: FileText, label: 'Long Text', labelHi: 'लंबा टेक्स्ट' }
  ];

  const languages = [
    { code: 'en', name: 'English', nameHi: 'अंग्रेजी' },
    { code: 'hi', name: 'Hindi', nameHi: 'हिंदी' },
    { code: 'bn', name: 'Bengali', nameHi: 'बंगाली' },
    { code: 'te', name: 'Telugu', nameHi: 'तेलुगु' },
    { code: 'mr', name: 'Marathi', nameHi: 'मराठी' },
    { code: 'ta', name: 'Tamil', nameHi: 'तमिल' },
    { code: 'gu', name: 'Gujarati', nameHi: 'गुजराती' },
    { code: 'kn', name: 'Kannada', nameHi: 'कन्नड़' },
    { code: 'ml', name: 'Malayalam', nameHi: 'मलयालम' },
    { code: 'pa', name: 'Punjabi', nameHi: 'पंजाबी' }
  ];

  const handleAIGenerate = async () => {
    if (!aiPrompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const generatedQuestions = [
        {
          id: 1,
          type: 'text',
          question: 'What is your full name?',
          questionHi: 'आपका पूरा नाम क्या है?',
          required: true
        },
        {
          id: 2,
          type: 'single',
          question: 'What is your age group?',
          questionHi: 'आपका आयु समूह क्या है?',
          options: ['18-25', '26-35', '36-45', '46-60', '60+'],
          required: true
        },
        {
          id: 3,
          type: 'multiple',
          question: 'Which government services have you used in the last year?',
          questionHi: 'पिछले वर्ष में आपने कौन सी सरकारी सेवाओं का उपयोग किया है?',
          options: ['Aadhaar Services', 'PAN Services', 'Passport Services', 'Banking Services', 'Healthcare Services'],
          required: false
        }
      ];
      
      setQuestions(generatedQuestions);
      setSurveyTitle(aiPrompt.slice(0, 50) + '...');
      setIsGenerating(false);
    }, 2000);
  };

  const addQuestion = (type: string) => {
    const newQuestion = {
      id: Date.now(),
      type,
      question: '',
      questionHi: '',
      required: false,
      options: type === 'multiple' || type === 'single' ? ['Option 1', 'Option 2'] : undefined
    };
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const duplicateQuestion = (question: any) => {
    const duplicated = { ...question, id: Date.now() };
    setQuestions([...questions, duplicated]);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {language === 'en' ? 'AI Survey Designer' : 'AI सर्वे डिज़ाइनर'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {language === 'en' 
                ? 'Create intelligent surveys with natural language prompts'
                : 'प्राकृतिक भाषा संकेतों के साथ बुद्धिमान सर्वेक्षण बनाएं'
              }
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-semibold flex items-center space-x-2">
              <Save className="h-5 w-5" />
              <span>{language === 'en' ? 'Save Draft' : 'ड्राफ्ट सेव करें'}</span>
            </button>
            
            <button className="px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-2xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors font-semibold flex items-center space-x-2">
              <Eye className="h-5 w-5" />
              <span>{language === 'en' ? 'Preview' : 'पूर्वावलोकन'}</span>
            </button>
            
            <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
              <Send className="h-5 w-5" />
              <span>{language === 'en' ? 'Publish Survey' : 'सर्वे प्रकाशित करें'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* AI Generator Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 sticky top-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {language === 'en' ? 'AI Generator' : 'AI जेनरेटर'}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'en' ? 'Powered by GPT-4' : 'GPT-4 द्वारा संचालित'}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  {language === 'en' ? 'Describe your survey' : 'अपने सर्वेक्षण का वर्णन करें'}
                </label>
                <textarea
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder={language === 'en' 
                    ? 'e.g., Create a survey to understand rural healthcare access in India with questions about distance to hospitals, quality of services, and digital health adoption...'
                    : 'उदा., भारत में ग्रामीण स्वास्थ्य सेवा पहुंच को समझने के लिए एक सर्वेक्षण बनाएं...'
                  }
                  className="w-full h-32 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  {language === 'en' ? 'Target Languages' : 'लक्षित भाषाएं'}
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {languages.map((lang) => (
                    <label key={lang.code} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
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
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {language === 'en' ? lang.name : lang.nameHi}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={handleAIGenerate}
                disabled={!aiPrompt.trim() || isGenerating}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>{language === 'en' ? 'Generating...' : 'जेनरेट कर रहे हैं...'}</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="h-5 w-5" />
                    <span>{language === 'en' ? 'Generate Survey' : 'सर्वे जेनरेट करें'}</span>
                  </>
                )}
              </button>
            </div>

            {/* Question Types */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {language === 'en' ? 'Add Question Manually' : 'मैन्युअल रूप से प्रश्न जोड़ें'}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {questionTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => addQuestion(type.id)}
                      className="flex flex-col items-center space-y-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                    >
                      <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                        {language === 'en' ? type.label : type.labelHi}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Survey Builder */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
            {/* Survey Header */}
            <div className="p-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    value={surveyTitle}
                    onChange={(e) => setSurveyTitle(e.target.value)}
                    placeholder={language === 'en' ? 'Enter survey title...' : 'सर्वे शीर्षक दर्ज करें...'}
                    className="text-2xl font-bold text-gray-900 dark:text-white bg-transparent border-none outline-none w-full"
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {questions.length} {language === 'en' ? 'questions' : 'प्रश्न'} • {selectedLanguages.length} {language === 'en' ? 'languages' : 'भाषाएं'}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {selectedLanguages.map(code => languages.find(l => l.code === code)?.name).join(', ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Questions List */}
            <div className="p-8">
              {questions.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {language === 'en' ? 'No questions yet' : 'अभी तक कोई प्रश्न नहीं'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {language === 'en' 
                      ? 'Use AI to generate questions or add them manually'
                      : 'प्रश्न जेनरेट करने के लिए AI का उपयोग करें या उन्हें मैन्युअल रूप से जोड़ें'
                    }
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {questions.map((question, index) => {
                    const QuestionIcon = questionTypes.find(t => t.id === question.type)?.icon || Type;
                    
                    return (
                      <div key={question.id} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-700 transition-colors group">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                              <QuestionIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                              {language === 'en' ? 'Question' : 'प्रश्न'} {index + 1}
                            </span>
                            {question.required && (
                              <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold rounded-lg">
                                {language === 'en' ? 'Required' : 'आवश्यक'}
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => duplicateQuestion(question)}
                              className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                            >
                              <Copy className="h-4 w-4" />
                            </button>
                            <button className="p-2 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors">
                              <Settings className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => removeQuestion(question.id)}
                              className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <input
                              type="text"
                              value={question.question}
                              onChange={(e) => {
                                const updated = questions.map(q => 
                                  q.id === question.id ? { ...q, question: e.target.value } : q
                                );
                                setQuestions(updated);
                              }}
                              placeholder={language === 'en' ? 'Enter question in English...' : 'अंग्रेजी में प्रश्न दर्ज करें...'}
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium"
                            />
                          </div>
                          
                          {selectedLanguages.includes('hi') && (
                            <div>
                              <input
                                type="text"
                                value={question.questionHi}
                                onChange={(e) => {
                                  const updated = questions.map(q => 
                                    q.id === question.id ? { ...q, questionHi: e.target.value } : q
                                  );
                                  setQuestions(updated);
                                }}
                                placeholder="हिंदी में प्रश्न दर्ज करें..."
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium font-hindi"
                              />
                            </div>
                          )}

                          {(question.type === 'multiple' || question.type === 'single') && question.options && (
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                {language === 'en' ? 'Options:' : 'विकल्प:'}
                              </label>
                              {question.options.map((option: string, optIndex: number) => (
                                <div key={optIndex} className="flex items-center space-x-2">
                                  <input
                                    type="text"
                                    value={option}
                                    onChange={(e) => {
                                      const updated = questions.map(q => 
                                        q.id === question.id 
                                          ? { 
                                              ...q, 
                                              options: q.options?.map((opt: string, i: number) => 
                                                i === optIndex ? e.target.value : opt
                                              )
                                            }
                                          : q
                                      );
                                      setQuestions(updated);
                                    }}
                                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                                  />
                                  <button
                                    onClick={() => {
                                      const updated = questions.map(q => 
                                        q.id === question.id 
                                          ? { 
                                              ...q, 
                                              options: q.options?.filter((_: string, i: number) => i !== optIndex)
                                            }
                                          : q
                                      );
                                      setQuestions(updated);
                                    }}
                                    className="p-2 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                </div>
                              ))}
                              <button
                                onClick={() => {
                                  const updated = questions.map(q => 
                                    q.id === question.id 
                                      ? { 
                                          ...q, 
                                          options: [...(q.options || []), `Option ${(q.options?.length || 0) + 1}`]
                                        }
                                      : q
                                  );
                                  setQuestions(updated);
                                }}
                                className="flex items-center space-x-2 px-3 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors text-sm font-medium"
                              >
                                <Plus className="h-4 w-4" />
                                <span>{language === 'en' ? 'Add Option' : 'विकल्प जोड़ें'}</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
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