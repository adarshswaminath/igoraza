import React from "react";

function Projects() {
  return (
    <div>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 ">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Our Products
          </h1>
          <div className="grid md:grid-cols-3 gap-3 justify-center items-center lg:flex">
            <div className="card w-72 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://v1.tailwindcss.com/img/card-top.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Product 1</h2>
                <p>If a dog chews shoes whose shoes does he choose</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
            <div className="card w-72 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Product 2</h2>
                <p>If a dog chews shoes whose shoes does he choose</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
            <div className="card w-72 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://v1.tailwindcss.com/img/card-top.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Product 3</h2>
                <p>If a dog chews shoes whose shoes does he choose</p>
                <div className="card-actions justify-end">
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
