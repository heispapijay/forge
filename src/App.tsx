import "./App.css";
import "./utils/resetstyle.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./screens/Home/Home";

function App() {

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
