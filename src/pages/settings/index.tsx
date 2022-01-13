import React, { useContext, useState } from 'react';

import Button from '../../components/button';
import Modal from '../../components/modal';
import { AppStoreCtx } from '../../utils/AppStoreProvider';

export interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
  const appStore = useContext(AppStoreCtx);
  const [duration, setDuration] = useState(appStore.duration);
  const [loading, setLoading] = useState(false);

  const durationChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDuration(parseInt(event.target.value));
  };

  const applyChangeHandler = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    appStore.setDuration(duration);
  };

  const randomHandler = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setLoading(true);
    fetch(
      'https://www.random.org/integers/?num=1&min=1&max=60&col=1&base=10&format=plain&rnd=new'
    )
      .then((response) => response.text())
      .then((data) => setDuration(parseInt(data)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Modal show={loading}>
        <svg
          className="animate-spin h-10 w-10 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </Modal>

      <form
        name="settings"
        className="h-full flex flex-col items-center gap-8 mt-6"
        onSubmit={applyChangeHandler}
      >
        <h1 className="font-bold text-2xl text-gray-600 w-full text-left">
          Settings
        </h1>

        <div className="flex flex-row justify-content w-full">
          <label
            htmlFor="duration"
            className="text-left w-full font-bold text-gray-600 text-lg"
          >
            Duration : {duration} {duration > 1 ? 'mins' : 'min'}
          </label>
          <Button
            text={'Random'}
            color={'secondary'}
            className="text-sm"
            onClick={randomHandler}
          ></Button>
        </div>

        <input
          id="duration"
          name="duration"
          type="range"
          className="w-full accent-cyan-400"
          min={1}
          max={60}
          step={1}
          value={duration}
          onChange={durationChangeHandler}
        />

        <Button
          type="submit"
          text="Apply"
          color="primary"
          className="w-full text-xl"
        ></Button>
      </form>
    </>
  );
};

export default Settings;
