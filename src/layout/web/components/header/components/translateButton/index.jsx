import { useState } from 'react';

const TranslateButton = () => {
  const [language, setLanguage] = useState('EN');

  const handleLanguageToggle = () => {
    const newLanguage = language === 'EN' ? 'TR' : 'EN';
    setLanguage(newLanguage);
  };

  return (
    <button
      onClick={handleLanguageToggle}
      className="px-4 py-2 bg-gray-700 hover:bg-red-500 text-white rounded-lg transition duration-200 shadow-md"
    >
      {language}
    </button>
  );
};

export default TranslateButton;
