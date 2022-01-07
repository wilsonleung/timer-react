import React, { createContext, useState } from 'react';

export interface AppStoreProps {
  duration: number;
  setDuration: (value: number) => void;
}

export const AppStoreCtx = createContext<AppStoreProps>({
  duration: 25,
  setDuration: (_: number) => {},
});

const AppStoreProvider: React.FC = ({ children }) => {
  const [duration, setDuration] = useState(25);

  return (
    <AppStoreCtx.Provider value={{ duration, setDuration }}>
      {children}
    </AppStoreCtx.Provider>
  );
};

export default AppStoreProvider;
