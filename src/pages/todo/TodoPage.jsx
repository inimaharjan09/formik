import React, { useActionState } from 'react'
import TodoAdd from './TodoAdd'
import { Button, Input } from '@material-tailwind/react'
import axios from 'axios'


const handleSubmit=async(prevState, formData)=>{
  //console.log(prevState);
  //console.log(formData.get('title'));
  try{
    await axios.post('https://67f1ee5fc733555e24ae56e4.mockapi.io/blogs',{
      title: formData.get('title'),
      detail: formData.get('detail'),
    });
    return 'success';
  }
  catch(err){
  }

}

export default function TodoPage() {
  const [result, formAction, pending] = useActionState(handleSubmit,null);
  //console.log(m);
  return (
    <div className='p-5'>

      {/* <TodoAdd /> */}

      <form action={formAction} className='max-w-[300px] space-y-4'>
        <div>
          <Input name='title' label='Title'></Input>
        </div>
        <div>
          <Input name='detail' label='Detail'></Input>
        </div>
        <Button type='submit'>Submit</Button>
      </form>

    </div>
  )
}
