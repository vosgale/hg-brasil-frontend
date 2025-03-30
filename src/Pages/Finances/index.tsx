import { DetailsDialog } from "./DetailsDialog";
import { Card, FinanceVariation, MainContainer } from "./styles";
import { useFinances } from "./useFinances";

export const Finances = () => {
  const { data, selectedItem, setSelectedItem } = useFinances();
  return (
    <MainContainer>
      <DetailsDialog selectedItem={selectedItem} onClose={() => setSelectedItem(undefined)} />
      {data?.currencies.map((item) => (
        <Card key={item.key} onClick={() => setSelectedItem(item)}>
          <p className="typeName">Cotação de moedas</p>
          <div className="content">
            <div>
              <p>{item.key}</p> <span>{item.name}</span>
            </div>
            <img src={item.image} alt={`${item.key} representation `} />
          </div>
          <FinanceVariation isPositive={item.variation > 0}>R$ 5,00 -4%</FinanceVariation>
        </Card>
      ))}
      {data?.stocks.map((item) => (
        <Card key={item.key} onClick={() => setSelectedItem(item)}>
          <p className="typeName">Itens da bolsa de valores</p>
          <div className="content">
            <p>{item.key}</p> <span>{item.name}</span>
            <img src={item.image} alt={`${item.key} representation `} />
          </div>

          <FinanceVariation isPositive={item.variation > 0}>R$ 5,00 -4%</FinanceVariation>
        </Card>
      ))}
    </MainContainer>
  );
};
