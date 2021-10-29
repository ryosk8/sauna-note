import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Note from "./Note";
import NoteField from "./NoteField";
export default function Main({ name }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Note name={name} />
        </Route>
        <Route path="/NoteField">
          <NoteField/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
