"use server";
import fs from "fs/promises";
import { redirect } from "next/navigation";
import { v4 } from "uuid";

// update json
// JSON import
// add data to JSON-data
// write JSON-data to file

export const updateGiantCats = async (giantCat: GiantCatProps) => {
  const response = await fs.readFile(
    process.cwd() + "/src/data/giant-cats.json",
    "utf-8"
  );
  const giantCats = JSON.parse(response);
  const updatedGiantCats = giantCats.map((cat: GiantCatProps) => {
    if (cat.name === giantCat.name) {
      return giantCat;
    }
    return cat;
  });
  await fs.writeFile(
    process.cwd() + "/src/data/giant-cats.json",
    JSON.stringify(updatedGiantCats, null, 2)
  );
};

// delete giantcat

export const deleteGiantCat = async (giantCat: GiantCatProps) => {
  const response = await fs.readFile(
    process.cwd() + "/src/data/giant-cats.json",
    "utf-8"
  );
  const giantCats = JSON.parse(response);
  const updatedGiantCats = giantCats.filter((cat: GiantCatProps) => {
    if (cat.name === giantCat.name) {
      return false;
    }
    return true;
  });
  await fs.writeFile(
    process.cwd() + "/src/data/giant-cats.json",
    JSON.stringify(updatedGiantCats, null, 2)
  );
  redirect("/giant-cats");
};

export const createGiantCat = async (giantCat: GiantCatProps) => {
    const response = await fs.readFile(
        process.cwd() + "/src/data/giant-cats.json",
        "utf-8"
    );
    const giantCats = JSON.parse(response);
    const giantCatId = v4();
    giantCat.id = giantCatId;
    giantCats.push(giantCat);
    await fs.writeFile(
        process.cwd() + "/src/data/giant-cats.json",
        JSON.stringify(giantCats, null, 2)
    );
    redirect("/giant-cats/" + giantCat.name);
};