import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="navbar-search">
      <div className="navbar-search-items">Anywhere</div>
      <div className="navbar-search-items">Any Week</div>
      <div className="navbar-search-items">Add Guests</div>
      <div className="navbar-search-icon">
        <BiSearch />
      </div>
    </div>
  );
};

export default Search;
