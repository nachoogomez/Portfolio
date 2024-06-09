import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaMapMarkerAlt   } from "react-icons/fa";
import { MdAlternateEmail } from 'react-icons/md'
import personal from '../../assets/personal.jpeg'
import mapa from '../../assets/map.jpeg'

const Hero = () => {
  return (
    <section className='w-full grid auto-rows-[172px] grid-cols-6 gap-4 '>
      <motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 0.3 }}
				viewport={{ once: true }}
				className='row-span-2 col-span-6 rounded-3xl bg-white relative flex flex-col overflow-hidden gap-10 justify-end p-6 dark:bg-raisin-black xl:col-span-4 lg:items-end sm:flex-row  lg:p-10'
			>
        <div className='absolute bg-gradient-to-t from-dusky-alt to-transparent top-0 left-0 bottom-0 right-0 z-[2]' />
          <img
            className='absolute w-full h-full object-cover left-0 top-0'
            src={personal}
            alt='personal'
            title='Personal'
          />
          <div className='w-full flex flex-col z-[2] absolute left-0 bottom-0 leading-4 p-5 text-moonlit'>
            <span className='text-3xl font-bold leading-7 text-black'>Gomez Ignacio</span>
            <span className='text-lg font-medium leading-9 text-black'>
						  Full-Stack Developer
					  </span>
            <div className='flex flex-wrap items-center gap-2 mt-1 lg:gap-3'>
            <a
							className='flex items-center font-medium bg-moonlit px-3 py-2 rounded-lg text-dusky gap-2 active:scale-[1.1] transition-transform duration-300'
							href='https://github.com/nachoogomez'
							target='_blank'
							rel='noreferrer'
							title='GitHub'
						>
                <FaGithub />
                <span className='hidden lg:flex'>GitHub</span>
            </a>
            <a
							className='flex items-center font-medium bg-moonlit px-4 py-2 rounded-lg text-dusky gap-2 active:scale-[1.1] transition-transform duration-300'
							href='https://www.linkedin.com/in/ignacio-gomez-24a887232/'
							target='_blank'
							rel='noreferrer'
							title='LinkedIn'
						>
							<FaLinkedin />
							<span className='hidden lg:flex'>LinkedIn</span>
						</a>
            <a
							className='flex items-center font-medium bg-moonlit px-4 py-2 rounded-lg text-dusky gap-2 active:scale-[1.1] transition-transform duration-300'
							href='mailto:ignaciogomezdev@gmail.com'
							title='Email'
						>
							<MdAlternateEmail />
							<span className='hidden lg:flex'>Email</span>
						</a>
            </div>
          </div>
      </motion.div>
      <motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.25, duration: 0.3 }}
				viewport={{ once: true }}
				className='row-span-1 col-span-3 rounded-3xl bg-white relative flex flex-col overflow-hidden border-2 border-transparent gap-2 p-7 xl:col-span-2 lg:p-7'
			>
        <h2 className='text-2xl font-bold z-[1] text-black'>About me</h2>
        <p className='text-base w-full z-[1] text-slate-600'>
					Estudiante de tecnicatura en Desarrollo de software Full-Stack
				</p>
      </motion.div>
	  <motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.35, duration: 0.3 }}
				viewport={{ once: true }}
				className='row-span-1 col-span-3 rounded-3xl bg-white dark:bg-raisin-black overflow-hidden border-2 border-transparent xl:col-span-2 flex items-center justify-center relative'
			>
			<img
					className='absolute w-full h-full object-cover z-[1] '
					src={mapa}
					alt='Location'
					title='Location'
			/>	
			<FaMapMarkerAlt className='w-20 z-[2] text-white'/>
			<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='w-full h-8 sm absolute left-0 bottom-0 z-[2] flex items-center justify-center text-left text-opacity-70'
				>
					<span className='text-xs font-medium text-white'>
						Allen, Argentina
					</span>
				</motion.div>
		</motion.div>
    </section>
  )
}

export default Hero