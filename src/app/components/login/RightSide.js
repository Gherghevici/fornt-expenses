import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell } from '@fortawesome/free-regular-svg-icons'
import RightCategoryCard from './RightCategoryCard';
import BtnAddNewExpense from './BtnAddNewExpense';
import Calendar from './Calendar';
import ModalExpense from './ModalExpense';

const RightSide = ()=>{

    return(
        <>
            <section className='w-1/4 p-5 bg-gray-200  flex flex-col'>
                <section className='flex gap-2 justify-end'>
                    <FontAwesomeIcon icon={faBell} />
                    <img src='' alt='#'></img>
                </section>
                <section className='flex flex-col gap-3'>
                    <h2 className='text-2xl font-medium text-gray-500/90'>Expenses</h2>
                    <RightCategoryCard icon={"faHouse"} bgColor={"bg-violet-500"}  title={"Home Loan"} date={"16 April"} price={150.00}/>
                    <RightCategoryCard bgColor={"bg-lime-500"} title={"Earphone"} date={"25 April"} price={250.00}/>
                    <RightCategoryCard bgColor={"bg-sky-500"} title={"Camera"} date={"25 May"} price={255.00}/>
                    <BtnAddNewExpense/>
                </section>

                <h2 className='text-2xl font-medium text-gray-500/90'>Calendar</h2>
                <Calendar />
                <ModalExpense isOpen={true}/>
            </section>
        </>
    )

}

export default RightSide;