const CurrencyMap:any= {
  'EURO': "€",
  'AUD': "$",
};
export default function CurrencyRug(amount: number,currency:string ) {
  const strcurrency = amount.toString();
  const position = strcurrency.length - 2;
  const output = [
    strcurrency.slice(0, position),
    ".",
    strcurrency.slice(position),
  ].join("");

  return CurrencyMap[currency] + output
}
