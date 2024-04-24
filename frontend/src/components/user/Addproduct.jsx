import React from 'react'

const Addproduct = () => {

  const navigate = useNavigate();

  // initialize the formik
  const signUpform = useFormik({
    initialValues: {
       productname: '',
      brand: '',
      Productdescription: ''
    },
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      setTimeout(() => {
        console.log(values);
        setSubmitting(false);
      }, 3000);

      // send the data to the server
      const res = await fetch('http://localhost:5000/user/add', {
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
          text: 'You have signed up successfully'
        })
          .then((result) => {
            navigate('/login');

          }).catch((err) => {

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

    const res = await fetch('/http://localhost:5000/utils/uploadfile', {
      method: 'POST',
      body: fd
    });

    console.log(res.status);

  }




  return (
    <div><>
    *
    <p />
    <div className="addpro">
      <h2>Add Product</h2>
      <form action="#" method="POST">
        <label htmlFor="productName">Product Name:</label>
        <input type="text" id="productName" name="productName" required="" />

        <label htmlFor="productImage">Brand:</label>
        <input type="text" id="productColor" name="productModel" required="" />

        <label htmlFor="productDescription">Product Description:</label>
        <textarea
          id="productDescription"
          name="productDescription"
          rows={4}
          required=""
          defaultValue={""}
        />
        <label htmlFor="productPrice">Price:</label>
        <input
          type="number"
          id="productPrice"
          name="productPrice"
          step="0.01"
          required=""
        />
        <label htmlFor="productImage">model:</label>
        <input type="text" id="productModel" name="productModel" required="" />

        <label htmlFor="productImage">Color:</label>
        <input type="text" id="productColor" name="productModel" required="" />

        <label htmlFor="productPrice">Rating:</label>
        <input
          type="number"
          id="productPrice"
          name="productPrice"
          step="1-10"
          required=""
        />
        <label htmlFor="productImage">Image:</label>
        <input type="file" id="productColor" name="productModel" required="" className=' md-4 bg-warning' />

        <input type="submit" defaultValue="Add Product" />
      </form>
    </div>
    <p />
  </>
  </div>
  )
}

export default Addproduct