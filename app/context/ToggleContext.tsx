'use client';

import React, { useState } from 'react';

const ToggleContext = React.createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export function ToggleProvider({ children }: { children: React.ReactNode }) {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <ToggleContext.Provider value={[toggle, setToggle]}>
      {children}
    </ToggleContext.Provider>
  );
}

export function useToggle() {
  const context = React.useContext(ToggleContext);

  if (context === undefined) {
    throw new Error('useToggle must be used within a ToggleProvider');
  }

  return context;
}
