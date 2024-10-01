import React, { useState } from 'react';
import './App.css';
import answers from './answers.json';  

function App() {
  const [userInput, setUserInput] = useState('');
  const [randomIndex, setRandomIndex] = useState('');
  const [error, setError] = useState('');
  const [language, setLanguage] = useState('en'); 

  const handleChange = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
  };

  const handleClick = () => {
    if (userInput) {
      setError('');
      setRandomIndex(Math.floor(Math.random() * possibleAnswers.length));
      setUserInput('');
    } else {
      setError(language === 'en' ? 'Enter a question to know the answer!' : 'Введите вопрос, чтобы получить ответ!');
    }
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    setUserInput('');
    setError('');
    setRandomIndex('');
  };

  
  const possibleAnswers = answers[language];
  const answer = possibleAnswers[randomIndex];

  return (
    <div className="App">
      <h1>{language === 'en' ? 'The Magic 8-ball welcomes you! ' : 'Вас приветствует магический шар!'}</h1>
      <p className="info">
        {language === 'en' ? 'Ask a question and tap me for an answer...' : 'Задайте вопрос, нажмите на шар, получите ответ...'}
      </p>

      {}
      <div className="language-switch">
        <label>
          <input
            type="radio"
            value="en"
            checked={language === 'en'}
            onChange={handleLanguageChange}
          />
          English
        </label>
        <label>
          <input
            type="radio"
            value="ru"
            checked={language === 'ru'}
            onChange={handleLanguageChange}
          />
          Русский
        </label>
      </div>

      <input
        type="text"
        className="question"
        value={userInput}
        onChange={handleChange}
        placeholder={language === 'en' ? 'Enter your question' : 'Введите ваш вопрос'}
      />
      <div className="eight-ball">
        <div className="content" onClick={handleClick}>
          {error ? (
            <p className="error">{error}</p>
          ) : answer ? (
            <p className="answer">{answer}</p>
          ) : (
            <p className="eight">8</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;