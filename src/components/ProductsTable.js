import React, { useState, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function ProductsTable({ products, setProducts, total, setTotal, packingCost, setPackingCost, buyerState, buyerStateCode }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    srNo: "",
    name: "",
    hsnCode: "",
    qty: "",
    rate: "",
    total: "",
  });
  const [finalTotal, setFinalTotal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentProduct.name || !currentProduct.hsnCode || !currentProduct.qty || !currentProduct.rate) {
      alert("Please fill in all the Product Details");
    } else {
      const newProduct = {
        ...currentProduct,
        total: currentProduct.qty * currentProduct.rate,
      };

      if (isEditing) {
        setProducts(products.map((product) => product.srNo === currentProduct.srNo ? newProduct : product));
      } else {
        setProducts([
          ...products, { ...newProduct, srNo: products.length + 1 },
        ]);
      }
      setCurrentProduct({ srNo: "", name: "", hsnCode: "", qty: "", rate: "", total: "", });
      setIsEditing(false);
    }
  };

  useEffect(() => {
    const sum = products.reduce((acc, product) => acc + product.total, 0);
    setTotal(sum);
  }, [products, setTotal]);

  useEffect(() => {
    const basicAmount = Math.round(total);
    const packing = Math.round(parseFloat(packingCost) || 0); // Ensure packingCost is treated as a number and rounded
    const totalTaxableAmount = basicAmount + packing;
    let sgst = 0;
    let cgst = 0;
    let igst = 0;

    const isGujarat = buyerState === "Gujarat" || buyerStateCode === "24" || buyerStateCode === "2 4";

    if (isGujarat) {
      sgst = Math.round(totalTaxableAmount * 0.09);
      cgst = Math.round(totalTaxableAmount * 0.09);
      setFinalTotal(totalTaxableAmount + sgst + cgst);
    } else {
      igst = Math.round(totalTaxableAmount * 0.18);
      setFinalTotal(totalTaxableAmount + igst);
    }
  }, [total, packingCost, buyerState, buyerStateCode]);

  const editRow = (srNo) => {
    const editingProduct = products.find((product) => product.srNo === srNo);
    setCurrentProduct(editingProduct);
    setIsEditing(true);
  };

  const deleteRow = (srNo) => {
    setProducts(products.filter((product) => product.srNo !== srNo));
  };

  const basicAmount = Math.round(total);
  const packing = Math.round(parseFloat(packingCost) || 0); // Ensure packingCost is treated as a number and rounded
  const totalTaxableAmount = basicAmount + packing;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name">Name of Product/Service</label>
          <input type="text" placeholder="Enter Name of Product" value={currentProduct.name} onChange={(e) =>
            setCurrentProduct({ ...currentProduct, name: e.target.value })} />
        </div>
        <div className="md:grid grid-cols-3 gap-6 mt-4">
          <div className="flex flex-col">
            <label htmlFor="hsnCode">HSN Code</label>
            <input
              type="text"
              placeholder="Enter HSN Code"
              value={currentProduct.hsnCode}
              onChange={(e) =>
                setCurrentProduct({
                  ...currentProduct,
                  hsnCode: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="qty">QTY</label>
            <input
              type="number"
              placeholder="Enter QTY"
              value={currentProduct.qty}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, qty: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rate">Rate</label>
            <input
              type="number"
              placeholder="Enter Rate"
              value={currentProduct.rate}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, rate: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex m-3 items-center justify-between">
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              {isEditing ? "Edit Product" : "Add Product"}
            </button>
          </div>
          <div>
            <span className="font-bold">Packing Cost: </span>
            <input
              type="number"
              value={packingCost}
              onChange={(e) => setPackingCost(e.target.value)}
            />
          </div>
        </div>
      </form>

      {/* Table Items */}
      <table width="100%" className="border border-grey-100 mb-7">
        <thead>
          <tr className="bg-gray-100 p-1 border-b border-black text-center">
            <td className="font-bold border-r border-black w-12">SR.NO</td>
            <td className="font-bold border-r border-black w-64">
              Name of Products/Services
            </td>
            <td className="font-bold border-r border-black w-24">HSN Code</td>
            <td className="font-bold border-r border-black w-16">QTY</td>
            <td className="font-bold border-r border-black w-16">Rate</td>
            <td className="font-bold border-r border-black w-24">Total</td>
            <td className="font-bold w-24">Actions</td>
          </tr>
        </thead>
        <tbody>
          {products.map(({ srNo, name, hsnCode, qty, rate, total }) => (
            <tr key={srNo}>
              <td className="border-r border-b border-black w-12 text-center">{srNo}</td>
              <td className="border-r border-b border-black w-64 text-center">{name}</td>
              <td className="border-r border-b border-black w-24 text-center">{hsnCode}</td>
              <td className="border-r border-b border-black w-16 text-center">{qty} <p>No</p></td>
              <td className="border-r border-b border-black w-16 text-center">{rate}/- <p>Per No</p></td>
              <td className="border-b border-r border-black w-24 text-center">{total}</td>
              <td className="border-b border-black w-24 text-center">
                <button onClick={() => editRow(srNo)}>
                  <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                </button>
                <button onClick={() => deleteRow(srNo)}>
                  <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* GST Details */}
      <div className="text-right">
        <div className="text-gray-800 text-base font-bold">
          Total: {total.toLocaleString()}
        </div>
        <div className="text-gray-800 text-base font-bold">
          Packing Cost: {packingCost.toLocaleString()}
        </div>
        <div className="text-gray-800 text-base font-bold">
          Total Taxable Amount: {totalTaxableAmount.toLocaleString()}
        </div>
          
        <div className="text-gray-800 text-base font-bold">
          Final Total: {finalTotal.toLocaleString()}
        </div>
      </div>
    </>
  );
}
