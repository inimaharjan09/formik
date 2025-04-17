import { Option, Select } from '@material-tailwind/react'
import React from 'react'

export default function ProductSort({ setQuery }) {

  const handleChange = (e) => {

    if (e) {
      setQuery({
        sortBy: 'price',
        order: 'asc'
      });
    } else {
      setQuery({
        sortBy: 'price',
        order: 'desc'
      });
    }

  }
  return (
    <div className="w-72">
      <Select
        //onChange={(e) => handleChange(e)}
        onChange={handleChange}
        name='sort'
        label="Sorting By">

        <Option value={true} >Price Low to High</Option>
        <Option value={false}>Price High to Low</Option>

      </Select>
    </div>

  )
}