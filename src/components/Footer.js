import React from 'react';
import './css/Footer.css';

const Footer = ({ bankDetails }) => {
  return (
    <div className="flex border-b border-black">
      <div id="main-bank" className='flex-1 w-1/2 border-r border-black'>
        <p><strong>Name</strong> :- {bankDetails.BankName}</p>
        <p><strong>A/c No</strong> :- {bankDetails.accountNumber}</p>
        <p><strong>IFSC Code</strong> :- {bankDetails.ifscCode}</p>
        <p><strong>Branch</strong> :- {bankDetails.branch}</p>
      </div>
      <div id="main" className="w-1/2 text-center">
        <p><strong>For, Swastik Paper Machinery,</strong></p>
        <br/>
        <br/>
        <p><strong>Partner.</strong></p>
      </div>
    </div>
  );
};

export default Footer;
