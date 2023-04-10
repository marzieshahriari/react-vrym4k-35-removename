import React,{useState,useContext} from "react";
import "./style.css";
import {data} from "./data";



export default function App() {

  const [people,setPeople] = useState(data);

  const RemovePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  

  return (
    <>
       <div>
            {people.map((person,id)=>{
              return(
                <div className="di">
                  <h1 key={id}>{person.name}</h1>
                  <button className='btn' onClick={()=>RemovePerson(person.id)}>remove</button>
                </div>
              )  
            }     
              
            ) }
        </div>  
    </>
  );
}
