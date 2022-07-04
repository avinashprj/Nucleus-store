import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import AllRoutes from './AllRoutes';
import { useScrollToTop } from './CustomHooks/CustomHooks';
import { Loader } from './components/Loader/Loader';

function App() {
  useScrollToTop();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <AllRoutes />
          <ToastContainer autoClose={1500} />
        </>
      )}
    </div>
  );
}

export default App;
