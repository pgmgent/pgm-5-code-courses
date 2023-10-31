"use client";
import { Item } from "@/types/types";
import { GetItemList } from "../api/api";
import AddItem from "../components/AddItemForm";
import ItemList from "../components/ItemList";
import Navbar from "../components/Navbar";
import { QUERY_GET_ALL_ITEMS } from "@/libs/queries";
import { ApolloProvider, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { client } from "@/libs/apollo";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });
  console.log(session);

  const { loading, error, data, refetch } = useQuery(QUERY_GET_ALL_ITEMS, {
    context: {
      headers: {
        // authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjk4NzYxMzU3LCJleHAiOjE3MDEzNTMzNTd9.UvEiyQoDFEnUVhqda0URdE096Wq4s_O0eIa7MJjMBBw"
        authorization: `Bearer ${session?.jwt}`,
      },
      fetchPolicy: "no-cache", // disable cache
    },
  });
  const handleOnItemAdded = async () => {
    refetch();
  };

  return (
    <>
      <AddItem handleOnItemAdded={handleOnItemAdded} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.items && <ItemList items={data.items.data} />}
      {data && !data.items && <p>No data</p>}
    </>
  );
};

export default page;
