import { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { navigation } from "./routers/router";
function App() {
  let element = useRoutes(navigation);
  return (
    <>
      {element}
    </>
  );
}

export default App;
