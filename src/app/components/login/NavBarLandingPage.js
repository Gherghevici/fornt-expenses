import Link from "next/link";
import React from "react";

const NavBarLandingPage = (props)=>{

    return (
        <nav className="flex justify-around pt-3 px-10 items-center"> 
            <div>logo</div>
            <div className=" flex gap-5 pl-52">
                <Link className="text-black/70 hover:text-black" href={`${props.home}`}>Home</Link>
                <Link className="text-black/70 hover:text-black" href={`${props.about}`}>About</Link>
                <Link className="text-black/70 hover:text-black" href={`${props.features}`}>Features</Link>
                <Link className="text-black/70 hover:text-black" href={`${props.testimonials}`}>Testimonial</Link>
                <Link className="text-black/70 hover:text-black" href={`${props.contact}`}>Contact</Link>
            </div>
            <div className="flex gap-5">
                <button className="bg-red-500/90 active:bg-red-600/80 hover:bg-red-500/95  text-white rounded-xl py-1.5 px-5 shadow-md shadow-red-200 w-28">Login</button>
                <button className="bg-red-500/90 active:bg-red-600/80 hover:bg-red-500/95 text-white rounded-xl py-1.5 px-5 shadow-md shadow-red-200 w-28">Register</button>
            </div>
        </nav>
    )
}
export default NavBarLandingPage;