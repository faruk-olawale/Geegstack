import { useState } from "react"
import Navbar from "../Navbar"
import "../Lecture.css"
import User from "../../assets/user.png"
import { Link } from "react-router-dom"

const Lecture = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Course data with video URLs
    const courseData = {
        'Introduction': {
            title: 'Introduction to Web Development',
            videoUrl: 'https://www.youtube.com/embed/qz0aGYrrlhU',
            description: 'Get started with web development fundamentals'
        },
        'HTML': {
            title: 'HTML Fundamentals',
            videoUrl: 'https://www.youtube.com/embed/UB1O30fR-EE',
            description: 'Learn the building blocks of web pages'
        },
        'CSS': {
            title: 'CSS Styling',
            videoUrl: 'https://www.youtube.com/embed/yfoY53QXEnI',
            description: 'Master the art of styling web pages'
        },
        'Javascript': {
            title: 'JavaScript Essentials',
            videoUrl: 'https://www.youtube.com/embed/PkZNo7MFNFg',
            description: 'Bring interactivity to your websites'
        },
        'React': {
            title: 'React Framework',
            videoUrl: 'https://www.youtube.com/embed/Tn6-PIqc4UM',
            description: 'Build modern user interfaces with React'
        },
        'Git & Github': {
            title: 'Version Control with Git',
            videoUrl: 'https://www.youtube.com/embed/RGOj5yH7evk',
            description: 'Manage your code with Git and GitHub'
        },
        'NodeJS': {
            title: 'Node.js Backend',
            videoUrl: 'https://www.youtube.com/embed/TlB_eWDSMt4',
            description: 'Build server-side applications'
        },
        'Express JS Basics': {
            title: 'Express.js Framework',
            videoUrl: 'https://www.youtube.com/embed/SccSCuHhOw0',
            description: 'Create web servers with Express'
        },
        'MongoDB': {
            title: 'MongoDB Database',
            videoUrl: 'https://www.youtube.com/embed/ExcRbA7fy_A',
            description: 'Work with NoSQL databases'
        },
        'Web Hosting': {
            title: 'Web Hosting & Deployment',
            videoUrl: 'https://www.youtube.com/embed/RVnARJswf1s',
            description: 'Deploy your applications to the web'
        },
        'ExpressJS (cont\'d)': {
            title: 'Advanced Express.js',
            videoUrl: 'https://www.youtube.com/embed/SccSCuHhOw0',
            description: 'Advanced Express.js concepts and patterns'
        }
    };

    const handleCourseClick = (courseName) => {
        setSelectedCourse(courseData[courseName]);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedCourse(null);
    };

    return(
        <div id="Lecture">
            <main>
            <Navbar></Navbar>
            <section>
                <div>
                <i className="fa-solid fa-bars"></i>
                <nav>
                    <aside>
                        <img src={User} alt="user Profile" />
                        <p>
                           <span>Hi, Ismail</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </p>
                    </aside>
                    <div>
                        <h4><i className="fa-solid fa-user"></i> Profile</h4>
                        <Link to="/">
                        <p><i className="fa-solid fa-right-from-bracket"></i>Logout</p>
                        </Link>
                    </div>
                </nav>
                </div>
                <p id="go"><i className="fa-solid fa-arrow-left"></i>Go Back</p>
                 <h4 id="lectures">Lectures</h4>
                 <nav>
                    <span id="span"></span>
                    <p>Hi, Welcome, Ismail!</p>
                 </nav>
                 <li>What would you like to do now?</li>

                 <div className="lecture-content">
                  <h4>Learning Path</h4>
                    <div className="courses">
                     <p onClick={() => handleCourseClick('Introduction')}>Introduction</p>
                     <p onClick={() => handleCourseClick('HTML')}>HTML</p>
                     <p onClick={() => handleCourseClick('CSS')}>CSS</p>
                     <p onClick={() => handleCourseClick('Javascript')}>Javascript</p>
                     <p onClick={() => handleCourseClick('React')}>React</p>
                     <p onClick={() => handleCourseClick('Git & Github')}>Git & Github</p>
                     <p onClick={() => handleCourseClick('NodeJS')}>NodeJS</p>
                     <p onClick={() => handleCourseClick('Express JS Basics')}>Express JS Basics</p>
                     <p onClick={() => handleCourseClick('MongoDB')}>MongoDB</p>
                     <p onClick={() => handleCourseClick('Web Hosting')}>Web Hosting</p>
                     <p onClick={() => handleCourseClick('ExpressJS (cont\'d)')}>ExpressJS (cont'd)</p>
                    </div>
                 </div>
     
            </section>
            </main>
            <footer>
                <p><span>.</span> Geegstack Academy</p>
            </footer>

            {/* Video Modal */}
            {showModal && selectedCourse && (
                <div className="video-modal-overlay" onClick={closeModal}>
                    <div className="video-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="video-modal-header">
                            <div className="video-modal-title-section">
                                <h3>{selectedCourse.title}</h3>
                                <p className="video-modal-description">{selectedCourse.description}</p>
                            </div>
                            <button className="video-modal-close" onClick={closeModal}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <div className="video-modal-container">
                            <iframe
                                src={selectedCourse.videoUrl}
                                title={selectedCourse.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        <div className="video-modal-footer">
                            <button className="video-modal-btn prev-btn">Previous Lesson</button>
                            <button className="video-modal-btn next-btn">Next Lesson</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Lecture