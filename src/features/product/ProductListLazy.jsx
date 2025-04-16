import React from 'react'
import { useLazyGetAllProductsQuery } from './productApi'

export default function ProductListLazy() {
    // const m =useLazyGetAllProductsQuery();
    // console.log(m);
    const [{}]= useLazyGetAllProductsQuery();
    console.log(isLoading)
  return (
    <div>
      
    </div>
  )
}