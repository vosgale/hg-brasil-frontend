import { useQuery } from "@tanstack/react-query";
import { financeServices } from "api/services/Finance/finance.service";
import type { Currency, Stock } from "api/services/Finance/types";
import { useState } from "react";

export const useFinances = () => {
  const [selectedItem, setSelectedItem] = useState<Currency | Stock | undefined>(undefined);

  const { data } = useQuery({
    queryKey: ["finances"],
    queryFn: () => financeServices.getFinanceData(),
    refetchOnWindowFocus: false,
    staleTime: 3 * 60 * 1000,
  });
  return {
    data,
    selectedItem,
    setSelectedItem,
  };
};
