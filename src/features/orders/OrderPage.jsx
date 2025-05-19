import { Button, Card, Typography } from "@material-tailwind/react";
import { useGetUserOrderQuery } from "./orderApi.js";
import { Link } from "react-router";
const TABLE_HEAD = ["OrderId", "OrderDate", "TotalAmount", "Order Detail"];


export default function OrderPage({ user }) {

  const { data, isLoading, error } = useGetUserOrderQuery(user.token);

  if (isLoading) return <h1>Loading...</h1>
 if(error) return <h1>{error.data?.message || error?.error}</h1>
 console.log(data);
  return (
    <div className="col-span-2">

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
            {data.map(({ _id, totalAmount, createdAt }, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={_id}>
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
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {createdAt}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {totalAmount}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Link to ={`/orders/${_id}`}>
                    <Button size="sm" variant="text">View Detail</Button>
                    </Link>
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