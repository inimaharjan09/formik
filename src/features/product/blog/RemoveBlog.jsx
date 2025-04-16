import { IconButton } from '@material-tailwind/react'
import React from 'react'
import { useRemoveBlogMutation } from './blogApi'
import toast from 'react-hot-toast';

export default function RemoveBlog({ id }) {
  const [removeBlog, { isLoading }] = useRemoveBlogMutation();

  const handeleRemove = async () => {
    try {
      await removeBlog(id).unwrap();
      toast.success('removed successfully');
    } catch (err) {

    }
  }

  return (
    <div>

      {isLoading ? <p>Loading....</p> :
        <IconButton
          onClick={handeleRemove}
          size='sm'
          color='pink'
        >
          <i className="fas fa-trash" />
        </IconButton>}
    </div>
  )
}