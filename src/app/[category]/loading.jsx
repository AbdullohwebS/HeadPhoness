function loading() {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-10 my-16 px-4 max-w-6xl mx-auto animate-pulse">
            <div className="w-full lg:w-1/2 bg-gray-300 h-[320px] lg:h-[560px] rounded-lg" />
            <div className="w-full lg:w-1/2 space-y-4">
                <div className="h-4 w-32 bg-gray-300 rounded" />
                <div className="h-8 w-3/4 bg-gray-300 rounded" />
                <div className="h-4 w-full bg-gray-300 rounded" />
                <div className="h-4 w-[90%] bg-gray-300 rounded" />
                <div className="h-12 w-40 bg-gray-300 rounded mt-4" />
            </div>
        </div>)
}

export default loading  