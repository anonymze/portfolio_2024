import React from "react";
import ArrowUpSVG from "@assets/icons/arrow-up.svg?react";

import "./ButtonScrollToTop.css";

interface Props {}

const ButtonScrollToTop: React.FC<Props> = () => {
  return (
    <button
      id="scroll-to-top"
      aria-label="Scroll to the beginning of the page"
      onClick={() => window.scrollTo(0, 0)}
    >
      <ArrowUpSVG />
    </button>
  );
};

export default ButtonScrollToTop;
