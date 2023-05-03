import React from "react";

import "./SearchBar.css";

const SearchBarMobile = () => {
  return (
    <form className="search-bar-mobile">
      <input type="text" placeholder="Search hotels..." />
      <select>
        <option>Any Price</option>
        <option>$0-$100</option>
        <option>$100-$500</option>
        <option>$500+</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBarMobile;
