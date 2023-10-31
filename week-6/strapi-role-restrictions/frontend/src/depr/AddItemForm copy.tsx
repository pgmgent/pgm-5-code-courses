"use client";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useState } from "react";
import { AddItem } from "../app/api/api";
import { Item } from "@/types/types";

const AddItemForm = ({
  handleOnItemAdded,
}: {
  handleOnItemAdded: (data: Item) => {};
}) => {
  const [name, setName] = useState("");
  const handleAddItem = async () => {
    const { data } = await AddItem(name);
    handleOnItemAdded(data);
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Enter item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        onClick={handleAddItem}
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add Item
      </button>
      {/* {error && <p className="mt-2 text-red-500">Error: {error.message}</p>} */}
    </div>
  );
};

export default AddItemForm;
