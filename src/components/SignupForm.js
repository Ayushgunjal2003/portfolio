import React, { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    password: "",
    ConfirmPassword: ""
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Form data:", formData);
    // Add your form submission logic here
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4">
      <div className="flex">
        <div className="w-1/2 pr-2">
          <label htmlFor='Firstname' className="block text-white mb-2">First Name</label>
          <input
            type='text'
            name='Firstname'
            id='Firstname'
            placeholder='First Name'
            onChange={changeHandler}
            value={formData.Firstname}
            className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label htmlFor='Lastname' className="block text-white mb-2">Last Name</label>
          <input
            type='text'
            name='Lastname'
            id='Lastname'
            placeholder='Last Name'
            onChange={changeHandler}
            value={formData.Lastname}
            className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
          />
        </div>
      </div>

      <div>
        <label htmlFor='email' className="block text-white mb-2">Email Address</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Enter email address'
          onChange={changeHandler}
          value={formData.email}
          className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
        />
      </div>

      <div className="flex">
        <div className="w-1/2 pr-2">
          <label htmlFor='password' className="block text-white mb-2">Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter Password'
            onChange={changeHandler}
            value={formData.password}
            className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label htmlFor='ConfirmPassword' className="block text-white mb-2">Confirm Password</label>
          <input
            type='password'
            name='ConfirmPassword'
            id='ConfirmPassword'
            placeholder='Confirm Password'
            onChange={changeHandler}
            value={formData.ConfirmPassword}
            className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg focus:outline-none focus:shadow-outline mt-4"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
