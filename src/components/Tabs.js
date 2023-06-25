import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Posts",
    },
    {
      name: "Reels",
    },
    {
      name: "Tagged",
    },
  ];
  return (
    <div className="flex items-center justify-center box-border text-center  border-t-2 border-[var(--ig-separator)] ">
      {tabs.map((tab, index) => {
        return (
          <a
            className={`h-[52px] uppercase mr-[60px] cursor-pointer  ${
              index == activeTab ? "border-t-2" : "font-light"
            }`}
            onClick={(e) => setActiveTab(index)}
          >
            {tab.name}
          </a>
        );
      })}
    </div>
  );
}

export default Tabs;
