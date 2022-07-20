import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {

  // tells if dark mode is enabled or not
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <>

      {/* <Navbar title = "TextUtil" aboutText = "About TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />

      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
