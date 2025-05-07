import React from 'react'
import { Carousel } from "@material-tailwind/react";
import { useGetTop5ProductsQuery } from './productApi';
import { baseUrl } from '../../app/mainApi';
export default function Top5Products() {

  const { isLoading, error, data } = useGetTop5ProductsQuery();

  console.log(data);
  return (
    <div>

      <Carousel
        autoplay
        className=" h-[370px]">
        {data && data.map(({ _id, image }) => {
          return <img
            key={_id}
            src={`${baseUrl}${image}`}
            alt="image 1"
            className="h-full w-full object-cover"
          />;
        })}


      </Carousel>


    </div>
  )
}