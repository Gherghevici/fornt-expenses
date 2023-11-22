import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'


const RightCategoryCard = ({icon,bgColor,title,date,price})=>{
    return (
        <>
            <div className="flex justify-between">
                <div className='flex gap-4 items-center'>
                    <div className={`rounded-lg ${bgColor} px-2 py-1 w-10 h-10 flex justify-center items-center`}>

                    </div>
                    <div>
                        <h3 className='text-md'>{title}</h3>
                        <p className='text-gray-500/90 text-sm'>{date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    ${price}
                </div>
                
            </div>
        </>
    )
}
export default RightCategoryCard;