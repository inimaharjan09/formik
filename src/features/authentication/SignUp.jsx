import { Button, IconButton, Input, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React, { useState } from 'react'

import toast from 'react-hot-toast';
import { useUserSignUpMutation } from './authApi';
import { useNavigate } from 'react-router';

export default function SignUp() {

  const nav = useNavigate();

  const [userSignUp, { isLoading }] = useUserSignUpMutation();
  const [show, setShow] = useState(false);
  return (
    <div className='max-w-[400px]'>

      <Formik
        initialValues={{
          username: '',
          email: '',
          password: ''
        }}
        onSubmit={async (val) => {
          try {
            await userSignUp(val).unwrap();
            toast.success('successfully registered');
            nav(-1);
          } catch (err) {
            toast.error(err.data?.message || err.data)
          }

        }}
      >
        {({ handleSubmit, handleChange, touched, values, }) => (
          <form onSubmit={handleSubmit} className='space-y-6'>

            <div>
              <Input
                onChange={handleChange}
                value={values.username}
                label='Username'
                name='username' />
            </div>
            <div>
              <Input
                onChange={handleChange}
                value={values.email}
                label='Email'
                name='email' />
            </div>
            <div className="relative flex w-full ">
              <Input
                onChange={handleChange}
                name='password'
                value={values.password}
                type={show ? "text" : "password"}
                label="Password"
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />


              <IconButton
                onClick={() => setShow(!show)}
                variant='text'
                size='sm'
                className="!absolute right-1 top-1 rounded">
                <i className={show ? "fas fa-unlock" : "fas fa-lock"}

                />
              </IconButton>

            </div>

            <Button loading={isLoading} type='submit'>Submit</Button>


          </form>
        )}
      </Formik>


      <Typography color="gray" className="mt-6 text-center font-normal">
        Already have an account?{" "}
        <Button
          onClick={() => nav(-1)}
          variant='text' className="font-medium text-gray-900 px-2">
          Login
        </Button>
      </Typography>

    </div>
  )
}