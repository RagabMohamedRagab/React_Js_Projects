import React, { Component } from "react";
import {
  WorkSection,
  ContainerStyle,
  WorkTitle,
  SpanSection,
  PartTitle,
  PartLine,
  PartSection,
  PartDesc,
} from "./Style.js";
import Axios from "axios";
class Work extends Component {
  state = {
    work: [],
  };
  componentDidMount() {
    Axios.get("/Data/data.json").then((res) =>
      this.setState({ work: res.data.works })
    );
  }
  render() {
    const { work } = this.state;
    const workList = work?.map((val) => {
      return (
        <PartTitle key={val.id}>
          <i className={val.icon_name}> </i>
          <PartSection> {val.title} </PartSection> <PartLine />
          <PartDesc>{val.body}</PartDesc>
        </PartTitle>
      );
    });
    return (
      <>
        <WorkSection>
          <ContainerStyle>
            <WorkTitle>
              <SpanSection> My </SpanSection> Work
            </WorkTitle>

            {workList}
          </ContainerStyle>
        </WorkSection>
      </>
    );
  }
}
export default Work;
