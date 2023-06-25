import React from "react";
import InfiniteScroller from "../components/InfiniteScroller";
import { json } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function Explore() {
  const showPosts = (data) => {
    data = convertTo2DArray(data, 5);
    return (
      <div className="flex flex-col">
        {data.map((photoBundle, bundleIndex) => (
          <div className="block relative box-border self-auto overflow-y-visible flex-shrink flex-grow-0 ">
            {photoBundle.map((photo, index) => {
              var floatDir = ["float-right", "float-left"];
              if (index === 0) {
                return (
                  <div
                    style={{ float: bundleIndex % 2 === 0 ? "right" : "left" }}
                    className=" w-1/3 h-[682px] overflow-hidden box-border pr-6 pb-6"
                  >
                    <img
                      className="box-border w-full h-full "
                      src={photo.url}
                    />
                  </div>
                );
              }
              return (
                <div
                  style={{ float: bundleIndex % 2 === 1 ? "right" : "left" }}
                  className=" w-1/3 box-border pr-6 pb-6 "
                >
                  <img className="box-border w-full" src={photo.url} />
                </div>
              );
            })}
          </div>
        ))}
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      </div>
    );
  };

  const fetchMethod = async (currentPage) => {
    console.log(currentPage);
    const fetchPhoto = (url) => fetch(url).then((res) => res.json());
    return await Promise.all(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) =>
        fetchPhoto("https://jsonplaceholder.typicode.com/photos/" + i)
      )
    );
  };
  return (
    <div className=" box-content pt-6 mx-auto mb-8  flex-grow flex flex-col max-w-5xl">
      <InfiniteScroller fetchMethod={fetchMethod} renderFunc={showPosts} />
    </div>
  );
}

function convertTo2DArray(arr, rowLength) {
  var result = [];

  for (var i = 0; i < arr.length; i += rowLength) {
    result.push(arr.slice(i, i + rowLength));
  }

  return result;
}

export default Explore;
