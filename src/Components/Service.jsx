import { GiArtificialIntelligence } from "react-icons/gi"
import { SiHiveBlockchain } from "react-icons/si"
import { CgWebsite } from "react-icons/cg"
import { MdOutlineDeveloperMode } from 'react-icons/md'
import MissionImg from './images/service.svg';
import Footer from "./Footer";

function Mission() {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Creating the Digital Enterprise of Tomorrow</h1>
                        <p className="mb-5">We help businesses propel into the digital service economy with our innovative solutions and advisory services. </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-10 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
                    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                        <img
                            src={MissionImg}
                            className="rounded-lg shadow-2xl w-full"
                            alt="Mission"
                        />
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <h1 className="text-4xl font-bold text-center md:text-left mb-8">
                            Our Service
                        </h1>
                        <div className="grid grid-cols-1  lg:flex">
                            <div className="bg-violet-500 text-white rounded-lg shadow-lg p-6">
                                <MdOutlineDeveloperMode className="text-4xl mb-4" />
                                <h2 className="text-xl font-bold mb-2">App Development</h2>
                                <p className="text-lg">If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                            <div className="bg-violet-500 text-white rounded-lg shadow-lg p-6 mt-4 lg:mt-0 lg:ml-4">
                                <SiHiveBlockchain className="text-4xl mb-4" />
                                <h2 className="text-xl font-bold mb-2">Blockchain Development</h2>
                                <p className="text-lg">If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:flex mt-2">
                            <div className="bg-violet-500 text-white rounded-lg shadow-lg p-6">
                                <CgWebsite className="text-4xl mb-4" />
                                <h2 className="text-xl font-bold mb-2">Web Development</h2>
                                <p className="text-lg">If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                            <div className="bg-violet-500 text-white rounded-lg shadow-lg p-6 mt-4 lg:mt-0 lg:ml-4">
                                <GiArtificialIntelligence className="text-4xl mb-4" />
                                <h2 className="text-xl font-bold mb-2">AI Development</h2>
                                <p className="text-lg">If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Mission;
