// src/ReactHookFormDemo.js
import React from "react";
import { useForm } from "react-hook-form";
import RenderCount from "./RenderCount";

const ReactHookFormDemo = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log("React Hook Form Data:", data);
  };

  return (
    <div style={{ border: "1px solid blue", padding: 20, marginBottom: 20 }}>
      <h2>React Hook Form Demo</h2>
      <RenderCount />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input {...register("firstName", { required: true })} />
          {errors.firstName && <span style={{ color: "red" }}>This field is required</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input {...register("lastName", { required: true })} />
          {errors.lastName && <span style={{ color: "red" }}>This field is required</span>}
        </div>
        <div>
          <label>Email:</label>
          <input {...register("email", { 
            required: true, 
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ 
          })} />
          {errors.email && <span style={{ color: "red" }}>Enter a valid email</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReactHookFormDemo;
