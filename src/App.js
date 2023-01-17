import './App.css';
import Contacts from './components/Contacts';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <>
      
          <Routes>
            <Route exact path="/" element={<Contacts />} />
          
         

      
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;