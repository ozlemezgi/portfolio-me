import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { Inter } from '@next/font/google';
import Typewriter from 'typewriter-effect';


import GitHubIcon from "../components/icons/Github";
import LinkedinIcon from "../components/icons/Linkedin";

//import Typical from 'react-typical';

// const TypingAnimation = React.memo(
//   ()=>{
//     return(
//       <Typical>
//       loop={3}
//       wrapper="p"
//       steps={["Software Developer",2000,"Computer Engineer",2000,"Cat Mom",2000]}
//       </Typical>
//     );
//   },
//   (props,prevProps) =>true
// )


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title={"Özlem Ezgi Sarı"} description={"My Portfolio"}>
      <motion.img src="/images/ball-1.svg" alt="Ball-1" className="hidden md:block h-auto absolute bottom-10 left-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <motion.img src="/images/ball-2.svg" alt="Ball-2" className="hidden md:block h-auto absolute top-48 right-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start"><h4 className="text-lg text-gray-800 dark:text-white"><span className="text-xl font-normal">Hello,</span>I'am</h4><h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">Özlem Ezgİ SARI</h1>

            {/* Animation Start */}
            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              {/* <TypingAnimation></TypingAnimation> */}


              {/* <Typewriter
       onInit={(typewriter)=>{typewriter
        .typeString("Hello Youtube")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Hello Youtubeeeeeeee")
        .start();
      }}
       /> */}

              <Typewriter
                options={{
                  strings: ['Computer Engineer', 'Software Developer', "Cat Mom 🐈"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            {/* Animation End */}
            {/* Icons */}

            {/* github */}
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a href="https://github.com/ozlemezgi" target={"_blank"} rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
              whileHover={{scale:1.1}}>
                <GitHubIcon className={"w-8 h-8 fill-current"}/>
              </motion.a>

              {/* linkedin */}
              <motion.a href="https://www.linkedin.com/in/ozlemezgisari/" target={"_blank"} rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
              whileHover={{scale:1.1}}>
                <LinkedinIcon className={"w-8 h-8 fill-current"}/>
              </motion.a>

            </div>
            {/* Icons End */}
          </div>
          {/* code area */}
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span> You can drag
                    these balloons I'm really in love with them 🎈🎈
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="https://avatars.githubusercontent.com/u/92430613?v=4"
                      alt="Me"
                      className="w-10 h-10 rounded-full"
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const 
                        {/* frontend */}
                        <span className="font-bold text-pink-300"> frontendSkills</span> =
                        ["Reactjs", "Nextjs", "Graphql", "Nodejs"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-pink-300">3</span> =
                        ["Solidity", "Web3.js", "Ethers.js"];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <Link href="/projects"
                       className="transition duration-300">Projects
                    </Link>

                    <a
                      href="https://www.youtube.com/channel/UCfGXEo2uCkVqcIqkIaFNGcA"
                      target={"_blank"}
                      rel="noopener noreferrer"
                      className="transition duration-300"
                    >
                      Youtube
                    </a>
                  </div>
                </code>
              </pre>
            </div>
          </article>
          {/* code area end */}
        </section>
      </main>
    </Layout>

  )
}


