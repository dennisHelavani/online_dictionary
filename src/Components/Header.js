import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { InputContext } from "../App";

const Header = () => {
  const [value, setValue] = useState("");
  const { inputValue, setInputValue } = useContext(InputContext);
  const handleInputChange = (e) => setValue(e.target.value);
  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="head-container">
      <div className="dictionary-head-name">
        <h1>DICTIONARY</h1>
      </div>
      <div className="dictionary-search">
        <input
          type="text"
          className="dictionary-search-input"
          placeholder="Type your word"
          onChange={handleInputChange}
          value={value}
        />
        <Link to={value}>
          <button className="dictionary-search-btn" onClick={handleSubmit}>
            SEARCH
          </button>
        </Link>
      </div>
      {/* {inputValue && (
        <h3 className="searched-word">
          Result for: <span>{inputValue}</span>
        </h3>
      )} */}
    </div>
  );
};

export default Header;
