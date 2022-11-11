import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";

const NavBar = ( props ) =>{

    const {link1, link2, link3, link4, link5} = props;

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3 className="primary-font fw-500">oscar<span className="color-sec">Gonzalez</span>~</h3>
			<nav ref={navRef} className="primary-font">
				<Link>{link1}</Link>
				<Link>{link2}</Link>
				<Link>{link3}</Link>
				<Link>{link4}</Link>
				<Link to="/poke">{link5}</Link>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);


}

export default NavBar;