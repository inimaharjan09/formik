import React from 'react'
import { useLazyGetAllProductsQuery } from './productApi'
import { Button } from '@material-tailwind/react';

export default function ProductListLazy() {

  const [getList, { isLoading, error, isFetching, data }] = useLazyGetAllProductsQuery();
  // console.log(`isLoading: ${isLoading}`);
  // console.log(data);

  return (
    <div>

      <Button onClick={() => getList()} loading={isLoading || isFetching}>Get Data</Button>

    </div>
  )
}