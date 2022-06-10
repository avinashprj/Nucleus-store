import './App.css';
import AllRoutes from './AllRoutes';
import { useScrollToTop } from './CustomHooks/CustomHooks';

function App() {
  useScrollToTop();
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
