import '../styles/App.css';

import Navbar from '../components/navBar';
import { fetcher } from '../utils/fetcher';

function App() {
  // fetcher()
  return (
    <div className="app">
      <Navbar />
    </div>
  );
}

export default App;
