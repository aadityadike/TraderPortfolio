function Cover() {
    return (
        <section className="h-screen text-white bg-neutral-900">
            <div className="flex flex-col justify-center items-center gap-10 min-h-screen">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-5xl font-bold leading-relaxed">
                        Maximize Your Earnings
                    </h1>
                    <h2 className="text-2xl font-semibold leading-relaxed">
                        Join the Trading Revolution Now!
                    </h2>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <form action="action.js" className="w-full h-full flex">
                        <input type="email" className="rounded m-1 py-4 px-28" />
                        <label className=" text-lg font-semibold bg-red-700 rounded px-9 py-4">Subscribe Now</label>
                    </form>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="text-xl font-normal leading-relaxed">
                        Join our trading community and gain access to exclusive tips and strategies that will take your profits to the next level.
                    </p>
                </div >
            </div>
        </section >
    )
}
export default Cover;