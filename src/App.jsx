import { useState } from 'react';
import './App.css';
import PosterCard from './comps/PosterCard';
import PosterLink from './comps/PosterLink.json';
import Button from './comps/Button';
import { faSign } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-4">
        <Button Name={`Sign In`}/>
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
