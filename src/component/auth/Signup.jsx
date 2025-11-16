import "./auth.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
function Signup() {
    return(
        <div id="auth">
            <section >
            <img src={logo} alt="geestack" />
            <form >
                <legend>Signup</legend>
                <nav>
                    <label htmlFor="email">Email</label>
                    <input type="email" />
                </nav>

                <nav>
                    <div>
                        <label htmlFor="password">Password</label>
                        <p>Forgotten password?</p>
                    </div>
                    <input type="password" />
                </nav>

                <nav>
                    <Link to="/"> <button>Signup</button></Link>
                </nav>
            </form>
            <li>Already have an Account <Link to ="/">Login</Link></li>
            <p>Copyright &copy; geegstack academy 2022</p>
            </section>
        </div>
    )
}

export default Signup