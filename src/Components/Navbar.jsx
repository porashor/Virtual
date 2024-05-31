import React, { useState } from 'react'
import logo from "../assets/logo.png"
import {navItems} from "../constants"
import Button from './Button'
import {Menu, X} from "lucide-react"




const Navbar = () => {
    const [show, setShow] = useState(false);
    function handle(){
        if(show){
            setShow(false);
        }else(
            setShow(true)
        )
    } 
    return (
        <div className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className='container px-4 mx-auto relative text-sm'>
                <div className='flex justify-between items-center'>
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo} alt="logo" height={40} width={40} className='mr-2' />
                        <span className="text-xl tracking-tight">Virtual</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index)=>(
                            <li  key={index} >
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <Button className='border hover:border-orange-800 ml-2 hover:gradient' href="#">Sign in</Button>
                        <Button className='border hover:border-orange-800 ml-2 hover:gradient' href="#">Create an account</Button>
                    </div>
                    <div className='flex lg:hidden'>
                        <button onClick={handle}>{show ? <X/> : <Menu/>}</button>
                    </div>
                </div>
                {show && (
                    <div className='flex lg:hidden fixed right-0 z-20 bg-neutral-900 w-full p-12 flex-col justify-center items-center'>
                    <ul className='space-y-4'>
                        {navItems.map((item, index)=>(
                            <li  key={index} >
                                <a className='text-xl' href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex justify-center items-center gap-3 mt-5'>
                    <Button className='border hover:border-orange-800 ml-2 hover:gradient' href="#">Sign in</Button>
                        <Button className='border hover:border-orange-800 ml-2 hover:gradient' href="#">Create an account</Button>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}
export default Navbar
