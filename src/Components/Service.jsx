import { SiHiveBlockchain } from "react-icons/si"
import { CgWebsite } from "react-icons/cg"
import { MdOutlineDeveloperMode, MdOutlineConstruction } from 'react-icons/md'
import MissionImg from './images/service.svg';


function Mission() {
    return (
        <div>
            <div className="hero min-h-screen bg-white text-gray-600" >
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold text-gray-600">IGORAZA Consultancy</h1>
                        <p className="mb-5 text-gray-600">We help businesses propel into the digital service economy with our innovative solutions and advisory services. </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-10 min-h-screen">
                <div className="flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-center md:text-left mb-8">
                        Our Service
                    </h1>
                </div>
                {/* four boxes */}
                <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
                    {/* <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 mt-2">
                        <img
                            src={MissionImg}
                            className="w-full"
                            alt="Mission"
                        />
                    </div> */}
                    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 mt-2">
                        <div className="text-gray-300 bg-[#1d3557] rounded-lg shadow-lg p-6">
                            <MdOutlineDeveloperMode className="text-4xl mb-4" />
                            <h2 className="text-xl font-bold mb-2">App Development</h2>
                            <p className="text-lg">We provide top-notch, customized app development solutions for businesses seeking to stand out in their industry. Our experienced team delivers exceptional value and results, with both IOS and playstore releases available.</p>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex flex-col justify-center">
                        <div className="grid grid-cols-1 lg:flex mt-2">
                            <div className="text-gray-700 bg-white rounded-lg shadow-lg p-6">
                                <CgWebsite className="text-4xl mb-4" />
                                <h2 className="text-xl font-bold mb-2">Website Design & Development</h2>
                                <p className="text-lg">
                                We create exceptional, secure, and high-performing custom websites for big businesses with engaging, professional designs. Your website is often the first impression customers have of your company, so it's crucial to have a visually appealing site. You can rely on us to deliver a website that performs well.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
                    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 mt-1">
                        <div className="text-gray-700 bg-white rounded-lg shadow-lg p-6">
                            <SiHiveBlockchain className="text-4xl mb-4" />
                            <h2 className="text-xl font-bold mb-2">Blockchain Development</h2>
                            <p className="text-lg">Blockchain technology is a secure and decentralized way to record transactions and store data. It allows for transparent and immutable records, making it ideal for a variety of industries, from finance to healthcare to logistics.</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 mt-2">
                        <div className="text-gray-300 bg-[#1d3557] rounded-lg shadow-lg p-6">
                            <MdOutlineConstruction className="text-4xl mb-4" />
                            <h2 className="text-xl font-bold mb-2">Website Reconstruct</h2>
                            <p className="text-lg">
                            Our objective is to provide your website with a fresh, elegant, and streamlined look, while staying ahead of the competition through innovative plugin updates, content refreshing, and seamless integration for improved user experience and functionality</p>
                        </div>
                    </div>


                </div>
                {/* box close */}
            </div>
        </div>
    );
}

export default Mission;


{/* <div className="flez grid-cols-1 lg:flex mt-2">
                            <div className="text-gray-700 bg-white rounded-lg shadow-lg p-6">
                                <MdOutlineDeveloperMode className="text-4xl mb-4" />
                                <h2 className="text-xl font-bold mb-2">App Development</h2>
                                <p className="text-lg">A proficient partner for solutions in app development. Our team of astute developers dedicated to providing top-notch apps that are tailored to satisfy your unique obligations and objectives. We're devoted to supporting you in accomplishing what you seek and slashing out the competition. Our team of developers and designers bring years of experience and deep industry knowledge to every project, ensuring that your app is of the highest quality and delivers the results you need. We're committed to delivering exceptional value and helping you achieve your objectives. We provide both IOS and playstore release for the apps ensuring wider usage and acceptability</p>
                            </div>
                            <div className="text-gray-700 bg-white rounded-lg shadow-lg p-6 mt-4 lg:mt-0 lg:ml-4">
                                <MdOutlineConstruction className="text-4xl mb-4" />
                                <h2 className="text-xl font-bold mb-2">Website Reconstruct</h2>
                                <p className="text-lg">Our primary objective is to provide you a fresh look and feel together while enhancing its user experience and functionality. It's paramount to stay one step ahead of the competition whether you intend to improve your website with plugin, updated content, or a more elegant, streamlined look and feel. Services for website reconstruct could be what you need. If you're looking for a comprehensive overview of your website, keep in mind that your visitors require a persuasive message and appearance.</p>
                            </div>
                        </div> */}