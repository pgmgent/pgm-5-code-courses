"use client";
import { createGiantCat } from "@/api/api";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NewCat() {
  const [giantCatProperties, setGiantCatProperties] = useState<GiantCatProps | null>({
    name: "",
    scientificName: "",
    description: "",
    habitat: "",
    imageURL: "",
  });

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    console.log(name, value);
    setGiantCatProperties((prevGiantCatProperties) => {
      if (prevGiantCatProperties) {
        return {
          ...prevGiantCatProperties,
          [name]: value,
        };
      }
      return null;
    });
  };

  const handleCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if(giantCatProperties!.name === "" || giantCatProperties!.scientificName === "" || giantCatProperties!.description === "" || giantCatProperties!.habitat === "") {
        alert("Please fill out all fields")
        return;
    }
    createGiantCat(giantCatProperties!);
    console.log(giantCatProperties);
  };
  return (
    <form>
      <h1>
        Name: <input type="text" name="name" value={giantCatProperties!.name} onChange={handleOnChange} />
      </h1>
      <p>
        Scientific Name:{" "}
        <input
          type="text"
          name="scientificName"
          value={giantCatProperties!.scientificName}
          onChange={handleOnChange}
        />
      </p>
      <p>
        Habitat:{" "}
        <input
          type="text"
          name="habitat"
          value={giantCatProperties!.habitat}
          onChange={handleOnChange}
        />
      </p>
      <p>
        Description:{" "}
        <textarea
          name="description"
          id="description"
          cols={30}
          rows={4}
          onChange={handleOnChange}
        >
          {giantCatProperties!.description}
        </textarea>
      </p>

      <button
        type="submit"
        onClick={handleCreate}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Create
      </button>
    </form>
  );
}
