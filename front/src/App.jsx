import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { NotificationDialog } from './components/Notification';
import Router from './routers/Router';

function App() {
  
  return (
    <>
      <Navbar />
      <Router />
      <NotificationDialog/>
    </>
  )
}

export default App;
