import React from "react";
import {add, prod, sub, div} from "./components/Operations";

function App(){
  return(
    <>
      <ul>
        <li>Sum of the two numbers is {add(30,3)}</li>
        <li>Product of two Numbers is {prod(30, 3)}</li>
        <li>Substraction of two Numbers is {sub(30,3)}</li>
        <li>Division of two Numbers is {div(30,3)}</li>
      </ul>
    </>
  )
}

export default App;