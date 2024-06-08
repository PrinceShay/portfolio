import React, { createContext, useContext, useState, ReactNode } from "react";

interface PreloaderContextProps {
  isPreloaderDone: boolean;
  setIsPreloaderDone: (done: boolean) => void;
}

const PreloaderContext = createContext<PreloaderContextProps | undefined>(
  undefined
);

export const usePreloader = () => {
  const context = useContext(PreloaderContext);
  if (!context) {
    throw new Error("usePreloader must be used within a PreloaderProvider");
  }
  return context;
};

export const PreloaderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  return (
    <PreloaderContext.Provider value={{ isPreloaderDone, setIsPreloaderDone }}>
      {children}
    </PreloaderContext.Provider>
  );
};
