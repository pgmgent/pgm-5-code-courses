"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import { TodoItem } from '@/components/TodoItem';
import Link from 'next/link';

interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState<string>('');

  function toggleTodo(id: number, complete: boolean) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, complete } : todo
    );
    setTodos(updatedTodos);
  }

  function createTodo() {
    if (!newTodoTitle || newTodoTitle.trim() === '') {
      throw new Error('Invalid Title');
    }

    const newTodo: Todo = {
      id: todos.length + 1, // Generate a unique ID
      title: newTodoTitle,
      complete: false,
    };

    setTodos([...todos, newTodo]);
    setNewTodoTitle('');
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createTodo();
  };

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
      </header>
      <ul className="p-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          value={newTodoTitle}
          onChange={handleInputChange}
          className="border border-slate-700 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <button
            type="submit"
            className="border border-slate-700 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
