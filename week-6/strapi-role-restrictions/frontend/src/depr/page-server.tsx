import { Item } from "@/types/types";
import { GetItemList } from "../app/api/api";
import AddItem from "../app/components/AddItemForm";
import ItemList from "../app/components/ItemList";
import Navbar from "../app/components/Navbar";

const page = async () => {
  let data = await GetItemList();

  const handleOnItemAdded = async (item: Item) => {
    "use server";
    data = await GetItemList();
  };
  return (
    <div>
      <Navbar />
      <AddItem handleOnItemAdded={handleOnItemAdded} />
      <ItemList items={data} />
    </div>
  );
};

export default page;
