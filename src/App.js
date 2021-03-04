import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* AppBody */}
      {/* Sidebar */}
      <div className="app__body">
        <Sidebar />

        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
