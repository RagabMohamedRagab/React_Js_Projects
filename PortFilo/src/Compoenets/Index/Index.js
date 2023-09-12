import React,{Component} from 'react'

import About from '../About/About';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Protfilo from '../Protfilo/Protfilo';
import SocailMedia from '../SocailMedia/SocailMedia';
import Work from '../Work/Work';

class Index extends Component{
  render(){
    return(
      <div>
        <Home/>
        <Work/>
        <Protfilo/>
        <Profile/>
        <About/>
        <SocailMedia/>
        <Footer/>
      </div>
    )
  }
}
export default Index;