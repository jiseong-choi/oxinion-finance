import Header from "../../components/common/Header/Header";
import {
  CalculatorLayout,
  CalculatorHeader,
  CalculatorSummary,
  Stock,
  StockAlert,
  StockList,
} from "./styles";
import StockInsert from "../../components/common/StockInsert/StockInsert";

const Calculator = () => {
  return (
    <div>
      <Header />
      <CalculatorLayout>
        <h1>Dividend calculator - CRUD(the list)</h1>

        <CalculatorHeader>
          <h1>Your Amazing Portfolio</h1>
        </CalculatorHeader>

        <CalculatorSummary>
          <div>
            <p>Portfolio Value</p>
            <h3>$7010.66</h3>
          </div>
          <div>
            <p>Expected Income</p>
            <h3>$0.69</h3>
          </div>
          <div>
            <p>Portfolio Yield</p>
            <h3>2.54%</h3>
          </div>
        </CalculatorSummary>
        <StockInsert />
        <StockList>
          <Stock>
            <h2>MA</h2>
            <small>0.026782 shares</small>

            <div>Expected div : $0.01</div>
            <div>$0.25 per share</div>
            <StockAlert>Will be payed on June 24</StockAlert>
          </Stock>
        </StockList>
      </CalculatorLayout>
    </div>
  );
};

export default Calculator;
