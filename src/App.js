import { useEffect } from "react";
import Navbar from "./components/Navbar";
import AppBanner from "./components/AppBanner";
import StepsSection from "./components/StepsSection";

function App() {
  // Maintain state for theme
  useEffect(() => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.add("dark");
    }
  }, []);

  return (
    <div className="h-screen">
      <Navbar />
      <AppBanner />
      <StepsSection />
    </div>
  );
}

export default App;
