'use client'
import Link from "next/link";
import { useState,useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser } from '@fortawesome/free-regular-svg-icons'
import {faKey,} from '@fortawesome/free-solid-svg-icons'

const Login = ()=>{
    const [hasAcc,setHasAcc] = useState(true);
    const [user,setUser]=useState();
    const regRef = useRef()
    const loginRef = useRef();
    
    const loginHandler = (e)=>{
        e.preventDefault();
        let newPerson = {
            email:loginRef.current[2].value,
            password:loginRef.current[3].value
        };
        fetch("http://localhost:3000/users/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(newPerson)
        }).then((res)=>{
            if(res.status==200){
                setUser(newPerson.email);
                console.log("ok");
                loginRef.current[2].value="";
                loginRef.current[3].value="";
            }else{
                throw new Error("User not found!");
            }
        })

    }

    const registerHandler = (e)=>{
        e.preventDefault();
        let newPerson = {
            email:regRef.current[2].value,
            password:regRef.current[3].value
        }
        fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(newPerson)
        });
        regRef.current[2].value="";
        regRef.current[3].value="";
    }
    
    return(
        <>
        <div className="flex">
        {hasAcc?
        <section className="w-1/2">
            <h1>Hello {user}</h1>
            <form ref={loginRef} className="flex flex-col gap-5 p-5 relative top-1/2 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/4 ">
                <div className="flex justify-between px-10">
                    <button onClick={(e)=>{e.preventDefault();setHasAcc(true);}} className={`px-10 py-2 border-b-2 ${hasAcc?'border-teal-500 text-teal-500':"border-gray-300 text-gray-300"} text-lg transition-all duration-500 font-medium`}>Login</button>
                    <button onClick={(e)=>{e.preventDefault();setHasAcc(false)}} className={`px-10 py-2 border-b-2 ${hasAcc?"border-gray-300 text-gray-300": "border-teal-500 text-teal-500"} text-lg transition-all duration-500 font-medium`}>Sign up</button>
                </div>
                <div className="flex rounded-xl px-3 py-2 shadow-md shadow-teal-100 ">
                    <FontAwesomeIcon icon={faCircleUser} size="lg" />
                    <input className="px-5 outline-none w-full" placeholder="Email..."/>
                </div>
                <div className="flex rounded-xl px-3 py-2 shadow-md shadow-teal-100 ">
                    <FontAwesomeIcon icon={faKey} size="lg" />
                    <input className="px-5 outline-none w-full" type="password" placeholder="Password..."/>
                </div>
                <div className="flex justify-between">
                    <div>
                    <Link className="text-teal-500 font-medium" href=''>Forgot your password?</Link>
                    </div>
                    <div>
                    <button onClick={loginHandler} className="px-8 bg-teal-500 py-1.5 rounded-xl text-white">Login</button>
                    </div>
                </div>
            
            </form>
        </section>:
            <section className="w-1/2">
                <h1>Hello {user}</h1>
            <form ref={regRef} className="flex flex-col gap-5 p-5 relative top-1/2 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/4 ">
                <div className="flex justify-between px-10">
                    <button onClick={(e)=>{e.preventDefault();setHasAcc(true);}} className={`px-10 py-2 border-b-2 ${hasAcc?'border-teal-500 text-teal-500':"border-gray-300 text-gray-300"} text-lg transition-all duration-500 font-medium`}>Login</button>
                    <button onClick={(e)=>{e.preventDefault();setHasAcc(false)}} className={`px-10 py-2 border-b-2 ${hasAcc?"border-gray-300 text-gray-300": "border-teal-500 text-teal-500"} text-lg transition-all duration-500 font-medium`}>Sign up</button>
                </div>
                <div className="flex rounded-xl px-3 py-2 shadow-md shadow-teal-100 ">
                    <FontAwesomeIcon icon={faCircleUser} size="lg" />
                    <input  className="px-5 outline-none w-full" placeholder="Email..."/>
                </div>
                <div className="flex rounded-xl px-3 py-2 shadow-md shadow-teal-100 ">
                    <FontAwesomeIcon icon={faKey} size="lg" />
                    <input  className="px-5 outline-none w-full" type="password" placeholder="Password..."/>
                </div>
                <div className="flex justify-between">
                    <div>
                        <Link className="text-teal-500 font-medium" href=''>Forgot your password?</Link>
                    </div>
                    <div>
                        <button onClick={registerHandler} className="px-8 bg-teal-500 py-1.5 rounded-xl text-white">Register</button>
                    </div>
                </div>
                
            </form>
        </section>
        }
        
        <section className="w-1/2 relative">
            <div className="bg-teal-100  elipse1 "></div>
            <div className="bg-teal-200  elipse2 "></div>
            <div className="bg-teal-300  elipse3 "></div>
            
           
        </section>
        </div>
        
        </>
        
    )
}
export default Login;