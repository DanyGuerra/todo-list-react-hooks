import React from "react";
import PropTypes from "prop-types";
import "../css/Todo.css";
// import Checkmark from "./Checkmark";
import { useHistory } from "react-router";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";

// class Todo extends React.Component {
function Todo(props) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/details/${props.id}`);
  };

  return (
    <ListItem
      key={props.id}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={(e) => props.deleteFn(e)}
        >
          <DeleteIcon></DeleteIcon>
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={props.done}
            onClick={(e) => props.toggleFn(e)}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": props.id }}
          />
        </ListItemIcon>
        <ListItemText
          id={props.id}
          primary={props.title}
          onClick={handleClick}
        />
      </ListItemButton>
      {/* <div className={`list-item ${props.done ? "done" : ""}`}>
        <span onClick={handleClick}>{props.title}</span>
        <div className="is-pulled-right">
          <Checkmark
            // toggleFn={this.props.toggleFn}
            toggleFn={props.toggleFn}
            // done={this.props.done}
            done={props.done}
          />
        </div>
      </div> */}
    </ListItem>
  );
  // }
}

Todo.propTypes = {
  deleteFn: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  toggleFn: PropTypes.func.isRequired,
};

export default Todo;
