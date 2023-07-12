import React from 'react';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Task 1
            </NavLink>
          </li>
          <li>
            <NavLink to="/task2" activeClassName="active">
              Task 2
            </NavLink>
          </li>
          <li>
            <NavLink to="/task3" activeClassName="active">
              Task 3
            </NavLink>
          </li>
          <li>
            <NavLink to="/task4" activeClassName="active">
              Task 4
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }

  export default Navbar;
  