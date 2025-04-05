import React from 'react';
import ReactDOM from 'react-dom';

export const PortaledSubmenu: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};
