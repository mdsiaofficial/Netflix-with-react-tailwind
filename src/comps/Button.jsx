import { useState } from 'react';

export default function Button({ Name }) {
  return (
    <div className="rounded-lg bg-red-700 h-[3rem] w-[8rem] m-5 flex justify-center items-center hover:bg-red-600">
      <button className="flex justify-center items-center w-full h-full">
        <h1 className="font-bold text-xl hover:text-3xl">{Name}</h1>
      </button>
    </div>
  );
}

