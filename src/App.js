import React from "react";
import "./App.css";
//COMPONENTS
import Sidebar from "./Component/Sidebar/Sidebar";
import Chat from "./Component/Chat/Chat";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
