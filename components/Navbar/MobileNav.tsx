import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import ThemeSwitcher from './ThemeSwitcher'

interface MobileNavProps {
  handleMenuOpen: () => void
}

const MobileNav: FC<MobileNavProps> = ({ handleMenuOpen }) => {
  return (
    <div className='w-full h-full flex flex-col justify-between'>
      <ul>
        <li onClick={handleMenuOpen} className='px-4 py-3 border-b border-slate-50 dark:border-slate-800'>
          <Link className='text-slate-900 dark:text-slate-300 text-base font-normal hover:text-slate-900' href='#projects'>
            Projects
          </Link>
        </li>
        <li onClick={handleMenuOpen} className='px-4 py-3 border-b border-slate-50 dark:border-slate-800'>
          <Link className='text-slate-900 dark:text-slate-300 text-base font-normal hover:text-slate-900' href='#about'>
            About
          </Link>
        </li>
        <li onClick={handleMenuOpen} className='px-4 py-3 border-b border-slate-50 dark:border-slate-800'>
          <Link className='text-slate-900 dark:text-slate-300 text-base font-normal hover:text-slate-900' href='#contact'>
            Contact
          </Link>
        </li>
      </ul>
      <div className='pt-10 pb-20 px-4 flex items-center'>
        <Link href='https://www.linkedin.com/in/bb-simon/' target='_blank'>
          <Linkedin className='w-[18px] h-18px] text-slate-900 dark:text-slate-300 mx-3' />
        </Link>
        <Link href='https://github.com/BB-Simon' target='_blank'>
          <Github className='w-[18px] h-18px] test-slate-900 dark:text-slate-300 mx-3' />
        </Link>
      </div>
    </div>
  )
}

export default MobileNav