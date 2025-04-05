import React from 'react';
import { Typography, Input, Checkbox, Button } from '@material-tailwind/react';
import { useForm } from 'react-hook-form';

export default function TodoAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-6">
          <div className="flex justify-center mb-4">
          </div>
          <Typography variant="h4" className="text-center font-bold mb-1">
            Sign in to your account
          </Typography>
          <Typography className="text-center text-gray-500 mb-6 text-sm">
            Or <a href="#" className="text-blue-500">start your 14-day free trial</a>
          </Typography>
          <form 
          onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Typography variant="h7" className="font-strong">
                Email address
              </Typography>
              <Input 
                type="email"
                {...register('email', { required: 'Email is required' })}
                error={Boolean(errors.email)}
              />
              {errors.email && (
                <Typography variant="small" className="text-red-500 mt-1">
                  {errors.email.message}
                </Typography>
              )}
            </div>
            <div>
              <Typography variant="small" className="mb-1 font-medium">
                Password
              </Typography>
              <Input className=" !border-t-blue-gray-200"
                type="password"
                {...register('password', { required: 'Password is required' })}
                error={Boolean(errors.password)}
              />
              {errors.password && (
                <Typography variant="small" className="text-red-500 mt-1">
                  {errors.password.message}
                </Typography>
              )}
            </div>
            <div className="flex items-center justify-between">
              <Checkbox label="Remember me" />
              <a href="#" className="text-sm text-blue-500">Forgot your password?</a>
            </div>
            <Button type="submit" fullWidth className="bg-blue-600">
              Sign in</Button>
            <div className="flex items-center justify-center gap-2 my-4">
              <hr className="w-1/4 border-gray-300" />
              <Typography variant="small" className="text-gray-500">
                Or continue with
              </Typography>
              <hr className="w-1/4 border-gray-300" />
            </div>
          </form>
      </div>
    </div>
  );
}