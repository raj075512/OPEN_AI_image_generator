import React from "react";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
import { BrowserRouter, Link ,Routes, Route} from "react-router-dom";

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
        <Link to="/createPost">
          <button className="text-white font-inter font-medium bg-[blue] px-5 py-2 rounded-md  ">
            create
          </button>
        </Link>
      </header>

      {/* //main section // */}

      <main className=" flex justify-start sm: p-8 px-4 py-6 w-full bg-[#c3cfc6] min-h-[calc(100vh-50px)]  ">

        <Routes>
            <Route path="/" element={<Home/>}  />
            <Route path="/createPost" element={<CreatePost/>}  />
        </Routes>

      </main>
    </BrowserRouter>
  );
};

export default App;
