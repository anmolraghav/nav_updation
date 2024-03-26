
import { link } from "fs/promises";
import path from "path";
import Image from "next/image";
import jugaad from "../public/jugaad.png"
import search from "../public/search.png"

const links = ["HOME","ABOUT","ACTIVITIES"];

const Navigation = () => {
  return (
   <nav className=" bg-gray-800 flex h-118px w-300
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
    <div className="pt-3">
    <Image src={search} alt="search" className="h-7 w-7 pt-2" />
    </div>
    
   </nav>
  )
}

export default Navigation
