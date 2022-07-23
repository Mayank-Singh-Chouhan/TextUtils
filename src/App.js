import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  // tells if dark mode is enabled or not
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>

      {/* <Navbar title = "TextUtil" aboutText = "About TextUtils"/> */}
      {/* <Navbar/> */}
      <Router>

        <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3">

          <Routes>

            <Route exact path="/TextUtils/about" element={<About mode={mode} />} />

            <Route exact path="/TextUtils" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />

          </Routes>

        </div>

      </Router>

    </>
  );
}

export default App;
