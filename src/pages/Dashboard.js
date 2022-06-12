
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import Navbar from '../components/navBar';
import DateCard from '../components/dateCard';
import { fetcher } from '../utils/fetcher';

function getUrl() {
    let url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date="
    let date = new Date()
    date.setDate(date.getDate() - 5)
    date = date.toISOString().slice(0, 10)
    url = url + date
    return url
}

function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dates, setDates] = useState(null);

    useEffect(() => {
        if (isLoading) {
            let url = getUrl()
            try {
                fetcher(url).then((data) => {
                    if (data) {
                        console.log(data)
                        setDates(data)
                        setIsLoading(false)
                        setError(null);
                    } else {
                        setError("There was an error getting the dates");
                    }

                })
            } catch (error) {
                setError("We couldn't make the request to get the dates");
            }
        }
    }, [isLoading])
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
            <div className="p-4 w-9/12 m-auto">
                <h2 className="text-2xl py-2">Dashboard</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                    {
                        dates.map(date => (
                            <Link to={{ pathname: "/detailsDate", search: `?date=${date.date}` }} key={date.date}>
                                <DateCard date={date} />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div >
    );
}

export default Dashboard;
