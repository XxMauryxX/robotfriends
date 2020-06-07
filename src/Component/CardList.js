import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ Robots }) => {
  const cardCount = Robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={Robots[i].id}
        name={Robots[i].name}
        email={Robots[i].email}
      />
    );
  });

  return <Fragment> {cardCount} </Fragment>;
};

export default CardList;
