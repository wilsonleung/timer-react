import React, { useContext, useState } from 'react';

import Button from '../../components/button';
import Loading from '../../components/loading';
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
      <Loading show={loading}></Loading>

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
          className="w-full text-2xl"
        ></Button>
      </form>
    </>
  );
};

export default Settings;
