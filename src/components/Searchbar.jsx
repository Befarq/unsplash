import React, { useState } from "react";
import { Link } from "react-router-dom";

function Searchbar() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="form-control min-w-[80%]">
      <div className="input-group">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Suratlar olamidan izlang…"
          className="input input-bordered min-w-full"
        />
        <Link to={`/result/${searchText}`} className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Searchbar;
