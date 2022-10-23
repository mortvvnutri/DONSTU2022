



export const Student = () => {
    return (
        <div>
            <form className="flex flex-col gap-3">
                <input className=" bg-[#F9FAFF] placeholder:hover:text-[#8C00FA] py-[6px] pl-[15px] rounded-md focus-visible:!border-none  focus-visible:!outline-0" placeholder="Имя"/>
                <input className=" bg-[#F9FAFF] placeholder:hover:text-[#8C00FA] py-[6px] pl-[15px] rounded-md focus-visible:!border-none  focus-visible:!outline-0" placeholder="Фамилия"/>
                <input className=" bg-[#F9FAFF] placeholder:hover:text-[#8C00FA] py-[6px] pl-[15px] rounded-md focus-visible:!border-none  focus-visible:!outline-0" placeholder="Группа"/>
                <input className=" bg-[#F9FAFF] placeholder:hover:text-[#8C00FA] py-[6px] pl-[15px] rounded-md focus-visible:!border-none  focus-visible:!outline-0" placeholder="Факультет"/>
                <input className=" bg-[#F9FAFF] placeholder:hover:text-[#8C00FA] py-[6px] pl-[15px] rounded-md focus-visible:!border-none  focus-visible:!outline-0" placeholder="Студенческий"/>
                <button type='submit'>регистрация</button>
            </form>
        </div>
    )
}