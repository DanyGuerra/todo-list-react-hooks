import React from "react";
import PropTypes from "prop-types";
import "../css/Checkmark.css";
// import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
// import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";

// original: http://jsfiddle.net/awayF/490/
function Checkmark(props) {
  return (
    // <div onClick={props.toggleFn}>
    //   {props.done ? (
    //     <CheckBoxOutlinedIcon />
    //   ) : (
    //     <CheckBoxOutlineBlankOutlinedIcon />
    //   )}
    // </div>

    <span
      className={`checkmark ${props.done ? "dimmed" : ""}`}
      onClick={props.toggleFn}
    >
      <div className="checkmark_stem" />
      <div className="checkmark_kick" />
    </span>
  );
}

Checkmark.propTypes = {
  done: PropTypes.bool,
  toggleFn: PropTypes.func.isRequired,
};

export default Checkmark;
