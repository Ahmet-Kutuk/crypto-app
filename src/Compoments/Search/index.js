import React from "react";
import { SearchBar } from "../../Style/Compoments/Search";
function Search(props) {
  return (
    <>
      <SearchBar onChange={props.action} placeholder="Search.."></SearchBar>
    </>
  );
}

export default Search;
