import React, { Component } from "react";
import {
  HomePage,
  Container,
  HomeTitle,
  HomeInfo,
  HomeInformation,
  SpanTxt,
  HomeDesc,
  HomeBtn,
} from "./style.js";
class Home extends Component {
  render() {
    return (
      <HomePage>
        <Container>
          <HomeInformation>
            <HomeTitle>Rajab Mohamed</HomeTitle>
            <HomeInfo>Creative Director</HomeInfo>
            <HomeDesc>
              Iam a professional <SpanTxt>UX Designer</SpanTxt> and Front-End
              Developer creating modern and resposive designs to Web and Mobile.
              Let us work together. Thank you.
            </HomeDesc>
            <HomeBtn>Let's Begin</HomeBtn>
          </HomeInformation>
        </Container>
      </HomePage>
    );
  }
}

export default Home;
