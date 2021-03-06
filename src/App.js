import './App.css';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import ReplacementPolicy from './components/ReplacementPolicy';
import Shop from './components/Shop';
import BookNow from './components/BookNow';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/terms-of-use" element={<TermsOfUse />} />
        <Route exact path="/replacement-policy" element={<ReplacementPolicy />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/contact" element={<BookNow />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
