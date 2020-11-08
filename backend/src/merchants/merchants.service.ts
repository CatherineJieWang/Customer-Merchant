import { Injectable } from '@nestjs/common';
import * as cusdata from '../mockCustomers.json';
import * as merdata from '../mockMerchants.json';


@Injectable()
export class MerchantsService {

  findAllMer(): object[] {
    console.log('merchant here?')
    return merdata;
  }


  findOneMer(id):object[] {
    console.log('one merchant here?')
    return [merdata.find(data=>data.id===id)];
    ;
  }

  addMerchant(id ,trans,name): object[] {
    console.log('add merchant here?')
    function pad(num) {
      num = num.toString();
      while (num.length < 3) num = '0' + num;
      return num.toString();
    }
    const newid = pad(parseInt(cusdata.slice(-1)[0].id) + 1);
    cusdata.push({
      id: newid,
      merchantId: id,
      name: name,
    });
    merdata.map(data=>{
      if(data.id===id){
        const newtransid = pad(parseInt(data['transactions'].slice(-1)[0].id) + 1)
        trans['id'] = newtransid
        trans['customerId'] = newid
        data['transactions'].push(trans)
      }
    })
    return merdata;
  }
}
