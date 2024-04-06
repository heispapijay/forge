import "./App.css";
import "./utils/resetstyle.scss";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"; // Import useLocation
import Logo from "./components/Logo/Logo";
import { About, Home, Contactus, Work } from "./screens";
import { Footer } from "./containers";
import { Navbar } from "./components";
import { SingleWorkPageWrapper } from "./containers/SingleWorkPage/SinglePageWrapper";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <div className="loader">
          <ScaleLoader color={"#23262f"} loading={loading} />
          <div className="loading">
            <Logo />
          </div>
        </div>
      ) : (
        <LoadedApp />
      )}
    </BrowserRouter>
  );
}

function LoadedApp() {
  const [locationLoaded, setLocationLoaded] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    setLocationLoaded(true);
  }, []);

  useEffect(() => {
    if (locationLoaded) {
      window.scrollTo({
        top: 0,
        behavior: "smooth" 
      });
    }
   }, [location, locationLoaded]);

   return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<SingleWorkPageWrapper />} />
        <Route
          path="*"
          element={<div className="error">Page not found</div>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;