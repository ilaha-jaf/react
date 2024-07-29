import {useState} from "react"

const Header=()=>{

    const [isDropdownOpen, setIsDropdownOpen]=useState(false)
    const toggleDropdown=()=> setIsDropdownOpen(!isDropdownOpen)
    return(
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Navbar</span>
                <div className="collapse navbar-collapse">

                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item dropdown">
                            <a 
                            onClick={toggleDropdown}
                            className={`nav-link dropdown-toggle ${isDropdownOpen ? "show" : ""}`} id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Link
                            </a>
                            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`} aria-labelledby="navbarScrollingDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
 }
 export default Header