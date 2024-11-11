import React, { useState } from "react";

function NewPlantForm({ addNewPlant}) {
  const [formData, setFormData] = useState({
    name:"",
    image:"",
    price:"",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  } 

  const handleSubmit = (e) => {
    e.preventDefault()

    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: formData.price,
    }

  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
