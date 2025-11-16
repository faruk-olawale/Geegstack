import { Link } from "react-router-dom"
import "./Navbar.css"
function Navbar() {
    return( <div id="navbar">
    <aside>
        <h2>GEEGSTACK ACADEMY</h2>
        <div>
            <Link to='/Dashboard'>
            <nav className="active">
                <i class="fa-solid fa-house"></i>
                <p>Dashboard</p>
            </nav>
            </Link>
            <Link to='/Lecture'>
            <nav>
                <i class="fa-solid fa-chalkboard-user"></i>
                <p>My Lecture</p>
            </nav>
            </Link>

            <Link to='/Challenges'>
            <nav>
               <i class="fa-solid fa-laptop-code"></i>
               <p>Challenges</p> 
            </nav>
            </Link>

            <Link to="/Project">
            <nav>
               <i class="fa-solid fa-diagram-project"></i>
               <p>Projects</p> 
            </nav>
            </Link>
            <Link to="/Leaderboard">
            <nav>
               <i class="fa-solid fa-fire"></i>
               <p>Learderboard</p>
            </nav>
            </Link>

            <Link to="/Submission">
            <nav>
               <i class="fa-solid fa-upload"></i>
               <p>My submission</p> 
            </nav>
            </Link>
            <Link to="/Quiz">
            <nav>
            <i class="fa-solid fa-shapes"></i>
            <p>Quizzes</p> 
            </nav>
            </Link>
        </div>
        <section>
        <button>
        <i class="fa-solid fa-graduation-cap"></i>
        My Course Details
        </button>
        </section>
    </aside>
</div> )
}

export default Navbar