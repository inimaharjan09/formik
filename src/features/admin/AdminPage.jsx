import React from 'react'
import { useGetProductsQuery } from '../products/productApi';
import { Avatar, Button, Card, IconButton, Typography } from "@material-tailwind/react";
import { baseUrl } from '../../app/mainApi';
import { NavLink } from 'react-router';
import RemoveButton from './RemoveButton';



const TABLE_HEAD = ["image", "tItle", "_id", "edit", "delete"];


export default function AdminPage() {

  const { isLoading, error, data } = useGetProductsQuery();
  console.log(data);


  if (isLoading) return <h1>Loading...</h1>

  if (error) return <h1>{error}</h1>


  return (
    <div className=''>

      <div className='flex justify-end my-5'>
        <NavLink to={'/add-product'}>
          <Button color='purple'>Add Product</Button>
        </NavLink>

      </div>



      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(({ _id, title,image}, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <Avatar src={`${baseUrl}${image}`} />
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {title}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {_id}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <NavLink to={`/edit-products/${_id}`} >
                      <IconButton size='sm' color='green'>
                        <i className="fas fa-edit" />
                      </IconButton>
                    </NavLink>

                  </td>

                  <td className={classes}>
                    <RemoveButton id={_id} />

                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

    </div>
  )
}