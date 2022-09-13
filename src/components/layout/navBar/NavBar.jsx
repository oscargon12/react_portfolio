import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const NavBar = ( props ) =>{

    const {link1, link2, link3, link4} = props;

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3 className="primary-font fw-500">oscar<span className="color-sec">Gonzalez</span>~</h3>
			<nav ref={navRef} className="primary-font">
				<a href="/#">{link1}</a>
				<a href="/#">{link2}</a>
				<a href="/#">{link3}</a>
				<a href="/#">{link4}</a>
				
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