import React from 'react';
import './CustomerSummary.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPeopleGroup, faUser } from "@fortawesome/free-solid-svg-icons";

const CustomerSummary = () => {
    return (
        <div className="customer-summary">
            <header className="summary-header">
                <div className="summary-card">
                    <h3><FontAwesomeIcon icon={faUsers} className="icon1" />Total Customers</h3>
                    <hr className="divider" />
                    <p>470</p>
                    <span className="growth positive">
                        <span className="growth-value">+3.90%</span> from last week
                    </span>
                </div>

                <div className="summary-card">
                    <h3><FontAwesomeIcon icon={faPeopleGroup} className="icon2" />Team Plan</h3>
                    <hr className="divider" />
                    <p>17</p>
                    <span className="growth positive">
                        <span className="growth-value">+3.90%</span> from last week
                    </span>
                </div>

                <div className="summary-card">
                    <h3><FontAwesomeIcon icon={faUsers} className="icon3" />Basic Plan</h3>
                    <hr className="divider" />
                    <p>63</p>
                    <span className="growth positive">
                        <span className="growth-value">+3.90%</span> from last week
                    </span>
                </div>

                <div className="summary-card">
                    <h3><FontAwesomeIcon icon={faUser} className="icon4" />Pelanggan berhenti</h3>
                    <hr className="divider" />
                    <p>4</p>
                    <span className="growth negative">
                        <span className="decrease-value">-2.90%</span> from last week
                    </span>
                </div>
            </header>
        </div>
    );
};

export default CustomerSummary;
