

export default function dateCard({ date }) {
    return (
        <div className="flex">
            <div className="rounded-lg shadow-lg bg-white ">
                <img className="rounded-t-lg h-96 w-full" src={date.url} alt={date.title} />
                <div className="p-6 ">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{date.title}</h5>
                    <p className="text-gray-400 text-sm mb-4">
                        {date.date}
                    </p>
                </div>
            </div>
        </div>
    )
}


