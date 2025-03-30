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
  buy: number;
  sell: number | null;
  key: string;
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
  points: number;
  key: string;
  image: string;
  variation: number;
}
