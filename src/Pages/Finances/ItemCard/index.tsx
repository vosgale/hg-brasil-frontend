import { Stack } from "@mui/material";
import type { Currency, Stock } from "api/services/Finance/types";
import { FinanceVariation } from "../styles";
import { Card } from "./styles";

export const ItemCard = ({ item, onSelect }: { item: Currency | Stock; onSelect: VoidFunction }) => {
  return (
    <Card key={item.key} onClick={onSelect}>
      <p className="typeName">Cotação de moedas</p>
      <div className="content">
        <Stack alignItems="start">
          <p>{item.key}</p> <span>{item.name}</span>
        </Stack>
        <img src={item.image} alt={`${item.key} representation `} />
      </div>
      <FinanceVariation $isPositive={item.variation >= 0}>
        {item.value} {item.variation}%
      </FinanceVariation>
    </Card>
  );
};
