import { useState } from 'react';
import logo from './imgs/logo.png'
import Button from './Button.jsx'

export default function Header() {
  return (
    <>
      <div className="flex justify-center items-center">
        <img src={logo} alt="" />
        <div className="flex items-end justify-end">
          <Button Name={ 'Sign In' }/>
          <Button Name={ 'Sign Up' }/>
        </div>
      </div>
    
    </>
  );
}

