import ProcesSectionCard from "./ProcesSectionCard"

const ProcesSection = ()=>{

    return(
        <article className="flex flex-col gap-3 py-10 px-20 bg-gradient-to-r from-gray-100  via-blue-50 to-gray-100 from-30% via-50% to-70%">
            <section className="flex justify-between items-center">
                <div className="w-2/5">
                    <h3 className="text-red-500/90 font-semibold text-sm mb-3">OUR PROCESS</h3>
                    <h2 className="text-3xl font-bold ">Maintain an easy process for better outcome</h2>
                </div>
                <div className="w-2/5">
                    <p className="text-xs mt-8 text-black/70">Discover seamless financial management with our intuitive expenses app. Effortlessly track, categorize, and gain insights into your spending. Set and achieve personalized budget goals with real-time updates. Take control of your finances on the go!</p>
                </div>
            </section>
            <section className="flex justify-center items-center gap-3 pb-16">
                <ProcesSectionCard summary={"Frequently"} title={"See your finance"} description={"Quick easy access to track your money and stay in control"} number={"2"} />
                <ProcesSectionCard summary={"Best for"} title={"Track your transaction"} description={"Track account activities,monitor your transactions with our account history function"} number={"1"} isMiddle={true} />
                <ProcesSectionCard summary={"Exclusive"} title={"Achive your goals"} description={"Set up goals to save up for your dream vacantion or dream house"} number={"3"} />
                
            </section>
        </article>
    )
}
export default ProcesSection