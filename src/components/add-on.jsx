import React, { useRef, useState } from "react";
import PropTypes from "prop-types"

const AddOn = ({name,desc,price,month,klik, id}) => {
  const [act, setAct] = useState(false);
  return (
    <div
      className={`${
        act ? "border-blue-400 bg-blue-50" : ""
      } border-2 rounded-md  h-24 flex items-center justify-between px-5`}
    >
      <input
        className="w-5 h-5"
        type="checkbox"
        name={name}
        id={id}
        onChange={(e)=>{
          setAct(cur=>!cur)
          klik(e.target.id)
        }
        }
      />
      <div className="w-4/5 pl-1 h-full flex flex-col justify-center">
        <h1 className="font-bold">{name}</h1>
        <p className="text-gray-400">{desc}</p>
      </div>
      <p className="w-auto text-blue-500">${price}/{month? "Mo": "Yr"}</p>
    </div>
  );
};

AddOn.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  price:PropTypes.number,
  id:PropTypes.number,
  klik:PropTypes.any,
  month:PropTypes.bool
}

export default AddOn;
