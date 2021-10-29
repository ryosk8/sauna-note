import React from "react";
import {notesRef} from "../firebase"
import { onValue,query,limitToLast} from "@firebase/database";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(sauna, saunaTime, waterTime, restTime) {
  return { sauna, saunaTime, waterTime, restTime };
}

var rows = [];

onValue(query(notesRef,limitToLast(8)),(snapshot) => {
    snapshot.forEach((childSnapshot) =>{
        var c = childSnapshot.val()
        console.log(c.key)
        rows.push(createData(c.sauna,c.saunaTime,c.waterTime,c.restTime))
    });
});
export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>施設名</TableCell>
            <TableCell align="right">サウナ(分)</TableCell>
            <TableCell align="right">水風呂(分)</TableCell>
            <TableCell align="right">休憩(分)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.sauna}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.sauna}
              </TableCell>
              <TableCell align="right">{row.saunaTime}</TableCell>
              <TableCell align="right">{row.waterTime}</TableCell>
              <TableCell align="right">{row.restTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


