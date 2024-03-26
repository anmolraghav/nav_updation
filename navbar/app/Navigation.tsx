'use client'
import { link } from "fs/promises";
import path from "path";
import Image from "next/image";
import jugaad from "../public/jugaad.png"
import search from "../public/search.png"
import React ,{useState,useEffect} from "react";


const links = ["HOME","ABOUT","ACTIVITIES"];

const Navigation = () => {

    const [header,setHeader] = useState(false);

    const scrollHeader = () =>{
        if(window.scrollY >=5){
            setHeader(true)
        }
        else{
            setHeader(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',scrollHeader)

        return ()=>{
            window.addEventListener('scroll',scrollHeader)
        }
    })

  return (
    <div className={header ? "  fixed w-[100%] bg-[#5c3939]" : "bg-[black]" }>

   <nav className=" flex h-118px w-300
   py-5 justify-around px-6  gap-400px shrink-0">
    

    <div className="h-118px pr-3">
    <Image src={jugaad} alt="jugaad" height="60" width="120"  className="pr-5" />
    <div className="items-centre pl-5 font-bold text-white">JUGAAD</div>
    </div>

    
    <ul className="flex h-30 w-485 pr-8 box-border h-92 w-1325 justify-center">
        {
            links.map((link)=>(
                <li className="flex w-136px py-7 h-50px justify-between text-white items-center
                 font-bold shrink-0 box-border h-6 w-20" key={link}>
                    <a href="#">{link}</a>
                </li>
            ))
        }
        

    </ul>
    <div className="pt-5">
    <Image src={search} alt="search" className="h-5 w-5" />
    </div>
    
   </nav>
   </div>
  )
}

export default Navigation
