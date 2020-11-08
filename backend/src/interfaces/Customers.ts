export interface Customers {
  name: string;
  merchantId:string;
  id:string;
  count:number;
}

export class CusTransactions {
  description: string;
  amount: number;
  data:string
}

export class CusUpdate {
  name: string;
  id: number;
}

export class CusDelete {
  id: number;
}