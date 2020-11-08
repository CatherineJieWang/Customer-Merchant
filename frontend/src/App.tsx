import React, { ReactElement} from "react";
import "./App.css";
import Customers from "./customers/AllCustomers";
import MerchantTable from "./merchants/MerchantTable";

function App(): ReactElement {
 return   <div className="App">
 <Customers />
 <MerchantTable/>
 </div>
}

export default App;