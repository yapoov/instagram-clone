import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";

function InfiniteScroller({ fetchMethod, renderFunc }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchData(page);
  }, []);
  const fetchData = async (currentPage) => {
    const newData = await fetchMethod(currentPage);

    console.log(newData);
    setData((prevData) => [...prevData, ...newData]);
  };
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // Increment page number and fetch more data
      setPage((prevPage) => prevPage + 1);
      fetchData(page + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);
  return <>{renderFunc(data)}</>;
}

export default InfiniteScroller;
