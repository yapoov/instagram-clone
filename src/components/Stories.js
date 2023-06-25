import React from "react";
import Avatar from "./Avatar";
import UserName from "./UserName";

function Stories() {
  return (
    <div class="bg-[var(--color-background)] py-4 mt-4 border-gray-600 border-solid border rounded-lg">
      <div class=" h-[85px] flex flex-col items-stretch">
        <div class="flex flex-col flex-shrink-0 w-full">
          <div class=" items-stretch flex flex-row h-full overflow-y-hidden">
            <div class="h-full flex-row flex items-stretch flex-shrink-0">
              <ul class="flex flex-row overflow-hidden  resize-none">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
                  return (
                    <li className="mx-3 text-xs">
                      <button className="flex flex-col items-center">
                        <Avatar
                          height={"64px"}
                          imgUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreator-images.podchaser.com%2F043a207278efef458dfd4fa7d05a2df9.png&f=1&nofb=1&ipt=3916e7f2e311d6c564a8ea6ea0c92dafa63292cc79e523d4a1b6e0348a7c225f&ipo=images"
                        />
                        <UserName name="name" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <button class="absolute right-0 top-[50%] translate-y-1/2 mx-2">
            <div class=" w-11 h-11"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stories;
