import React, { Fragment } from "react";

const Card = (promp) => {
  return (
    <Fragment>
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="Robot" src={`https://robohash.org/${promp.id}?200x200`} />
        <div>
          <h2>{promp.name}</h2>
          <p> {promp.email}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
