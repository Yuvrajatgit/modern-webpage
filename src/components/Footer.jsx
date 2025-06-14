import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPassport } from "react-icons/fa6";

const links = [
    {href: 'https://github.com/Yuvrajatgit', icon: <FaGithub/>},
    {href: 'https://yuvrajportfoliowebsite.netlify.app/', icon: <FaPassport/>},
    {href: 'https://www.instagram.com/', icon: <FaInstagram/>},
    {href: 'https://www.linkedin.com/in/yuvrajgupta07/', icon: <FaLinkedin/>}
]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
            <p className='text-center text-sm md:text-left'>
                &copy; Yuvraj Gupta 2025.
            </p>
            <div className='flex justify-center gap-4 md:justify_start'>
             {links.map((link)=>(
                <a key={link} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-white">
                    {link.icon}
                </a>
             ))}
            </div>
            <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">
                Privacy Policy
            </a>
        </div>
    </footer>
  )
}

export default Footer;
