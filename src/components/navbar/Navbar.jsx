import React from 'react'
import { GrCloudDownload } from 'react-icons/gr'

const Navbar = () => {
  return (
    <header class="w-full overflow-x-hidden h-[5rem] flex justify-center  bg-opacity-70 dark:bg-opacity-70 fixed top-0 left-0 z-10 backdrop-blur-lg subpixel-antialiased">
      <nav className='w-full h-full flex items-center justify-between py-1 px-5 max-w-5xl xl:max-w-6xl'>
          <span className='text-moonlit text-md font-semibold'>
						IG
					</span>
          <div className='flex items-center gap-4'>
            <a
						  className='w-auto h-7 px-4 font-medium flex items-center gap-2 bg-dusky text-moonlit rounded-3xl dark:text-dusky dark:bg-moonlit lg:h-10 lg:px-6 cursor-pointer active:scale-[1.1] transition-transform duration-300'
						  href='https://drive.google.com/file/d/1BqhhqHBYL5w-3aoYV3zuOyty14BGLYvB/view'
						  target='_blank'
					  >
              <GrCloudDownload />
              <div className='flex items-center'>
                <span className='hidden lg:flex'>Download &nbsp;</span>
                <span>CV</span>
              </div>
            </a>
          </div>
      </nav>
    </header>
  )
}

export default Navbar