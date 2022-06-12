

export default function dateCard({ date }) {
    return (
        <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <img class="rounded-t-lg h-80 max-w-full" src={date.url} alt={date.title} />
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{date.title}</h5>
                    <p class="text-gray-400 text-sm mb-4">
                        {date.date}
                    </p>
                </div>
            </div>
        </div>
    )
}


