import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import AllRoutes from './AllRoutes';
import { useScrollToTop } from './CustomHooks/CustomHooks';

function App() {
  useScrollToTop();
  return (
    <div className="App">
      <AllRoutes />
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default App;
