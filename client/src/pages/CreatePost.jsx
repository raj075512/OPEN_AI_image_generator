import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../Components/FormField";
import { preview } from "../assets";
import Loader from "../Components/Loader";

const CreatePost = () => {
  const handleSubmit = () => {
    // window.alert("submiited");
  };
  const handleChange = () => {};
  const handleSurpriseMe = () => {};

  const nevigate = useNavigate(); // return the page after the loading is compelte //
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    photo: "",
    prompt: "",
  });
  const [generatingImg, setGeneratingImg] = useState();

  return (
    <section className="max-w-7xl mx-auto ">
      <div>
        <h1 className="font-extrabold text-[#2c2020] text-[25px]">
          create post
        </h1>
        <p className=" mt-6 text-[13px] text-[#1d5121] max-w-[500px] ">
          Create imaginaive post image thorugh dall-e -ai and share with your
          friends
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="ashutosh raj"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="prompt"
            type="text"
            name="prompt"
            placeholder="prompt generating ..."
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div
            className="relative bg-gray-60 border border-gray-300 text-gray-300
                  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3
                  flex justify-center items-center "
          >
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-6/12 object-contain opacity-30"
              />
            )}
                 {
                  generatingImg && (
                    <div className="   absolute  inset-0 z-0 flex justify-center items-center
                     bg-[#9c9c9c2c] rounded-md " >
                       <Loader/>
                      </div>
                  )
                 }
            )}
          </div>
        
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
