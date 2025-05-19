
import { useGetUserQuery } from './userApi.js';
import { Formik } from 'formik';
import { Button, Input } from '@material-tailwind/react';

export default function UserProfile({user}) {

  const { data, isLoading, error } = useGetUserQuery(user.token);
  if (isLoading) return <h1>Loading...</h1>
  if(error) return <h1>{error.data?.message || error?.error}</h1>

  return (
    <div>

      <Formik
        initialValues={{
          username: data.username,
          email: data.email
        }}
        onSubmit={(val) => {
          console.log(val);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form className='space-y-5'>
            <div>
              <Input
                label='Username'
                name='username'
                value={values.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <Input
                label='Email'
                name='email'
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <Button type='submit'>Submit</Button>
          </form>
        )}
      </Formik>
    </div>
  )
}