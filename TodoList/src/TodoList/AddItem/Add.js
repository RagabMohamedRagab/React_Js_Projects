import React,{Component} from 'react'
import './Add.css'
 class Add extends Component{
    state={
        name:'',
        age:0
    }
    HandelAdd=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    SubmitAdd=(e)=>{
        e.preventDefault();
       this.props.addItem(this.state)
    }
    render(){
        return(
            <div id='query'>
            <form onSubmit={this.SubmitAdd} >
                    <input type='text' placeholder='Name' id='name'  required='' onChange={this.HandelAdd}/>
                    <input type='number' placeholder='Age' id='age' required='' onChange={this.HandelAdd}/>
                    <input type='submit' value='Add' id="btn"/>

            </form>
            </div>
        )
    }
 } 
 export default Add;