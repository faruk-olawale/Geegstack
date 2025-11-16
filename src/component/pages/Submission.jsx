import Navbar from "../Navbar"
import "../Submission.css"
import User from "../../assets/user.png"
import { Link } from "react-router-dom"

const Submission = () => {

    return(
        <div id="Quiz">
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
                <div id="last-two">
                   <h1>Soon...</h1>
                   <p>Don't fret. The Submissions page is under engineering. 
                    You will be notified once it is up!</p>
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

export default Submission