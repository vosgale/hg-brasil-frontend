export interface ApiResponse {
  currencies: Currencies;
  stocks: Stocks;
}

export interface FinanceData {
  currencies: Currency[];
  stocks: Stock[];
}

export interface Currencies {
  [key: string]: Currency;
}

export interface Currency {
  name: string;
  value: string;
  sell: number | null;
  key: string;
  buy: number;
  variation: number;
  chartData: {
    x: string[];
    y: number[];
  };
  image: string;
}

export interface Stocks {
  [key: string]: Stock;
}

export interface Stock {
  name: string;
  location: string;
  chartData: {
    x: string[];
    y: number[];
  };
  value: string;
  points: number;
  key: string;
  image: string;
  variation: number;
}
