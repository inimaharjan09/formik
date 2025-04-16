import { Button, Input, Textarea } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'
import { useAddBlogMutation } from './blogApi'
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

export default function AddBlog() {

  const [addBlog, { isLoading }] = useAddBlogMutation();
  const nav = useNavigate();
  return (
    <div>

      <Formik
        initialValues={{
          title: '',
          detail: '',
        }}
        onSubmit={async (val, { reset }) => {
          try {
            await addBlog(val).unwrap();
            toast.success('added successfully');
            nav(-1);
          } catch (err) {
            toast.error(err.error || err.message);

          }
        }}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit} className='max-w-[400px] space-y-6'>
            <div>
              <Input
                label='Title'
                name='title'
                value={values.title}
                onChange={handleChange}
              />
            </div>

            <div>
              <Textarea
                label='Detail'
                name='detail'
                value={values.detail}
                onChange={handleChange}
              />
            </div>

            <Button loading={isLoading} type='submit'>Submit</Button>
          </form>
        )}
      </Formik>

    </div>
  )
}