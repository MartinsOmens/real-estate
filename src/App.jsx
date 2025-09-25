import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testominials from "./components/Testominials";


function App() {
  return (
    <div className="w-full overflow-hidden">
      <Header/>
      <About/>
      <Projects/>
      <Testominials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
