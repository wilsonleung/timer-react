import React, { useState } from 'react';
import Button from '../../components/button';

export interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
  const [duration, setDuration] = useState<number>(25);

  const durationChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDuration(parseInt(event.target.value));
  };

  const applyChangeHandler = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    console.log(duration);
  };

  return (
    <form
      name="settings"
      className="h-full flex flex-col items-center gap-8 mt-6"
      onSubmit={applyChangeHandler}
    >
      <h1 className="font-bold text-2xl text-gray-600 w-full text-left">
        Settings
      </h1>

      <label
        htmlFor="duration"
        className="text-left w-full font-bold text-gray-600"
      >
        Duration : {duration} {duration > 1 ? 'mins' : 'min'}
      </label>

      <input
        id="duration"
        name="duration"
        type="range"
        className="w-full"
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
  );
};

export default Settings;
