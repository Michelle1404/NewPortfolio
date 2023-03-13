import { BrowserRouter } from "react-router-dom";
import { About,Contact,Experience,Hero,Navbar,Tech,Works,StarsCanvas } 
  from "./components"
import Footer from "./components/Footer";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <div className="relative z-0">
          <StarsCanvas />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <div className="relative z-0">
          <StarsCanvas />
          <Contact />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
};

export default App
