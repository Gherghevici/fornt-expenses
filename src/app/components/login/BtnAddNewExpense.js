'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'

const BtnAddNewExpense = ()=>{

    return (
        <button className='flex gap-2 items-center' >
            <div className=' flex items-center justify-center border-dotted border-2 border-gray-500/90 px-2 py-1 w-10 h-10 rounded-lg'>
                <FontAwesomeIcon icon={faPlus} className='text-gray-500/90'/>
            </div>
            <h2 className='text-md text-gray-500/90'>Add New</h2>
        </button>
    )
}
export default BtnAddNewExpense