import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import axios from 'axios';

import Form from './Components/FormWeatherApp/Form'
import Weather from './Components/GetWeatherApp/Weather';
//const API_Key="19220d57870ba91ad1c71c80403eb96a"
class App extends Component{
  state={
    humidity:'',
    name:'',
    country:'',
    description:'',
   IsCompleted:false
  }
  GetWeather= async(e)=>{
   e.preventDefault();
   var country=e.target.elements.country.value;
   var city=e.target.elements.City.value;
   try{
    var Api=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=e36ed364400282e43250b6c4c0274d44`);
    // var Api=axios.get(`https://localhost:44307/api/Admistrations/Roles`)
    // .then(response => {
    //   console.log(response.data);
    // }) 
   
     var data=await Api.json();
       console.log(data)
      this.setState({
       humidity:data.main.humidity,
       name:data.name,
       country:data.sys.country,
       description:data.weather[0].description,
       IsCompleted:true
      })
   }catch{
    this.setState({
      humidity:'',
      name:'',
      country:'',
      description:'',
      IsCompleted:false
     })
   }
  }
  render(){
    return(
      <div className='container my-3'>
          <Form Getweather={this.GetWeather}/>
          <Weather Data={this.state}/> 
           {console.log(this.state)}
        </div>
    )
  }
}
export default App;