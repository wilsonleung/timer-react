import React, { useContext, useEffect, useState } from 'react';

import Button from '../../components/button';
import { AppStoreCtx } from '../../utils/AppStoreProvider';

const oneSecond = 1000;

function toCountDownString(millSecond: number) {
  const mins = parseInt(String(millSecond / (60 * oneSecond)));
  const seconds = (millSecond - mins * 60 * oneSecond) / oneSecond;
  return `${String(mins).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

const Timer: React.FC = () => {
  const appStore = useContext(AppStoreCtx);
  const [counting, setCounting] = useState(false);
  const [countDown, setCountDown] = useState(
    toCountDownString(appStore.duration * 60 * oneSecond)
  );

  const startCountdownHandler = (): void => {
    setCounting(true);
  };

  const stopCountdownHandler = (): void => {
    setCounting(false);
  };

  useEffect(() => {
    let cancel: number | undefined = undefined;
    if (counting) {
      let tempCount = appStore.duration * 60 * oneSecond;
      cancel = window.setInterval(() => {
        tempCount = tempCount - oneSecond;
        setCountDown(toCountDownString(tempCount));

        if (tempCount === 0) {
          window.clearInterval(cancel);
          setCounting(false);
          setCountDown(toCountDownString(appStore.duration * 60 * oneSecond));
        }
      }, oneSecond);
    } else {
      if (cancel) {
        window.clearInterval(cancel);
      }
    }

    return () => {
      if (cancel) {
        clearInterval(cancel);
      }
    };
  }, [appStore.duration, counting]);

  return (
    <div className="h-full flex flex-col justify-center items-center gap-8">
      <h1 className="font-mono text-8xl font-bold text-gray-600">
        {countDown}
      </h1>
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
