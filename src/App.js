import React, { useState } from "react";
import './App.css';

function App (props){

  let [list, setList] = useState(["Ready", "Set", "GO!"]);
  let [text,setText] = useState([""]);

function onSubmit(event){
event.preventDefault();
setList([...list, text]);
}

  return (
    <div className="App">
      <h1>Welcome to Ghibli Studios</h1>
      <h3>Search for your favorite film titles here:</h3>
      <form onSubmit={onSubmit}>
      <input
            type="text"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }} />
            <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((ele, index) => 
          <li key={index}>{ele}</li>
        )}
      </ul>
    </div>
  );
};

export default App;
