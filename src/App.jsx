import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testominials from "./components/Testominials";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testominials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
