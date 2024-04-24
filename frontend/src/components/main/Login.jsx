import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion"
import UseAppContext from "../../context/AppContext";

const Login = () => {

  const { setloggedin } = UseAppContext();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch( `${import.meta.env.VITE_API_URL}/Ures/authenticate/`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          'Content-type': 'application/json'
        }
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Login Successfull',
        });

        const data = await res.json();
        console.log(data);
        sessionStorage.setItem('user', JSON.stringify(data));
        setloggedin(true);
      }
      else if (res.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Email or Password is incorrect'
        })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong'
        })
      }
    },
  });

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}

      className="login-body  d-flex align-items-center mycard">
      <div className="col-md-3 mx-auto my-auto ">
        <div className="card shadow">
          <div className="card-body   ">
            <form onSubmit={loginForm.handleSubmit}>
              <img class="logo" src="data:image/jpeg;base64,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" alt="" />
              <h2 className="text-center my-3">Login Here</h2>

              <label>Email</label>
              <input
                id="email"
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
                type="email"
                className="form-control mb-4"
              />
              <label>Password</label>
              <input
                id="password"
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
                type="password"
                className="form-control mb-4"
              />

              <button type="submit" className="btn btn-primary w-100 mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;