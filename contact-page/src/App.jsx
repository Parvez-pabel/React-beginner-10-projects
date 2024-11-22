import AppNav from "./components/Nav/AppNav";
import "./App.css";
import ContactHeader from "./components/Contact/ContactHeader";
import ContactForm from "./components/contactForm/ContactForm";
import Buttons from "./components/buttons/Buttons";

const App = () => {
  return (
    <div>
      <AppNav></AppNav>
      <ContactHeader></ContactHeader>
      <ContactForm></ContactForm>
    </div>
  );
};

export default App;
