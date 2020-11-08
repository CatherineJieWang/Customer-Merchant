

export interface Customers {
    name: string;
    merchantId:string;
    id:string;
    count:number;
    currency:string;
    alltrans?: CusTransactions[]
  }

  export class CusTransactions {
    description!: string;
    amount!: number;
}