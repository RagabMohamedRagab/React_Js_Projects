import React, { Component } from "react";
import Axios from "axios";
import {
  Portfolio,
  PortfolioTitle,
  PortfolioSpan,
  Portfoliolist,
  PortfolioItem,
  Boxdiv,
  Box,
  BoxImg,
  Boxverlay,
  BoxSapn,
} from "./style.js";
class Protfilo extends Component {
  state = {
    items: [],
  };
  render() {
    const arr = ["All", "HTML", "Photoshop", "Wordpress", "Mobile"];
    const result = arr.map((val, index) => {
      return <PortfolioItem key={index}>{val}</PortfolioItem>;
    });
    Axios.get("/Data/data.json").then((r) =>
      this.setState({ items: r.data.portfolio })
    );
    const resultProfilo = this.state.items.map((i) => {
      return (
        <Box key={i.id}>
          <Boxdiv>
            <BoxImg src={i.image} />
            <Boxverlay>
              <BoxSapn>Show Image</BoxSapn>
            </Boxverlay>
          </Boxdiv>
        </Box>
      );
    });
    return (
      <>
        <Portfolio>
          <PortfolioTitle>
            <PortfolioSpan>My</PortfolioSpan> Portfolio
          </PortfolioTitle>
          <Portfoliolist>{result}</Portfoliolist>

          {resultProfilo}
        </Portfolio>
      </>
    );
  }
}
export default Protfilo;
