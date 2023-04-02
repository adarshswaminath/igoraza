import React from "react";
import banner from "./images/banner.png";

function Explore() {
  return (
    <div>
      <div className="bg-gray-100 py-10 pt-2">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">About us</h1>
          <p className="text-center mb-8">
            IGORAZA is a progressive technological startup established by a consortium of passionate engineers that are determined to advancing humanity through slashing technology innovations. By employing the most up-to-date software and techniques, we focus in creating and establishing exceptional solutions for our clients
          </p>
          <div className="lg:flex gap-4">
            <img
              src={banner}
              alt="features-bg"
              className="rounded-lg shadow-2xl mx-auto lg:mr-4 mb-8 lg:mb-0 lg:max-w-md"
            />
            <div className="lg:flex-1">
              {/* <h1 className="text-xl font-bold mb-2">
                Passionate engineering partner
              </h1> */}
              <div className="mb-3">
                <div className="card w-82 bg-base-400 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Passionate engineering partner</h2>
                    <p>
                      We at IGORAZA value innovation, dedication, and perfection. Our team is motivated by a passion towards technology and a commitment for delivering incredible results. If you're seeking for an engineering partner that can help you accomplish your objectives we encourage you to get in touch with IGORAZA right away to learn more about our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
