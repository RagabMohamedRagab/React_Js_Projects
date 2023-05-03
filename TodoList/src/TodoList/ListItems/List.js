import React from "react";
import "./List.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const List = (props) => {
  const { item,handelDelete } = props;
  const returnList = (item.length!==0)?item.map((val) => {
    return (
      <div key={Math.random()} id="list">
        <span>{val.name}</span>
        <span>{val.age}</span>
        <span onClick={()=>handelDelete(val.id)} className="fs-3"><i className="bi bi-trash3-fill"></i></span>
      </div>
    );
  }):<div id="val"><p>No Items</p></div>
  
  return (
    <section>
      <div id="list">
        <span>Name</span>
        <span>Age</span>
        <span>Action</span>

      </div>
      {returnList}
    </section>
  );
};
export default List;
