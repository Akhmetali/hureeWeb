"use client"
// pages/register.js

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { message } from "antd"


const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const router = useRouter();
  const [email, setEmail]= useState(false)
  const [password, setPassword]= useState(false)
  const [username, setUsername]= useState(false)


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (formData.email && formData.username && formData.password){
      localStorage.setItem('userData', JSON.stringify(formData));
      router.push('/login'); // Redirect to profile page
      message.success("Амжилттай бүртгүүллээ",5)
    } else {
      // message.warning("Мэдээлэл дутуу байна",5)
      if (!formData.email && !formData.password && !formData.username ){
        setEmail(true)
        setPassword(true)
        setUsername(true)
        return message.info("Хэрэглэгч та мэдээлэлээ бүрэн оруулна уу",5)
      }
      if (!formData.username ){
        setUsername(true)
        return message.info("Хэрэглэгч нэрээ оруулна уу",5)
      }
      if (formData.username ){
        setUsername(false)
      }

      if (!formData.email){
          setEmail(true)
          return message.info("Хэрэглэгч та майлээ оруулна уу",5)
      }
      if (formData.email){
          setEmail(false)
      }
      if (!formData.password ){
          setPassword(true)
          return message.info("Хэрэглэгч нууц үгээ оруулна уу",5)
      }
      if (formData.password ){
          setPassword(false)
      }
 
    }
  };

  return (
    <div className='w-full h-screen relative'>
      <div className='flex flex-col justify-center items-center bg-white rounded-xl w-full sm:w-1/2 min-h-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-200'>
        
        <form onSubmit={handleSubmit} className='w-full max-w-md p-2 sm:p-8 lg:p-16'>
          <div className='py-2 sm:py-4 lg:py-8'>
            <Image
              alt='logos-5'
              unoptimized
              className='w-48 pb-4'
              width={100}
              height={100}
              src={"/logo.png"}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Username</label>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
             {
                username && <p className='text-red-500 text-sm'>* Хэрэглэгчийн нэрээ оруулна уу.</p>
            }
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
             {
                email && <p className='text-red-500 text-sm'>* Майл хаягаа оруулна уу.</p>
            }
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
             {
                password && <p className='text-red-500 text-sm'>* Нууц үгээ оруулна уу.</p>
            }
          </div>
          <div className='flex flex-col items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
            >
              Бүртгүүлэх
            </button>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2'
            >
              <a href='/login'>
                Нэвтрэх
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
