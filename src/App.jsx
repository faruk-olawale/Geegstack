import {BrowserRouter, Routes, Route} from  "react-router-dom"
import Login from './component/auth/Login';
import Signup from './component/auth/Signup';
import Dashboard from "./component/pages/Dashboard";
import Lecture from "./component/pages/Lecture";
import Quiz from "./component/pages/Quiz";
import Submission from "./component/pages/Submission";
import Leaderboard from "./component/pages/Leaderboard";
import Challenges from "./component/pages/Challenges";
import Project from "./component/pages/Project";



function App() {


  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Lecture' element={<Lecture />} />
        <Route path='/Quiz' element={<Quiz />} />
        <Route path='/Submission' element={<Submission />} />
        <Route path='/Leaderboard' element={<Leaderboard />} />
        <Route path='/Challenges' element={<Challenges />} />
         <Route path='/Project' element={<Project />} />
      </Routes>
    </BrowserRouter>

    
  )
}

export default App
