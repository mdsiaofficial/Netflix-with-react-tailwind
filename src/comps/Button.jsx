import { useState } from 'react';

export default function Button({ Name }) {
  return (
    <div className="rounded-lg bg-red-700 h-[2rem] w-[5rem] m-5 flex justify-center items-center hover:bg-red-600">
      <button className="flex justify-center items-center w-full h-full">
        <h1 className="text-white text-center">{Name}</h1>
      </button>
    </div>
  );
}

