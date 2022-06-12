import React, { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom';

import Navbar from '../components/navBar';
import { fetcher } from '../utils/fetcher';

function getUrl(date) {
  let url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&"
  url = url + date
  return url
}

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}


function DetailsDate() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const date = useQuery();

  useEffect(() => {
    if (isLoading) {
      let url = getUrl(date)
      try {
        fetcher(url).then((data) => {
          if (data) {
            setData(data)
            setIsLoading(false)
            setError(null);
          } else {
            setError("There was an error getting the date");
          }
        })
      } catch (error) {
        setError("We couldn't make the request to get the dates");
      }
    }
  }, [isLoading, date])
  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  if (error) {
    return (
        <div className="App">
            <h1>{error}</h1>
        </div>
    );
  }
  return (
    <div className="app">
      <Navbar />
      <div>
        <div className="p-4 w-4/5 m-auto">
          <Link to={{ pathname: "/" }}><h2 className="text-2xl py-2">← Volver al Dashboard</h2></Link>
          <div className="rounded-lg shadow-lg bg-white w-full sm:w-4/5 lg:w-1/2 m-auto">
            <img className="rounded-t-lg w-full" src={data.url} alt={data.title} />
            <div className="p-6 ">
              <h5 className="text-gray-900 text-xl font-medium mb-2">{data.title} <span className="text-gray-400 text-sm mb-4">{data.copyright} - {data.date}</span></h5>
              <p className="text-gray-700 text-base mb-4">
                {data.explanation}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


export default DetailsDate