import React,{useState} from "react";
/* import { BrowserRouter as Router, } from "react-router-dom";
 */
import Main from "./components/Main";
import SignInSide from "./components/SignIn";
export default function App() {
  const [name,setName] = useState("");

  if (name ===""){
    return <SignInSide 
    name ={name}
    setName={setName}
    />
  }else{
    return  <Main name={name}/>
  }
}


