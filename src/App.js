import './App.css';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
