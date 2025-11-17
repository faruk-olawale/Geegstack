import Navbar from "../Navbar"
import "../Challenges.css"
import User from "../../assets/user.png"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Challenges = () => {
    const [firstName, setFirstName] = useState("Ismail")
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)
    
    useEffect(() => {
        const userEmail = localStorage.getItem("userEmail")
        
        if (userEmail) {
            const emailPrefix = userEmail.split("@")[0]
            const name = emailPrefix.split(".")[0]
            
            const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
            setFirstName(capitalizedName)
        }
    }, [])

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen)
    }

    const closeNavbar = () => {
        setIsNavbarOpen(false)
    }

    return(
        <div id="challenges">
            {/* Overlay */}
            {isNavbarOpen && (
                <div 
                    className="navbar-overlay"
                    onClick={closeNavbar}
                ></div>
            )}

            <main>
                <div className={`navbar-wrapper ${isNavbarOpen ? 'navbar-open' : ''}`}>
                    <Navbar />
                </div>
                
                <section>
                    <div>
                        <section> 
                            <i className="fa-solid fa-bars" onClick={toggleNavbar}></i>
                            <i className="fa-solid fa-magnifying-glass" id="search"></i> 
                        </section> 
                        <nav>
                            <aside>
                                <img src={User} alt="user Profile" />
                                <p>
                                    <span>Hi, {firstName}</span>
                                    <i className="fa-solid fa-caret-down"></i>
                                </p>
                            </aside>
                            <div>
                                <h4><i className="fa-solid fa-user"></i> Profile</h4>
                                <Link to="/">
                                    <p><i className="fa-solid fa-right-from-bracket"></i>Logout</p>
                                </Link>
                            </div>
                        </nav>
                    </div>
                    <p id="p"><i className="fa-solid fa-arrow-left"></i>Go Back</p>
                    <h4>Challenges</h4>
                    <nav>
                        <span></span>
                        <p>Challenges</p>
                    </nav>
                    <li>The only way to become a developer is by developing!</li>

                    <div className="container">
                        <section>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>Git&GitHub</p>
                            <p>React</p>
                            <p>NodeJS</p>
                            <p>ExpressJSBasics</p>
                            <p>MongoDB</p>
                            <p>WebHosting</p>
                            <p>ExpressJS(Cont'd)</p>
                        </section>

                        <p>No challenge has been added for HTML yet.</p>
                    </div>
                </section>
            </main>
            
            <footer>
                <p><span>.</span> Geegstack Academy</p>
            </footer>
        </div>
    )
}

export default Challenges