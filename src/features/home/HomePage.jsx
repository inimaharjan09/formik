import React from 'react'
import ProductList from '../products/ProductList'
import Top5Products from '../products/Top5Products'

export default function HomePage() {
  return (
    <div>

      <Top5Products />
      <ProductList />

    </div>
  )
}