import React, { useEffect, useState } from "react";
import countries from "../resources/countryData.json";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [dropdown, setDropDown] = useState(false);

  useEffect(() => {
    if (searchValue === "") {
      setDropDown(false);
      setData([]);
    } else {
      const filterData = countries.filter((e) =>
        e.name.toUpperCase().startsWith(searchValue)
      );
      setData(filterData);
      setDropDown(true);
    }
  }, [searchValue]);

  return (
    <div className="main-container">
      <h1>Search</h1>
      <div className="search-box">
        <input
          id="input-box"
          type="text"
          onChange={(e) => {
            setSearchValue(e.target.value.toUpperCase());
          }}
          onKeyDown={(e) => {
            e.key === "Escape" ? setDropDown(false) : setDropDown(true);
          }}
        />
        <button id="search-btn" onClick={() => setDropDown(true)}>
          Search
        </button>
      </div>
      <div
        className="drop-down"
        style={{ display: dropdown ? "block" : "none" }}
      >
        {data.map((ele) => {
          return <div key={ele.code}>{ele.name}</div>;
        })}
      </div>
    </div>
  );
};

export default SearchBox;
