import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HomePage } from "./pages/homePage";
import TermsAndConditions from "./pages/TermAndConditions";
import InterpretationForm from "./pages/InterpretationForm";
import TranslationForm from "./pages/TranslationForm";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Languages from "./Components/Languages";
function App() {
  const { t,  i18n } = useTranslation();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TermAndConditions" element={<TermsAndConditions />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/TranslationForm" element={<TranslationForm />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/InterpretationForm" element={<InterpretationForm />} />
        <Route path="/About" component={<About />} />
        <Route path="/Contact" component={<Contact/>} />
        <Route path="/Services" component={<Services />} />
        <Route path="/Languages" component={<Languages />} />
    </Routes>
      
    </div>
  );
}

export default App;
