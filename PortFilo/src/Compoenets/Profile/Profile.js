import React,{Component} from "react";
import Axios  from "axios";
import {Profileskills,Profilediv,Containerdiv,Profiletitles,Profilerange,Profilespan,Profileperc,Profileparent,Profilelist,Profilebartitle,Profilebar,Profiledesc,ProfileTitle,Profileitem,Profileskill} from './Style.js'
class Profile extends Component{
    state={
        items:[],
        vals:[]
    }
    render(){
        Axios.get("/Data/data.json").then(r=>this.setState({items:r.data.Profile}));
       const resultUI=this.state.items.map((val,index)=>{
            return(
                <Profileitem  key={val.id}>
                <Profilespan>{val.key}: </Profilespan>
                {val.value}
            </Profileitem>
            )
        })
        Axios.get("/Data/data.json").then(res=>this.setState({vals:res.data.skills})) 

        const resultskill=this.state.vals.map(val=>{
            return(
                <Profilebar key={val.id}>
                        <Profilebartitle>{val.name}</Profilebartitle>
                        <Profileperc>{val.precision}</Profileperc>
                        <Profileparent>
                            <Profilerange></Profilerange>
                        </Profileparent>
                    </Profilebar>
            )

        })
        return(   
       <>
        <Profileskills>
            <Containerdiv>
                <Profilediv>
                    <Profiletitles><span>My </span>Profile</Profiletitles>
                    <Profilelist>
                       {resultUI}
                    </Profilelist>
                </Profilediv>
                
                <Profileskill>
                    <ProfileTitle>Some skills</ProfileTitle>
                    <Profiledesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </Profiledesc>
                    
                    {resultskill}
                   
                </Profileskill>
                
            </Containerdiv>
        </Profileskills>
       </>
        )
    }
}
export default Profile;