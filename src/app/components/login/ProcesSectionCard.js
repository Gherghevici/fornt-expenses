const ProcesSectionCard = ({summary,title,description,number,isMiddle})=>{
    return (
        <div className={`flex w-80  h-40 p-3 rounded-xl  ${isMiddle?"bg-blue-500/90 shadow-2xl shadow-blue-600":"bg-white"}`}>
            <div className={`${isMiddle?"w-9/12":"w-2/3"} flex flex-col gap-3 justify-center`}>
                <h3 className={`${isMiddle?"text-white":"text-red-500/90"} font-semibold text-sm`}>{summary}</h3>
                <h2 className={`${isMiddle?"text-white":"text-black"} text-xl font-semibold`}>{title}</h2>
                <p className={`${isMiddle?"text-white/80":"text-black/80"} text-xs`}>{description}</p>
            </div>
            <div className={`${isMiddle?"w-3/12":"w-1/3"}`}>
                <h2 className={`flex justify-center items-center h-full text-9xl font-extrabold ${isMiddle?"bg-gradient-to-b from-white from-15% via-white/50 via-55% to-90% to-blue-500/90 inline-block text-transparent bg-clip-text":"bg-gradient-to-b from-blue-600 from-20% via-blue-300/70 via-65% to-white/80 to-90% inline-block text-transparent bg-clip-text"} `}>{number}</h2>
            </div>
        </div>
    )
}

export default ProcesSectionCard;