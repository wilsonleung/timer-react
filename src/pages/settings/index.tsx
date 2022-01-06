import React from 'react';
import Button from '../../components/button';

export interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-8">
      <h1>Settings</h1>
      <Button
        text="Apply"
        color="primary"
        className=" w-full text-2xl"
      ></Button>
    </div>
  );
};

export default Settings;
