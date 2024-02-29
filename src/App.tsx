import "./App.css";
import "./utils/resetstyle.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import Logo from "./components/Logo/Logo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home, Contactus } from "./screens";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <ScaleLoader color={"#23262f"} loading={loading} />
          <div className="loading">
            <Logo />
          </div>
        </div>
      ) : (
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" />
              <Route index element={<Home />} />
              <Route path="*" element={<div>Page not found</div>} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contactus />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
