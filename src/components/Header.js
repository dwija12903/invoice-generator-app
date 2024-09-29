import React from 'react'
import "./css/Header.css";

function Header({selectedRow}) {
  return (
    <>
      <div id="header" className="flex border-b border-black">
        {/* Invoice heading */}
        <div
          id="invoice-section"
          className="h-auto w-3/5 border-r border-black flex justify-center items-center"
        >
          <h1 className="uppercase font-bold">Invoice</h1>
        </div>
        {/* Table */}
        <div id="table-section" className="flex-1">
          <table className="w-full h-full">
            <tbody>
              <tr
                className={`border-b border-black ${
                  selectedRow === 1 ? "font-bold" : ""
                }`}
              >
                <td className="w-6 text-center">{selectedRow === 1 ? "√" : ""}</td>
                <td className="w-32 border-l border-black text-center text-sm">
                  Original For Buyer
                </td>
              </tr>
              <tr
                className={`border-b border-black ${
                  selectedRow === 2 ? "font-bold" : ""
                }`}
              >
                <td className='text-center'>{selectedRow === 2 ? "√" : ""}</td>
                <td className="border-l border-black text-center text-sm">
                  Duplicate For Transporter
                </td>
              </tr>
              <tr className={` ${selectedRow === 3 ? "font-bold" : ""}`}>
                <td className='text-center'>{selectedRow === 3 ? "√" : ""}</td>
                <td className="border-l border-black text-center text-sm">
                  Triplicate for Supplier
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Header
