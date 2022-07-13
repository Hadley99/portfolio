import React, { useState } from "react";
import {
  BootstrapIcon,
  CssIcon,
  HtmlIcon,
  ReactIcon,
} from "../../icons/AllIcons";
import BackPanel from "./BackPanel";
import FrontPanel from "./FrontPanel";

const Projects = ({
  title,
  description,
  code,
  themeColor,
  image,
  link,
  id,
  tools,
}) => {
  const [open, setOpen] = useState(false);

  const toggleSlide = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center ">
      {/* front part */}
      <FrontPanel
        toggleSlide={toggleSlide}
        open={open}
        title={title}
        image={image}
      />
      {/* back part */}
      <BackPanel
        themeColor={themeColor}
        title={title}
        description={description}
        tools={tools}
        code={code}
        link={link}
      />
      {/* footer / project number */}
      <h2 className="text-[250px] text-bgTextGrey pointer-events-none font-bold absolute -bottom-24 -right-7">
        {id}
      </h2>
    </div>
  );
};

export default Projects;
