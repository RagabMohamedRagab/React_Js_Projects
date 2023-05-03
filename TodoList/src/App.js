import React,{Component} from 'react'
import List from './TodoList/ListItems/List'
import Add from './TodoList/AddItem/Add'
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component{
  state={
    Items:[
      {id:1,name:"Ragab",age:23},
      {id:2,name:"Eslam",age:20},
      {id:3,name:"Mohamed",age:25}
    ]
  }
   HandelDelete=(id)=>{
   const array=this.state.Items;
    const item=array.find(i=>i.id===id);
    array.pop(item);
   this.setState({
    item:array
   });
 }
 AddItem=(item)=>{
  item.id=Math.random();
  const array=this.state.Items;
  array.push(item);
  this.setState({
    item:array
  })
 }
  render(){
    return(
      <div className='container p-3 mt-2 bg-success text-white'>
        <div className='row'> 
        <div className='col-12'><Add addItem={this.AddItem}/></div>
        <div className='col-12'> <List item={this.state.Items} handelDelete={this.HandelDelete}/></div>
       </div> 
      </div>
    );
  }
}
export default App;
