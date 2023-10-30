"use client"
import { ApolloProvider, useMutation } from '@apollo/client';
import { useState } from 'react'
import { REGISTER_USER } from '../../libs/mutations';
import { client } from '@/libs/apollo';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
    });
  
    const [registerUser] = useMutation(REGISTER_USER);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      console.log(formData);
      try {
        const { data } = await registerUser({ variables: { username: formData.username, email: formData.email, password: formData.password } });
        if (data && data.register.user) {
            // Handle successful registration here
            
        } else {
          // Handle registration errors here
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-semibold mb-4">Register</h1>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      
    );
}

export default RegisterPage