import React from "react";

function Container(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="container">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={props.DeleteItem}>DELETE</button>
    </div>
  );
}

export default Container;
