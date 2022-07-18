import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>

      {/* <Navbar title = "TextUtil" aboutText = "About TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtil" />

      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below"/>
      </div>

    </>
  );
}

export default App;
