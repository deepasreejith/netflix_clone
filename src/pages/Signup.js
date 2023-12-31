import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () =>{
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {user,signUp} = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      await signUp(email,password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
    console.log(user)
  }
  console.log(user)
  return (
    <>
     <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' alt='bgimage' src='https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/a9a1a456-16bc-4ecc-9612-8a8af8411f81/AE-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg' />
        <div className='bg-black/40 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input onChange={(e) =>setEmail(e.target.value)} className='p-3 my-2 bg-gray-600 rounded' type='email' placeholder='Email' autoComplete='email' />
                <input onChange={(e) =>setPassword(e.target.value)}  className='p-3 my-2 bg-gray-600 rounded' type='password' placeholder='Password' autoComplete='current-password' />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p><input type='checkbox' />Remember Me</p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'><span>Already subsribe to Netflix?</span>{''}
              <Link to='/login'>
              Sign In</Link></p>
              </form>
          </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default Signup
