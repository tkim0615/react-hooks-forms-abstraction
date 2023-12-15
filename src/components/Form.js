import React, { useState } from "react";

function Form() {
 
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry"
  })
  console.log(formData)

 const handleChange = (e) =>{
  const name = e.target.name;
  const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    })
 }

  return (
    <form>
      <input type="text" onChange={handleChange} name='firstName' value={formData.firstName} />
      <input type="text" onChange={handleChange} name='lastName' value={formData.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
