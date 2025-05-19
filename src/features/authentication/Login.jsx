import { Button, IconButton, Input, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { useUserLoginMutation } from './authApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUser } from '../user/userSlice';

export default function Login() {
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className='max-w-[400px] mt-10 mx-auto'>

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={async (val) => {
          try {
            const response = await userLogin(val).unwrap();
            dispatch(setUser(response));
            toast.success('successfully login');
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
        Don't have an account?{" "}
        <Button
          onClick={() => nav('/sign-up')}
          variant='text' className="font-medium text-gray-900 px-2">
          Sign Up
        </Button>
      </Typography>

    </div>
  )
}