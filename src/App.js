import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import Stories from "./components/Stories";
import Create from "./components/Create";
import Posts from "./components/Posts";
import Sidebar from "./components/Sidebar";
import Context from "./Global/Context";
import Stories_ipad from "./components/Stories_ipad";
import Navbar_ipad from "./components/Navbar_ipad";
function App() {
  if(window.innerWidth > 768){
    return (
    
      <div>
        <Context>
      <Navbar />
      <div className="container">
        <Stories />
        <Posts />
        <Sidebar />
      </div>
      <Model />
    </Context>
     </div>
    );
  }else{
    return (
    
      <div>
        <Context>
      <Navbar/>
      <div className="container">
        <Stories_ipad />
        <Create />
        <Posts />
      </div>
      <Model />
    </Context>
      </div>
    );
  }

}
export default App;
