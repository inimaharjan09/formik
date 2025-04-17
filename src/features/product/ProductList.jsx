import React, { useState } from 'react'
import { useGetAllProductsQuery } from './productApi'
import { Avatar, Card, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';
import ProductSort from './ProductSort';


export default function ProductList() {

  const [query, setQuery] = useState();
  const { isLoading, isFetching, refetch, error, data } = useGetAllProductsQuery(query);



  if (isLoading) {
    return <h1>Loading....</h1>
  }

  console.log('render');

  return (
    <div className='space-y-5'>
      <ProductSort setQuery={setQuery} />

      <Card className="max-w-[400px]">

        {data.products.map((product) => {
          return <List key={product.id}>
            <ListItem>
              <ListItemPrefix>
                <Avatar variant="circular" alt="candice" src={product.thumbnail} />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  {product.title}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  {product.category}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  {product.price}
                </Typography>
              </div>
            </ListItem>

          </List>;
        })}

      </Card>


    </div>
  )
}