import { useParams } from 'react-router'
import { useGetOrderDetailQuery } from './orderApi.js';
import { Avatar, Card, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';
import { baseUrl } from '../../app/mainApi.js';

export default function OrderDetail() {
  const { id } = useParams();
  const { isLoading, error, data } = useGetOrderDetailQuery(id);

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>{error.data?.message || error?.error}</h1>

  console.log(data);
  return (
    <div className='mt-5 space-y-2 max-w-[600px]'>
      <h1>Order Detail</h1>
      <hr />
      <p>Order Id: {data._id}</p>

    <Card className="w-96 mt-4">
      <List>
        {data.orderItems && data.orderItems.map((item) => {
          return <ListItem key ={item._id}>
          <ListItemPrefix>
            <Avatar variant="circular" alt="" src={`${baseUrl}${item.image}`} />
          </ListItemPrefix>
          <div className='space-y-2'>
            <Typography variant="h6" color="blue-gray">
              {item.title}
            </Typography>
            <div className='flex gap-5 items-center'>
              <p>Rs. {item.price}</p>
              <p>x</p>
              <p>Qty: {item.qty}</p>
            </div>
          </div>
        </ListItem>
      } )}
        
        </List>
    </Card>
    <div className='flex items-end justify-between mt-9'>
      <h1>Total Amount</h1>
      <p>Rs.: {data.totalAmount}</p>
    </div>
    </div>
  )
}