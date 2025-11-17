import "./auth.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
   const[email, setEmail] = useState("");
   const[password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate(); 

    function LoggedIn(e) {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            alert("Both email and password are required.");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            console.log("Logging in with:", email, password);
            
            
            localStorage.setItem("userEmail", email);
            
            setLoading(false);
            navigate("/Dashboard"); 
        }, 2000);
    }

    return(
        <div id="auth">
            <section >
            <img src={logo} alt="geestack" />
            <form  onSubmit={LoggedIn}>
                <legend>Login</legend>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email"
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <p>Forgotten password?</p>
                    </div>
                    <input 
                        id="password"
                        type="password" 
                        value={password}  
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                   <button type="submit" disabled={loading}>
                     {loading ? "Logging in..." : "Login"}
                   </button>
                </div>
            </form>
             <li>Doesn't have an account <Link to ="/Signup">Sign Up</Link></li>
            <p>Copyright &copy; geegstack academy 2022</p>
            </section>
        </div>
    )
}

export default Login