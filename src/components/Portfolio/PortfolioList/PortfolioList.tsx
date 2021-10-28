import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
// import axios from "axios";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import { ListContainer, PortfolioHead } from "./styles";

const PortfolioList = () => {
  const portoflioData = useSelector(
    (state: RootState) => state.portfolio.portfolio
  );

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://api.finance.oxinion.com/get")
  //     .then((res: any) => setData(res.data));
  // }, []);

  return (
    <ListContainer>
      <PortfolioHead>
        <p>Ticker</p>
        <p>Shares</p>
        <p>Avg Cost</p>
      </PortfolioHead>
      {/* {data.map((stock: any) => (
        <PortfolioItem
          ticker={stock.ticker}
          id={stock._id}
          key={stock._id}
          share={stock.share}
          cost={stock.cost}
        />
      ))} */}

      {portoflioData.map((asset) => {
        return (
          <PortfolioItem
            ticker={asset.ticker}
            share={asset.shares}
            cost={asset.cost}
          />
        );
      })}
    </ListContainer>
  );
};

export default PortfolioList;
