import Navbar from "../Navbar"
import "../Dashboard.css"
import User from "../../assets/user.png"
import { Link } from "react-router-dom"
const Dashboard = () => {

    return(
        <div id="Dashboard">
            <main>
            <Navbar></Navbar>
            <section>
            <div>
                <i class="fa-solid fa-bars"></i>
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
                 <h4>Dashboard</h4>
                 <nav>
                    <span></span>
                    <p>Hi, Welcome, Ismail!</p>
                 </nav>
                 <li>What would you like to do now?</li>
                 <aside >
                    <div>
                        <nav><i class="fa-solid fa-chalkboard-user"></i></nav>
                        <div>
                            <h4>Continue Learning</h4>
                            <p>Proceed with your lectures. You're currently in
                             the React module and there are 16 more videos to go.</p>
                            <Link to="/Lecture">Continue Learning<i class="fa-solid fa-chevron-right"></i></Link> 
                        </div>
                    </div>
                    <div>
                          <nav><i class="fa-solid fa-laptop-code"></i></nav>
                        <div>
                            <h4>Enter new challenge</h4>
                            <p>Take a new challenge on your path to get more
                               stars and stand a chance to win Geegstack Perks.</p>
                            <Link to="/Challenges">Enter Challenge<i class="fa-solid fa-chevron-right"></i></Link> 
                        </div>
                    </div>
                 </aside>
                  <aside>
                    <div>
                          <nav><i class="fa-solid fa-users"></i></nav>
                        <div>
                            <h4>Go to Forum</h4>
                            <p>Visit the academy forum to join discussion or ask a 
                                question and get help from co-learners</p>
                            <Link to="/">Visit Forum<i class="fa-solid fa-chevron-right"></i></Link> 
                        </div>
                    </div>
                    <div>
                          <nav><i class="fa-solid fa-shapes"></i></nav>
                        <div>
                            <h4>Take a Quiz</h4>
                            <p>Test your knowledge with Quizzes. Get more stars 
                              and stand a chance to win Geegstack Perks.</p>
                            <Link to="/Quiz">Take Quiz<i class="fa-solid fa-chevron-right"></i></Link> 
                        </div>
                    </div>
                 </aside>
                
            </section>
            </main>
             <footer>
                    <p>. Geegstack Academy</p>
                 </footer>
        </div>
        
    )
}

export default Dashboard