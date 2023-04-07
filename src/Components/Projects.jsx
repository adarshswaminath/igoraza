import React from "react";
import industry from "./images/industry.svg"
import product1 from "./images/product1.jpg"
import product2 from "./images/product2.jpg"
import product3 from "./images/product3.jpg"
function Projects() {
  return (
    <div>
      <div className="bg-gray-100 py-10 text-center ">
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
          <section className="">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">IGORAZA Industries</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">Igoraza Industrials is a dynamic and innovative startup that offers a range of workshops and programs to help young professionals and entrepreneurs reach their full potential. Our programs are designed to provide participants with the skills, knowledge, and experience they need to succeed in their careers and achieve their goals.</p>
              </div>
              <div className="lg:mt-0 lg:col-span-5 lg:flex">
                <img src={industry} alt="mockup" />
              </div>
            </div>
          </section>
          {/* what we are */}
          <div className="rounded-lg shadow-lg p-6 bg-[#1d3557]">
            <h2 className="text-3xl font-bold mb-4 text-white">What We Are</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-lg text-gray-800 leading-snug">
                  We are dedicated to helping aspiring entrepreneurs and young professionals unleash their creativity and achieve success.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
                <p className="text-lg text-gray-800 leading-snug">
                  Our team of experienced mentors and business leaders is passionate about providing the resources and tools that young professionals need to thrive in today's fast-paced, dynamic business environment.
                </p>
              </div>
            </div>
            <div className="mt-4 bg-gray-100 rounded-lg p-4">
              <p className="text-lg text-gray-800 leading-snug">
                We provide a range of useful workshops and programmes that are geared towards helping you advance your profession or business. We have the resources and technical expertise to support you regardless of whether you're an aspiring entrepreneur looking to start your own business or a young professional looking to improve your skills and expertise.
              </p>
            </div>
          </div>

          {/* product box */}
          <div className="px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 mt-6">Our Products</h1>
            <div className="grid md:grid-cols-3 gap-3 justify-center items-center lg:flex">
              {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:flex justify-center mx-auto"> */}
              <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-56 object-cover object-center" src={product3} alt="Collab Workshops" />
                <div className="px-4 py-2">
                  <h2 className="text-gray-800 font-bold text-2xl mb-2">Collab Workshops</h2>
                  <p className="text-gray-600 text-sm">Our collab workshops bring together like-minded individuals who are passionate about entrepreneurship, innovation, and collaboration. Participants will work on real-world projects, learn from industry experts, and develop the skills they need to succeed in today's competitive business environment.</p>
                </div>
              </div>
              <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mt-6 md:mt-0">
                <img className="w-full h-56 object-cover object-center" src={product2} alt="Incubation Programme" />
                <div className="px-4 py-2">
                  <h2 className="text-gray-800 font-bold text-2xl mb-2">Incubation Programme</h2>
                  <p className="text-gray-600 text-sm">Our incubation programmes offer aspiring business owners the assistance and tools they need to start their own companies. Mentorship, training, funding, and access to other resources will be provided to participants in order to assist them in transforming their ideas into profitable businesses.</p>
                </div>
              </div>
              <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mt-6 md:mt-0">
                <img className="w-full h-56 object-cover object-center" src={product1} alt="Internship Programs" />
                <div className="px-4 py-2">
                  <h2 className="text-gray-800 font-bold text-2xl mb-2">Internship Programs</h2>
                  <p className="text-gray-600 text-sm ">Our internship programs offer mentorship opportunities and networking events to help participants grow their professional network and gain insights into the industry. We believe in investing in the next generation of talent and providing them with the resources and support they need to reach their full potential</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Projects;
