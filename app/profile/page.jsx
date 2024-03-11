// pages/profile.js
"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Profile = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({
    username: '',
    email: ''
  });
  const router = useRouter();

  // Effect to load user data from localStorage on component mount
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
      setEditedData(parsedUserData);
    } else {
      // If user data is not available, redirect to login page
      router.push('/login');
    }
  }, []);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedData(userData);
  };

  const handleChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user data in localStorage
    localStorage.setItem('userData', JSON.stringify(editedData));
    setUserData(editedData);
    setEditMode(false);
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('userData');
    // Redirect to login page
    router.push('/login');
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white p-8 rounded-lg shadow-md w-auto sm:w-1/3'>
        <div className='pb-2'>
            <Image
                unoptimized
                className='w-48 pb-4'
                width={100}
                height={100}
                src={"/logo.png"}
            />
        </div>
        <h1 className='text-2xl mb-4 flex items-center'>Сайн уу, <p className='font-bold uppercase'>{editedData.username}</p></h1>
        
        {editMode ? (
          <form onSubmit={handleSubmit} className='mb-4'>
      
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Username</label>
              <input
                type='text'
                name='username'
                value={editedData.username}
                onChange={handleChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Email</label>
              <input
                type='email'
                name='email'
                value={editedData.email}
                onChange={handleChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
            <div className='flex items-center justify-between'>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2'
              >
                Save
              </button>
              <button
                type='button'
                onClick={handleCancelEdit}
                className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Username</label>
              <p className='text-gray-900'>{userData.username}</p>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Email</label>
              <p className='text-gray-900'>{userData.email}</p>
            </div>
            <button
              onClick={handleEditClick}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2'
            >
              Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;

