



export const Admin = () => {
    return (
        <div>
            <form className="flex flex-col gap-3">
                <input className=" bg-[#F9FAFF] placeholder:hover:text-[#8C00FA] py-[6px] pl-[15px] rounded-md focus-visible:!border-none  focus-visible:!outline-0" placeholder="Логин"/>
                <input className=" bg-[#F9FAFF] placeholder:hover:text-[#8C00FA] py-[6px] pl-[15px] rounded-md focus-visible:!border-none  focus-visible:!outline-0" placeholder="Пароль"/>
                <button type='submit'>Авторизация</button>
            </form>
        </div>
    )
}