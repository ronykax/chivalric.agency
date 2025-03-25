import WorkCard from "./work-card";

export default function Work() {
    return (
        <section id="portfolio" className="bg-black flex flex-col">
            <div className="flex flex-col gap-6 p-12 t:px-48 text-white">
                <div className="uppercase font-league text-2xl leading-2xl">
                    What we can do
                    <br />
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
                <WorkCard url="https://www.behance.net/gallery/205987147/modMAIL-Branding-Logo-Design" name="modMAIL" thumbnail="/work/modMAIL.png" />
                <WorkCard url="https://www.behance.net/gallery/207718641/Indie-Watchlist-Newsletter-Brand-Identity" name="Indie Watchlist" thumbnail="/work/indie-watchlist.png" />
                <WorkCard url="https://www.behance.net/gallery/219377637/Avalon-Branding-Logo-Design" name="Avalon" thumbnail="/work/avalon.png" />
                <WorkCard url="https://www.behance.net/gallery/187689341/Chivalric-Brand-Explanation-Guidelines" name="Chivalric" thumbnail="/work/chivalric.png" />
                <WorkCard url="https://www.behance.net/chivalricagency" name="View More" thumbnail="/work/view-more.png" />
            </div>
        </section>
    );
}
