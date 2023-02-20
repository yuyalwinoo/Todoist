import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser,AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare,FiFolder,FiShoppingCart } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiSettings4Fill } from "react-icons/ri";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Home() {
    const menus =[
        {name:'dashboard',link:'/',icon:MdOutlineDashboard},
        {name:'user',link:'/',icon:AiOutlineUser},
        {name:'message',link:'/',icon:FiMessageSquare},
        {name:'analytics',link:'/',icon:TbReportAnalytics,margin:true},
        {name:'File Manager',link:'/',icon:FiFolder},
        {name:'Cart',link:'/',icon:FiShoppingCart},
        {name:'Saved',link:'/',icon:AiOutlineHeart,margin:true},
        {name:'Setting',link:'/',icon:RiSettings4Fill},
    ];
    const[open,setOpen]=useState(true);
  return (
    <section className='flex gap-6'>
        <div className={`bg-[#0e0e0e] min-h-screen ${open?"w-72":"w-16"} duration-500 text-gray-100 px-4`}>
            <div className='py-3 flex justify-end'>
                <HiMenuAlt3 size={26} className='cursor-pointer' onClick={()=>setOpen(!open)}/>
            </div>
            <Router>
                <div className='mt-4 flex flex-col gap-4 relative'>
                    {
                        menus?.map((item,index)=>{
                            return(
                                <Link to={"/"} key={index} className={` ${item?.margin && "mt-5"} flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                                    <div>{React.createElement(item?.icon,{size:20})}</div>
                                    <h2 className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-24 overflow-hidden'}`}>{item?.name}</h2>
                                </Link>
                            )
                        })
                    }
                </div>
            </Router>
            
        </div>
        <div className='m-3 text-xl text-gray-900 font-semibold'>
            REACT TAILWIND
        </div>
    </section>
  )
}

export default Home
