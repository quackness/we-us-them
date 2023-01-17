import './App.css';
import Contacts from './components/Contacts';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Contacts />} />
            <Route exact path="/contact/:id" element={<ContactPage />} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
