"use client"
import { useState } from "react";

const NewProductForm = () => {
  const [name, setName] = useState("");
  const [numberInStock, setNumberInStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "numberInStock") {
      setNumberInStock(value);
    } else if (name === "imageUrl") {
      setImageUrl(value);
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(name, numberInStock, imageUrl)
  };
  return (
    <>
      <form>
        <input
          type="text"
          className="text"
          id="name"
          name="name"
          value = {name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="numberInStock"
          id="numberInStock"
          value={numberInStock}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          value = {imageUrl}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </>
  );
};

export default NewProductForm;
