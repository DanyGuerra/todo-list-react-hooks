import Form from "./Form";
import TodoList from "./TodoList";
import PropTypes from "prop-types";
import ShowHide from "./ShowHide";

const Home = (props) => {
  return (
    <>
      <div className="card-header">
        <h1 className="card-header-title header">
          Hay {props.todos.length} tareas
        </h1>
        <ShowHide show={props.show} toggleDone={props.setShow} />
      </div>
      <TodoList
        tasks={props.todos}
        show={props.show}
        toggleFn={props.handleClickToggleDone}
        deleteFn={props.handleClickDelete}
      />
      <Form addTaskFn={props.addTask} />
    </>
  );
};

Home.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  handleClickToggleDone: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};
export default Home;
