
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faServer,faIcons,faHeadphones,faEnvelope,faChartColumn} from '@fortawesome/free-solid-svg-icons'
import FutureSectionCard from "./FutureSectionCard"

const FeatureSection = ()=>{

    return(
        <article className="flex flex-col px-20 gap-3 py-10">
            <section className="flex  justify-between px-5" >
                <div className="flex flex-col w-80 gap-3 justify-end p-5  ">
                    <h3 className="text-red-500/90 font-semibold text-sm">OUR SERVICES</h3>
                    <h2 className="text-3xl font-semibold">Provided Features</h2>
                    <p className="text-xs  text-black/70">Streamline your finances with our expenses app featuring seamless API integration. Stay in the loop with real-time email notifications. Harness the power of smart expense categorization. Gain valuable insights with budget analytics, making financial management a breeze!</p>
                </div>
                <div className="w-80 translate-y-10 translate-x-5 rounded-xl shadow-2xl shadow-black/10">
                   <FutureSectionCard shadow={"shadow-orange-300"} color={"bg-orange-400/90"} icon={<FontAwesomeIcon icon={faServer} />} title={"API References"} description={"Effortlessly connect and sync your financial data with our user-friendly API references. Simplify your expense tracking, ensuring a seamless integration experience for a more efficient and up-to-date overview of your finances."}/>
                </div>
                <div className="w-80 ">
                   <FutureSectionCard shadow={"shadow-red-300"} color={"bg-red-500/80"} icon={<FontAwesomeIcon icon={faIcons} />} title={"Expense Categorization"} description={"Effortlessly organize your expenses with our intuitive categorization feature. Our app simplifies tracking by sorting your transactions into relevant categories, saving you time and ensuring a tidy, organized financial overview."} />
                </div>
                
            </section>
            <section className="flex justify-between px-5">
                <div className="w-80">
                   <FutureSectionCard shadow={"shadow-gray-300"} color={"bg-gray-800/90"} icon={<FontAwesomeIcon icon={faHeadphones} />} title={"Customer Support"} description={"Our commitment to your experience goes beyond the app. With dedicated customer support, we're just an email away. Receive real-time notifications keeping you informed, supported, and ensuring your journey with our app is smooth and stress-free."}/>
                </div>
                <div className="w-80 translate-y-10 -translate-x-5">
                   <FutureSectionCard shadow={"shadow-blue-300"} color={"bg-blue-500/90"} icon={<FontAwesomeIcon icon={faEnvelope} />} title={"Email Notifications"} description={"Stay in the loop effortlessly with our app's email notification feature. Receive real-time updates on your expenses and account activity, ensuring you're always informed and in control. Effortless communication, tailored to enhance your financial management experience."}/>
                </div>
                <div className="w-80">
                   <FutureSectionCard shadow={"shadow-violet-300"} color={"bg-violet-800/80"} icon={<FontAwesomeIcon icon={faChartColumn} />} title={"Budget Insights and Analytics"} description={"Empower your financial decisions with our insightful budget analytics, providing a clear overview of your spending habits and helping you achieve your financial goals effortlessly."} />
                </div>
            </section>
        </article>
    )
}
export default FeatureSection