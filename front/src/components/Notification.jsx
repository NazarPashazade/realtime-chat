import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function NotificationDialog() {

  return (
    <>
      <ToastContainer
        theme="dark"
        autoClose={5000}
      />
    </>
  );
}

