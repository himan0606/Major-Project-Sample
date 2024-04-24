import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Addproduct = () => {

  const navigate = useNavigate();

  // initialize the formik
  const productForm = useFormik({
    initialValues: {
      brand: '',
      model: '',
      colors: '',
      description: '',
      image: '',
      price: 0
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      console.log(values);
      // return;
      // send the data to the server
      const res = await fetch('http://localhost:5000/product/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Nice',
          text: 'Product Added successfully'
        })
          res.json().then((data) => {
            setSubmitting(false);
            // resetForm();
            // navigate('/login');
          }).catch((err) => {
            console.log(err);
          });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'oops!!',
          text: 'Something went wrong'
        })
      }

    },
    // validationSchema: SignupSchema,
  });

  const uploadfile = async (e) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    console.log(file.name);

    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/util/uploadfile', {
      method: 'POST',
      body: fd
    });

    console.log(res.status);
    if(res.status === 200){
      productForm.values.image = file.name;
    }
  }


  return (
    <div><>
      *
      <p />
      <div className="addpro">
        <h2>Add Product</h2>
        <form onSubmit={productForm.handleSubmit}>
        
          <label htmlFor="brand">Brand:</label>
          <input type="text" id="brand" onChange={productForm.handleChange} value={productForm.values.brand} />
          <label htmlFor="model">model:</label>
          <input type="text" id="model" onChange={productForm.handleChange} value={productForm.values.model} required="" />

          <label htmlFor="description">Product Description:</label>
          <textarea
            id="description"
            onChange={productForm.handleChange}
            value={productForm.values.description}
            rows={4}
          />
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            onChange={productForm.handleChange}
            value={productForm.values.price}
            step="1"
          />

          <label htmlFor="colors">Color:</label>
          <input type="text" id="colors" onChange={productForm.handleChange} value={productForm.values.colors}  />

          <label htmlFor="uploadimage">Image:</label>
          <input type="file" id="uploadimage" onChange={uploadfile} className=' md-4 bg-warning' />

          <input type="submit" className='mt-4' defaultValue="Add Product" />
        </form>
      </div>
      <p />
    </>
    </div>
  )
}

export default Addproduct