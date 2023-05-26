import React, { Component } from 'react'
import './CourseForm.css'
class CourseForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.AddCourse}>
                <input type='text' value={this.props.current} onChange={this.props.UpdateCourse} />
                <button type='submit' className='btn btn-primary'>Add</button>
            </form>
        )
    }
}
export default CourseForm;