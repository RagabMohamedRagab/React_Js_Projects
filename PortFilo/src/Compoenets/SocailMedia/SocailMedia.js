import React, { Component } from "react";
import Axios from 'axios'
import { Socialmed ,Social,Icons,SocialSpan,SocialP } from "./style.js";
class SocailMedia extends Component {
    state={
        items:[]
    }
  render() {
    const {items}=this.state;
    Axios.get('/Data/data.json').then(res=>this.setState({items:res.data.social}))
    const result=items.map((val,i)=>{
        return(
            <Social key={i}>
            <Icons className={val.icon}></Icons>
            <SocialP>
              <SocialSpan>{val.title}</SocialSpan>
              <SocialSpan>{val.body}</SocialSpan>
            </SocialP>
          </Social>

        )
    })
    return (
      <>
        <Socialmed>
         
        {result}
          
        </Socialmed>
      </>
    );
  }
}
export default SocailMedia;
