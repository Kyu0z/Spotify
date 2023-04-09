import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import DetailSongs from "./components/DetailSongs";
import ListSongs from "./components/ListSongs";
import Playing from "./components/Playing";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
        <DetailSongs></DetailSongs>
        <ListSongs></ListSongs>
      </div>
      <Playing></Playing>
    </>
  );
}

export default App;
