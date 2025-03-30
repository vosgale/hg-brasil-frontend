import { IMAGES } from "Assets/Images/Images";
import type { ApiResponse, FinanceData } from "./types";

const generateFakeVariationData = (variation: number, baseValue: number) => {
  const prices = [baseValue];

  for (let i = 1; i < 9; i++) {
    const change = Math.floor(Math.random() * 5) * (variation >= 0 ? 1 : -1);
    prices.push(prices[i - 1] + change);
  }

  return prices;
};

const generateDynamicHours = () => {
  const currentHour = new Date().getHours();
  const hours = [];

  for (let i = 0; i < 9; i++) {
    let hour = currentHour - i;
    if (hour < 0) hour += 24;
    hours.unshift(`${hour < 10 ? "0" : ""}${hour}:00`);
  }

  return hours;
};

export const getFinanceDataMapper = (data: ApiResponse): FinanceData => {
  const mappedData = {
    stocks: Object.entries(data.stocks)
      .slice(0, 5)
      .map(([key, value]) => ({
        ...value,
        key,
        image: IMAGES.financeIcons.ENTERPRISE || "",
        chartData: {
          x: generateDynamicHours(),
          y: generateFakeVariationData(value.variation || 0, value.points),
        },
      })),

    currencies: Object.entries(data.currencies)
      .slice(1, 6)
      .map(([key, value]) => ({
        ...value,
        key,
        image: IMAGES.financeIcons[key as keyof typeof IMAGES.financeIcons] || IMAGES.financeIcons.money,
        chartData: {
          x: generateDynamicHours(),
          y: generateFakeVariationData(value.variation || 0, value.buy),
        },
      })),
  };
  return mappedData;
};
