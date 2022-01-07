import React, { createContext, useState } from 'react';

const defaultDuration = 25;

export interface AppStoreProps {
  duration: number;
  setDuration: (value: number) => void;
}

export const AppStoreCtx = createContext<AppStoreProps>({
  duration: defaultDuration,
  setDuration: (_: number) => {},
});

const AppStoreProvider: React.FC = ({ children }) => {
  const [duration, setDuration] = useState(defaultDuration);

  return (
    <AppStoreCtx.Provider value={{ duration, setDuration }}>
      {children}
    </AppStoreCtx.Provider>
  );
};

export default AppStoreProvider;
