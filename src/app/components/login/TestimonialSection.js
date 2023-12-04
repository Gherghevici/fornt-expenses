import TestimonialSectionCard from "../TestimonialSectionCard"

const TestimonialSection = async()=>{
    const apiUser = async ()=>{
        const resp= fetch('https://randomuser.me/api/?exc=login,gender,location,email,registered,dob,phone,cell,nat&results=3');
        return (await resp).json();
    }
    const data = await apiUser();
    
    return (
        <article className="px-20 py-20 flex justify-between">

            <section className="flex flex-col w-1/4">
                <h3 className="text-red-500/90 font-semibold text-sm">USERS SAYS ABOUT US</h3>
                <h2 className="text-3xl font-semibold">We have 80k customers around the world</h2>
                <button></button>
                <button></button>
            </section>

            <section className="w-3/4 flex justify-center items-center py-20">
                <div className="w-96 h-60 bg-white flex flex-col gap-5 ">
                    <div className="-translate-x-20 -translate-y-28">
                        <TestimonialSectionCard data={data.results[0]}/>
                    </div>
                    <div className="-translate-x-36 -translate-y-16">
                        <TestimonialSectionCard data={data.results[1]}/>
                    </div>
                    <div className="translate-x-52 -translate-y-80">
                        <TestimonialSectionCard quote={true} data={data.results[2]}/>
                    </div>

                </div>
            </section>
        </article>
    )
}

export default TestimonialSection