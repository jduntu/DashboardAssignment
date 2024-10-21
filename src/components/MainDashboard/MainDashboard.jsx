import React from 'react';
import './MainDashboard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faFilter,faSearch } from "@fortawesome/free-solid-svg-icons";  

const MainDashboard = () => {
  return (
    <div className="dashboard-container">
      <section className="customer-list-section">
        <h2>Customer List</h2>
        <div className="customer-list-filters">
          <button className="filter-btn active"><strong>All time</strong>&nbsp;<FontAwesomeIcon icon={faXmark} /></button>
          <button className="filter-btn"><strong>Team Plan</strong>&nbsp;<FontAwesomeIcon icon={faXmark} /></button>
          <button className="filter-btn"><strong>Active</strong>&nbsp;<FontAwesomeIcon icon={faXmark} /></button>
          <button className="filter-btn"><strong>More filters</strong>&nbsp;<FontAwesomeIcon icon={faFilter} /></button>
          <div>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="search" placeholder="Search" className="search-input"/>
          </div>

        </div>
        <table className="customer-list">
          <thead>
            <tr>
              <th>Full Name - Email</th>
              <th>Billing Date</th>
              <th>Plan</th>
              <th>Amount</th>
              <th>Total Users</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Caden Morse</td>
              <td>June 12, 2023</td>
              <td>Team</td>
              <td>$5,000/year</td>
              <td>10 Users</td>
              <td><a href="#">View Details</a></td>
            </tr>
            <tr>
              <td>Santino Marsh</td>
              <td>June 12, 2023</td>
              <td>Team</td>
              <td>$19,000/year</td>
              <td>44 Users</td>
              <td><a href="#">View Details</a></td>
            </tr>
            <tr>
              <td>Kristin Zavola</td>
              <td>June 12, 2023</td>
              <td>Team</td>
              <td>$14,000/year</td>
              <td>32 Users</td>
              <td><a href="#">View Details</a></td>
            </tr>
            <tr>
              <td>Kristin Williams</td>
              <td>June 12, 2023</td>
              <td>Team</td>
              <td>$5,700/year</td>
              <td>12 Users</td>
              <td><a href="#">View Details</a></td>
            </tr>
            <tr>
              <td>Cannon Paul</td>
              <td>June 12, 2023</td>
              <td>Team</td>
              <td>$7,200/year</td>
              <td>18 Users</td>
              <td><a href="#">View Details</a></td>
            </tr>
            <tr>
              <td>Marlee Merritt</td>
              <td>June 12, 2023</td>
              <td>Team</td>
              <td>$13,800/year</td>
              <td>30 Users</td>
              <td><a href="#">View Details</a></td>
            </tr>
          </tbody>
        </table>
        <div className="pagination">
          <button className="pagination-btn"><strong>Previous</strong></button>
          <button className="pagination-btn"><strong>1</strong></button>
          <button className="pagination-btn active"><strong>2</strong></button>
          <button className="pagination-btn"><strong>3</strong></button>
          <button className="pagination-btn">...</button>
          <button className="pagination-btn"><strong>8</strong></button>
          <button className="pagination-btn"><strong>9</strong></button>
          <button className="pagination-btn"><strong>Next</strong></button>
        </div>
      </section>
    </div>
  );
}

export default MainDashboard;
