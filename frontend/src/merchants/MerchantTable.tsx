import React, { useState, useEffect, Fragment } from "react";
import "./merchant.css";
import {NewTransactions} from '../intrfaces/merchants'
import CurrencyRug from '../util/CurrencyMap'
export default function MerchantTable() {
  const [merid, setMerid] = useState();
  const [merchants, setMerchants] = useState<object[]>();
  useEffect(() => {
  // * Get one merchant by id
    // fetch("http://localhost:3000/merchants/001")


// * Get all merchant
    fetch("http://localhost:3000/merchants")
      .then((res) => res.json())
      .then((x) => {
        setMerchants(x);
        setMerid(x[0].id);
      });
  }, []);

  // * Mock new transactions data 
  const mocktrans = {
    amount: 45000,
    description: "Minor Service",
    ccLastFour: "4234",
    ccExpiry: "11/04",
    ccToken: "GH:D54356JJ$#2>GERG",
    date: "2020-09-21 04:56:58.701972",
  };

// * Add new customer to merchant
  function AddCustoMer(id:string, trans:NewTransactions , name:string) {
    fetch("http://localhost:3000/merchants/addmerchants",{
        body: JSON.stringify({id , trans, name}), 
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
    })
    .then((res) => res.json())
    .then((x) => {
      setMerchants(x);
    });
  }
  return (
    <div>
      <h1>Merchants List</h1>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        {merchants &&
          merchants.map((merdata: any) => (
            <div onClick={() => setMerid(merdata.id)} className="category" style={{color: merdata.id ===merid ? '#4e94fb' :'' }}>
              {merdata.id}
            </div>
          ))}

          <div className='addbutton' onClick={()=>AddCustoMer(merid||'001',mocktrans,'Add Test')}>+</div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {merchants &&
            merchants.map((data: any) => {
              if (data.id === merid) {
                return (
                  <Fragment>
                    {data.transactions &&data.transactions.map((trans: any, index:number) => {
                      return (
                        <tr key={index}>
                          <td>{trans.description}</td>
                          <td>{CurrencyRug(trans.amount,data.currency)}</td>
                          <td>{trans.date}</td>
                        </tr>
                      );
                    })}
                  </Fragment>
                );
              }
            })}
        </tbody>
      </table>
    </div>
  );
}
