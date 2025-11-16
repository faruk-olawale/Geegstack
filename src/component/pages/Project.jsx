import Navbar from "../Navbar"
import "../Project.css"
import User from "../../assets/user.png"
import { Link } from "react-router-dom"

const Project = () => {

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
                           Hi, Ismail
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