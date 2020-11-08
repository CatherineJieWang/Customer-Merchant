export interface Transactions {
  description: string;
  amount: number;
  date: string;
}

export interface Merchants {
  id: string;
  name: string;
  currency: string;
  trans: Transactions[];
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