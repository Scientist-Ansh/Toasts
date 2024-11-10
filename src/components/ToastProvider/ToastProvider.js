import React, { useState } from 'react';
import useKeyDown from '../../hooks/useKeyDown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  useKeyDown('Escape', dismissAllToasts);
  const [activeToasts, setActiveToasts] = useState([])

  function dismissAllToasts() {
    setActiveToasts([])
  }

  function addNewToast(message, variant) {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant
    }
    setActiveToasts([...activeToasts, newToast])
  }

  function removeToast(id) {
    setActiveToasts(activeToasts.filter(toast => toast.id !== id))
  }

  return <ToastContext.Provider value={{
    toasts: activeToasts,
    addNewToast,
    removeToast
  }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
