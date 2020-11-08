export interface Merchants {
  id: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  author: string;
}

export interface NewTransactions {
  description: string;
  amount: number;
  id?:string;
  customerId? :string;
  date: string;
  ccLastFour:string;
  ccExpiry:string;
  ccToken:string;
}
export class AddMerchant {
  id:string;
  name:string;
  trans:NewTransactions;
}
