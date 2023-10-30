import React from 'react'
import PropTypes from 'prop-types'

const Btn = (props) => {
  return (
    <button className={`${props.className} w-36 h-12  rounded-lg text-lg`} onClick={props.onclick}>
        {props.btn}
    </button>
  )
}

Btn.propTypes={
    btn:PropTypes.string,
    className:PropTypes.string,
    onclick:PropTypes.any
}

export default Btn