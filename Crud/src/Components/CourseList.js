import React, { Component } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
class CourseList extends Component {
    state = {
        isEdit: false
    }
    toggelIsEdit = () => {
        let toggle = this.state.isEdit;
        this.setState({
            isEdit: !toggle
        })
    }
    UpdateVal=(e)=>{
        e.preventDefault();
          this.props.onEdit(this.input.value,this.props.Index);
          this.toggelIsEdit()
        }
    renderUpdate = () => {
        return (
            <form onSubmit={this.UpdateVal}>
                <input type='text' ref={(v)=>{this.input=v}} defaultValue={this.props.details.name} />
                <button className='btn btn-info'>Update Course</button>
            </form>
        )
    }
  
    GetAll = () => {
        return (
            <li>
                <span>{this.props.details.name}</span>
                <span onClick={() => this.toggelIsEdit()}><i className="bi bi-pencil-square"></i></span>
                <span onClick={() => this.props.OnDelete(this.props.Index)}><i className="bi bi-trash3-fill"></i></span>
            </li>
        )
    }
    render() {

        return (
            <>
                {this.state.isEdit ? this.renderUpdate() : this.GetAll()}
            </>

        )
    }
}
export default CourseList;

