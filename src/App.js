import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import { selectUser } from "./features/userSlice";
import Header from "./Header";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
