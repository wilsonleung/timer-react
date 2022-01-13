import React, { useContext, useEffect, useState } from 'react';

import Button from '../../components/button';
import Modal from '../../components/modal';
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

  const [showMsg, setShowMsg] = useState(false);

  const startCountdownHandler = (): void => {
    setCountDown(toCountDownString(appStore.duration * 60 * oneSecond));
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
          setShowMsg(true);
        }
      }, oneSecond);
    } else {
      if (cancel !== undefined) {
        window.clearInterval(cancel);
      }
    }

    return () => {
      if (cancel !== undefined) {
        clearInterval(cancel);
      }
    };
  }, [appStore.duration, counting]);

  const handleMsg = () => {
    setShowMsg(false);
    setCountDown(toCountDownString(appStore.duration * 60 * oneSecond));
  };

  return (
    <>
      <Modal show={showMsg} onClick={handleMsg}>
        <div className="text-4xl font-bold bg-red-400 text-white p-5 rounded-lg  shadow-lg">
          Take a break 🎉
        </div>
      </Modal>
      <div className="h-full flex flex-col justify-center items-center gap-8">
        <h1 className="font-mono text-8xl font-bold text-gray-600">
          {countDown}
        </h1>
        {counting ? (
          <Button
            text="Stop"
            color="secondary"
            className="w-full text-xl"
            onClick={stopCountdownHandler}
          ></Button>
        ) : (
          <Button
            text="Start"
            color="primary"
            className="w-full text-xl"
            onClick={startCountdownHandler}
          ></Button>
        )}
      </div>
    </>
  );
};

export default Timer;
