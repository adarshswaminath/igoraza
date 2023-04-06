import React from 'react'

const Job = () => {
  return (
    <div>
        <section class="bg-white">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">Payments tool for software companies</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#about" className="btn w-40 lg:w-96 mx-auto border-none rounded-full bg-[#1d3557] hover:bg-[#1d3545] text-white font-bold uppercase tracking-wider">
                Get Started
              </a> 
        </div>
        <div class="lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://i.pinimg.com/564x/e7/5a/ac/e75aac2deaa5ffee52e50d5502db9de8.jpg" alt="mockup"/>
        </div>                
    </div>
</section>
    </div>
  )
}

export default Job