import React from "react";
import { NavLink } from "react-router-dom";
import sidebarData from "../data/SidebarData";
import logo from '../assets/Tech.jpg';
import '../components/styles/Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className="sidebar-header">
                <img src={logo} alt="Logo" className="sidebar-logo" />
                <span className="sidebar-title">EletroMarket</span>
            </div>

            <ul className='nav-list'>
                {sidebarData.map((item, index) => {
                    return (
                        <li className='nav-item' key={index}>
                            <NavLink 
                                to={item.path} 
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            >
                                <div className='nav-link-icon'>{item.icon}</div>
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;
