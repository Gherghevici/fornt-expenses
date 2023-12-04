import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteRight} from '@fortawesome/free-solid-svg-icons'

const TestimonialSectionCard=({data,quote})=>{
    return(
        <div className="flex flex-col p-5 gap-2 w-72 h-48 bg-gray-50 rounded-xl shadow-lg shadow-blue-50">
            <div className="flex gap-2 h-1/3">
                <p>img</p>
                <div>
                    <h3 className="text-xl font-semibold">name</h3>
                    <h3 className="text-sm font-semibold text-blue-500/90">Work</h3>
                </div>
               <div className=' flex justify-end w-full'>
                    {quote?<FontAwesomeIcon icon={faQuoteRight} className='px-3.5 py-3 text-white/90 bg-blue-500/90 rounded-full' />:null}
                </div>
            </div>
            <div className="h-2/3 bg-white px-2 py-1">
                <p>testimonial</p>
            </div>
        </div>
    )

}

export default TestimonialSectionCard