import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HomePage } from "./pages/homePage";
import TermsAndConditions from "./pages/TermAndConditions";
function App() {
  const { t,  i18n } = useTranslation();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TermAndConditions" element={<TermsAndConditions />} />
        <Route path="/About" component={<About />} />
        <Route path="/Contact" component={<Contact/>} />
        <Route path="/Work" component={<Work />} />
        <Route path="/Testimonial" component={<Testimonial />} />
    </Routes>
      
    </div>
  );
}

export default App;
