// /context/Modal/Provider.js
import React, { useState, createContext } from "react";
type Props = {
  component: null;
  modalProps: {};
  isOpen: false;
  showModal: ({ component, modalProps }: any) => void;
  hideModal: () => void;
};
export const ModalContext = createContext<Props>({
  component: null,
  modalProps: {},
  isOpen: false,
});

const ModalProvider = ({ children }: any) => {
  const [data, setData] = useState({
    component: null,
    modalProps: {},
    isOpen: false,
  });

  const showModal = ({ component, modalProps = {} }: any) => {
    setData({ ...data, component, modalProps, isOpen: true });
  };

  const hideModal = () => {
    setData({ ...data, isOpen: false });
  };

  return (
    <ModalContext.Provider value={{ ...data, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
