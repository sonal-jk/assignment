import React from 'react';
import '../../index.css';
const VerticalNavbar = () => {
    return (
        <nav className="bg-[#0096ff] text-white w-[60%] h-screen max-w-[200px] text-[20px]">
        <ul className="flex flex-col">
          <li className="px-[30px] py-2 hover:bg-white hover:rounded-lg group">
            <a className="text-white group-hover:text-[#0096ff]" href="#">Dashboard</a>
          </li>
          <li className="px-[30px] py-2 hover:bg-white hover:rounded-lg group">
            <a className="text-white group-hover:text-[#0096ff]" href="#">My Courses</a>
          </li>
          <li className="px-[30px] py-2 hover:bg-white hover:rounded-lg group">
            <a className="text-white group-hover:text-[#0096ff]" href="#">Messages</a>
          </li>
          <li className="px-[30px] py-2 hover:bg-white hover:rounded-lg group">
            <a className="text-white group-hover:text-[#0096ff]" href="#">Reports</a>
          </li>
          <li className="px-[30px] py-2 hover:bg-white hover:rounded-lg group">
            <a className="text-white group-hover:text-[#0096ff]" href="#">Settings</a>
          </li>
        </ul>
      </nav>
      
    );
};
export default VerticalNavbar;