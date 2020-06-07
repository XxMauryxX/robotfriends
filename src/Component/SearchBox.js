import React, { Fragment } from "react";

const SearchBox = ({ SearchChange }) => {
  return (
    <Fragment>
      <div className="pa3">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="search robots"
          onChange={SearchChange}
        />
      </div>
    </Fragment>
  );
};

export default SearchBox;
