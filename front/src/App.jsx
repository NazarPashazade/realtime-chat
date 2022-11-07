import React from 'react';
import { NotificationDialog } from './components/Notification';
import Header from './pages/Header';
import Router from './routers/Router';

function App() {
  
  return (
    <>
      <Header />
      <Router />
      <NotificationDialog/>
    </>
  )
}

export default App;
