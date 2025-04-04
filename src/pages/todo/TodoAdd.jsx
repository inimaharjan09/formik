import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'

export default function TodoAdd() {
  return (
    <div>

      <Formik
        initialValues={{
          title: '',
          location: '',
          colors: [],
          country: '',
          description: ''
        }}

        onSubmit={(val) => {
          console.log(val);

        }}

      >


        {({ handleChange, handleSubmit, values, setFieldValue, touched }) => {

          return <form
            onSubmit={handleSubmit}
            className='max-w-[400px] space-y-5'>
            <div>
              <Input
                value={values.title}
                onChange={handleChange}
                label='Title' name='title' />
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
                />
                <Radio
                  color='amber'
                  onChange={handleChange}
                  name="location"
                  value={'Outdoor'}
                  label="Outdoor"
                />
              </div>
            </div>

            <div>
              <Typography variant='h6'>Select Colors</Typography>
              <div className="flex w-max gap-4">
                <Checkbox
                  name='colors'
                  label='Blue'
                  onChange={handleChange}
                  color="blue"
                  value={'blue'} />
                <Checkbox
                  name='colors'
                  label='Red'
                  onChange={handleChange}
                  color="red"
                  value={'red'} />
                <Checkbox
                  name='colors'
                  onChange={handleChange}
                  label='Green'
                  color="green"
                  value={'green'}
                />
              </div>
            </div>

            <div>
              <div className="space-y-2">
                <Typography variant='h6'>Select your Country</Typography>
                <Select
                  onChange={(e) => setFieldValue('country', e)}
                  label="Select Country" name='country'>
                  <Option value='Nepal'>Nepal</Option>
                  <Option value='india'>India</Option>
                  <Option value='china'>China</Option>

                </Select>
              </div>
            </div>


            <div>
              <Textarea
                onChange={handleChange}
                value={values.description}
                label='Description' name='description' />
            </div>

            <Button type='submit'>Submit</Button>


          </form>
        }}


      </Formik>



    </div>
  )
}