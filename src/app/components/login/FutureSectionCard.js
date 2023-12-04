const FutureSectionCard = ({icon,title,description,color,shadow})=>{
    return (
        <div className="flex flex-col justify-between bg-white p-5  h-72 rounded-xl">
            <div className={`${color} w-fit rounded-full px-3.5 py-2.5 text-white shadow-md ${shadow} `}>{icon}</div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-xs  text-black/70">{description}</p>
            <div className="text-sm font-semibold">Learn more </div>
        </div>
    )

}
export default FutureSectionCard;