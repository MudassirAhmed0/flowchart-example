import React from "react";

const Wrapper = ({ children }) => {
  return <div className="absolute top-0 leftRightFixer1 w-full h-full overflow-hidden">{children}</div>;
};

export default Wrapper;
