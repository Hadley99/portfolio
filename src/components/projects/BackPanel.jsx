import React from "react";

const BackPanel = ({ themeColor, title, description, tools, code, link }) => {
  return (
    <div className="flex-col w-half  flex justify-center pl-7 absolute z-10 items-start py-14  rounded-[10px] bg-[#D9D9D933] shadow-insetShadow">
      <div
        style={{ borderColor: themeColor }}
        className="text-2xl font-bold border-l-4 mb-4 "
      >
        <h1 className="pl-2 text-shadow-title">{title}</h1>
      </div>
      <p className="w-1/3 pl-4 font-medium mb-3 text-shadow">{description}</p>
      <div className="flex pl-4 justify-start items-center md:w-52  flex-wrap mb-6  space-x-1">
        {tools}
      </div>
      <div className="flex justify-center items-center space-x-2 pl-4">
        <button className="bg-black transition ease-out delay-75 text-white hover:bg-zinc-700  p-1 text-sm  rounded shadow-buttonShadow">
          <a href={code} target="new">
            <p className="mb-1">
              <span>{"<"}</span>
              <span className="font-bold">code</span>
              <span>{"/>"}</span>
            </p>
          </a>
        </button>
        <button className="bg-white transition ease-out delay-75 text-black px-2 p-1 hover:bg-zinc-300  text-sm font-medium rounded shadow-buttonShadow">
          <a href={link} target="new">
            <p className="mb-1">
              <span className="font-bold">https</span>://
            </p>
          </a>
        </button>
      </div>
    </div>
  );
};

export default BackPanel;
