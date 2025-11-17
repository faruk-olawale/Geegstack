import Navbar from "../Navbar"
import "../Challenges.css"
import User from "../../assets/user.png"
import { Link } from "react-router-dom"

const Challenges = () => {

    return(
        <div id="challenges">
            <main>
            <Navbar></Navbar>
            <section>
                <div>
                <section> 
                <i class="fa-solid fa-bars"></i>
                <i className="fa-solid fa-magnifying-glass" id="search"></i> 
                </section> 
                <nav>
                    <aside>
                        <img src={User} alt="user Profile" />
                        <p>
                           <span>Hi, Ismail</span>
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
                <p id="p"><i class="fa-solid fa-arrow-left"></i>Go Back</p>
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