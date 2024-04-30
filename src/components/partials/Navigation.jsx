import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className=' p-5 '>
      <ul className=' space-y-4'>
        <li>
          <Link>Dashboard</Link>
        </li>
        <li>
          <Link>Messenger</Link>
        </li>
        <li>
          <Link>Calendar</Link>
        </li>
        <li>
          <Link>Database</Link>
        </li>
        <li>
          <Link>Attendance</Link>
        </li>
        <li>
          <Link>Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
