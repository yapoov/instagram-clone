import React from "react";
import Stories from "../components/Stories";
import Feed from "../components/Feed";
import FeedSideBar from "../components/FeedSideBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (!authToken) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <section class="relative max-w-[820px] flex pt-1 flex-row flex-nowrap items-stretch w-full mx-auto my-0">
        <div class=" mt-2 w-full  max-w-lg mr-8 float-left">
          <Stories />
          <Feed />
        </div>
        <FeedSideBar />
      </section>
    </div>
  );
}

export default Home;
