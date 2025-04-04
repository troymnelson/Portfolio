import React from 'react'

const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
        <h1 className='text-4xl md:text-7xl mb-2 md:mb-3 font-bold'>Troy Nelson</h1>
        <p className='text-base md:text-xl mb-3 font-medium'>Full-Stack Web Developer</p>
        <p className='text-sm max-w-xl mb-6 pl-5 pr-5'>
            Hi! I'm a web developer with a strong foundation in the MERN stack (MongoDB, Express.js, React, and Node.js). I specialize
            in building full-stack web applications that are fast, responsive, and user-friendly. I completed an intensive Web Development
            Bootcamp through the University of Minnesota, where I gained hands-on experience working on real-world projects, both individually
            and in teams. 
            <br />
            From frontend interfaces to backend databases, I enjoy every part of the development process. I love solving problems with code and constantly
            learning new technologies to keep up with the ever-evolving web. 
            <br />
            Whether it's developing APIs, optimizing performance, or designing clean UI/UX, I bring dedication and attention to detail to every project.
        </p>
    </div>
  )
}

export default Intro