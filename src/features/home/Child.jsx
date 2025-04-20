import { Button, Card, CardBody, CardFooter, CardHeader, IconButton, Typography } from '@material-tailwind/react';
import React, { memo, useEffect } from 'react'

export default function Child({ }) {
  console.log('child render');

  useEffect(() => {
    const someFunc = (e) => {
      if(e.key === 'x'){
        console.log('handleShow Called');
        handleShow();
      }
    }
    addEventListener('keypress', someFunc); 
        return () => {
          removeEventListener('keypress', someFunc);  
      //console.log('hello jee');
      //console.log(e);
    }
  },[])

  return (
    <div>
      <h1>This is Child</h1>
      <IconButton className=''>
        <i className='fas fa-close'/>
        </IconButton>
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  )
}