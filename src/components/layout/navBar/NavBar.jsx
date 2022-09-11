const NavBar = ( props ) =>{

    const {link1, link2, link3, link4} = props;

    return (
        <header className="app-header">
            <h3 className="color-primary primary-font ml-3 fw-500">Oscar<span className="color-sec">Gonzalez</span> ~</h3>
            <nav className="app-header__nav mr-2">
                <ul>
                    <li>{link1}</li>
                    <li>{link2}</li>
                    <li>{link3}</li>
                    <li>{link4}</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;