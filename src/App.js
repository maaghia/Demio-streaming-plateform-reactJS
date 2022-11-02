import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UnderNavbar from './components/UnderNavbar';
import Card from './components/Card';
import Home from './components/Home';
import Movies  from './components/Movies';
import Series  from './components/Series';
import Spinner from './components/Spinner';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
       <div><Navbar/></div> 
       <div> <UnderNavbar/></div>
      </header>
      
      <body>
        <div><Home/> </div>
        <div><Spinner/></div>

      </body>

      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
