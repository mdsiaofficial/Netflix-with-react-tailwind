import { useState } from 'react';
import './App.css';
import PosterCard from './comps/PosterCard';
import PosterLink from './comps/PosterLink.json';
import Button from './comps/Button';
import { faSign } from '@fortawesome/free-solid-svg-icons';
import Header from './comps/Header';

function App() {
  return (
    <>
      <div className="flex flex-row justify-center">
        <Header />
        {/* <div className="">

          <Button Name={`Sign In`} />
          <Button Name={`Sign Out`} />
        </div> */}
      </div>
      <div className="">

      </div>
      <div className="flex flex-row flex-wrap gap-4">
        {
          PosterLink.map((item, index) => (
            <PosterCard key={index} Name={item.Name} Link={item.src} />
          ))
        }

      </div>
    </>
  );
}

export default App;
