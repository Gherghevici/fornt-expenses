
const DashboardTitleCard = ({title,price,icon})=>{
    return(
        <div className={` ${title==="Balance"? "bg-gradient-to-br from-blue-600/80 to-blue-800 text-white":"bg-white"}  flex flex-col justify-between p-3 w-36 h-36 bg-gray-300 rounded-lg`}>
            <div className={` ${title === "Balance"?"text-white bg-gray-300/20 ":"text-blue-700 bg-gray-300/30"} flex justify-center items-center rounded-full w-10 h-10 p-3`}>
                {icon}
            </div>
            <div className={`${title === "Balance"?"text-white": "text-black/40"} text-sm`}>
                {title}
            </div>
            <div className="font-semibold text-xl">
                ${price}
            </div>
        </div>
    )
}
export default DashboardTitleCard;