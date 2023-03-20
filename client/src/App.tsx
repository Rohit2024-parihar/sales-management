import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import HsnDetails from "./components/hsnDetails/HsnDetails";
import TabsView from "./common-component/TabsView";
import NotificationBar from "./common-component/NotificationBar";
import CompanyDetails from "./components/company/CompanyDetails";
import OrderForm from "./components/VendorDetails/OrderForm/OrderForm";
import ProductDetailSetup from "./components/ProductDeatils/ProductDetailSetup";
import AddVendor from "./components/VendorDetails/Add-Vendor/AddVendor";

// we are using toast because snack bar in mui doest provide notification stack (inotstack can be used)
//
const tabs: any = [
  {
    label: "HSN",
    value: "1",
    content: <HsnDetails />,
  },
  {
    label: "Company",
    value: "2",
    content: <CompanyDetails />,
  },
  {
    label: "Medical Details",
    value: "3",
    content: <ProductDetailSetup />,
  },
  {
    label: "Vendor Details",
    value: "4",
    content: <AddVendor />,
  },
  {
    label: "Create Invoice",
    value: "5",
    content: <OrderForm />,
  },
  {
    label: "Sales Details",
    value: "6",
    content: "Sales Details",
  },
];
const App = () => {
  return (
    <>
      {/* <NotificationBar /> */}
      <TabsView tabs={tabs} activeTabs={"1"} />
    </>
  );
};

export default App;
