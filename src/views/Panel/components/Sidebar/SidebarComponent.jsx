import React, { PureComponent } from 'react';
import './SidebarStyles.scss';
import { Link } from "react-router-dom";

class SidebarComponent extends PureComponent {
  render() {
    return (
      <aside className="sidebar">
        I'm sidebar

        <ul>
          <li key="1">
            <Link to="/panel/dashboard">Dashboard</Link>
          </li>
          <li key="2">
            <Link to="/panel/panel-page-1">Panel Page 1</Link>
          </li>
        </ul>
      </aside>
    );
  }
}

export default SidebarComponent;
