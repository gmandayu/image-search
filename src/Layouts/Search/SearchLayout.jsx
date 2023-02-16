import React from "react";
import { Link } from "react-router-dom";
import "./SearchLayout.scss";

const SearchLayout = (props) => {
  const { type, query } = props.match.params;

  const getPage = () => {
    switch (type) {
      case "photos":
        return <SearchPhotos query={query} />;
      case "collections":
        return <SearchCollection query={query} />;
      case "users":
        return <SearchUser query={query} />;
      default:
        return <div style={{ paddingTop: "100px" }}>SEARCH FAILED!</div>;
    }
  };

  return (
    <div className="container">
      <div className="search__Query">
        <h2 className="search__Query__Text">{query}</h2>
      </div>
      <div className="search__Nav">
        <Link to={`/search/photos/${query}`}>
          <div className="search__Nav__Link">
            <span className="search__Nav__Count">123</span>
            <span className="search__Nav__Type">Photos</span>
          </div>
        </Link>

        <Link to={`/search/collections/${query}`}>
          <div className="search__Nav__Link">
            <span className="search__Nav__Count">123</span>
            <span className="search__Nav__Type">Collections</span>
          </div>
        </Link>

        <Link to={`/search/users/{$query}`}>
          <div className="search__Nav__Link">
            <span className="search__Nav__Count">123</span>
            <span className="search__Nav__Type">Users</span>
          </div>
        </Link>
      </div>
      <div> {getPage()}</div>
    </div>
  );
};
export default SearchLayout;
