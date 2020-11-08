import React, { useEffect, useState } from "react";
import { Customers } from "../intrfaces/customers";
import Transaction from "../components/transaction";
import CurrencyRug from '../util/CurrencyMap'
export default function AllCustomers() {
  const [users, setUsers] = useState<Customers[]>();
  useEffect(() => {
//* Delete user 
    // fetch("http://localhost:3000/customers/delete",{
    //   body: JSON.stringify({id:'001'}), 
    //   cache: 'no-cache',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   method: 'DELETE'
    // })

// * Update user
    // fetch("http://localhost:3000/customers/update",{
    //   body: JSON.stringify({name:'Update Test', id:'001'}), 
    //   cache: 'no-cache',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   method: 'PUT'
    // })

// * Get one users by id
    // fetch('http://localhost:3000/customers/001')
    
// * Get all users 
    fetch('http://localhost:3000/customers')
      .then((res) => res.json())
      .then((x) => setUsers(x));
  }, []);
  return <div>
    <h1>All Customers</h1>
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>MerchantID</th>
        <th>Transactions</th>
        <th>Total Count</th>
      </tr>
    </thead>
    <tbody>
      {users &&
        users.map((data: Customers, index) => {
          return (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.merchantId}</td>
              <td>
                {data.alltrans &&
                  data.alltrans.map((trans) => <Transaction trans={trans} currency={data.currency} />)}
              </td>
              <td>{CurrencyRug(data.count, data.currency)}</td>
            </tr>
          );
        })}
    </tbody>
  </table>;
  </div>
}
