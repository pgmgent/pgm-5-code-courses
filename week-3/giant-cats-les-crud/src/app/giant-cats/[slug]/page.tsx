"use client"; 
import Image from "next/image";
import giantCatsData from "../../../data/giant-cats.json";
import { MouseEventHandler, useEffect, useState } from "react";
import { deleteGiantCat, updateGiantCats } from "@/api/api";



export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const name = decodeURI(slug);

  
  const giantCat = giantCatsData.find((giantCat) => giantCat.name === name);
  const [giantCatProperties, setGiantCatProperties] = useState<GiantCatProps | null>(giantCat!);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
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

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    updateGiantCats(giantCatProperties!);
    console.log(giantCatProperties);
  };

  const handleDelete: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    deleteGiantCat(giantCatProperties!);
  }

  if (!giantCat || !giantCatProperties) {
    return (
      <div>
        <Image
          src="/images/sad-cat.jpg"
          width={500}
          height={500}
          alt="Sad cat"
        />
        <h1>This Giant Cat does not exist in our list.</h1>
      </div>
    );
  }
  return (
    <form>
      <h1>
        <input type="text" name="name" value={giantCatProperties.name} />
      </h1>
      <p>
        Scientific Name: <input type="text" name="scientificName"  value={giantCatProperties.scientificName} onChange={handleOnChange} />
      </p>
      <p>
        Habitat: <input type="text" name="habitat" value={giantCatProperties.habitat} onChange={handleOnChange}/>
      </p>
      <p>
        Description:{" "}
        <textarea name="description" id="description" cols={30} rows={4} onChange={handleOnChange}>
          {giantCatProperties.description}
        </textarea>
      </p>
      <Image
        src={giantCat.imageURL}
        width={500}
        height={500}
        alt={giantCat.name}
      />
      <button type="submit" onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
    </form>
  );
}
