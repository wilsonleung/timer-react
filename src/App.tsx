import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Anchor from './components/anchor';

function App() {
  const navigate = useNavigate();
  const [selectedAnchor, setSelectedAnchor] = useState<string>('Timer');

  const anchorHandler = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    const target = event.target as HTMLElement;
    const targetName = target.getAttribute('name');
    if (targetName) {
      console.log(targetName);
      setSelectedAnchor(targetName);
      navigate(targetName);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-100">
      <div className="sm:w-[375px] sm:h-[667px] w-full h-full rounded-lg shadow-lg bg-white flex flex-col p-6 gap-4">
        <header className="font-bold text-4xl text-center text-red-400 pt-4 pb-4">
          🍅 Tomato Timer
        </header>

        <Outlet></Outlet>

        <div className="flex flex-row gap-2">
          <Anchor
            name="Timer"
            text="Timer"
            className="flex-1 text-center"
            selected={selectedAnchor === 'Timer'}
            onClick={anchorHandler}
          ></Anchor>
          <Anchor
            name="Settings"
            text="Settings"
            className="flex-1 text-center"
            selected={selectedAnchor === 'Settings'}
            onClick={anchorHandler}
          ></Anchor>
        </div>
      </div>
    </div>
  );
}

export default App;
