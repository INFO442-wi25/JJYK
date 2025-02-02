import '../index.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

export function HeaderBar({}){

    const [showMenu, setShowMenu] = useState(false);

    return (
    <header>
      <div className="navBar">
        <ul className="menu">
          <li className="menu_item">
            <Link to="/">Students</Link>
          </li>
          <li className="menu_item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="menu_button">
            <div className="profile-menu">
              <button className="users" onClick={() => setShowMenu(!showMenu)}>
                <img src='/' alt="person" />
              </button>
                <ul className={`submenu ${showMenu ? 'show' : ''}`}>
                  <li className="profile">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="projects">
                    <Link to="/myProjects">Projects</Link>
                  </li>
                  <li className="group">
                    <a href="group.html">Group</a>
                  </li>
                  <li className="logout">
                    <a href="logout.html">Logout</a>
                  </li>
                </ul>
            </div>
          </li>
        </ul>
      </div>
    </header>
    );
}

