import React, { Component } from "react";
import CourseForm from "./Components/CourseForm";
import CourseList from "./Components/CourseList";
import "./App.css";

class App extends Component {
  state = {
    courses: [{ name: "Html" }, { name: "Css" }, { name: "JavaScript" }],
    current: "",
  };
  // AddCourse
  AddCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current });
    this.setState({
      courses: courses,
      current: "",
    });
  };
  // Delete Course
  OnDeleteCourse = (index) => {
    let course = this.state.courses;
    course.splice(index, 1);
    this.setState({
      courses: course,
    });
  };
  // UpdateCourse
  UpdateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };
  // EditCourse
  EditCourse = (val, index) => {
    debugger;
    let courses = this.state.courses;
    let course = courses[index];
    console.log(val);
    course["name"] = val;
    this.setState({
      courses: courses,
    });
  };
  render() {
    const { courses } = this.state;
    const returnList = courses.map((course, index) => {
      return (
        <ul className="bg-info" key={index}>
          <CourseList
            details={course}
            OnDelete={this.OnDeleteCourse}
            Index={index}
            onEdit={this.EditCourse}
          />
        </ul>
      );
    });
    return (
      <section className="App mt-3">
        <CourseForm
          AddCourse={this.AddCourse}
          UpdateCourse={this.UpdateCourse}
          current={this.state.current}
        />
        <div> {returnList}</div>
      </section>
    );
  }
}

export default App;
