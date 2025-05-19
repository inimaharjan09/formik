import { Button, Input, Option, Select, Textarea, } from '@material-tailwind/react'
import { Formik } from 'formik'
import { useAddProductMutation } from '../products/productApi';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';

export const productSchema = Yup.object().shape({
  title: Yup.string().required('title is required'),
  description: Yup.string().required('description is required'),
  price: Yup.number().required('price is required'),
  category: Yup.string().required('category is required'),
  brand: Yup.string().required('brand is required'),
  image: Yup.mixed().required('image is required').test('fileType', 'Unsupported File Format', (value) => {
    console.log(value);
    return ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'].includes(value.type);
  })
})

export default function ProductAddForm() {
  const nav = useNavigate();
  const [addProduct, { isLoading }] = useAddProductMutation();
  const { user } = useSelector((state) => state.userSlice);

  return (
    <div className='max-w-[400px] mt-10'>

      <Formik
        initialValues={{
          title: '',
          description: '',
          price: '',
          image: '',
          category: '',
          brand: '',
          imagePrev: ''

        }}
        onSubmit={async (val) => {
          const formData = new FormData();
          formData.append('title', val.title);
          formData.append('description', val.description);
          formData.append('price', Number(val.price));
          formData.append('image', val.image);
          formData.append('category', val.category);
          formData.append('brand', val.brand);
          try {
            await addProduct({
              body: formData,
              token: user?.token
            }).unwrap();
            toast.success('successfully added');
            nav(-1);
          } catch (err) {
            toast.error(err.data?.message || err.data)
          }


        }}
        validationSchema={productSchema}
      >
        {({ handleSubmit, handleChange, touched, values, setFieldValue, errors }) => (
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <Input
                onChange={handleChange}
                value={values.title}
                label='Title'
                name='title' />
              {touched.title && errors.title && <p className='text-red-500'>{errors.title}</p>}
            </div>
            <div>
              <Input
                onChange={handleChange}
                value={values.price}
                label='Price'
                name='price' />
              {touched.price && errors.price && <p className='text-red-500'>{errors.price}</p>}
            </div>


            <div>
              <Select
                onChange={(e) => setFieldValue('category', e)}
                label="Select Category">
                <Option value="Men's clothing">Men's clothing</Option>
                <Option value="Women's clothing">Women's clothing</Option>
                <Option value="Jewelery">Jewelery</Option>

              </Select>
              {touched.category && errors.category && <p className='text-red-500'>{errors.category}</p>}
            </div>
            <div >
              <Select
                onChange={(e) => setFieldValue('brand', e)}
                label="Select Brand">
                <Option value='Apple'>Apple</Option>
                <Option value='Samsung'>Samsung</Option>
                <Option value='Oppo'>Oppo</Option>
                <Option value='Google'>Google</Option>
              </Select>
              {touched.brand && errors.brand && <p className='text-red-500'>{errors.brand}</p>}
            </div>

            <Textarea
              onChange={handleChange}
              value={values.description}
              label='Description'
              name='description' />
            {touched.description && errors.description && <p className='text-red-500'>{errors.description}</p>}

            <div>
              <Input
                label='Image'
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFieldValue('imagePrev', URL.createObjectURL(file));
                  setFieldValue('image', file);
                }}
                name='image'
                type='file'
              />
              {touched.image && errors.image && <p className='text-red-500'>{errors.image}</p>}


            </div>
            <div>
              {!errors.image && values.imagePrev && <img className='w-[200px] h-[200px] object-cover' 
              src={values.imagePrev} alt="" />}
            </div>




            <Button loading={isLoading} type='submit'>Submit</Button>


          </form>
        )}
      </Formik>



    </div>
  )
}