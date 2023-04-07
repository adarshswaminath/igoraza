import React from 'react'
import { Link, useLocation } from "react-router-dom"
import image from "./images/career.jpg"
const Job = (props) => {
  const location = useLocation()
  const propsData = location.state
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center justify-between lg:flex">
            <div className="sm:w-1/2">
              <h1 className="text-3xl font-semibold text-gray-800">Join Our Team as a {propsData}</h1>
              <p className="mt-4 text-gray-600">
                IGORAZA Technologies is seeking a highly skilled and motivated {propsData} to join our team. As a
                {propsData}, you will be responsible for leading and managing teams to ensure successful
                execution of projects.
              </p>
              <button className="mt-8 py-3 px-6 bg-[#1d3557] text-white font-semibold rounded-md hover:bg-blue-600">
                Apply Now
              </button>
            </div>
            <div className="">
              <img
                src={image}
                alt="Hero Image"
                width={600}
                height={400}
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        <section className="mt-16 bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-md rounded-lg px-8 py-10">
                <h2 className="text-2xl font-semibold text-gray-800">Responsibilities</h2>
                <ul className="mt-4 list-disc list-inside">
                  <li className="mb-2">Lead and manage delivery teams to ensure successful project execution</li>
                  <li className="mb-2">Monitor project progress and take corrective actions as needed</li>
                  <li className="mb-2">Collaborate with clients, stakeholders, and cross-functional teams to understand project requirements</li>
                  <li className="mb-2">Manage project risks and issues</li>
                  <li className="mb-2">Provide regular reports on project status to senior management</li>
                </ul>
              </div>

              <div className="bg-white shadow-md rounded-lg px-8 py-10">
                <h2 className="text-2xl font-semibold text-gray-800">Requirements</h2>
                <ul className="mt-4 list-disc list-inside">
                  <li className="mb-2">Bachelor's degree in a related field</li>
                  <li className="mb-2">Proven experience as a Delivery Manager or similar role</li>
                  <li className="mb-2">Strong project management skills</li>
                  <li className="mb-2">Excellent communication and leadership skills</li>
                  <li className="mb-2">Ability to work in a fast-paced environment</li>
                </ul>
              </div>

              <div className="bg-white shadow-md rounded-lg px-8 py-10">
                <h2 className="text-2xl font-semibold text-gray-800">Benefits</h2>
                <ul className="mt-4 list-disc list-inside">
                  <li className="mb-2">Competitive salary and benefits package
                  </li>
                  <li className="mb-2">Opportunities for professional growth and career advancement</li>
                  <li className="mb-2">Dynamic and collaborative work environment</li>
                  <li className="mb-2">Chance to work on cutting-edge technologies and innovative projects</li>
                  <li className="mb-2">Supportive and inclusive company culture</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-16 bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Join Our Team as a {propsData}
            </h2>
            <p className="text-gray-600 text-center">
              If you are passionate about technology, innovation, and delivering outstanding results, we would love to hear
              from you. Click the button below to apply.
            </p>
            <div className="flex justify-center mt-8">
              <button className="py-3 px-6 bg-[#1d3557] text-white font-semibold rounded-md hover:bg-blue-800">
                Apply Now
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Job