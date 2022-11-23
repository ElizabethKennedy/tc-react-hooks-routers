import React, { useState } from "react";
import "../App.css";

export default HomePage; 

function HomePage (){

  const [list, setList] = useState(["Ready", "Set", "GO!"]);
  const [text,setText] = useState([""]);

function onSubmit(event){
event.preventDefault();

let newList = [...list, text];
setList(newList);
setText("");
}

  return (
    <div>
        <h1>Learning React</h1>
      <form onSubmit={onSubmit}>
      <input
            type="text"
            name="listitem"
            id="listitem"
            value={text}
            onChange={(event) => {
              setText(event.target.value)}
              }  />
            <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>
        
})}
      </ul>
    </div>
  );
};


