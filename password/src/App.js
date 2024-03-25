import logo from './logo.svg';
import './App.css';
import { symbols, capitalLetters, smallLetters, numbers } from './data/Passchar'
import { useState } from 'react';
function App() {
  let [uppercase, setUppercase] = useState(false)
  let [smallcase, setSmallcase] = useState(false)
  let [Number, setNumber] = useState(false)
  let [symbol, setsymbol] = useState(false)
  let [passwordLength, setPasswordLength] = useState(10);
  let [currentpass, setcurrentpass] = useState('');
  let copypass = () => {
    navigator.clipboard.writeText(currentpass);
  }

  let createPassword = () => {
    let charset = '';
    let finalPasword = '';
    if (uppercase || smallcase || Number || symbol) {
      if (uppercase) {
        charset += capitalLetters;
      }
      if (smallcase) {
        charset += smallLetters;
      }
      if (Number) {
        charset += numbers;
      }
      if (symbol) {
        charset += symbols;
      }
      console.log(charset);

      for (let i = 0; i < passwordLength; i++) {
        finalPasword = finalPasword + charset.charAt(Math.floor(Math.random() * charset.length));
        console.log(finalPasword)
      }
    } else {
      alert('Choose at least one option');
    }
    setcurrentpass(finalPasword);
  }

  return (
    <div className="App">
      <h1 >Password Generator</h1>
      <div className="passwordBox">
        <div className="passwordInputs">
          <input type="text" readOnly name="" id="" value={currentpass} />

          <button onClick={copypass}>Copy</button>
        </div>
        <div className="passwordLength">
          <label htmlFor="Enter Password Length">Enter Password Length</label>
          <input type="number" name="" id="length" max={20} min={10} value={passwordLength} onChange={(event) => setPasswordLength(event.target.value)} />
        </div>
        <div className="passwordLength">
          <label htmlFor="huey">Include Upper Case</label>
          <input type="checkbox" id="huey" name="drone" value="huey" checked={uppercase} onChange={() => setUppercase(!uppercase)} />
        </div>
        <div className="passwordLength">
          <label htmlFor="huey">Include Lower Case</label>
          <input type="checkbox" id="huey" name="drone" value="huey" checked={smallcase} onChange={() => setSmallcase(!smallcase)} />
        </div>
        <div className="passwordLength">
          <label htmlFor="huey">Include Symbols</label>
          <input type="checkbox" id="huey" name="drone" value="huey" checked={symbol} onChange={() => setsymbol(!symbol)} />
        </div>
        <div className="passwordLength">
          <label htmlFor="huey">Include Numbers</label>
          <input type="checkbox" id="huey" name="drone" value="huey" checked={Number} onChange={() => setNumber(!Number)} />
        </div>
        <div className="btndiv">
          <button className="generate" onClick={createPassword}>Generate Password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
