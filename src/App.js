import logo from "./logo.svg";
import { useState } from "react";
import React from "react"

function App() {

    // React.useEffect(() => {
    //  if(success){
    //   var form = document.querySelector("form")
    //   form.reset()
    //  }
    // }, [])


  const field = {
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    confirmEmail: "",
  };


  const [data, setData] = useState(field);
  const [error, setError] = useState(null);
   
    const [success , setSuccess]= useState(false)

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setSuccess(false)

    console.log(error);

    const irstName = () => {
      if (data.firstName.length <= 3) {
        return false;
      }
      return true;
    };
    if (!irstName()) {
      setError("First name must be at least 3 character");
      return;
    }
    const lastName = () => {
      if (data.lastName.length <= 3) {
        return false;
      }
      return true;
    };
    if (!lastName()) {
      setError("Last name must be at least 3 character");
      return;
    }
    const email = () => {
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          data.email
        )
      ) {
        return false;
      }
      return true;
    };
    const password = () => {
      if (data.password.length <= 6) {
        return false;
      }
      return true;
    };

    const confirmPassword = () => {
      if (data.password !== data.confirmPassword) {
        return false;
      }
      return true;
    };  const confirmEmail = () => {
      if (data.email !== data.confirmEmail) {
        return false;
      }
      return true;
    };

    if (!email()) {
      setError("Email is not valid");
      return;
    }
    if(!confirmEmail()){
      setError("Email does not match");
      return;
    }
    if (!password()) {
      setError("Password must be  at least 7 character");
      return;
    }
    if (!confirmPassword()) {
      setError("Password does not match");
      return;
    }
    setError(null);
    setSuccess(true)
  
  };
  
return (
  <form 
    autoComplete="false"
    className="col-6 bg-dark p-5 mx-auto mt-4"
    onSubmit={handleSubmit}
  >
  {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {success && (
        <div class="alert alert-success" role="alert">
          Registration Completed
        </div>
      )}
    <div class="form-row row">
      <h1 className="text-white mx-auto text-center">Signup Form</h1>
      <div class="form-group col-md-12">
        <label className="text-white" for="firstName">
          Fistname
        </label>
        <input
          onChange={handleChange}
          name="firstName"
          type="text"
          class="form-control"
          id="firstName"
          placeholder="Firstname"
        />
      </div>
      <div class="form-group col-md-12">
        <label className="text-white" for="lastName">
          LastName
        </label>
        <input
          onChange={handleChange}
          name="lastName"
          type="text"
          class="form-control"
          id="lastName"
          placeholder="LastName"
        />
      </div>
      <div class="form-group col-md-6">
        <label className="text-white" for="email">
          Email
        </label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          class="form-control"
          id="email"
          placeholder="Email"
        />
      </div>
      <div class="form-group col-md-6">
        <label className="text-white" for="confirmEmail">
          Confirm Email
        </label>
        <input
          onChange={handleChange}
          name="confirmEmail"
          type="email"
          class="form-control"
          id="confirmEmail"
          placeholder="Confirm Email"
        />
      </div>
      <div class="form-group col-md-6">
        <label className="text-white" for="password">
          Password
        </label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <div class="form-group col-md-6">
        <label className="text-white" sfor="confirmPassword">
          Confirm Password
        </label>
        <input
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          class="form-control"
          id="confirmPassword"
          placeholder="Password"
        />
      </div>
    </div>
    <button
      type="submit"
      class="btn btn-primary btn-lg col-12 mt-3
  "
    >
      Sign in
    </button>
  </form>
);
}
export default App;
