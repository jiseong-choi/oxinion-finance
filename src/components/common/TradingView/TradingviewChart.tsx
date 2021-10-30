import { AdvancedChart } from "react-tradingview-embed";

export default function TradingviewChart() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <AdvancedChart
        widgetProps={{
          width: 980,
          height: 610,
          symbol: "aapl",
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
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
