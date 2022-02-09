import React from "react";
import PropTypes from "prop-types";
import "../css/header.css";
// import ShowHide from "./ShowHide";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { ClassNames } from "@emotion/react";
function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            className="header"
          >
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Lista de tareas
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

    // <div className="card-header">
    //   <h1 className="card-header-title header">Hay {props.counter} tareas</h1>
    //   <ShowHide show={props.show} toggleDone={props.toggleDone} />
    // </div>
  );
}

Header.propTypes = {
  counter: PropTypes.number,
};

Header.defaultProps = {
  counter: 0,
};

export default Header;
