import React from "react";

const Card = ({ name, dept, rating }) => {
  return (
    <div className="card">
      <span className="UserData">Name : {name}</span>
      <span> | </span>
      <span className="UserData"> Department : {dept}</span>
      <span> | </span>
      <span className="UserData"> Rating : {rating}</span>
    </div>
  );
};

export default Card;