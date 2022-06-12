import '../styles/App.css';
import { useEffect, useState } from "react";

import Navbar from '../components/navBar';
import DateCard from '../components/dateCard';
import { fetcher } from '../utils/fetcher';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [dates, setDates] = useState(null);

  useEffect(() => {
    if (isLoading) {
      fetcher().then((data) => {
        setDates(data)
        setIsLoading(false)
      })
    }
  }, [isLoading])
  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (
    <div className="app">
      <Navbar />
      <div>
        <div className="p-4 w-9/12 m-auto">
          <h2 className="text-2xl py-2">Dates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {
              dates.map(date => (
                <DateCard date={date} key={date.date} />
              ))
            }
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
