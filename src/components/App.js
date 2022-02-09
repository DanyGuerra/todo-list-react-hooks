import React from "react";
import "../css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import TodoDetails from "./TodoDetails";
import NotFound from "./NotFound";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Header from "./Header";

function App(props) {
  const [todos, setTodos] = React.useState([]);
  const [show, setShow] = React.useState(true);
  const URL = "http://localhost:4000/todos";

  React.useEffect(() => {
    // setTodos([
    //   { title: "Sesión 1 (JSX)", done: true },
    //   { title: "Sesión 2 (Estado y propiedades)", done: true },
    //   { title: "Sesión 3 (Ciclo de vida)", done: true },
    //   { title: "Sesión 4 (Hooks)", done: false },
    //   { title: "Sesión 5 (Hooks)", done: false },
    //   { title: "Sesión 6 (Rutas)", done: false },
    //   { title: "Sesión 7 (PWA)", done: false },
    //   { title: "Sesión 8 (Material UI)", done: false },
    // ]);
    const getData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setTodos(data);
    };

    getData();
  }, []);

  const handleClickDelete = (e, index) => {
    const t = [...todos];
    t.splice(index, 1);
    setTodos(t);
  };

  const handleClickToggleDone = (e, index) => {
    const el = todos.find((e) => e.id === index);

    const value = !el.done;
    // console.log(value);

    try {
      fetch(`http://localhost:4000/todos/${el.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ done: value }),
      });

      const t = [...todos];
      todos[index].done = !todos[index].done;
      setTodos(t);
    } catch (error) {
      console.error(error);
    }
  };

  const goToBackend = (config, data) => {
    return fetch(config.url, {
      method: config.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const addTask = async (title) => {
    const exists = todos.find((e) => title === e.title);

    if (exists) {
      alert(`La tarea "${title}" ya existe!`);
      return;
    }

    // Cambio en el servidor
    const config = {
      url: "http://localhost:4000/todos",
      method: "POST",
    };

    const data = {
      title: title,
      done: false,
    };

    try {
      const response = await goToBackend(config, data);
      if (!response.ok) throw new Error("Response not ok");

      const todo = await response.json();

      // UI
      setTodos(todos.concat([todo]));
    } catch (error) {
      console.error(error);
    }
  };

  // const filtered = todos.filter((e) => !e.done || e.done === show);

  return (
    <>
      <Router>
        <Header></Header>
        <Container>
          <Grid container alignItems="center" justify="center" className="main">
            <Grid item md={4} sm={6} xs={12} className="wrapper">
              <Switch>
                <Route path="/" exact>
                  <Home
                    todos={todos}
                    show={show}
                    setShow={setShow}
                    handleClickToggleDone={handleClickToggleDone}
                    handleClickDelete={handleClickDelete}
                    addTask={addTask}
                  />
                </Route>
                <Route
                  path="/details/:id"
                  render={(props) => <TodoDetails {...props} url={URL} />}
                />
                <Route component={NotFound} />
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </Router>
    </>
  );
}

export default App;
