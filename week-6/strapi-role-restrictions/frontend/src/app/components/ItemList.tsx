"use client";

import { useEffect, useState } from "react";
import { Item } from "@/types/types";

const ItemList = ({ items }: { items: Item[] }) => {
  const [itemList, setItemList] = useState(items);
  console.log("items", itemList);
  if (!items) return <p>No data</p>;

  return (
    <ul className="mt-4">
      {items.map((item) => (
        <li key={item.id} className="mb-2 text-gray-700">
          {item.attributes.name}
        </li>
      ))}
    </ul>
  );
};
export default ItemList;
