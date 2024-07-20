import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    console.log('Form data:', formData);
    // Add your form submission logic here
  }

  return (
    <form onSubmit={submitHandler} className="mx-auto max-w-md">
      <div className="mb-4">
        <label htmlFor="email" className="block text-white mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          onChange={changeHandler}
          value={formData.email}
          className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-white mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          onChange={changeHandler}
          value={formData.password}
          className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg focus:outline-none focus:shadow-outline"
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
