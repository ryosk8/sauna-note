import React,{useState} from "react";
import { 
  Container,
  TextField,
  Button
 } from "@mui/material";
import { pushNote } from "../firebase";
import { Link } from "react-router-dom";
 
export default function Note({name}) {
  const [sauna,setSauna] =useState("");
  const [saunaTime,setSaunaTime] =useState(0);
  const [waterTime,setWaterTime] =useState(0);
  const [restTime,setRestTime] =useState(0);
  
  return (
    <Container fixed
    onKeyDown ={(e) => {
      if (e.key === "Enter") {
        console.log({sauna,saunaTime,waterTime,restTime})
        pushNote({name,sauna,saunaTime,waterTime,restTime})
        e.preventDefault();
      }
    }
    }
    >
      <TextField 
      variant="standard" 
      margin="normal"
      fullWidth
      id="sauna"
      label="建物名"
      name="sauna"
      autoComplete="name"
      autoFocus
      onChange={(e) => setSauna(e.target.value)}
      />
      <TextField
      variant="outlined" 
      margin="normal"
      fullWidth
      id="saunaTime"
      label="分:サウナ"
      name="saunaTime"
      autoFocus
      onChange={(e) => setSaunaTime(e.target.value)}
      />
      <TextField 
      variant="outlined" 
      margin="normal"
      fullWidth
      id="waterTime"
      label="分:水風呂"
      name="waterTime"
      autoComplete="name"
      autoFocus
      onChange={(e) => setWaterTime(e.target.value)}
      />
      <TextField 
      variant="outlined" 
      margin="normal"
      fullWidth
      id="restTime"
      label="分:休憩"
      name="restTime"
      autoComplete="name"
      autoFocus
      onChange={(e) => setRestTime(e.target.value)}
      />
      <Button 
      type="button"
      variant="contained"
      onClick={()=>
        pushNote({name,sauna,saunaTime,waterTime,restTime})
      }
      >
        <Link to ="/NoteField">
            送信
        </Link>
      </Button>
      
    </Container>
  );
}
