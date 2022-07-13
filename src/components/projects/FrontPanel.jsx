import React from "react";

const FrontPanel = ({ toggleSlide, image, open, title }) => {
  return (
    <img
      draggable="false"
      onClick={toggleSlide}
      src={image}
      className={`w-51 ${
        open ? "translate-x-64 shadow-imgShadowTwo" : "shadow-imgShadow"
      }  cursor-pointer transition-all delay-100 ease-in-out  z-50 rounded-[10px]`}
      alt={title}
    />
  );
};

export default FrontPanel;
