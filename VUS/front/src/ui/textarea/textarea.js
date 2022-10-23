import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function MaxHeightTextarea() {
  return (
    <>
    <form action="">
    <TextareaAutosize
      minRows={4}
      aria-label="maximum height"
      placeholder="Здесь вы можете написать свои идеи."
      style={{ width: 270 }}
      className='bg-[#F1F3FF] rounded px-[15px] py-[7px] focus:border-[#8C00FA]  focus-visible:!outline-0  focus-visible:!border-none
      focus-visible:text-[#8C00FA]'
    />
    <span className='flex flex-row gap-x-[50px] justify-center'>
    <input className='text-[#8C00FA] active:text-[#8d28da] hover:text-[#491372]'  type="submit" value="Отправить"/>
    <input className='text-[#8C00FA] active:text-[#8d28da] hover:text-[#491372]'  type="reset" value="Очистить"/>
    </span>
    </form>

    </>

  );
}
