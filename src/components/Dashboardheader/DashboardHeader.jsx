import React from 'react';
import './DashboardHeader.css';
import profileImage from '../../assets/profile.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faCaretDown } from "@fortawesome/free-solid-svg-icons";  

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <div className="logo">ORGANIZED</div>

      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="search" placeholder="Search..." className="search-bar" />
      </div>

      <div className="user-profile">
        <FontAwesomeIcon icon={faBell} className="notification-icon" />
        <img src={profileImage} alt="Profile" />
        <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
      </div>
    </header>
  );
};

export default DashboardHeader;
