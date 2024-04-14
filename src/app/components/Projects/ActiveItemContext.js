import { createContext, useContext, useState } from 'react';

const ActiveItemContext = createContext({
  activeItem: null,
  setActiveItem: () => {},
});

export function ActiveItemProvider({ children }) {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <ActiveItemContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </ActiveItemContext.Provider>
  );
}

export function useActiveItem() {
  return useContext(ActiveItemContext);
}
