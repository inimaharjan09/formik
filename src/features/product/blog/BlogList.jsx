import React from 'react'
import { useGetBlogsQuery } from './blogApi'
import RemoveBlog from './RemoveBlog';

export default function BlogList() {
  const { isLoading, error, data } = useGetBlogsQuery();
  if (isLoading) {
    return <h1>Loading....</h1>
  }
  if (error) {
    return <h1>{error.message}</h1>
  }
  //console.log(data);
  return (
    <div>
      {data.map((blogs) => {
        return <div key={blogs.id} className='flex gap-16 mb-4'>
          <div>
            <h1>{blogs.title}</h1>
            <p className='text-gray-700'>{blogs.detail}</p>
          </div>
          <RemoveBlog />
        </div>
      })}
    </div>
  )
}