import Navbar from "../Navbar"
import "../Quiz.css"
import User from "../../assets/user.png"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Quiz = () => {
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
        <div id="Quiz">
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
                                <p id="p">
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
                    <div id="last-two">
                        <h1>Soon...</h1>
                        <p>Don't fret. The Quiz pages are under engineering.
                            You will be notified once they're up!</p>
                        <Link to="/Dashboard">Back to Dashboard</Link> 
                    </div>   
                </section>
            </main>
            
            <footer>
                <p><span>.</span> Geegstack Academy</p>
            </footer>
        </div>
    )
}

export default Quiz