import React from 'react'
import { useGetAllProductsQuery } from './productApi'

export default function ProductList() {
  const { isLoading, isFetching, refetch, error, data } = useGetAllProductsQuery();
  if (isLoading) {
    return <h1>Loading....</h1>
  }
  console.log(data);
  return (
    <div>
        {data.products.map((product) => (
          <div key={product.id}>
            <div>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
            </div>
          </div>
))}
    </div>
  )
}