"use client";
import inventoryData from "../data/inventory.json";
import { useState, useEffect } from "react";
// import { Product, ProductList } from "@/types/types";

export default function Home() {
  // state
  const [inventory, setInventory] = useState(inventoryData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("item");
  const [sortOrder, setSortOrder] = useState("asc");
  const [newItemName, setNewItemName] = useState("");

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(inventory));
  }, [inventory]);

  const filteredData = inventory.filter((item) => {
    return item.item.toLowerCase().includes(searchTerm.toLowerCase());
  }
  );

  const sortedData = filteredData.sort((waarde1, waarde2) => {
    const order = sortOrder === "asc" ? 1 : -1;
    return waarde1[sortField as keyof typeof waarde1] > waarde2[sortField as keyof typeof waarde2] ? order : order * -1;
  }
  );
  // add item
  const addItem = (itemName: string, quantity: number) => {
    const itemToAdd = {
      id: inventory.length + 1,
      item: itemName,
      voorraad: quantity,
    };
    setInventory([...inventory, itemToAdd]);
  };
    // remove item
    const removeItem = (itemId: number) => {
      const newInventory = inventory.filter((item) => item.id !== itemId);
      setInventory(newInventory);
    };
    // purchase item
    const changeQuantityItem = (itemId: number, quantity: number) => {
            // TODO: check if quantity is not negative
const newInventory = inventory.map((item) => {
        if (item.id === itemId) {
          return { ...item, voorraad: item.voorraad + quantity };
        }
        return item;
      });
      setInventory(newInventory);
    };

    // handleonChange
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      e.preventDefault();
      setNewItemName(value);
    };

    const handleOnChange2 = (value: string) => {
      
      setNewItemName(value);
    }

    return (
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">Inventaris</h1>
        <input
          type="text"
          className="border rounded-lg px-3 py-2 w-full"
          placeholder="Zoek producten"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <div className="flex space-x-4">
          <label htmlFor="" className="font-semibold">
            Sorteer op:
          </label>
          <select
            className="border rounded-lg px-3 py-2"
            onChange={(e) => {setSortField(e.target.value)}}
            value={sortField}
          >
            <option value="item">Item</option>
            <option value="voorraad">Voorraad</option>
          </select>
          <select
            className="border rounded-lg px-3 py-2"
            onChange={(e) => {setSortOrder(e.target.value)}}
            value={sortOrder}
          >
            <option value="asc">Oplopend</option>
            <option value="desc">Aflopend</option>
          </select>
        </div>
        <ul className="space-y-2">
          {sortedData.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <h2 className="font-semibold">{item.item}</h2>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="" className="font-semibold">
                    Voorraad
                  </label>
                  <p>{item.voorraad}</p>
                </div>
              </div>
              <div className="space-x-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-lg"
                  onClick={() => {removeItem(item.id)}}
                >
                  Verwijder
                </button>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded-lg"
                  onClick={() => {changeQuantityItem(item.id, 5)}}
                >
                  Inkoop +5
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded-lg"
                  onClick={() => {changeQuantityItem(item.id, -5)}}
                >
                  Verkoop -5
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-center">
          {/* <input type="text" className="rounded-lg border-solid border-2 border-indigo-500 px-3 py-1" 
        onChange={handleOnChange}/> */}
          <div className="flex flex-row items-center space-x-3">
            <div className="relative mb-3 max-w-[200px]">
              <input
                type="text"
                className="peer block min-h-[auto] rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="name"
                placeholder=""
                onChange={handleOnChange}
                // onChange={ (e) => handleOnChange2(e.target.value)}
              />
              <label
                htmlFor="name"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Name
              </label>
            </div>
            <button
              className="bg-indigo-500 text-white px-2 py-1 rounded-lg"
              onClick={() => addItem(newItemName, 10)}
            >
              Voeg toe
            </button>
          </div>
        </div>
      </div>
    );
  };

