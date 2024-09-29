# 🚀 Invoice Generator App

An intuitive and dynamic Invoice Generator App built using **React**. This app enables users to create, preview, and print professional invoices seamlessly, with customizable fields for consignees, buyers, products, and bank details.

---

## 🌟 Features

- **📝 Dynamic Form Inputs**: Easily enter and update consignee, buyer, and product details with real-time preview.
- **🔄 Toggle Preview**: Switch between the **Invoice Form** and a **Preview Mode** to review changes before printing.
- **➕ Add Multiple Products**: Manage multiple products/services, and automatically calculate totals.
- **💸 Total Calculations**: Built-in pricing calculations, including subtotal, taxes, packing charges, etc.
- **🖨️ Print-Ready**: Integrated with `react-to-print` to allow easy printing or saving invoices as PDFs.
- **✅ Invoice Copy Selector**: Select and print different invoice copies (e.g., original for buyer, duplicate for transporter).

---

## 🛠️ Project Structure

This app follows a clean and modular architecture, ensuring easy maintenance and scalability.

### 🗂️ Folder Structure

```bash
.
├── public
│   ├── logo-main.png   # The application logo used in the header
├── src
│   ├── components      # Contains all individual React components
│   │   ├── Header.js       # Renders the header section
│   │   ├── Details.js      # Displays consignee and buyer details
│   │   ├── ProductsTable.js # Manages and displays product details
│   │   ├── Table.js        # Presents product information in table format
│   │   ├── Price.js        # Handles price calculations and display
│   │   └── Footer.js       # Renders the footer with bank details
│   ├── App.js           # Main app logic with state management and rendering
│   ├── index.js         # App entry point
│   ├── index.css        # Styling for the app
└── README.md            # Project documentation
```

---

## 🧩 Key Components

### `App.js`
- **Core Logic & State Management**: This file serves as the central point, managing all states like:
  - **Consignee Details**: `useState` to manage consignee name, address, state, and GSTIN.
  - **Buyer Details**: Manages buyer’s details such as name, address, and GSTIN.
  - **Invoice & Product Information**: Invoice numbers, product list, pricing, and date fields.
  - **Bank Information**: Holds data related to bank details, such as IFSC, account number, and branch.

### `ProductsTable.js`
- **Product Management**: Manages a list of products that includes product name, quantity, and price.
- **Total Calculations**: Automatically calculates totals based on product price and quantity.
  
### `Price.js`
- **Price Display**: Displays the subtotal, taxes, packing costs, and the final amount.
- **Dynamic Calculations**: Updates as the user adds or removes products.

### `Header.js`
- **Branding & Logo**: Displays the app’s logo (imported from `logo-main.png`) and the title in the invoice.

### `Footer.js`
- **Bank Details**: Displays bank details for transactions and ensures the footer is consistent across all invoice copies.

---

## 📦 Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version >= 14)
- **npm** or **yarn**

### Steps to Install and Run the App:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/invoice-generator-app.git
   cd invoice-generator-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open the app in the browser:
   ```
   http://localhost:3000
   ```

---

## 🛡️ Future Enhancements

While the app is feature-complete, here are some potential improvements:

- **Validation for Input Fields**: Ensure all fields like GSTIN, email, and product details are correctly formatted.
- **Export to PDF**: Add functionality to download the invoice directly as a PDF without using the browser’s print function.
- **Database Integration**: Save and retrieve previous invoices from a backend.
- **Multi-language Support**: Add options for generating invoices in multiple languages.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎯 Conclusion

This Invoice Generator App is a robust and user-friendly solution for creating invoices quickly and professionally. Built with **React**, it ensures flexibility, and scalability and provides a seamless experience for managing invoicing needs.

Feel free to reach out if you have any questions or suggestions!

💡 **Happy Invoicing!**