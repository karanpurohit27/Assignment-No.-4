import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import LoginOption from './Components/LoginOption';
import StudentLogin from './Components/StudentLogin';
import TeacherLogin from './Components/TeacherLogin';
import {
 BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (
    <>
   <Header></Header>
    <Router>
      <Routes>
        <Route exact path='/' element={<><LoginOption/></>}></Route>
        <Route exact path='/stuLogin' element={<><StudentLogin/></>}></Route>
        <Route exact path='/teacherLogin' element={<><TeacherLogin/></>}></Route>
      </Routes>
    </Router>
    </>
   
  );
}

export default App;
