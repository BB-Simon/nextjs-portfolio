"use client"

import { FC } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import * as Separator from '@radix-ui/react-separator';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

interface DesktopNavProps {
  
}

const DesktopNav: FC<DesktopNavProps> = ({}) => {
  return (
    <div className="hidden md:flex items-center justify-between container h-full mx-auto py-3">
      <div className='flex items-center'>
        <Link href='/'>
          <span className='text-slate-900 dark:text-slate-300 text-[18px] font-semibold'>BB Simon<span className="text-[#FF7245]">.</span></span>
        </Link>
        <Separator.Root
          className='w-[0.8px] h-[18px] mx-[15px] bg-slate-900 dark:bg-slate-400'
          decorative
          orientation="vertical"
        />
        <Link href='#projects' className='inline-block mx-5'>
          <span className='text-base font-medium text-slate-900 dark:text-slate-300'>Projects</span>
        </Link>
        <Link href='#about' className='inline-block mx-5'>
          <span className='text-base font-medium text-slate-900 dark:text-slate-300'>About</span>
        </Link>

        <Link href='#contact' className='inline-block mx-5'>
          <span className='text-base font-medium text-slate-900 dark:text-slate-300'>Contact</span>
        </Link>
      </div>

      <div className='flex items-center'>
        <Link href='https://www.linkedin.com/in/bb-simon/' target='_blank'>
          <Linkedin className='w-[18px] h-18px] text-slate-900 dark:text-slate-300 mx-3' />
        </Link>
        <Link href='https://github.com/BB-Simon' target='_blank'>
          <Github className='w-[18px] h-18px] test-slate-900 dark:text-slate-300 mx-3' />
        </Link>
        <span className='ml-3'>
          <ThemeSwitcher />
        </span>
      </div>
    </div>
  )
}

export default DesktopNav;