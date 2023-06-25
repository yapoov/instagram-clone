import React from "react";
import { useParams } from "react-router-dom";

import Avatar from "../components/Avatar";
import { CircularProgress } from "@mui/material";
import Tabs from "../components/Tabs";
function Profile() {
  const { id } = useParams();
  return (
    <div class=" flex-grow max-w-5xl mx-auto mb-8 pt-8 px-5">
      <header class="flex items-stretch mb-11">
        <Avatar height="150px" />
        <section className="ml-8 flex flex-col items-stretch shrink">
          <div class="flex"> name ,follow, similar accounts, options </div>
          <div className="mb-5"></div>
          <ul class="mb-5 flex">
            <li className="mr-8"> 0 posts</li>
            <li className="mr-8"> 0 followers</li>
            <li className="mr-8"> 0 following</li>
          </ul>
          <div class="bio">
            <div class="name">FirstNAME</div>
            <h1>bio bio bio</h1>
            <a>follower info....</a>
          </div>
        </section>
      </header>
      <div class="h-[130px] block mb-10"></div>
      <Tabs />
      <div class="flex flex-col items-stretch justify-start">
        <article className="grow">
          <div class="flex flex-col">
            {[1, 2, 3, 4, 5, 6].map((_) => (
              <div className="flex mb-7">
                {[1, 2, 3].map((_) => (
                  <div className="mr-7 h-[300px] w-[300px] bg-white" />
                ))}
              </div>
            ))}
          </div>
          <div class="flex justify-center">
            <CircularProgress />
          </div>
        </article>
      </div>
    </div>
  );
}

export default Profile;
