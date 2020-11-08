import React from "react";
// import { Transactions } from "../intrfaces/merchants";
import CurrencyRug from '../util/CurrencyMap'
export default function Transaction(props:any) {
  const { description,amount } =props.trans;
  const currency =props.currency;
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <div>{description}</div>
      <div style={{marginLeft:'auto'}}>{CurrencyRug(amount, currency)}</div>
    </div>
  );
}
