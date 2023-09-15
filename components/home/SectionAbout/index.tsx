"use client"

import { FC } from 'react';
import cn from '@lib/cn';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface SectionAboutProps {
  
}

const languages = [
  {
    title: 'HTML',
    src: '/assets/html.png',
  },
  {
    title: 'CSS',
    src: '/assets/css.png',
  },
  {
    title: 'JavaScript',
    src: '/assets/javascript.png',
  },
  {
    title: 'TypeScript',
    src: '/assets/ts.png',
  },
  {
    title: 'Node JS',
    src: '/assets/node.png',
  },
  {
    title: 'Ruby',
    src: '/assets/ruby.png',
  },
  {
    title: 'Basic Python',
    src: '/assets/python.png',
  },
  {
    title: 'MySQL',
    src: '/assets/sql.png',
  },
  {
    title: 'PostgreSQL',
    src: '/assets/psql.png',
  },
  {
    title: 'MongoDB',
    src: '/assets/mdb.png',
  },
]
const frameworks = [
  {
    title: 'React',
    src: '/assets/react.png',
    className: 'rounded-full',
  },
  {
    title: 'Redux',
    src: '/assets/redux.png',
    className: '',
  },
  {
    title: 'Next.js',
    src: '/assets/next.png',
    className: '',
  },
  {
    title: 'Tailwind CSS',
    src: '/assets/t2.png',
    className: 'bg-white w-full h-full rounded-full',
  },
  {
    title: 'SCSS',
    src: '/assets/scss.png',
    className: '',
  },
  {
    title: 'Styled-components',
    src: '/assets/styled.png',
    className: '',
  },
  {
    title: 'MUI',
    src: '/assets/mui.png',
    className: '',
  },
  {
    title: 'Bootstrap',
    src: '/assets/bootstrap.svg',
    className: '',
  },
  {
    title: 'Express.js',
    src: '/assets/express.png',
    className: 'rounded-full',
  },
  {
    title: 'Nest.js',
    src: '/assets/nest.png',
    className: '',
  },
  {
    title: 'Jest',
    src: '/assets/jest.png',
    className: '',
  },
  {
    title: 'Ruby on Rails',
    src: '/assets/rails.png',
    className: '',
  },
  {
    title: 'RSpec',
    src: '/assets/rspec.png',
    className: 'rounded-full',
  },
  {
    title: 'GraphQL',
    src: '/assets/gql.png',
    className: '',
  },
]

const tools = [
  {
    title: 'Git',
    src: '/assets/git.png',
    className: '',
  },
  {
    title: 'Git Bash',
    src: '/assets/git-bash.svg',
    className: '',
  },
  {
    title: 'Github',
    src: '/assets/github.png',
    className: '',
  },
  {
    title: 'GitLab',
    src: '/assets/gitlab.png',
    className: '',
  },
  {
    title: 'Notion',
    src: '/assets/notion.png',
    className: '',
  },
  {
    title: 'Trello',
    src: '/assets/trello.png',
    className: '',
  },
  {
    title: 'VSCode',
    src: '/assets/vscode.png',
    className: '',
  },
  {
    title: 'Chrome Developer Tools',
    src: '/assets/dev.png',
    className: 'rounded-full',
  },
]

const skills = [
  {
    title: 'Remote collaboration',
    className: '',
  },
  {
    title: 'Pair-Programming',
    className: '',
  },
  {
    title: 'Teamwork',
    className: '',
  },
  {
    title: 'Mentoring',
    className: '',
  },
  {
    title: 'Code Review',
    className: '',
  },
]

const SectionAbout: FC<SectionAboutProps> = ({}) => {
  return (
    <section
      id='about' 
      className={cn(
        'w-full h-full rounded-tr-[100px] bg-white/75 dark:bg-blackmain2',
      )}
    >
      <div className='container mx-auto py-[114px]'>
        <div className={cn(
          // 'w-full h-full py-12 px-6 bg-m-contact-white md:bg-contact-white dark:bg-m-contact-dark md:dark:bg-contact-dark bg-no-repeat bg-contain bg-[position:100%_0]',
          'flex flex-col items-center justify-center',
        )}>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h1 className='text-3xl md:text-5xl font-bold tracking-wider my-3 text-slate-900 dark:text-slate-300'>
                About <br /> Myself
              </h1>
              <p className='text-sm font-medium text-slate-800 dark:text-slate-400 my-6'>
                Software developer with a background in building effective software solutions. 4+ years of industry experience, including mentoring 10+ junior developers to achieve concrete goals on a strict deadline.
              </p>
              <p className='text-sm font-medium text-slate-800 dark:text-slate-400 my-6'>
                Grew up in a remote and collaborative environment. Strong skills in JavaScript, Typescript, React, Node, and Ruby on Rails. Passionate about learning cloud computing.
              </p>
              <Link
                href='/Badare_basem_resume.pdf'
                download='Badare Basem Resume'
                className='py-2 px-6 text-sm font-medium bg-gradient-to-r from-[#FF7245] to-[#FF52C4] text-slate-900 dark:text-slate-300 hover:text-slate-50 rounded-lg'
              >
                Get my resume
              </Link>
            </div>
            <div className='col-span-2'>
              <Disclosure defaultOpen>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as='div'
                      className={`flex w-full justify-between py-6 ${!open ? 'border-b border-slate-500' : ''}`}
                    >
                      <span className='text-lg font-bold text-slate-900 dark:text-slate-300 hover:cursor-pointer'>
                        Languages
                      </span>
                      <span>
                        {open ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel
                        className="flex flex-wrap gap-3"
                      >
                        {languages.map(({ title, src }, i) => (
                          <div key={i} className='bg-slate-100 dark:bg-blackmain1 py-[10px] px-3 flex items-center rounded-lg shadow-sm'>
                            <div className='w-8 h-8'>
                              <Image src={src} width="100" height="100" alt={title} />
                            </div>
                            <span className='text-base font-medium text-slate-900 dark:text-slate-300 ml-[6px]'>
                              {title}
                            </span>
                          </div>
                        ))}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure defaultOpen>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as='div'
                      className={`flex w-full justify-between py-6 ${!open ? 'border-b border-slate-500' : ''}`}
                    >
                      <span className='text-lg font-bold text-slate-900 dark:text-slate-300 hover:cursor-pointer'>
                        Frameworks
                      </span>
                      <span>
                        {open ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel
                        className="flex flex-wrap gap-3"
                      >
                        {frameworks.map(({ title, src, className }, i) => (
                          <div key={i} className='bg-slate-100 dark:bg-blackmain1 py-[10px] px-3 flex items-center rounded-lg shadow-sm'>
                            <div className='w-8 h-8'>
                              <Image className={className} src={src} width="100" height="100" alt={title} />
                            </div>
                            <span className='text-base font-medium text-slate-900 dark:text-slate-300 ml-[6px]'>
                              {title}
                            </span>
                          </div>
                        ))}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as='div'
                      className={`flex w-full justify-between py-6 ${!open ? 'border-b border-slate-500' : ''}`}
                    >
                      <span className='text-lg font-bold text-slate-900 dark:text-slate-300 hover:cursor-pointer'>
                        Tools & Methods
                      </span>
                      <span>
                        {open ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel
                        className="flex flex-wrap gap-3"
                      >
                        {tools.map(({ title, src, className }, i) => (
                          <div key={i} className='bg-slate-100 dark:bg-blackmain1 py-[10px] px-3 flex items-center rounded-lg shadow-sm'>
                            <div className='w-8 h-8'>
                              <Image className={className} src={src} width="100" height="100" alt={title} />
                            </div>
                            <span className='text-base font-medium text-slate-900 dark:text-slate-300 ml-[6px]'>
                              {title}
                            </span>
                          </div>
                        ))}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as='div'
                      className={`flex w-full justify-between py-6 ${!open ? 'border-b border-slate-500' : ''}`}
                    >
                      <span className='text-lg font-bold text-slate-900 dark:text-slate-300 hover:cursor-pointer'>
                        Skills
                      </span>
                      <span>
                        {open ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel
                        className="flex flex-wrap gap-3"
                      >
                        {skills.map(({ title, className }, i) => (
                          <div key={i} className='bg-slate-100 dark:bg-blackmain1 py-[10px] px-3 flex items-center rounded-lg shadow-sm'>
                            {/* <div className='w-8 h-8'>
                              <Image className={className} src={src} width="100" height="100" alt={title} />
                            </div> */}
                            <span className='text-base font-medium text-slate-900 dark:text-slate-300 ml-[6px]'>
                              {title}
                            </span>
                          </div>
                        ))}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionAbout;