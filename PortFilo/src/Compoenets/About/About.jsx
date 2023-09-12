import React, { Component } from "react";
import {Creative,Creativeinfo,Conatiner,Infotitle,InfoSpan,Infodesc} from './style.js'
class About extends Component {
  render() {
    return (
      <>
        <Creative>
            <Conatiner>
                <Creativeinfo>
                    <Infotitle><span>This is</span> Me</Infotitle>
                    <InfoSpan>Creative Director</InfoSpan>
                    <Infodesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Infodesc>
                    <Infodesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Infodesc>
                </Creativeinfo>
            </Conatiner>
        </Creative>
      </>
    );
  }
}
export default About;
