import Navbar from "../Navbar"
import "../Leaderboard.css"
import User from "../../assets/user.png"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
const Leaderboard = () => {

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
        <div id="Leaderboard">
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
                <i className="fa-solid fa-bars"onClick={toggleNavbar}></i>
                <i className="fa-solid fa-magnifying-glass" id="search"></i> 
                </section>  
                <nav>
                    <aside>
                        <img src={User} alt="user Profile" />
                        <p>
                          <span>Hi, {firstName}</span>
                            <i class="fa-solid fa-caret-down"></i>
                        </p>
                    </aside>
                    <div>
                        <Link to="/Profile"><i className="fa-solid fa-user"></i> Profile</Link>
                        <Link to="/">
                        <p><i class="fa-solid fa-right-from-bracket"></i>Logout</p>
                        </Link>
                    </div>
                </nav>
                </div>
                <p id="p"><i className="fa-solid fa-arrow-left"></i>Go Back</p>
                 <h4>Leaderboard</h4>
                 <nav>
                    <span></span>
                    <p>Student's Leaderboard</p>
                 </nav>
                 <li>See how you and your mates are doing.</li>
                 <div className="container">
                     <h4>Learning Path</h4>
                    <section>
                        <div>
                            <aside>
                                <img src={User} alt="user-picture"/>
                                <div>
                                    <p>Abdulrasheed Ibraheem</p>
                                    <small>FULLSTACK STUDENT</small>
                                </div>
                            </aside>

                            <article>
                                <aside>
                                    <h3>10</h3>
                                    <p>Projects</p>
                                </aside>
                                <aside>
                                    <h3>25</h3>
                                    <p>Challenges</p>
                                </aside>
                                <aside>
                                     <h3>1,290</h3>
                                    <p>Stars</p>
                                </aside>
                            </article>
                        </div>
                        <div>
                             <aside>
                                 <img src={User} alt="user-picture"/>
                                <div>
                                    <p>Olayiwola Abdulrahman</p>
                                    <small>FRONTEND STUDENT</small>
                                </div>
                            </aside>
                             <article>
                                <aside>
                                    <h3>9</h3>
                                    <p>Projects</p>
                                </aside>
                                <aside>
                                    <h3>21</h3>
                                    <p>Challenges</p>
                                </aside>
                                <aside>
                                     <h3>1,010</h3>
                                    <p>Stars</p>
                                </aside>
                            </article>
                        </div>
                        <div>
                            <aside>
                                <img src={User} alt="user-picture"/>
                                <div>
                                    <p>Habeeb Ismail </p>
                                    <small>FULLSTACK STUDENT</small>
                                </div>
                            </aside>
                             <article>
                                <aside>
                                    <h3>7</h3>
                                    <p>Projects</p>
                                </aside>
                                <aside>
                                    <h3>20</h3>
                                    <p>Challenges</p>
                                </aside>
                                <aside>
                                     <h3>995</h3>
                                    <p>Stars</p>
                                </aside>
                            </article>
                        </div>
                    </section> 
                 </div>
            </section>
            </main>
            <footer>
                    <p><span>.</span> Geegstack Academy</p>
                 </footer>
        </div>
    )
}

export default Leaderboard