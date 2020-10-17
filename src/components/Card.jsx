import React from "react";

const Card = (props) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={`border ${props.borderColor} rounded p-3`}>
      <h1 className={`font-bold text-2xl text-center ${props.textColor}`}>
        {numberWithCommas(props.number)}
      </h1>
      <p className={`${props.textColor} text-center`}>{props.type}</p>
    </div>
  );
};

export default Card;
