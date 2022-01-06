import React from 'react';
import Button from '../../components/button';

const Timer: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-8">
      <h1 className="text-8xl font-bold text-gray-600">25:00</h1>
      <Button
        text="Start"
        color="primary"
        className=" w-full text-2xl"
      ></Button>
    </div>
  );
};

export default Timer;
