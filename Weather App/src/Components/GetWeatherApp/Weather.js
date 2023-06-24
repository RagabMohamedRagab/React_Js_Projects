import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class Weather extends Component{
    render(){
        const style={
            listStyleType:'none',
            color:"#fff"
         }
        const {Data}=this.props
         const weath=()=>{
            if(Data.IsCompleted){
                return(
                    <ul style={style}>
                        <li>Country :{Data.country}</li>
                        <li>City : {Data.name}</li>
                        <li>Temp : {Data.humidity}</li>
                        <li>Description : {Data.description}</li>
                    </ul>
                )
            }
         }
         
        return(
            <div className='bg-primary mt-4 text-center'>
                {weath()}
            </div>
        )
    }
}
export default Weather;