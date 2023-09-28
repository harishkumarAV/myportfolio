import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import ButtonAppBar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <ButtonAppBar/>
    <Home/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
