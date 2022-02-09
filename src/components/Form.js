import React from "react";
import PropTypes from "prop-types";
import "../css/form.css";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

// import IconButton from "@mui/material/IconButton";
function Form(props) {
  // state = { value: '' }
  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    // this.setState({ value: e.target.value });
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // this.props.addTaskFn(this.state.value);
    props.addTaskFn(value);
    // this.setState({ value: '' });
    setValue("");
  };

  // render() {
  return (
    // <form onSubmit={this.handleSubmit} >
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Nueva tarea"
        variant="outlined"
        type="text"
        className="input"
        placeholder="Agrega una tarea"
        onChange={handleChange}
        value={value}
      />
      <Button onClick={handleSubmit} variant="contained" endIcon={<AddIcon />}>
        Agreagar
      </Button>
    </Box>

    // <form>
    //   <input
    //     type="text"
    //     className="input"
    //     placeholder="Agrega una tarea"
    //     // onChange={this.handleChange}
    //     onChange={handleChange}
    //     // value={this.state.value}
    //     value={value}
    //   />
    //   <Button onClick={handleSubmit} variant="contained">
    //     Contained
    //   </Button>
    // </form>
  );
}

Form.propTypes = {
  addTaskFn: PropTypes.func.isRequired,
};

export default Form;
