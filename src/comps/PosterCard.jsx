import { useState } from 'react';

export default function PosterCard({ Name, Link }) {
  return (
    <div className="rounded-lg bg-slate-700 h-auto w-[13rem] m-5  hover:scale-110 transition">
      <h1 className='text-white text-center p-2 font-semibold'>{Name}</h1>
      <img src={Link} alt={Name} className='rounded-lg' />
    </div>
  );
}
