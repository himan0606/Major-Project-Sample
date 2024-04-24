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