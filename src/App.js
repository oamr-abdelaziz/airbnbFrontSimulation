import Routes from "./Routes";
import { BrowserRouter as Router} from "react-router-dom";
import AirBnbNavBar from "./components/Nav/nav";
import { useSelector } from "react-redux";
import Footer from "./components/layout/footer";
import { useEffect } from "react";

function App() {
  const lang = useSelector((state) => state.lang.language);
  useEffect(()=>{console.log('hello')},[lang])
  return (
    <Router>
      {/* <div className={lang === "ar" ? "rtlClass" : "ltrClass"}> */}
        <AirBnbNavBar />
        <Routes />
        <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
