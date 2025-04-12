import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar";
import Body from "./components/body";

function App() {
  const [count, setCount] = useState(0);

  

  return (<>
  <Navbar />
  <Body/>
  
  
  
  </>);
}

export default App;
