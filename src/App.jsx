import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Certification from "./components/certification";
import Socials from "./components/socials";
import Projects from "./components/Project";

function App() {
  const [section,setSection]=useState("home")

  const renderSection = () => {
    switch (section) {
      case "home":
        return <Home />;
      case "certification":
        return <Certification />;
      case "socials":
        return <Socials />;
      case "projects":
        return <Projects />;
      default:
        return <Home />;
    }
  };
 
 

  

  return (<>
  <Navbar onNavchange={setSection}/>
{renderSection()}
  
  
  </>);
}

export default App;
