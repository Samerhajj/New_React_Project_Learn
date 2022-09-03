import { useState } from "react";
import AboutUs from "./components/AboutUs";
import Card from "./components/Card";
import Header from "./components/Header";
import Homepage from "./components/Homepage";

function App() {
  return (
   <div className="container" style={{ 
    backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/006/761/234/large_2x/gray-soft-backdrop-light-grey-background-free-photo.jpg")` 
  }}>
    <Header/>
    <Homepage/>
    {/* <AboutUs/> */}
     </div>
  );
}

export default App;
