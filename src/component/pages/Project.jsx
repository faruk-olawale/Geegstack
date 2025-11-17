import Navbar from "../Navbar"
import "../Project.css"
import User from "../../assets/user.png"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Project = () => {

       const [firstName, setFirstName] = useState("Ismail")
    
        useEffect(() => {
        const userEmail = localStorage.getItem("userEmail")
            
        if (userEmail) {
                const emailPrefix = userEmail.split("@")[0]
                const name = emailPrefix.split(".")[0]
                
                const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
                setFirstName(capitalizedName)
            }
        }, [])

    return(
        <div id="Project">
            <main>
            <Navbar></Navbar>
            <section>
                <div><i class="fa-solid fa-bars"></i>
                <nav>
                    <aside>
                        <img src={User} alt="user Profile" />
                        <p>
                           Hi, {firstName}
                            <i class="fa-solid fa-caret-down"></i>
                        </p>
                    </aside>
                    <div>
                        <h4><i class="fa-solid fa-user"></i> Profile</h4>
                        <Link to="/">
                        <p><i class="fa-solid fa-right-from-bracket"></i>Logout</p>
                        </Link>
                    </div>
                </nav>
                </div>
                <p><i class="fa-solid fa-arrow-left"></i>Go Back</p>
                 <h4>Projects</h4>
                 <nav>
                    <span></span>
                    <p>Are you ready?</p>
                 </nav>
                 <li>Remember the only way to be a developer is by developing!</li>

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

                    <p>No project has been added for HTML yet.</p>
                 </div>
     
            </section>
            </main>
            <footer>
                    <p><span>.</span> Geegstack Academy</p>
                 </footer>
        </div>
    )
}

export default Project