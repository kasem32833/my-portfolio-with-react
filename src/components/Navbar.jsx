
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-20 py-6 flex justify-between items-center">
        <div className="flex flex-shrink-0 items-center">
           <Link to="http://localhost:5173"><h1 className="text-2xl font-bold">Abul</h1></Link>
        </div>
        <div className="flex flex-shrink-0 gap-4 items-center text-2xl">
            <Link to="http://linkedin.com"><FaLinkedin /></Link>
            <Link to="http://facebook.com"><FaFacebook /></Link>
            <Link to="http://github.com"><FaGithub /></Link>
            <Link to="http://twitter.com"><FaTwitter /></Link>
        </div>
    </nav>
  )
}

export default Navbar