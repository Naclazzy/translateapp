import { useState } from 'react'
import TextBox from './components/TextBox'
import Arrows from './components/Arrows'
import Modal from './components/Modal'
import Button from './components/Button'


function App() {

  const [inputLanguage, setInputLanguage] = useState('German');
  const [outputLanguage, setOutputLanguage] = useState('English');

  const handleClick = () => {
    setInputLanguage(outputLanguage)
    setOutputLanguage(inputLanguage)
  }

  return (
    <div className="app">
      <TextBox selectedLanguage={inputLanguage} style={'input'} />
      <div className='arrow-container' onClick={handleClick}>
      <Arrows />
      </div>
      <TextBox selectedLanguage={outputLanguage} style={'output'} />
    </div>
  );
}

export default App;
