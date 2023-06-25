import React from "react";
import Avatar from "./Avatar";
import UserName from "./UserName";

function FeedSideBar() {
  var links = [
    "About",
    "Help",
    "Press",
    "Api",
    "Jobs",
    "Privacy",
    "Terms",
    "Location",
    "Language",
  ];
  return (
    <div class=" h-[100vh] mb-8 pt-8 w-full max-w-md right-0 flex-shrink-0 sticky">
      <div class=" h-16 mt-4 mb-3 flex items-center flex-row justify-between">
        <Avatar height={"64px"} />
        <div class="pl-3 flex flex-col flex-shrink justify-start self-auto flex-grow">
          <UserName name="userName" />
          <span class=" font-thin">FirstName</span>
        </div>
        <div class="mr-6 hover:text-[var(--ig-primary-button-hover)] text-[var(--ig-primary-button)] cursor-pointer">
          Switch{" "}
        </div>
      </div>

      <div class="flex flex-col mb-3 ml-[-16px] w-full">
        <div class="py-2 box-border flex items-center pl-4 px-4 justify-start w-full">
          <div class=" flex-grow items-start flex flex-col  ">
            <span>Suggested for you</span>
          </div>
          <a class=" text-center font-semibold cursor-pointer">
            <span>See All</span>
          </a>
        </div>

        <div class="ml-2 mb-2 flex flex-col box-border items-stretch ">
          <div class="py-4 static ">
            <div class="flex flex-col">
              {[1, 2, 3, 4, 5].map((_) => (
                <div class="my-2 mx-4 w-full h-12 flex fle-row items-center">
                  <Avatar height="32px" />
                  <div class="ml-3 flex flex-col flex-grow">
                    <UserName name="name" />
                    <div>Follows you</div>
                  </div>
                  <div className="mr-6 hover:text-[var(--ig-primary-button-hover)] text-[var(--ig-primary-button)] cursor-pointer">
                    Follow
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" text-xs">
        <nav class="mb-4 flex flex-col">
          <ul class="mb-2 flex-grow flex">
            <li v-for="link in links">
              <a class="cursor-pointer ">
                {links.map((link) => (
                  <span class="px-1 hover:underline leading-relaxed whitespace-pre-line">
                    {link}
                  </span>
                ))}
              </a>
            </li>
          </ul>
        </nav>
        <span class=" font-normal">©2023 INSTACLONE</span>
      </div>
    </div>
  );
}

export default FeedSideBar;
