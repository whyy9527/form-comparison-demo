// src/App.js
import React from "react";
import ReactHookFormDemo from "./ReactHookFormDemo";
import FormikDemo from "./FormikDemo";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React Hook Form vs Formik 比较 Demo</h1>
      <ReactHookFormDemo />
      <FormikDemo />
    </div>
  );
}

export default App;
