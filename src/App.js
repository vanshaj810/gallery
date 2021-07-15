import './App.css';
// import { Router} from 'react-router-dom';
// import History from './Routing/History';
import Routes from './Routing/Routes';
import Header from './navbar/navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from '../src/Footer/Footer';

function App() {
  return (
    
    
    <Router >
    
    <Header></Header>
    <Routes></Routes>
    <Footer/>
    
    
    </Router>
  );
}

export default App;

