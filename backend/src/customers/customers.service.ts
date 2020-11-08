import { Injectable } from '@nestjs/common';
import * as cusdata from '../mockCustomers.json';
import * as merdata from '../mockMerchants.json';
import { CusTransactions } from '../interfaces/Customers';
import ChangeCusData from '../util/ChangeCusData';
@Injectable()
export class CustomerService {
  findAllCus(): object[] {
    console.log('customer here?');
    return ChangeCusData(cusdata, merdata);
  }

  findOneCus(id): object[] {
    console.log('one customer here?');
    const newcus = [cusdata.find(data =>data.id === id)];
    return  ChangeCusData(newcus, merdata);
  }

  UpdateCus(name, id): object[] {
    console.log('update customer here?');
    cusdata.map(data => {
      if (data.id === id) {
        data['name'] = name;
      }
    });
    return ChangeCusData(cusdata, merdata);
  }
  DeleteCus(id): object[] {
    console.log('delete cus here?');
    return ChangeCusData(cusdata.filter(data => data.id !== id), merdata);
  }
}
