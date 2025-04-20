import { useState } from 'react';
import Child from './Child'
import { Button } from '@material-tailwind/react';

export default function HomePage() {
const [show, setShow]=useState(true);
const handleShow = () => {
  setShow((prev) => !prev);
}
  console.log('parent render');
  return (
    <div className='space-y-5'>
      <h1>This is Parent</h1>
      <hr />
<Button onClick={handleShow}>HandleShow</Button>
{show && <Child handleShow ={handleShow} />}
    </div>
  )
}