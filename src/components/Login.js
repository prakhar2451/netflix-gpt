import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

    const[isSignInForm , setIsSignInForm] = useState(true);

    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
    }
    
  return (
    <div className=''>
    <Header />
        <div className='absolute'>
            <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
                alt="logo"
            />


        </div>
        <form className=' w-3/12 absolute p-12 bg-black my-64 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-lg'>

            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

           {!isSignInForm && <input 
            type="text" 
            placeholder='Full Name' 
            className='p-4 my-4 w-full  bg-gray-700'
            ></input>}
            
            <input 
            type="email" 
            placeholder='Email Address' 
            className='p-4 my-4 w-full  bg-gray-700'
            ></input>
            
            <input 
            type="password" 
            placeholder='Password' 
            className='p-4 my-4 w-full bg-gray-700'
            ></input>
            
            <button className='py-4 my-6 cursor-pointer bg-red-600 w-full' type='submit'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            
            <p className='p-4 cursor-pointer' onClick={
                toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now": "Already registered ? Sign In Now"
                }
            </p>
        </form>
    </div>
  );
};

export default Login;