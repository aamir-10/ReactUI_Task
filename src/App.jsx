import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/HeroSection";
import FlutterDawn from "./components/FlutterDawn";
import Services from "./components/Services";
import ExpandableServices from "./components/ExpandableServices";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Hero />
        <FlutterDawn/>
        <Services/>
        <ExpandableServices/>
        <ConnectSection/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
