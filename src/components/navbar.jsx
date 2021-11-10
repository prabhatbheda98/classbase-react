import { React, Component } from 'react';
import { NavLink } from "react-router-dom";

class navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <NavLink exact to="/" className="navbar-brand mx-5">Todo App [Class]</NavLink>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/todos">Todo List</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/add">Add Todo</NavLink>
          </li>
        </div>
      </nav>
    );
  }
}

export default navbar;
