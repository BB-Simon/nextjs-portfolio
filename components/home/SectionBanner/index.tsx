import cn from '@lib/cn';
import Link from 'next/link';
import { FC } from 'react'

interface SectionBannerProps {
  
}

const SectionBanner: FC<SectionBannerProps> = ({}) => {
  return (
    <section className={cn(
      'h-screen-minus-nav-width w-full rounded-bl-[100px] bg-white dark:bg-blackmain2',
    )}>
      <div className={cn(
        'w-full h-full bg-m-banner-white md:bg-banner-white dark:bg-m-banner-dark md:dark:bg-banner-dark bg-no-repeat bg-contain bg-center',
        'flex flex-col items-center justify-center',
      )}>
        <div className='container mx-auto my-10'>
          <div className="w-full md:w-7/12 mx-auto flex flex-col items-start justify-center">
            <h4 className='text-sm md:text-lg font-bold text-[#FF7245]'>Hey, Hello there 👋</h4>
            <h1 className='text-3xl md:text-5xl font-bold tracking-wider my-3 text-slate-900 dark:text-slate-300'>I’m Simon
              <br />Glad to see you!
            </h1>
            <p className='text-sm font-medium text-slate-800 dark:text-slate-400 my-3'>
              I’m a software developer! I can help you build a product , feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
            </p>
            <div className='my-6'>
              <Link
                href='#contact'
                className='py-2 px-6 text-sm font-medium bg-gradient-to-r from-[#FF7245] to-[#FF52C4] text-slate-50 rounded-xl'
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionBanner;