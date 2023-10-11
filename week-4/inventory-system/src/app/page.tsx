"use client"
import { useState, useEffect } from 'react';
import { Data, Product } from '@/types/types';
import loadData from '@/api/route';
import jsonInventory from '@/data/inventory.json';
export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('item');
  const [sortOrder, setSortOrder] = useState('asc');
  const [inventory, setInventory] = useState(jsonInventory);
	const [newItem, setNewItem] = useState('');

  useEffect(() => {
    setSortField('item');
    setSortOrder('asc');
    // Sla de inventaris op in de lokale opslag bij elke wijziging
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }, [inventory]);

  const filteredData = inventory.filter((item : Product) => {
    if (searchTerm === '') return true;
    return item.item.toLowerCase().includes(searchTerm.toLowerCase())
});

  const sortedData = filteredData.sort((a , b) => {
    const order = sortOrder === 'asc' ? 1 : -1;
		// if(a === undefined || b === undefined) return 0;
    return !a[sortField as keyof typeof a] < !b[sortField as keyof typeof b] ? -order : order;
  });

  const addItem = (itemName :string, quantity: number) => {
    const newItem = {
      id: inventory.length + 1,
      item: itemName,
      voorraad: quantity,
    };
    setInventory([...inventory, newItem]);
  };

  const removeItem = (itemId: number) => {
    const updatedInventory = inventory.filter(item => item.id !== itemId);
    setInventory(updatedInventory);
  };

  const purchaseItem = (itemId: number, quantity: number) => {
    const updatedInventory = inventory.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          voorraad: item.voorraad + quantity,
        };
      }
      return item;
    });
    setInventory(updatedInventory);
  };

  const sellItem = (itemId: number, quantity: number) => {
    const updatedInventory = inventory.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          voorraad: item.voorraad - quantity,
        };
      }
      return item;
    });
    setInventory(updatedInventory);
  };

	const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setNewItem(value);
  };

  return (
    <div className="p-4 space-y-4">
  <h1 className="text-2xl font-bold">Uitgebreid inventarisbeheer voor hout en glazen potten</h1>
  <input
    type="text"
    placeholder="Zoek naar een item"
    className="border rounded-lg px-3 py-2 w-full"
    value={searchTerm}
    onChange={e => setSearchTerm(e.target.value)}
  />
  <div className="flex space-x-4">
    <label className="font-semibold">Sorteer op:</label>
    <select className="border rounded-lg px-3 py-2" value={sortField} onChange={e => setSortField(e.target.value)}>
      <option value="item">Item</option>
      <option value="voorraad">Voorraad</option>
    </select>
    <select className="border rounded-lg px-3 py-2" value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
      <option value="asc">Oplopend</option>
      <option value="desc">Aflopend</option>
    </select>
  </div>
  <ul className="space-y-2">
    {sortedData.map(item => (
      <li key={item.id} className="flex justify-between items-center">
        <span>Item: {item.item}, Voorraad: {item.voorraad}</span>
        <div className="space-x-2">
          <button className="bg-red-500 text-white px-2 py-1 rounded-lg" onClick={() => removeItem(item.id)}>Verwijder</button>
          <button className="bg-blue-500 text-white px-2 py-1 rounded-lg" onClick={() => purchaseItem(item.id, 5)}>Inkoop +5</button>
          <button className="bg-green-500 text-white px-2 py-1 rounded-lg" onClick={() => sellItem(item.id, 5)}>Verkoop -5</button>
        </div>
      </li>
    ))}
  </ul>
  <div className="text-center">
		<input type="text" name="" id="" onChange={handleOnChange} className='rounded-lg border-solid border-2 border-indigo-500 px-3 py-1' />
    <button className="bg-indigo-500 text-white px-3 py-2 rounded-lg" onClick={() => addItem(newItem, 10)}>Voeg nieuw item toe</button>
  </div>
</div>

  );
}

