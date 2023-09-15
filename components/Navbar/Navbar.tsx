"use client"

import { FC, useState, Fragment } from 'react';
import Link from 'next/link';
import { MenuIcon, X } from 'lucide-react';
import DesktopNav from './DesktopNav';
import { Transition } from '@headlessui/react';
import cn from '@lib/cn';
import MobileNav from './MobileNav';
import ThemeSwitcher from './ThemeSwitcher';

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen) 
  }

  return (
    <Fragment>
      <nav className={cn(
        'bg-white dark:bg-blackmain2 z-50 fixed top-0 left-0 right-0 h-16 w-full',
        menuOpen ? 'border-b border-slate-50 dark:border-slate-800 md:border-none' : '',
      )}>
        <DesktopNav />
        <div className='flex items-center justify-between md:hidden w-full h-full px-4'>
          <span onClick={handleMenuOpen}>
            {menuOpen ? (
              <X className='text-slate-900 dark:text-slate-300 w-[18px] h-[18px]' />
            ) : (
              <MenuIcon className='text-slate-900 dark:text-slate-300 w-[18px] h-[18px]' />
            )}
          </span>

          <Link href='/'>
            <span className='text-slate-900 dark:text-slate-300 text-base font-semibold'>BB Simon<span className="text-[#FF7245]">.</span></span>
          </Link>
          <ThemeSwitcher />
        </div>
      </nav>
      {menuOpen ? (
        <Transition
          show={menuOpen}
          as={Fragment}
          leave="transition ease-in-out duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className='block md:hidden fixed top-14 left-0 right-0 bottom-0 bg-white dark:bg-blackmain2 z-50'>
            <MobileNav handleMenuOpen={handleMenuOpen} />
          </div>
        </Transition>
      ) : null}
    </Fragment>
  )
}

export default Navbar