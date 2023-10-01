import React, { useState } from "react";
import searchReq from "../utils";
import Searchbar from "../components/Searchbar";
const loader = async () => {
  const request = await searchReq();
  const results = await request.data.results;
  return results;
};
const results = await loader();
function Result() {
  return (
    <div className="bg-white">
      <div className="flex justify-between w-full p-8">
        <div className="w-1/2">
          <h1>Unsplash</h1>
        </div>
        <div className="w-1/2 p-8">
          <Searchbar />
        </div>
      </div>
      <div className="mx-auto w-[80%] grid grid-flow-row-dense grid-cols-3  gap-4">
        {results &&
          results.map((result) => {
            return <img src={result.urls.raw} className="rounded-sm block" />;
          })}
      </div>
    </div>
  );
}

export default Result;
