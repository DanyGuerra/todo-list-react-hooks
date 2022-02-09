import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import "../css/TodoList.css";
import List from "@mui/material/List";
function TodoList(props) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {props.tasks.map(
        (e, i) =>
          (!e.done || props.show) && (
            <Todo
              id={e.id}
              key={i}
              done={e.done}
              title={e.title}
              deleteFn={(e) => props.deleteFn(e, i)}
              toggleFn={(e) => props.toggleFn(e, i)}
            />
          )
      )}
    </List>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.array,
  deleteFn: PropTypes.func.isRequired,
  toggleFn: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  tasks: [],
};

export default TodoList;
