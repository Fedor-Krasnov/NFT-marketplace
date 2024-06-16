import { createContext, useContext } from 'react';

export const ModalMenuContext = createContext();
export const useModalMenuContext = () => useContext(ModalMenuContext);
