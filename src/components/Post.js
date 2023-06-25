import React from "react";
import {
  BookmarkBorderOutlined,
  ChatBubbleOutline,
  EmojiEmotionsOutlined,
  FavoriteBorderOutlined,
  SendOutlined,
} from "@mui/icons-material";
import Avatar from "./Avatar";
import UserName from "./UserName";
export default function Post({ postData, UserName, Avatar }) {
  const iconCSS = {
    width: "90%",
    height: "90%",
    "&:hover": {
      color: "gray",
    },
  };
  return (
    <article class=" w-full min-w-[468px]  bg-[var(--color-background)] rounded-lg mb-3 border-[1px] border-gray-600">
      <div class="flex items-center ml-3 my-3 ">
        {Avatar}
        <h3 class="ml-5">{UserName}</h3>
      </div>
      {/* image */}
      <div class="overflow-hidden border-t-[1px]">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreator-images.podchaser.com%2F043a207278efef458dfd4fa7d05a2df9.png&f=1&nofb=1&ipt=3916e7f2e311d6c564a8ea6ea0c92dafa63292cc79e523d4a1b6e0348a7c225f&ipo=images" />
      </div>
      {/* data */}
      <div>
        <section className="mt-2 flex px-3 pb-2 ">
          <span class="ml-[-8px]  inline-block h-10 w-10">
            <FavoriteBorderOutlined sx={iconCSS} />
          </span>
          <span class="  inline-block h-10 w-10">
            <ChatBubbleOutline sx={iconCSS} />
          </span>
          <span class="  inline-block h-10 w-10">
            <SendOutlined sx={iconCSS} />
          </span>
          <span class="ml-auto mr-[-10px] h-10 w-10">
            <BookmarkBorderOutlined sx={iconCSS} />
          </span>
        </section>
        <section className="px-3">Liked by USERNAME and others</section>
        <div className="px-3">
          <div className="mb-2">
            koyori_n divinity // 2022 // #characterdesign #illustration
            #portrait #conceptart #red #cyberpunk #digitalart
          </div>
          <div className="mb-2">View all N comments</div>
        </div>

        <div class="pl-3 mb-3">DATE</div>
        <section className="py-1 pr-4 pl-3 border-t-[1px] border-gray-400">
          <form className="flex flex-row items-center">
            <div class="pr-3 py-2">
              <EmojiEmotionsOutlined />
            </div>
            <textarea
              placeholder="Add a comment..."
              className="overflow-hidden bg-transparent flex-grow  h-[18px] border-none resize-none outline-none "
            ></textarea>
            <div className="ml-2">
              <span>Post</span>
            </div>
          </form>
        </section>
      </div>
    </article>
  );
}
