import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoCard } from './TodoCard';
import { Button } from '@material-tailwind/react';
import { reset } from './todoSlice';



export default function TodoPage() {

  const { todos } = useSelector((state) => state.todoSlice);
  const { posts } = useSelector((state) => state.postSlice);
  const dispatch = useDispatch();

  return (
    <div className='space-y-7'>
      <div className='grid grid-cols-3 gap-14 '>

        {todos.length < 1 && <h1>Add Some Todos</h1>}
        {todos.map((todo, i) => {
          return <TodoCard key={todo.id} todo={todo} index={i} />;
        })}

      </div>

      {posts.map((post, i) => {
        return <div key={i}>
          <h1>{post.title}</h1>
          <p>{post.detail}</p>
        </div>;
      })}

      <Button onClick={() => dispatch(reset())}>Reset</Button>
    </div>
  )
}