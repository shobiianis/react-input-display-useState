import { useState } from "react";


function App() {

  const [name, setName] = useState("");

    
let showName = (name) => {

  console.log(name);
}



  return (
 
  <div>
   
    
    <input type="text" placeholder="Enter your name" onChange={(e)=>{
     
     setName(e.target.value);

     showName(name);

    }} />
  
  </div>

    
  );

  }

export default App;


// this will print on console the input field as it changes in real time