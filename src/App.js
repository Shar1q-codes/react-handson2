import "./App.css";
import React, { useState } from "react";
import CardContainer from "./Components/CardContainer";
import Form from "./Components/Form";


function App() {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [rating, setRating] = useState("");
  const [users, setusers] = useState([]);

  return (
    <>
      <Form
        name={name}
        setName={setName}
        dept={dept}
        setDept={setDept}
        rating={rating}
        setRating={setRating}
        users={users}
        setusers={setusers}
      />
      {users.length>0 && <CardContainer users={users} setusers={setusers} />}
     
     
    </>
    
  );
}

export default App;