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


  return (
    <div>

      {data && data.map((blog) => {
        return <div key={blog.id} className='flex gap-16 mb-4'>
          <div>
            <h1>{blog.title}</h1>
            <p className='text-gray-700'>{blog.detail}</p>
          </div>

          <RemoveBlog id={blog.id} />



        </div>
      })}

    </div>
  )
}