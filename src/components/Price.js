import React from "react";
import convertNumberToWords from './NumbersToWords';
import './css/Price.css';

export default function Price({ total, packingCost, buyerState, buyerStateCode }) {
  const basicAmount = Math.round(total);
  const packing = Math.round(parseFloat(packingCost) || 0);
  const totalTaxableAmount = basicAmount + packing;
  let sgst = 0;
  let cgst = 0;
  let igst = 0;
  let finalTotal = 0;

  const isGujarat = buyerState === "Gujarat" || buyerStateCode === "24" || buyerStateCode === "2 4";

  if (isGujarat) {
    sgst = Math.round(totalTaxableAmount * 0.09);
    cgst = Math.round(totalTaxableAmount * 0.09);
    finalTotal = totalTaxableAmount + sgst + cgst;
  } else {
    igst = Math.round(totalTaxableAmount * 0.18);
    finalTotal = totalTaxableAmount + igst;
  }

  const roundedFinalTotal = Math.round(finalTotal);
  const totalInWords = convertNumberToWords(roundedFinalTotal) + " only.";

  return (
    <div className="flex">
      {isGujarat ? (
        <>
          <div id="details" className="w-1/2 grid grid-row-2">
            <div id="gstin" className="border-b border-black">GSTIN: 24ABEFS8661C1Z7</div>
            <div id="amount-in-words" className="border-b border-black"> Total Invoice Amount In Words:-
              <p>{totalInWords}</p>
            </div>
          </div>
          <div id="details" className="w-1/2 grid grid-row-6 border-l border-black">
            <div className="flex justify-between border-b border-black">
              <div id="price-col-gujarat" className="w-3/5">BASIC AMOUNT</div>
              <div id="price-gujarat" className="w-2/5 border-l border-black text-right">
                {basicAmount}=00
              </div>
            </div>
            <div className="flex justify-between border-b border-black">
              <div id="price-col-gujarat" className="w-3/5">PACKING</div>
              <div id="price-gujarat" className="w-2/5 border-l border-black text-right">
                {packing}=00
              </div>
            </div>
            <div className="flex justify-between border-b border-black">
              <div id="price-col-gujarat" className="w-3/5">TOTAL TAXABLE AMOUNT</div>
              <div id="price-gujarat" className="w-2/5 border-l border-black text-right">
                {totalTaxableAmount}=00
              </div>
            </div>
            <div className="flex justify-between border-b border-black">
              <div id="price-col-gujarat" className="w-3/5">SGST @ 9%</div>
              <div id="price-gujarat" className="w-2/5 border-l border-black text-right">
                {sgst}=00
              </div>
            </div>
            <div className="flex justify-between border-b border-black">
              <div id="price-col-gujarat" className="w-3/5">CGST @ 9%</div>
              <div id="price-gujarat" className="w-2/5 border-l border-black text-right">
                {cgst}=00
              </div>
            </div>
            <div className="flex justify-between border-b border-black font-bold">
              <div id="price-col-gujarat" className="w-3/5">TOTAL AMOUNT</div>
              <div id="price-gujarat" className="w-2/5 border-l border-black text-right">
                {roundedFinalTotal}=00
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div id="details" className="w-1/2 grid grid-row-2">
            <div id="gstin" className="border-b border-black">GSTIN: 24ABEFS8661C1Z7</div>
            <div id="amount-in-words" className="border-b border-black"> Total Invoice Amount In Words:-
              <p>{totalInWords}</p>
            </div>
          </div>
          <div id="details" className="w-1/2 grid grid-row-6 border-l border-black">
            <div className="flex justify-between border-b border-black">
              <div id="price-col" className="w-3/5">BASIC AMOUNT</div>
              <div id="price" className="w-2/5 border-l border-black text-right">
                {basicAmount}=00
              </div>
            </div>
            <div className="flex justify-between border-b border-black">
              <div id="price-col" className="w-3/5">PACKING</div>
              <div id="price" className="w-2/5 border-l border-black text-right">
                {packing}=00
              </div>
            </div>
            <div className="flex justify-between border-b border-black">
              <div id="price-col" className="w-3/5">TOTAL TAXABLE AMOUNT</div>
              <div id="price" className="w-2/5 border-l border-black text-right">
                {totalTaxableAmount}=00
              </div>
            </div>
            <div className="flex justify-between border-b border-black">
              <div id="price-col" className="w-3/5">IGST @ 18%</div>
              <div id="price" className="w-2/5 border-l border-black text-right">
                {igst}=00
              </div>
            </div>
            <div className="flex justify-between border-b border-black font-bold">
              <div id="price-col" className="w-3/5">TOTAL AMOUNT</div>
              <div id="price" className="w-2/5 border-l border-black text-right">
                {roundedFinalTotal}=00
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
