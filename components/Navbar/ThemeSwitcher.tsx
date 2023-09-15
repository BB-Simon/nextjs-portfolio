'use client'

import { FC, Fragment } from 'react';
import { useTheme } from 'next-themes';
import { Popover, Transition } from '@headlessui/react';
import { Moon, Sun, Laptop } from 'lucide-react';

interface ThemeSwitcherProps {

}

const themes = [
  { name: 'Light', type: 'light', icon: <Sun className='h-4 w-4' /> },
  { name: 'Dark', type: 'dark', icon: <Moon className=' h-4 w-4' /> },
  { name: 'System', type: 'system', icon: <Laptop className='h-4 w-4' /> }
]

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ }) => {
  const { setTheme } = useTheme();

  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center w-full justify-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none">
        <Sun className='w-[18px] h-[18px] rotate-0 scale-100 transition-all hover:text-slate-900 dark:-roate-90 dark:scale-0 dark:text-slate-300 dark:hover:text-slate-100' />
        <Moon className='w-[18px] h-[18px] absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-300 dark:hover:text-slate-100' />
        <span className='sr-only'>Toggle theme</span>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="bg-white dark:bg-slate-900 w-screen max-w-md flex-auto overflow-hidden rounded text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-3">
              {themes.map(({ name, type, icon }) => (
                <div key={type} className="group relative flex gap-x-6 rounded p-3 hover:bg-gray-50 dark:hover:bg-slate-600">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-lg bg-gray-50 dark:bg-slate-600 group-hover:bg-white dark:group-hover:bg-slate-700">
                    {icon}
                  </div>
                  <div>
                    <button onClick={() => setTheme(type)} className="font-semibold text-gray-900 dark:text-slate-50">
                      <span>{name}</span>
                      <span className="absolute inset-0" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default ThemeSwitcher;