import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenRuler,faHandshake} from '@fortawesome/free-solid-svg-icons'

const AboutSection = ()=>{
    return (
        <article className="flex px-20 bg-gradient-to-r from-gray-100 to-red-50 via-gray-100 via-50% to-100% py-32 ">
            <section className="w-1/2">
                daaaaaa
            </section>
            <section className="flex flex-col gap-5 w-1/2">
                <div className='flex flex-col gap-3'>
                    <h3 className="text-red-500/90 font-semibold text-sm ">ABOUT EXPENSESS APP</h3>
                    <h2 className="text-3xl font-semibold ">Inovative buildings with new things</h2>
                    <p className="text-xs  text-black/70">We are ideea generators, goal seakers, challange-thirsty, professionals, creators of unique internet projects. We deliver unconventional solutions in a meaningfull adventure</p>
                </div>
                <div className="flex gap-3">
                    <div className='w-1/2 flex flex-col gap-2'>
                        <div className='flex items-center rounded-full p-3 bg-blue-500/90 w-fit text-white'><FontAwesomeIcon icon={faPenRuler} /></div>
                        <h3 className="font-semibold">Minimal Design</h3>
                        <p className="text-xs  text-black/70">We aproched a minimal design to keep your life simpler</p>
                    </div>
                    <div className='w-1/2 flex flex-col gap-2'>
                    <div className='flex items-center rounded-full p-3 bg-blue-500/90 w-fit text-white'><FontAwesomeIcon icon={faHandshake} /></div>
                        <h3 className="font-semibold">Best Quality</h3>
                        <p className="text-xs  text-black/70">Our product is designed and developed by professionals that listened to customer needs and deliver a high quality aplication</p>
                    </div>
                </div>
            </section>
        </article>
    )
}
export default AboutSection;