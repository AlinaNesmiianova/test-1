import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("rendered")

  }, [])

  const isPolyndrome = (event) => {
    setInputValue(event.target.value)
    var str = inputValue.replace(/\s/g, '')
    str = str.toLowerCase()
    
    var index = -1;
    var j = 0;
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] != str[str.length - 1 - i]) {
            index = i;
            j = j + 1
        }
    }
    
    if(j>1){ alert("isnt poly")} 
    else if(j==1){ 
      var strCopy = "";
      for (let i = 0; i < str.length; i++){
        if(i!=index) strCopy = strCopy + str[i]
      }
      alert(`is poly with one exeption, your string without it: ${strCopy}`)
    }
    else {
      alert("is poly")
    }
}


  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <input onClick={isPolyndrome}/> 
       
        </header>
    </div>
    
    </>
  );
}

export default App;
