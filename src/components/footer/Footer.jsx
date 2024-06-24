import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub  } from 'react-icons/fa6'

const Footer = () => {
	return (
		<motion.footer
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className='w-full h-20 flex flex-col items-start justify-center max-w-5xl px-5 xl:max-w-6xl text-white'
		>
			<div className='w-full h-full flex items-center justify-between px-10'>
				<div className='flex flex-col items-start opacity-50 max-w-[50%] lg:max-w-fit'>
					<p>© 2024 Gomez Ignacio.</p>
				</div>
				<div className='flex flex-col-reverse gap-3 items-end'>
					<p className='opacity-50 hidden lg:flex'>
						
					</p>
					<div className='flex items-center gap-2 text-xl'>
						<a
							className='flex items-center font-medium'
							href='https://www.linkedin.com/in/ignacio-gomez-24a887232/'
							target='_blank'
							rel='noreferrer'
							title='LinkedIn'
						>
							<FaLinkedin />
						</a>
                        <a
							className='flex items-center font-medium'
							href='https://github.com/nachoogomez'
							target='_blank'
							rel='noreferrer'
							title='Github'
						>
							<FaGithub />
						</a>
					</div>
				</div>
			</div>
		</motion.footer>
	)
}

export default Footer