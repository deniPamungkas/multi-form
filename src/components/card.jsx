import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div
      name={props.name}
      id={props.id}
      onClick={props.onclick}
      className={`${props.aktif? "active border-blue-400 bg-blue-50":""} ${props.month? "h-44":"h-48"} card w-40 border-2 flex flex-col justify-between rounded-xl px-5 py-6 cursor-pointer`}
    >
      <div>
        <img src={props.ikon} alt="icon" />
      </div>
      <div>
        <h1 className="font-semibold">{props.menu}</h1>
        <p className="text-gray-400">
          ${props.price}/{props.month ? "Mo" : "Yr"}
        </p>
        {
          props.month? null: <p>2 months free</p>
        }
      </div>
    </div>
  );
};

Card.propTypes = {
  ikon: PropTypes.string,
  menu: PropTypes.string,
  name: PropTypes.string,
  month: PropTypes.bool,
  aktif: PropTypes.bool,
  onclick: PropTypes.any,
  price: PropTypes.number,
  id: PropTypes.number,
};

export default Card;
