"use client";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useState } from "react";
import { AddItem } from "../api/api";
import { Item } from "@/types/types";
import { ADD_ITEM } from "@/libs/mutations";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Session } from "inspector";

const AddItemForm = ({
  handleOnItemAdded,
}: {
  handleOnItemAdded: () => {};
}) => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  }) ;
  const [name, setName] = useState("");
  const [mutateFunction, { data, loading, error }] = useMutation(ADD_ITEM, {
    context: {
      headers: {
        // authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjk4NzYxMzU3LCJleHAiOjE3MDEzNTMzNTd9.UvEiyQoDFEnUVhqda0URdE096Wq4s_O0eIa7MJjMBBw"
        authorization: `Bearer ${session?.jwt}`,
      },

      fetchPolicy: "no-cache", // disable cache
      
    },
  });
  const handleAddItem = () => {
    mutateFunction({
      variables: {
        name
      },
    });
    handleOnItemAdded();
    setName("");
  }


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
