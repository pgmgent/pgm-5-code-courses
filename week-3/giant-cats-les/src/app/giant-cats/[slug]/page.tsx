import Image from "next/image";
import giantCatsData from "../../../data/giant-cats.json";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const name = decodeURI(slug);
  
  const giantCat = giantCatsData.find((giantCat) => giantCat.name === name);

  if (!giantCat) {
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
    <div>
      <h1>{giantCat.name}</h1>
      <p>Scientific Name: {giantCat.scientificName}</p>
      <p>Habitat: {giantCat.habitat}</p>
      <p>Description: {giantCat.description}</p>
      <Image
      src = {giantCat.imageURL}
      width={500}
      height={500}
      alt={giantCat.name}
       />
    </div>
  );
}
