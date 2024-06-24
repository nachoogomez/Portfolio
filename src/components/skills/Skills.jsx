import React from 'react'
import { FaReact, FaNodeJs  } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiMysql, SiTypescript, SiTailwindcss    } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
  return (
    <section class="text-gray-400 body-font ">
        <div class="container px-5 py-12 mx-auto">
            <div class="flex flex-col text-center w-full mb-10">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Skills</h1>
            </div>
            <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                        <FaReact  class="text-indigo-400 w-12 h-12 mb-3 inline-block" />
                        <p class="leading-relaxed text-xl text-white">React</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                        <FaNodeJs class="text-indigo-400 w-12 h-12 mb-3 inline-block" />
                        <p class="leading-relaxed text-xl text-white">NodeJS</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                        <SiMysql class="text-indigo-400 w-12 h-12 mb-3 inline-block" />
                        <p class="leading-relaxed text-xl text-white">SQL</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                        <DiMongodb class="text-indigo-400 w-12 h-12 mb-3 inline-block" />
                        <p class="leading-relaxed text-xl text-white">MongoDb</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                        <SiExpress class="text-indigo-400 w-12 h-12 mb-3 inline-block" />
                        <p class="leading-relaxed text-xl text-white">Express</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                        <SiTypescript class="text-indigo-400 w-12 h-12 mb-3 inline-block" />
                        <p class="leading-relaxed text-xl text-white">Typescript</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                        <IoLogoJavascript class="text-indigo-400 w-12 h-12 mb-3 inline-block" />
                        <p class="leading-relaxed text-xl text-white">Javascript</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                        <SiTailwindcss  class="text-indigo-400 w-12 h-12 mb-3 inline-block" />
                        <p class="leading-relaxed text-xl text-white">Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Skills