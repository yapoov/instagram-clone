import { Height } from "@mui/icons-material";
import React from "react";

export default function Avatar({ height = "32px", style, imgUrl }) {
  const handleClick = () => {
    console.log("clicked on user profile");
  };

  const baseImg =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreator-images.podchaser.com%2F043a207278efef458dfd4fa7d05a2df9.png&f=1&nofb=1&ipt=3916e7f2e311d6c564a8ea6ea0c92dafa63292cc79e523d4a1b6e0348a7c225f&ipo=images";
  return (
    // <div className="self-center mt-1 mb-2  box-border">
    <a
      onClick={handleClick}
      class=" cursor-pointer overflow-hidden rounded-[50%]"
      style={{ height: height, width: height }}
    >
      <img
        className="w-full h-full overflow-clip"
        src={imgUrl ? imgUrl : baseImg}
      />
    </a>
    // </div>
  );
}
