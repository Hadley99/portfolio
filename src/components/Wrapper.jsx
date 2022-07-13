import React from "react";

const Wrapper = ({ children, title, number }) => {
  return (
    <section className="snap-start h-screen relative w-full overflow-hidden">
      <h1 className="text-[140px] text-bgTextGrey  pointer-events-none font-bold absolute -top-16 -left-3">
        {title}
      </h1>
      {children}
    </section>
  );
};

export default Wrapper;
