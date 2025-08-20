import React from 'react'
import Hero from '../components/hero/Hero'
import Proyectos from '../components/proyectos/Proyectos'
import { motion } from 'framer-motion'
import ContactForm from '../components/form/ContactForm'
import Skills from '../components/skills/Skills'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
        <main className='w-full  select-none text-midnight flex flex-col items-center subpixel-antialiased  scroll-smooth gap-5 lg:gap-10 mb-10'>
          <div
            id='portal'
            className='w-full flex items-center justify-center mt-16 lg:mt-[3rem] fixed z-20'
          />
          <div className='w-full flex flex-col gap-10 items-center max-w-5xl px-5 xl:max-w-6xl mt-[5.5rem]'>
            <Hero />
            <Proyectos />
            <Skills />
            <ContactForm />
            <Footer />
          </div>   
        </main>
    </>
  )
}

export default Home

