import React, { useState } from 'react';
import './NavigationMenu.css';
import flagImage from '../../assets/flag.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavigationMenu = () => {
    const [activeItem, setActiveItem] = useState("Dashboard");

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
      <nav className="navigation-menu">
        <ul>
          {["Dashboard", "Statistik", "Product", "Customer", "Review", "Settings"].map((item) => (
            <li
              key={item}
              className={activeItem === item ? "active" : ""}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="language-toggle">
          <img src={flagImage} alt="Language" /> EN&nbsp;
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </nav>
    );
};

export default NavigationMenu;
