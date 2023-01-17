import './App.css';
import Contacts from './components/Contacts';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <>
        <NavBar />
      
          <Routes>
            <Route exact path="/" element={<Contacts />} />
          
         

      
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;