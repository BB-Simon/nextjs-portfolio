"use client"

import cn from '@lib/cn';
import { ChangeEvent, FC, useState, useEffect } from 'react';
import { useForm, ValidationError } from "@formspree/react";
import { X } from 'lucide-react';

interface SectionContactProps {
  
}

interface FormDtata {
  name: string
  email: string
  message: string
}

const SectionContact: FC<SectionContactProps> = ({}) => {
  const [state, handleSubmit] = useForm("mbjvkogw");
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormDtata>({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    setShowMessage(state.succeeded)
  }, [state.succeeded])

  const handleChnage = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleOnsubmit = async (e: any) => {
    e.preventDefault()
    await handleSubmit({...formData})
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <section
      id='contact'
      className={cn(
        'w-full h-full  bg-white/75 dark:bg-blackmain2',
      )}
    >
      <div className='w-full h-full rounded-tl-[100px] bg-white dark:bg-blackmain4'>
        <div className='container mx-auto py-20'>
          <div className={cn(
            'w-full h-full py-12 px-6 bg-m-contact-white md:bg-contact-white dark:bg-m-contact-dark md:dark:bg-contact-dark bg-no-repeat bg-contain bg-[position:100%_0]',
            'flex flex-col items-center justify-center',
          )}>
            <div className="w-full md:w-5/12 mx-auto flex flex-col items-center justify-center">
              <h1 className='text-3xl md:text-5xl text-center font-bold tracking-wider my-3 text-slate-900 dark:text-slate-300'>
                Contact me
              </h1>
              <p className='text-sm font-medium text-center text-slate-800 dark:text-slate-400 mt-3 mb-16'>
                If you have an application you are interested in developing, a feature that you need built or a project that needs
                coding. I’d love to help with it.
              </p>
              {showMessage ? (
                <div className='w-full flex justify-between bg-green-600/75 rounded-lg p-3 mb-3'>
                  <span className='text-sm font-medium  text-slate-100'>
                    Thanks for contacting me 😊. I will contact you soon.
                  </span>
                  <X 
                    onClick={() => setShowMessage(false) } 
                    className='w-4 h-4 bg-red-400 p-[1px] rounded text-slate-100 ml-2 cursor-pointer' 
                  />
                </div>
              ) : null}
              <form
                onSubmit={handleOnsubmit}
                className='w-full h-full flex flex-col mt-3 mb-6'
              >
                <input
                  className={cn(
                    'inputw-full py-3 px-4 border border-slate-500 bg-transparent outline-none rounded-xl mb-5',
                    'focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1',
                    'text-sm font-medium text-slate-500 dark:text-slate-300 placeholder:text-slate-400'
                  )
                  }
                  type="text"
                  id='name'
                  name="name"
                  onChange={handleChnage}
                  value={formData.name}
                  placeholder="Your name"
                  minLength={3}
                  maxLength={30}
                  required
                />
                <input
                  className={cn(
                    'inputw-full py-3 px-4 border border-slate-500 bg-transparent outline-none rounded-xl mb-5',
                    'focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1',
                    'text-sm font-medium text-slate-500 dark:text-slate-300 placeholder:text-slate-400'
                  )
                  }
                  type="email"
                  id='email'
                  name="email"
                  onChange={handleChnage}
                  value={formData.email}
                  placeholder="Your email"
                  required
                />
                <textarea
                  className={cn(
                    'inputw-full py-3 px-4 border border-slate-500 bg-transparent outline-none rounded-xl mb-5',
                    'focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1',
                    'text-sm font-medium text-slate-500 dark:text-slate-300 placeholder:text-slate-400'
                  )
                  }
                  name="message"
                  id="message"
                  cols={30}
                  rows={10}
                  minLength={5}
                  maxLength={500}
                  onChange={handleChnage}
                  value={formData.message}
                  required
                ></textarea>
                <input
                  className='py-2 px-6 text-sm font-medium cursor-pointer bg-gradient-to-r from-[#FF7245] to-[#FF52C4] text-slate-50 rounded-xl'
                  type="submit"
                  value="Get in touch"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContact;