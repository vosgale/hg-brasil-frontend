import { api } from "api/api";
import type { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { getFinanceDataMapper } from "./mapper";
import type { ApiResponse, FinanceData } from "./types";

const API_KEY = import.meta.env.VITE_API_KEY;

export const financeServices = {
  getFinanceData: async (): Promise<FinanceData | undefined> => {
    try {
      const response: AxiosResponse<ApiResponse> = await api.get(
        `https://api.hgbrasil.com/finance?fields=only_results,currencies,stocks&key=${API_KEY}&format=json-cors`,
      );
      return getFinanceDataMapper(response.data);
    } catch (_error) {
      toast.error("Erro: Falha ao obter dados, tente novamente mais tarde.", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  },
};
