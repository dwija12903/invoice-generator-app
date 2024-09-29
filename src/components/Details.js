import React from 'react';
import './css/Details.css';

function Details({ consigneeName, consigneeAdd1, consigneeAdd2, consigneeGST, consigneeState, consigneeStateCode, buyerName, buyerAdd1, buyerAdd2, buyerGST, buyerState, buyerStateCode, invoiceNumber, invoiceDate, deliveryNumber, deliveryDate, orderNumber, orderDate, vehicleNumber, modeOfTransport, transporterName, lrNumber, state, stateCode }) {
    return (
        <>
            {/* Details Section */}
            <div className="flex border-b border-black h-auto">
                <div className="w-5/12 border-r border-black flex-grow flex-shrink">
                    <div id="details-section">
                        <p> Details of consignee/Shipped: </p>
                        <div id="consingee-details">
                            <p className="font-bold">{consigneeName}</p>
                            <p> {consigneeAdd1}</p>
                            <p> {consigneeAdd2}</p>
                            <p>GSTIN :- {consigneeGST}</p>
                        </div>
                    </div>
                    <div id="state-details" className="flex border-t border-b border-black">
                        <div className="w-1/2 border-r border-black"> State: {consigneeState}</div>
                        <div className="w-1/2"> State Code: {consigneeStateCode}</div>
                    </div>
                    <div id="details-section"> Details of Buyer's/Billed to:
                        <div id="buyer-details">
                            <p className="font-bold">{buyerName}</p>
                            <p>{buyerAdd1}</p>
                            <p>{buyerAdd2}</p>
                            <p>GSTIN :- {buyerGST}</p>
                        </div>
                    </div>
                    <div id="state-details" className="flex border-t border-black">
                        <div className="w-1/2 border-r border-black">
                            State: {buyerState}
                        </div>
                        <div className="w-1/2">State Code: {buyerStateCode}</div>
                    </div>
                </div>

                <div className='w-3/5'>
                    <div className="flex border-b border-black">
                        <div id="column-main" className="w-4/6 border-r border-black">
                            Invoice Number:
                            <p className="flex justify-center font-bold">{invoiceNumber}</p>
                        </div>
                        <div id="last-column" className="w-2/6">
                            Dated:-
                            <p className='font-small'>{invoiceDate}</p>
                        </div>
                    </div>

                    <div className="flex border-b border-black">
                        <div id="column-main" className="w-4/6 border-r border-black">Delivery Number:
                            <p className="flex justify-center font-bold">{deliveryNumber}</p>
                        </div>
                        <div id="last-column" className="w-2/6">Dated:-
                            <p className='text-small'>{deliveryDate}</p>
                        </div>
                    </div>

                    <div className="flex border-b border-black">
                        <div id="column-main" className="w-4/6 border-r border-black">
                            Buyer's Order Number:
                            <p>{orderNumber}</p>
                        </div>
                        <div id="last-column" className="w-2/6">
                            Dated:-
                            <p>{orderDate}</p>
                        </div>
                    </div>

                    <div className="flex border-b border-black">
                        <div id="column-main" className="w-4/6 border-r border-black">
                            Vehicle Number:
                            <p>{vehicleNumber}</p>
                        </div>
                        <div id="last-column" className="w-2/6">
                            <div id="ModeOfTransport" className="text-xs">Mode of Transport:</div>
                            <p>{modeOfTransport}</p>
                        </div>
                    </div>

                    <div className="flex border-b border-black">
                        <div id="column-main" className="w-4/6 border-r border-black">
                            Transporter's Name:
                            <p>{transporterName}</p>
                        </div>
                        <div id="last-column" className="w-2/6">
                            LR No./ Dated:
                            <p>{lrNumber}</p>
                        </div>
                    </div>

                    <div className="flex">
                        <div id="column-main" className="w-4/6 border-r border-black">
                            State:
                            <p>{state}</p>
                        </div>
                        <div id="last-column" className="w-2/6 h-auto">
                            State Code:
                            <p>{stateCode}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details
