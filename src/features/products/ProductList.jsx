import { useGetProductsQuery } from './productApi'
import { Rating } from '@material-tailwind/react';
import { baseUrl } from '../../app/mainApi';
import { useNavigate } from 'react-router';

export default function ProductList() {
  const nav = useNavigate();
  const { isLoading, error, data } = useGetProductsQuery();
  if (isLoading) return <h1>Loading...</h1>

  if (error) return <h1>{error}</h1>

  return (
    <div className='grid grid-cols-6 my-6 gap-4'>

      {data && data.map(({ _id, title, price, image, rating }) => {
        return <div
          onClick={() => nav(`/products/${_id}`)}
          key={_id} className='shadow-lg hover:shadow-2xl cursor-pointer'>

          <div className='h-[250px] w-full'>
            <img className='h-full object-cover' src={`${baseUrl}${image}`} alt="" />
          </div>

          <div className='px-4 py-2 space-y-1'>
            <h2 className='font-medium'>{title}</h2>
            <p className='text-red-400'>Rs.{price}</p>
            <Rating readonly value={rating} />
          </div>


        </div>
      })}

    </div>
  )
}