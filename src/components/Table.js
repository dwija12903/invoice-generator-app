import React from "react";
import './css/Table.css';

export default function Table({ products }) {
  const fixedRowCount = 7;
  const filledProducts = [
    ...products,
    ...Array.from({ length: fixedRowCount - products.length }, () => ({})),
  ];

  return (
    <div className="overflow-x-auto border-t border-b border-black">
      <table id="product-table" className="table-fixed ">
        <thead>
          <tr className="border-b border-black">
            <th id="sr-no" className="w-10 border-r border-black">SR.NO</th>
            <th id="product-name" className="w-64 border-r border-black">Name of Products/Services</th>
            <th id="hsn-code" className="w-24 border-r border-black">HSN Code</th>
            <th id="qty" className="w-24 border-r border-black">QTY</th>
            <th id="rate" className="w-24 border-r border-black">Rate</th>
            <th id="total" className="w-36">Total</th>
          </tr>
        </thead>
        <tbody>
          {filledProducts.map(({ srNo, name, hsnCode, qty, rate, total }, index) => (
            <tr key={index} className="h-10">
              <td className="border-r border-black text-center p-2">{srNo || ""}</td>
              <td id="row-product-name" className="uppercase border-r border-black text-left p-2">{name || ""}</td>
              <td className="border-r border-black text-center p-2">{hsnCode || ""}</td>
              <td className="border-r border-black text-center p-2">
                {qty || ""}
                {qty && <p>No</p>}
              </td>
              <td className="border-r border-black text-center p-2">
                {rate ? `${rate}/-` : ""}
                {rate && <p>Per No</p>}
              </td>
              <td className="text-center p-2">{total ? `${total}=00` : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
