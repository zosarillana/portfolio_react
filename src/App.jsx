import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div>
      <div>
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default App;
