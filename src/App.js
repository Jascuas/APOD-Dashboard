
import {Routes,Route} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import DetailsDate from './pages/DetailsDate';

function App() {

  return (
    <>
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/detailsDate" element={<DetailsDate />} />
    </Routes>
  </>
  );
}

export default App;
