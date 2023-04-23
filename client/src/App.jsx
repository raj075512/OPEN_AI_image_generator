import React from "react";
import { logo } from "./assets";
import { home, CreatePost } from "./pages";
import { BrowserRouter, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <header
        className="w-full flex justify-between items-center bg-white
        sm:px-8 py-4 border-b border-b-[grey]"
      >
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />{" "}
        </Link>
      </header>
    </BrowserRouter>
  );
};

export default App;
