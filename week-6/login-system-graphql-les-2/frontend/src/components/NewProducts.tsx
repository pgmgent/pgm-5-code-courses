"use client"
import React from 'react'
import { createRentalProduct } from '@/app/api/api'

const NewProducts = (updatedRentalProductsData: () => void ) => {

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        console.log('submit')

        e.preventDefault()
        console.log('submit')
        const name = (document.getElementById('name') as HTMLInputElement).value
        const numberInStock = document.getElementById('numberInStock') as HTMLInputElement
        const image = document.getElementById('image') as HTMLInputElement
        const product = {
            title: name.valueOf(),
            numberInStock: numberInStock.value ,
            image: image.value,
        } 
        await createRentalProduct(product)
        updatedRentalProductsData()
    }

  return (
    <>
    <form action="">
        <input type="text" name="name" id="name" placeholder="Name"/>
        <input type="number" name="numberInStock" id="numberInStock" placeholder="Stock"/>
        <input type="text" name="image" id="image" placeholder="Image"/>
        <button type="submit" onClick={handleSubmit}>Create</button>
    </form>
    </>
  )
}

export default NewProducts