import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import { DialogContent, DialogTitle, Divider, IconButton, Stack, Tooltip } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import type { Currency, Stock } from "api/services/Finance/types";
import { FinanceVariation } from "../styles";
import { CustomDialog, DialogChartContainer, DialogInfos } from "./styles";
export const DetailsDialog = ({
  onClose,
  selectedItem,
}: { onClose: VoidFunction; selectedItem: Currency | Stock | undefined }) => {
  const isPositiveVariation = (selectedItem && selectedItem.variation > 0) || false;
  const updatedIn = new Date().toLocaleString("pt-BR");

  return (
    <CustomDialog open={!!selectedItem} onClose={onClose} keepMounted={false}>
      <DialogTitle>
        <Stack direction="row" justifyContent="space-between" width="100%" alignItems="center">
          Detalhes
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack direction="row" alignItems="center" gap="22px">
          <img src={selectedItem?.image} alt={`${selectedItem?.key} representation `} />
          <DialogInfos>
            <h3>
              {selectedItem?.key} - {selectedItem?.name}{" "}
            </h3>
            <p>
              {selectedItem && "buy" in selectedItem && (
                <>
                  <b>Compra:</b> {selectedItem?.buy} <b>Venda:</b> {selectedItem?.sell}
                </>
              )}
              {selectedItem && "points" in selectedItem && (
                <>
                  <b>Pontos:</b> {selectedItem?.points}
                </>
              )}
              <b>Variação:</b>
              <FinanceVariation isPositive={isPositiveVariation}>
                {isPositiveVariation && "+"} {selectedItem?.variation}%
              </FinanceVariation>
            </p>
            <small>Atualizado em {updatedIn}</small>
          </DialogInfos>
        </Stack>
        <Divider style={{ margin: "22px 0" }} />
        <Stack direction="row" alignItems="center" gap="12px">
          <h4>Variação hoje</h4>
          <Tooltip title="Atualmente, a API HG Brasil não retorna dados cruciais para este gráfico em seus planos gratuitos. Portanto, os dados apresentados no gráfico abaixo são fictícios.">
            <InfoIcon fontSize="small" />
          </Tooltip>
        </Stack>
        <DialogChartContainer>
          <LineChart
            xAxis={[
              {
                data: selectedItem?.chartData.x || [],
                scaleType: "point",
              },
            ]}
            series={[
              {
                data: selectedItem?.chartData.y || [],
                curve: "linear",
                showMark: false,
                area: true,
              },
            ]}
            grid={{ horizontal: true }}
          />
        </DialogChartContainer>
      </DialogContent>
    </CustomDialog>
  );
};
