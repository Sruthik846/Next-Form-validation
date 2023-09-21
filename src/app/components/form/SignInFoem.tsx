'use client';
import React, { useState } from "react";

const SignInFoem = () => {
    const [formData, setFormData] = useState({
        email : '',
        password : ''
    })

    const [errors, setErrors] = useState({
        email : '',
        password : ''
    })



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Validate form fields

        interface newErrors {
            username: string;
            password: string;
          }
        // const newErrors = {};
    
        if (formData.password.trim() === '') {
          newErrors.password = 'Password is required';
        }
    
        if (formData.email.trim() === '') {
          newErrors.email = 'Email is required';
        }
    
        // Update error states
        setErrors(setErrors);
    
        // If there are no errors, submit the form
        if (Object.keys(newErrors).length === 0) {
          // Perform form submission logic here
        }
      };



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

  return (
    <form className="flex flex-col gap-2 text-sm" onSubmit={handleSubmit}>
      <label> Email</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="form-control p-2 rounded-md "
        placeholder="Email"
      ></input>
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        className="form-control p-2 rounded-md "
        placeholder="Password"
      ></input>
      {errors.password && <p className="error">{errors.password}</p>}

      <div className="py-2 flex flex-col justify-center items-center">
        <button
          type="submit"
          className="btn p-2 bg-black text-white text-sm rounded-md w-full"
        >
          Submit
        </button>
      </div>
      <hr></hr>
      <div></div>
    </form>
  );
};

export default SignInFoem;
