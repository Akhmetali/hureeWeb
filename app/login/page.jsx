// pages/login.js
"use client"
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here, such as sending data to a server for authentication
    // For simplicity, let's assume authentication is successful
    // You might want to use JWT tokens or session management for a real-world application
    // For this example, let's simulate successful login by setting a flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/profile'); // Redirect to profile page
  };

  return (
    <div className='w-full h-screen relative'>
    <div className='flex justify-center items-center bg-white rounded-xl w-full md:w-1/2 min-h-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-200'>
      <div className='flex justify-center items-center bg-white rounded-xl min-w-1/2 h-96'>
        <form onSubmit={handleSubmit} className='w-full max-w-md p-2 sm:p-8 lg:p-16'>
        <div className='py-2 sm:py-4 lg:py-8'>
            <Image
              unoptimized
              className='w-48 pb-4'
              width={100}
              height={100}
              src={"/logo.png"}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            />
             <a href='/'>
                Бүртгүүлэх
              </a>
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
            >
              Нэвтрэх
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
