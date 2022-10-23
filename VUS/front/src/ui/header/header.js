import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Example from "../Tables/tables";
import GetAxios from "../../components/axios/zapros";




export const Header = () => {

    const [open, setOpen] = useState(false)
    const [openAuth, setOpenAuth] = useState(false)

    return(
        <>
        <div className="flex gap-7 bg-[#F9FAFF] w-fit !text-[#0E091A]  ">

            <div>
                <p>logo</p>
            </div>
            <div>
                <button className="text-[#8C00FA]" onClick={() => setOpen(true)}>Pages</button>
                <div className="flex">
                <dialog open={open} className=' inset-0  will-change-auto w-full h-full bg-[#000] bg-opacity-60 fixed backdrop-blur-[2px] mx-auto z-[5]' >
                    <div className="flex flex-col justify-center items-center mt-[200px] bg-[#fff] rounded-xl py-[15px] px-[15px] gap-y-[8px] max-w-[300px] mr-[10px] absolute top-[20%] left-[50%] mr-[-50%] translate-y-[-50%] translate-x-[-50%]">
                        <button onClick={() => setOpen(false)} className='right-0 relative left-[53px] bottom-[142px] static top-[-40px] '>X</button>
                        <Link to='/' className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-[#8C00FA] ring-white ring-opacity-60 ring-offset-2 ring-offset-[#8C00FA] focus:outline-none focus:ring-2 px-[10px] text-center">Главная</Link>
                        <Link to='/profile' className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-[#8C00FA] ring-white ring-opacity-60 ring-offset-2 ring-offset-[#8C00FA] focus:outline-none focus:ring-2 px-[10px] text-center">Профиль</Link>
                        <Link to='/spisok' className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-[#8C00FA] ring-white ring-opacity-60 ring-offset-2 ring-offset-[#8C00FA] focus:outline-none focus:ring-2 px-[10px] text-center">Расписание</Link>
                    </div>
                </dialog>
                </div>
                <GetAxios/>
            </div>
            <div>
                <button className="text-[#8C00FA]" onClick={() => setOpenAuth(true)}>Auth</button>
                <div className="flex">
                <dialog open={openAuth} className=' inset-0  will-change-auto w-full h-full bg-[#000] bg-opacity-60 fixed backdrop-blur-[2px] mx-auto z-[5]' >
                    <div className="flex flex-col justify-center items-center mt-[265px] bg-[#fff] rounded-xl py-[25px] px-[15px] gap-y-[8px] max-w-[300px] mr-[10px] absolute top-[30%] left-[50%] mr-[-50%] translate-y-[-50%] translate-x-[-50%]">
                        <button onClick={() => setOpenAuth(false)} className='right-0 relative left-[148px] bottom-[142px] static top-[-50px] '>X</button>
                            <Example/>
                    </div>
                </dialog>
                </div>
                <GetAxios/>
            </div>



        </div>



        </>

    )
}