import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showMessage = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showMessage("Darkmode has been enabled!", "success");

      document.body.style.backgroundColor = "#33322D";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#DBDAD5";
      showMessage("Lightmode has been enabled!", "primary");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container pt-0">
        <Alert alert={alert} />
        <Textform mode={mode} alertfn={showMessage} />
      </div>
      <Footer />
    </>
  );
}

export default App;
