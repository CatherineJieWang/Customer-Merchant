import {CusTransactions } from '../interfaces/Customers';

export default function ChangeCusData(cusdata, merdata){
    cusdata.map(data => {
        let count = 0;
        let alltrans: CusTransactions[] = [];
        merdata.map(merdata => {
          if (merdata.id === data.merchantId) {
            merdata.transactions.map(trans => {
              if (trans.customerId === data.id) {
                count = count + trans.amount;
                alltrans.push({
                  description: trans.description,
                  amount: trans.amount,
                  data: trans.date,
                });
              }
            });
            data['currency'] = merdata.currency;
            data['count'] = count;
            data['alltrans'] = alltrans;
          }
        });
      });
return cusdata
}