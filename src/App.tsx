import "./App.css";
import "./utils/resetstyle.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./screens/Home/Home";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import Logo from "./components/Logo/Logo";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <>
    {loading ?
    
    <div className="loader"><ScaleLoader color={"#23262f"} loading={loading} />
    <div className="loading"><Logo /></div></div>
    :

    <div>
        <Navbar />
        <Home />
    </div>}
    </>
  );
}

export default App;
