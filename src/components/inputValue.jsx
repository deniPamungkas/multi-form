import React from "react";
import PropTypes from "prop-types";

const InputValue = (props) => {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-2" htmlFor={props.name}>
        {props.name}
      </label>
      <input
        className="h-14 outline-none border-2 px-5 rounded-lg"
        type="text"
        {...props}
      />
    </div>
  );
};

InputValue.propTypes = {
  name: PropTypes.string,
  change: PropTypes.any,
  val: PropTypes.any,
};

export default InputValue;
