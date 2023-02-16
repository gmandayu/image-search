import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.svg";
import {
  onlyAlphanumericAndSpace,
  setSearchUrlFriendly,
} from "../../Services/Utils/Utils";

const Header = () => {
  const INITIAL_STATE = {
    query: "",
  };

  const [state, setState] = useState(INITIAL_STATE);
  const onChangeInput = (e) => {
    query = onlyAlphanumericAndSpace(e.target.value);
    setState({ query });
  };

  const onSubmitSearchForm = (e) => {
    e.preventDefault();
    const { query } = state;
    window.location.href = `/search/photos/${setSearchUrlFriendly(query)}`;
  };

  return (
    <div className="header__Container">
      <div className="header__Logo__Wrap">
        <img className="header__Logo" src={logo} />
      </div>
      <form className="header__Search__Form" onSubmit={onSubmitSearchForm}>
        <input
          className="header__Search__Input"
          type="text"
          placeholder="Search..."
          onChange={onChangeInput}
          value={state.query}
        />
      </form>
      <div className="header__Nav">
        <Link to="/">Home</Link>
        <Link to="/collections">Collections</Link>
      </div>
      <div className="header__User_Info">
        <img
          className="header__Avatar"
          alt="avatar"
          src="https://images.unsplash.com/profile-fb-1448295384-79c82d77c0b2.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
        />
      </div>
    </div>
  );
};

export default Header;
