export default function Work() {
    return (
        <div className="bg-black flex flex-col">
            <div className="flex flex-col gap-6 p-12 t:px-48 text-white">
                <div className="uppercase font-league text-2xl leading-2xl">
                    What we can do{" "}
                    <span className="font-garamond lowercase italic">
                        for you.
                    </span>
                </div>

                <div className="font-garamond text-lg leading-lg">
                    Observing our work in action is the best way to see what we
                    can do for you.
                </div>
            </div>

            <div className="flex px-12 pb-12 t:px-48 gap-6 overflow-x-scroll no-scrollbar">
                {[...Array(10)].map((item, i) => (
                    <div className="h-36 min-w-64 relative" key={i}>
                        <img
                            className="w-full h-full absolute -bottom-2 -right-2"
                            src="/branding/shadow.png"
                        />
                        <img
                            className="w-full h-full relative"
                            src="/work/modMAIL.png"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
