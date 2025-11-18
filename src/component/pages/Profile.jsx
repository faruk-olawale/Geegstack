import { useEffect, useState } from "react"
import Navbar from "../Navbar"
import "../Profile.css"
import User from "../../assets/user.png"
import { Link } from "react-router-dom"

const Profile = () => {
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
        <div id="Profile">
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
                    {/* Top Header Bar */}
                    <div className="top-bar">
                        <section>
                            <i className="fa-solid fa-bars" onClick={toggleNavbar}></i>
                            <i className="fa-solid fa-magnifying-glass" id="search"></i> 
                        </section>
                        <nav>
                            <aside>
                                <img src={User} alt="user Profile" />
                                <p>
                                    <span>Hi, {firstName}</span>
                                    <i className="fa-solid fa-caret-down"></i>
                                </p>
                            </aside>
                            <div>
                                <Link to="/Profile">
                                    <i className="fa-solid fa-user"></i> Profile
                                </Link>
                                <Link to="/">
                                    <p><i className="fa-solid fa-right-from-bracket"></i>Logout</p>
                                </Link>
                            </div>
                        </nav>
                    </div>

                    {/* Go Back Link */}
                    <p className="go-back">
                        <i className="fa-solid fa-arrow-left"></i> Go Back
                    </p>

                    {/* Page Title */}
                    <h4 className="page-title">My Profile</h4>

                    {/* Section Header */}
                    <nav className="section-header">
                        <span></span>
                        <p>Hi, {firstName}!</p>
                    </nav>

                    {/* Subtitle */}
                    <li className="subtitle">You can edit your account from here</li>

                    {/* Profile Card */}
                    <div className="profile-card">
                        {/* Profile Image & Stats */}
                        <div className="profile-header">
                            <img src={User} alt="Profile" className="profile-image" />
                            
                            <div className="profile-stats">
                                <div className="stat-item">
                                    <h3>0</h3>
                                    <p>Challenges</p>
                                </div>
                                <div className="stat-item">
                                    <h3>0</h3>
                                    <p>Projects</p>
                                </div>
                                <div className="stat-item">
                                    <h3>0</h3>
                                    <p>Stars</p>
                                </div>
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="profile-info">
                            <h3 className="profile-name">{firstName}</h3>
                            <p className="profile-role">/ Full Student</p>
                        </div>

                        <div className="profile-bio">
                            <p>Ismail is a Full stack Development Student at Geegstack Academy.</p>
                        </div>
                    </div>

                    {/* Edit Profile Section */}
                    <div className="edit-profile-section">
                        <h2 className="edit-title">Edit Profile</h2>
                        
                        <form className="edit-form">
                            {/* Name Fields */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input 
                                        type="text" 
                                        defaultValue="New" 
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input 
                                        type="text" 
                                        defaultValue="username" 
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            {/* Email & Phone */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        defaultValue="1234568u88@gmail.com" 
                                        placeholder="Email"
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input 
                                        type="tel" 
                                        defaultValue="+234-122-444-111" 
                                        placeholder="Phone"
                                    />
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="form-group full-width">
                                <label>Bio</label>
                                <div className="bio-toolbar">
                                    <select defaultValue="Normal">
                                        <option>Normal</option>
                                        <option>Heading 1</option>
                                        <option>Heading 2</option>
                                    </select>
                                    <div className="toolbar-icons">
                                        <button type="button"><i className="fa-solid fa-bold"></i></button>
                                        <button type="button"><i className="fa-solid fa-italic"></i></button>
                                        <button type="button"><i className="fa-solid fa-underline"></i></button>
                                        <button type="button"><i className="fa-solid fa-link"></i></button>
                                        <button type="button"><i className="fa-solid fa-list-ul"></i></button>
                                        <button type="button"><i className="fa-solid fa-list-ol"></i></button>
                                        <button type="button"><i className="fa-solid fa-eraser"></i></button>
                                    </div>
                                </div>
                                <textarea 
                                    rows="5" 
                                    placeholder="Write your bio..."
                                    defaultValue="•"
                                ></textarea>
                            </div>

                            {/* Profile Picture */}
                            <div className="form-group full-width">
                                <label>Profile Picture</label>
                                <div className="profile-picture-upload">
                                    <img src={User} alt="Profile Preview" />
                                    <div className="upload-actions">
                                        <button type="button" className="choose-file-btn">
                                            Choose File
                                        </button>
                                        <span className="file-info">No file chosen</span>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="form-actions">
                                <button type="submit" className="save-btn">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer>
                <p><span>•</span> Geegstack Academy</p>
            </footer>
        </div>
    )
}

export default Profile