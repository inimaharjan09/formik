import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { todoSchema } from './TodoAdd';
import { updateTodo } from './todoSlice';



export default function TodoEdit() {
  const { todos } = useSelector((state) => state.todoSlice);

  const { id } = useParams();
  const todo = todos.find((todo) => todo.id === id);
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div>

      <Formik
        initialValues={{
          title: todo.title,
          location: todo.location,
          colors: todo.colors,
          country: todo.country,
          description: todo.description
        }}

        onSubmit={(val) => {
          dispatch(updateTodo({ ...val, id: todo.id }));
          nav(-1);
        }}
        validationSchema={todoSchema}

      >


        {({ handleChange, handleSubmit, values, setFieldValue, touched, errors }) => {

          return <form
            onSubmit={handleSubmit}
            className='max-w-[400px] space-y-5'>


            <div>
              <Input
                value={values.title}
                onChange={handleChange}
                label='Title' name='title' />
              {errors.title && touched.title && <h1 className='text-pink-400'>{errors.title}</h1>}

            </div>


            <div className=''>
              <Typography variant='h6'>Select One</Typography>
              <div className="flex gap-10">
                <Radio
                  onChange={handleChange}
                  color='red'
                  name="location"
                  value={'Indoor'}
                  label="Indoor"
                  checked={values.location === 'Indoor'}
                />
                <Radio
                  color='amber'
                  onChange={handleChange}
                  name="location"
                  value={'Outdoor'}
                  label="Outdoor"
                  checked={values.location === 'Outdoor'}
                />
              </div>
              {errors.location && touched.location && <h1 className='text-pink-400'>{errors.location}</h1>}
            </div>

            <div>
              <Typography variant='h6'>Select Colors</Typography>
              <div className="flex w-max gap-4">
                <Checkbox
                  name='colors'
                  label='Blue'
                  onChange={handleChange}
                  color="blue"
                  value={'blue'}
                  checked={values.colors.includes('blue')}
                />
                <Checkbox
                  name='colors'
                  label='Red'
                  onChange={handleChange}
                  color="red"
                  value={'red'}
                  checked={values.colors.includes('red')}
                />
                <Checkbox
                  name='colors'
                  onChange={handleChange}
                  label='Green'
                  color="green"
                  value={'green'}
                  checked={values.colors.includes('green')}
                />
              </div>
              {errors.colors && touched.colors && <h1 className='text-pink-400'>{errors.colors}</h1>}
            </div>

            <div>
              <div className="space-y-2">
                <Typography variant='h6'>Select your Country</Typography>
                <Select
                  value={values.country}
                  onChange={(e) => setFieldValue('country', e)}
                  label="Select Country" name='country'>
                  <Option value='Nepal'>Nepal</Option>
                  <Option value='india'>India</Option>
                  <Option value='china'>China</Option>

                </Select>
                {errors.country && touched.country && <h1 className='text-pink-400'>{errors.country}</h1>}
              </div>
            </div>


            <div>
              <Textarea
                onChange={handleChange}
                value={values.description}
                label='Description' name='description' />
              {errors.description && touched.description && <h1 className='text-pink-400'>{errors.description}</h1>}
            </div>

            <Button type='submit'>Submit</Button>


          </form>
        }}


      </Formik>



    </div>
  )
}