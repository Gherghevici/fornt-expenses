'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faX, } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const ModalExpense = ({isOpen})=>{

    const [open,setOpen] = useState(isOpen);
    
    const closeModalHandler = (e)=>{
        e.preventDefault();
        
        setOpen((prev)=>prev=false);
    }

    return (
        open?
        <section onClick={closeModalHandler} className="z-0 bg-black/30 absolute top-0 left-0 w-screen h-screen">
            <div onClick={(e)=>e.stopPropagation()} className=" z-10 rounded-xl p-5 relative bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 h-3/5">
                <button onClick={closeModalHandler} className="flex justify-end w-full"><FontAwesomeIcon icon={faX} /></button>
                <h1 className='flex justify-center mb-5'>Add new Expense</h1>

                <div className='flex flex-col gap-2'>
                    <div className='flex justify-center gap-2'>
                        <input placeholder='Name...' className='w-40 px-2  focus:outline-none border-b-2 border-black/20 focus:border-black/40 '/>
                        <input placeholder='Amount...' className='w-40 px-2  focus:outline-none border-b-2 border-black/20 focus:border-black/40  '/>
                    </div>
                    <div className='flex justify-center gap-2 '>
                        <select className='rounded-lg pl-2 py-1 w-40 '>
                            <option value={""}>category</option>
                            <option value={"test"} >test</option>
                            <option value={"test"} >Cumparaturi</option>
                        </select>
                        <button className='px-2 py-1 bg-sky-500 rounded-lg w-40'>add new category</button>
                    </div>
                    <div className='flex justify-center'>
                        <textarea className='px-1 w-80 h-16 resize-none border-2 border-black/20 focus:border-black/40 focus:outline-none rounded-lg' placeholder='Type a note...'></textarea>
                    </div>
                </div>
            </div>
        </section>:
        <></>
    )
}
export default ModalExpense;