import Navbar from "../Navbar"
import "../Leaderboard.css"
import User from "../../assets/user.png"
import { Link } from "react-router-dom"
const Leaderboard = () => {

    return(
        <div id="Leaderboard">
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