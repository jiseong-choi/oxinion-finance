import { AdvancedChart } from "react-tradingview-embed";

export default function TradingviewChart({ stockDetails }: any) {
  return (
    <div className="App">
      <AdvancedChart
        widgetProps={{
          width: "100%",
          height: 610,
          symbol: stockDetails?.ticker,
          interval: "W",
          timezone: "Europe/Rome",
          theme: "dark",
          style: "8",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          withdateranges: true,
          save_image: false,

          container_id: "tradingview_929ec",
        }}
      />
    </div>
  );
}
