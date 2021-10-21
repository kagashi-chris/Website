// import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import Header from "./Components/Layout/Header/Header";
import Section1 from "./Components/Layout/Section1/Section1";
import Section2 from "./Components/Layout/Section2/Section2";
import Footer from "./Components/Layout/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Section1 />
      <Section2 />
      <Footer />
    </Fragment>
  );
}

export default App;
