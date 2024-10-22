import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import QuoteComponent from "./components/quotes/QuotesCompenent";

/**
 * This component represents the main application layout.
 * It includes the Header, QuoteComponent, Hero, Contact, and Footer components.
 */
const App = () => {
  return (
    <div>
      
      
      <Header title="My App" />
      <QuoteComponent />
      <Hero />
      
      <Contact />
      <Footer />    
    </div>
  );
};


export default App;