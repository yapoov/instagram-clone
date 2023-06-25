import React from "react";
import { Link } from "react-router-dom";
function SideBarItem({ icon, label, link }) {
  return (
    <div className=" group">
      <div className="block relative">
        <Link to={link}>
          <div class="pt-3 pb-3 px-3 my-1 w-full flex flex-row rounded-3xl hover:bg-[#323333] items-center">
            <div className="box-border ">
              <div className="h-8 w-8 group-hover:scale-[110%]">{icon}</div>
            </div>
            <div className="pl-4 h-6 items-center">
              <span className=" font-normal text-[16px]">{label}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SideBarItem;
