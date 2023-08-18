import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const handleUpClick = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext);
  }

  const handleLoClick = ()=>{
    setText(text.toLowerCase());
  }

  const handleCopyClick = ()=>{
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    alert("text-Copied");

  }
  
  const handleClearScreen = ()=>{
    setText("");
  }
  
  const handleOnChange = (event)=>{
    console.log("on changed");
    setText(event.target.value)

  }

  const [text, setText] = useState("");


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <div className='navdiv'>
        <h1>Text Analyzer</h1>
        <textarea className="mytext" id='mybox' onChange={handleOnChange} value={text} placeholder='Enter text here...!!!'></textarea>
        <div>
        <button onClick={handleUpClick}>UpperCase</button>
        <button onClick={handleLoClick}>LowerCase</button>
        <button onClick={handleCopyClick}>Copy Text</button>
        <button onClick={handleClearScreen}>ClearScreen</button>
        </div>
        <div>
          <h2>Your Summary</h2>
          <p>{text.split(" ").length} Words, {text.length} Characters</p>
          <h3>Preview  tusharrrrrrrrrr</h3>
          <p>{text}</p>
        </div>
        </div>
      </main>
    </div>
  );
}

export default App;
