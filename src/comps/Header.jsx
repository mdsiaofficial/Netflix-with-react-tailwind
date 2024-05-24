import { useState } from 'react';
import logo from './imgs/logo.png'
import Button from './Button.jsx'

export default function Header() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[200px] flex justify-between items-center gap-3">
          <a href="" className="hover:text-red-500">
            Home
          </a>
          <a href="" className="hover:text-red-500">
            Movies
          </a>
          <a href="" className="hover:text-red-500">
            Tv Series
          </a>
        </div>
        <img src={logo} alt="" className="w-[20%] px-4" />
        <div className="flex items-end justify-end">
          <Button Name={ 'Sign In' }/>
          <Button Name={ 'Sign Up' }/>
        </div>
      </div>
    
    </>
  );
}

