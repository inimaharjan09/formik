import { Carousel } from "@material-tailwind/react";
import { useGetTop5ProductsQuery } from './productApi';
import { baseUrl } from '../../app/mainApi';
export default function Top5Products() {

  const { isLoading, error, data } = useGetTop5ProductsQuery();

  if(isLoading) return <h1>Loading...</h1>
  //console.log(error);
  if(error) return <h1>{error.data?.message || error?.error}</h1>
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