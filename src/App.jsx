import { Route, Routes } from "react-router";
import "./App.css";
import Cursor from "./Components/Cursor/Cursor";
import Footer from "./Components/Footer/Footer";
import HandleLoadingComponent from "./Components/HandleLoadingComponent/HandleLoadingComponent";
import NavBar1 from "./Components/NavBar1/NavBar1";
import NavBar2 from "./Components/NavBar2/NavBar2";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Academics from "./Pages/Academics/Academics";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="bg-main">
      <HandleLoadingComponent />
      <ScrollToTop />
      <Cursor />
      <NavBar1 />
      <NavBar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
