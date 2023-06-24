import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class Form extends Component{
    render(){
        return(
            <form className='form-horizontal d-flex justify-content-center ' onSubmit={this.props.Getweather}>
                <input className='form-control ml-3' type='text' name="country" placeholder='Enter Country Name'/>
                <input className='form-control ml-3' type='text' name="City" placeholder='Enter City Name'/>
                <button className='btn btn-primary'>Get</button>
            </form>
        )
    }
}
export default Form;