import React, { useState } from "react";
import { urlFor } from "../lib/client";

const Post = ({ post }) => {
  const [hover, setHover] = useState(false);

  console.log(post);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative h-64 w-[95%] mx-auto z-10 mt-2 bg-white rounded-md cursor-pointer overflow-hidden"
    >
      <img
        src={urlFor(post?.image)}
        className={`h-[98%] w-[98%] mt-[1%] mx-auto object-cover rounded-md transition ease-out ${
          hover ? "scale-110" : ""
        }`}
      />
      <div
        className={`absolute bottom-0 p-3 bg-white bg-opacity-90 w-full z-10 ${
          hover ? "bg-opacity-100" : ""
        }`}
      >
        <h1
          className={`text-2xl font-normal text-gray-500 ${
            hover ? `underline text-gray-700` : ""
          } `}
        >
          {post.title}
        </h1>
      </div>
    </div>
  );
};

export default Post;
