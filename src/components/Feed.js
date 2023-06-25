import React from "react";
import Post from "./Post";
import Avatar from "./Avatar";
import UserName from "./UserName";
import InfiniteScroller from "./InfiniteScroller";
import { db } from "../FirebaseConfig";
import {
  collection,
  doc,
  getDoc,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
function Feed() {
  const Show = (data) => {
    {
      return data.map((postData) => (
        <Post
          // postData={postData}
          Avatar={<Avatar />}
          UserName={<UserName name={"Some Guy"} />}
        />
      ));
    }
  };
  const fetchMethod = async (currentPage) => {
    // getDoc(collection(db, "posts"));

    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // return (
    //   await getDoc(query(collection(db, "/posts"), orderBy("id"), limit(10)))
    // ).data();
  };
  return (
    <div class=" static flex column box-border overflow-y-visible w-full justify-start">
      <div class="w-full max-w-lg">
        <div class=" mt-4 flex flex-col items-stretch box-border ">
          <InfiniteScroller fetchMethod={fetchMethod} renderFunc={Show} />
        </div>
      </div>
    </div>
  );
}

export default Feed;
