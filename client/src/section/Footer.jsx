import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Social media icons
import { MdClose } from "react-icons/md";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: false,
        });
    }, []);

    return (
        <footer id="footer" className="bg-[#202020] text-white py-12 px-8">
            <div className="w-full flex flex-col items-center text-center">
                {/* Footer Heading */}
                <h2 data-aos="zoom-in" data-aos-delay="200" className="text-3xl font-semibold mb-6 font-poppins">Get In Touch with Me</h2>


                {/* Social Media Icons */}
                <div className="flex gap-8 mb-6">
                    {/* <a
                        href="https://www.instagram.com/_._notsogolu_._/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-themered"
                    >
                        <FaInstagram />
                    </a> */}
                    <a
                        href="https://github.com/Pranjali6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-themered"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pranjali-sharma-7b1a93229/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-themered"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:itspranjali06@gmail.com"
                        className="text-2xl hover:text-themered"
                    >
                        <FaEnvelope />
                    </a>
                    {/* New X icon for Twitter */}

                </div>

                {/* Copyright Section */}
                <div className="text-gray-400 text-sm font-poppins">
                    <p>&copy; {new Date().getFullYear()} Pranjali Sharma. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
