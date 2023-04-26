import React, { useState } from "react";
import './Name.css'

function Name() {
  const [name, setName] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setName(event.target.elements.name.value);
    event.target.elements.name.value = "";
  };

  return (
    <div>
    <div className="main">
      <form onSubmit={handleSubmit}>
        <label>
          <p className="fname">Name:</p>
          <input className="nameText" type="text" name="name" placeholder="Enter Your Name"/>
        </label>
        <button className="nameSubmit" type="submit">Submit</button>
      </form>
      {name && <h1 className="displayText">Hii My Name is {name}</h1>}
      </div>
    </div>
  );
}

export default Name;
