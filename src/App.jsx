import { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import Preloader from "./Preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after content is loaded
    }, 2300); // Adjust the delay time as needed
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <Header />
          <Footer />
          <SpeedInsights />
        </div>
      )}
    </div>
  );
};

export default App;
