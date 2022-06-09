import './App.css';
import AllRoutes from './AllRoutes';
import { useScrollToTop } from './utils/utils';

function App() {
  useScrollToTop();
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
