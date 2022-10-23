import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Admin } from '../../components/pages/modal/admin'
import { Student } from '../../components/pages/modal/student'
import { Teacher } from '../../components/pages/modal/teacher'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Tab.Group >
            <div className=''>
          <Tab.List className='flex flex-col flex space-x-1 rounded-xl p-1'>
            <Tab className='w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-[#8C00FA] ring-white ring-opacity-60 ring-offset-2 ring-offset-[#8C00FA] focus:outline-none focus:ring-2'>Студент</Tab>
            <Tab className='w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-[#8C00FA] ring-white ring-opacity-60 ring-offset-2 ring-offset-[#8C00FA] focus:outline-none focus:ring-2'>Преподователь</Tab>
            <Tab className='w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-[#8C00FA] ring-white ring-opacity-60 ring-offset-2 ring-offset-[#8C00FA] focus:outline-none focus:ring-2'>Модератор</Tab>
          </Tab.List>
          <Tab.Panels >
            <Tab.Panel className='rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2'><Student/></Tab.Panel>
            <Tab.Panel className='rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2'><Teacher/></Tab.Panel>
            <Tab.Panel className='rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2'><Admin/></Tab.Panel>
          </Tab.Panels>
          </div>
        </Tab.Group>
      )
}
