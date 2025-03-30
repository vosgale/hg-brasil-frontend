import { DetailsDialog } from "./DetailsDialog";
import { ItemCard } from "./ItemCard";
import { MainContainer } from "./styles";
import { useFinances } from "./useFinances";

export const Finances = () => {
  const { data, selectedItem, setSelectedItem } = useFinances();
  if (!data) return <>carregando</>;
  return (
    <MainContainer>
      <DetailsDialog selectedItem={selectedItem} onClose={() => setSelectedItem(undefined)} />
      {data?.currencies.map((item) => (
        <ItemCard key={item.key} item={item} onSelect={() => setSelectedItem(item)} />
      ))}
      {data?.stocks.map((item) => (
        <ItemCard key={item.key} item={item} onSelect={() => setSelectedItem(item)} />
      ))}
    </MainContainer>
  );
};
