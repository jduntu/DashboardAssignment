import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPlus, faDownload } from '@fortawesome/free-solid-svg-icons';
import './CustomerHeader.css';

const CustomerHeader = () => {
  return (
    <div className="customer-header">
  <div className="customer-header-left">
    <h2>Customer</h2>
  </div>
  <div className="customer-header-right">
  <button className="btn-download">
      <FontAwesomeIcon icon={faDownload} />
    </button>
    <div className="date-picker">
      <span> <strong>June 22, 2023 </strong>&nbsp;<FontAwesomeIcon icon={faCalendarAlt} /></span>
    </div>
    <button className="btn-add-customer"> Add Customer &nbsp; <FontAwesomeIcon icon={faPlus} /></button>
  </div>
</div>

  );
};

export default CustomerHeader;
