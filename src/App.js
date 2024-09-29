import React from "react";
import ReactToPrint from "react-to-print";
import { useState, useRef } from "react";
import "./index.css";
import Header from "./components/Header";
import Details from "./components/Details";
import logo from "./logo-main.png";
import ProductsTable from "./components/ProductsTable";
import Table from './components/Table';
import Price from "./components/Price";
import Footer from './components/Footer';

function App() {
  const PrintRef = useRef();
  const [showInvoice, setShowInvoice] = useState(false);
  
  // Consignee Details
  const [selectedRow, setSelectedRow] = useState(null);
  const [consigneeName, setConsigneeName] = useState( "");
  const [consigneeAdd1, setConsigneeAdd1] = useState( "");
  const [consigneeAdd2, setConsigneeAdd2] = useState( "");
  const [consigneeState, setConsigneeState] = useState("");
  const [consigneeStateCode, setConsigneeStateCode] = useState( "");
  const [consigneeGST, setConsigneeGST] = useState( "");
  // Buyers Details
  const [buyerName, setBuyerName] = useState( "");
  const [buyerAdd1, setBuyerAdd1] = useState( "");
  const [buyerAdd2, setBuyerAdd2] = useState( "");
  const [buyerState, setBuyerState] = useState( "");
  const [buyerStateCode, setBuyerStateCode] = useState( "");
  const [buyerGST, setBuyerGST] = useState( "");
  // Other Details
  const [invoiceNumber, setInvoiceNumber] = useState( "");
  const [invoiceDate, setInvoiceDate] = useState( "");
  const [deliveryNumber, setDeliveryNumber] = useState( "");
  const [deliveryDate, setDeliveryDate] = useState( "");
  const [orderNumber, setOrderNumber] = useState( "");
  const [orderDate, setOrderDate] = useState( "");
  const [vehicleNumber, setVehicleNumber] = useState( "");
  const [modeOfTransport, setModeOfTransport] = useState("");
  const [transporterName, setTransporterName] = useState("");
  const [lrNumber, setLRNumber] = useState("");
  const [state, setState] = useState("");
  const [stateCode, setStateCode] = useState("");
  // Product Details
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [packingCost, setPackingCost] = useState(0);
  // Bank Details
  const [bankDetails, setBankDetails] = useState({
    BankName: "HDFC Bank",
    accountNumber: "0737256000XXXX",
    ifscCode: "HDFC000XXXX",
    branch: "GIDC, Vapi",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  // Function used in CheckBoxes
  const handleCheckboxChange = (row) => {
    setSelectedRow(row);
  };
  
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <>
            {/* Checkboxes displayed on top of page*/}
            <div className="mb-3">
              <label className="ml-20 mr-20">
                <input type="checkbox" checked={selectedRow === 1} onChange={() => handleCheckboxChange(1)} />Original For Buyer
              </label>
              <label className="mr-20">
                <input type="checkbox" checked={selectedRow === 2} onChange={() => handleCheckboxChange(2)} />
                Duplicate For Transporter
              </label>
              <label>
                <input type="checkbox" checked={selectedRow === 3} onChange={() => handleCheckboxChange(3)}/>
                Triplicate for Supplier
              </label>
            </div>

            {/*Print Section: Main Content */}
            <div
              ref={PrintRef}
              id="main-content"
              className="border-2 border-black h-auto p-3 m-10"
            >
              <div id="inner-border" className="border-t-2 border-l-2 border-r-2 border-black">
                <Header selectedRow={selectedRow} />
                <Details
                  consigneeName={consigneeName}
                  consigneeAdd1={consigneeAdd1}
                  consigneeAdd2={consigneeAdd2}
                  consigneeState={consigneeState}
                  consigneeStateCode={consigneeStateCode}
                  consigneeGST={consigneeGST}
                  buyerName={buyerName}
                  buyerAdd1={buyerAdd1}
                  buyerAdd2={buyerAdd2}
                  buyerState={buyerState}
                  buyerStateCode={buyerStateCode}
                  buyerGST={buyerGST}
                  invoiceNumber={invoiceNumber}
                  invoiceDate={invoiceDate}
                  deliveryNumber={deliveryNumber}
                  deliveryDate={deliveryDate}
                  orderNumber={orderNumber}
                  orderDate={orderDate}
                  vehicleNumber={vehicleNumber}
                  modeOfTransport={modeOfTransport}
                  transporterName={transporterName}
                  lrNumber={lrNumber}
                  state={state}
                  stateCode={stateCode}
                />
                <div className="h-4"> </div>
                <Table
                  products={products}
                  total={total}
                  buyerState={buyerState}
                />
                <Price
                  total={total}
                  packingCost={packingCost}
                  setPackingCost={setPackingCost}
                  buyerState={buyerState}
                  buyerStateCode={buyerStateCode}
                />
                {/* Footer */}
                <Footer
                  bankDetails={bankDetails}
                />
              </div>
            </div>
            {/* Buttons displayed at end of page */}
            <button onClick={() => setShowInvoice(false)}
              className="ml-10 mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
              {" "} Edit Information{" "} </button>
            <ReactToPrint
              trigger={() => (
                <button className="mt-5 ml-96 bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded shadow border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                  Print / Download</button>
              )}content={() => PrintRef.current}
            />
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-between">
                <h1 className="m-10 font-bold font-mono text-2xl text-center">INVOICE GENERATOR APP</h1>
                <img src={logo} alt="logo" style={{ width: "250px", height: "auto" }}/>
              </div>
              <article className="space-y-5 text-sm p-4">
                {/* Consignee Details */}
                <div className="border-2 border-black">
                  <h2 className=" text-xl mb-2 font-mono uppercase text-center">Consignee Details</h2>
                  <div className="grid grid-cols-2 gap-x-10 m-2">
                    <div className="flex flex-col">
                      <label htmlFor="consigneeName">Name:</label>
                      <input type="text" placeholder="Enter Consignee Name" value={consigneeName} onChange={(e) => setConsigneeName(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="consigneeGST">GSTIN:</label>
                      <input type="text" placeholder="Enter GSTIN" value={consigneeGST} onChange={(e) => setConsigneeGST(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="consigneeAdd1">Address :</label>
                      <input type="text" placeholder="Enter Consignee's Address" value={consigneeAdd1} onChange={(e) => setConsigneeAdd1(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="consigneeAdd2">Address (Line 2):</label>
                      <input type="text" placeholder="Enter Consignee's Address Line 2" value={consigneeAdd2} onChange={(e) => setConsigneeAdd2(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="consigneeState"> State:</label>
                      <input type="text" placeholder="Enter Consignee's State" value={consigneeState} onChange={(e) => setConsigneeState(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="consigneeStateCode">State Code:</label>
                      <input type="text" placeholder="Enter Consignee's State Code" value={consigneeStateCode} onChange={(e) => setConsigneeStateCode(e.target.value)}/>
                    </div>
                  </div>
                </div>
                {/* Buyer Details */}
                <div className="border-2 border-black p-3">
                  <h2 className="text-xl mb-2 font-mono uppercase text-center">Buyer's Details</h2>
                  <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex flex-col">
                      <label htmlFor="buyerName">Name:</label>
                      <input type="text" placeholder="Enter Buyer Name" value={buyerName} onChange={(e) => setBuyerName(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="buyerGST">GSTIN:</label>
                      <input type="text" placeholder="Enter Buyer's GSTIN" value={buyerGST} onChange={(e) => setBuyerGST(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="buyerAdd1">Address</label>
                      <input type="text" placeholder="Enter Buyer's Address" autoComplete="off" value={buyerAdd1} onChange={(e) => setBuyerAdd1(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="buyerAdd2">Address (Line 2):</label>
                      <input type="text" placeholder="Enter Buyer's Address Line 2" autoComplete="off" value={buyerAdd2} onChange={(e) => setBuyerAdd2(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="buyerState">State:</label>
                      <input type="text" placeholder="Enter Buyer's State" autoComplete="off" value={buyerState} onChange={(e) => setBuyerState(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="buyerStateCode">State Code:</label>
                      <input type="text" placeholder="Enter Buyer's State Code" autoComplete="off" value={buyerStateCode} onChange={(e) => setBuyerStateCode(e.target.value)}/>
                    </div>
                  </div>
                </div>
                {/* All Details */}
                <div className="border-2 border-black p-3">
                  <h2 className="text-xl mb-2 font-mono uppercase text-center">All Details</h2>
                  <div className="grid grid-cols-3 gap-10">
                    {/* Invoice Details */}
                    <div className="flex flex-col">
                      <label htmlFor="invoiceNumber">Invoice Number:</label>
                      <input type="text" placeholder="Enter Invoice Number" autoComplete="off" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="deliveryNumber">Delivery Number:</label>
                      <input type="text" placeholder="Enter Delivery Number" autoComplete="off" value={deliveryNumber} onChange={(e) => setDeliveryNumber(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="orderNumber">Buyer's Order Number:</label>
                      <input
                        type="text"
                        placeholder="Enter Order Number"
                        autoComplete="off"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-10">
                    <div className="flex flex-col">
                      <label htmlFor="invoiceDate">Invoice Date:</label>
                      <input
                        type="date"
                        placeholder="Enter Invoice Date"
                        autoComplete="off"
                        value={invoiceDate}
                        onChange={(e) => setInvoiceDate(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="deliveryDate">Delivery Date:</label>
                      <input
                        type="date"
                        placeholder="Enter Delivery Date"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="orderDate">Order Date:</label>
                      <input
                        type="date"
                        placeholder="Enter Order Date"
                        autoComplete="off"
                        value={orderDate}
                        onChange={(e) => setOrderDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-10">
                    <div className="flex flex-col">
                      <label htmlFor="vehicleNumber">Vehicle Number:</label>
                      <input
                        type="text"
                        placeholder="Enter Vehicle Number"
                        value={vehicleNumber}
                        onChange={(e) => setVehicleNumber(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="modeOfTransport">
                        Mode of Transport:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Mode of Transport"
                        autoComplete="off"
                        value={modeOfTransport}
                        onChange={(e) => setModeOfTransport(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="transporterName">
                        Transporter's Name:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Transporter's Name"
                        autoComplete="off"
                        value={transporterName}
                        onChange={(e) => setTransporterName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="lrNumber">LR Number:</label>
                      <input
                        type="text"
                        placeholder="Enter LR Number"
                        autoComplete="off"
                        value={lrNumber}
                        onChange={(e) => setLRNumber(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="state">State:</label>
                      <input
                        type="text"
                        placeholder="Enter State"
                        autoComplete="off"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="stateCode">State Code:</label>
                      <input
                        type="text"
                        placeholder="Enter State Code"
                        autoComplete="off"
                        value={stateCode}
                        onChange={(e) => setStateCode(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* Bank Details */}
              <div className="border-2 border-black p-3">
                    <h2 className="text-xl mb-3 font-mono uppercase text-center">Bank Details</h2>
                    <div className="grid grid-cols-4 gap-x-5">
                      <div className="flex flex-col">
                        <label htmlFor="BankName">Bank Name:</label>
                        <input
                          type="text"
                          name="BankName"
                          value={bankDetails.BankName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="accountNumber">Account Number:</label>
                        <input
                          type="text"
                          name="accountNumber"
                          value={bankDetails.accountNumber}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="ifscCode">IFSC Code:</label>
                        <input
                          type="text"
                          name="ifscCode"
                          value={bankDetails.ifscCode}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="branch">Branch:</label>
                        <input
                          type="text"
                          name="branch"
                          value={bankDetails.branch}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                {/* Products Details */}
                <div className="border-2 border-black p-3">
                  <h2 className="text-xl font-mono uppercase text-center">Product Details</h2>
                  <ProductsTable
                    products={products}
                    setProducts={setProducts}
                    total={total}
                    setTotal={setTotal}
                    packingCost={packingCost}
                    setPackingCost={setPackingCost}
                    buyerState={buyerState}
                    buyerStateCode={buyerStateCode}
                  />
                </div>
              </article>

              <button onClick={() => {setShowInvoice(true);}}
                className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                Preview Invoice</button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
export default App;