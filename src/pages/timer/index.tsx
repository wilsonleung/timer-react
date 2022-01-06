import React, { useState } from 'react';
import Button from '../../components/button';

const Timer: React.FC = () => {
  const [counting, setCounting] = useState<boolean>(false);

  const startCountdownHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setCounting(true);
  };

  const stopCountdownHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setCounting(false);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center gap-8">
      <h1 className="text-8xl font-bold text-gray-600">25:00</h1>
      {counting ? (
        <Button
          text="Stop"
          color="secondary"
          className=" w-full text-2xl"
          onClick={stopCountdownHandler}
        ></Button>
      ) : (
        <Button
          text="Start"
          color="primary"
          className=" w-full text-2xl"
          onClick={startCountdownHandler}
        ></Button>
      )}
    </div>
  );
};

export default Timer;
