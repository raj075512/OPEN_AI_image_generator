import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../Components/FormField";
import { preview } from "../assets";
import Loader from "../Components/Loader";
import { getRandomPrompt } from "../utils";

const CreatePost = () => {
  const HandleGenerateImage = () => {};
  const handleSubmit = () => {
    // window.alert("submiited");
  };
  const handleChange = (e) => {
    setForm({...form ,[e.target.name]:e.target.value})
  };
  const handleSurpriseMe = () => {
    const randomPrompt=getRandomPrompt(form.prompt);
    setForm({...form ,prompt:randomPrompt});
  };

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
          Create post
        </h1>
        <p className=" mt-2 text-[13px] text-[#1d5121] max-w-[500px] ">
          Create imaginaive post image thorugh dall-e -ai and share with your
          friends
        </p>
      </div>
      <form className="mt-8 max-w-3xl" onSubmit={handleSubmit}>
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
            className="relative  border-[#a8a8a8] bg-gray-60 border border-gray-300 text-gray-300
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
            {generatingImg && (
              <div
                className="   absolute  inset-0 z-0 flex justify-center items-center
                     bg-[#9c9c9c2c] rounded-md "
              >
                <Loader />
              </div>
            )}
          </div>
        </div>
        {/* generate seciton  */}

        <div className="flex mt-2 gap-4">
          <button
            className="mt-1 text-[10px] w-full   bg-[#207620] rounded-md  
          text-white text-centerpx-2  sm:w-auto px-1 py-2  "
            onClick={HandleGenerateImage}
          >
            {" "}
            generate image
          </button>
        </div>
        <h2 className="text-[10px] mx-1">
          {generatingImg ? " generating..." : ".. "}
        </h2>
        <div className="mt-2">
          <p className="mt-2 text-[#5e5b5b] text-[12px]  ">
            once you generated the image u want, u can share with your friends .
          </p>
          <button
            type="submit"
            className="mt-3 w-full text-center text-[10px] text-white bg-blue-900  flex justify-center items-center
               rounded-md px-2 py-1 sm:  "
          >
            share with community{" "}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
