import { useEffect, useContext } from 'react'
import { UserContext } from "./context/UserContext"
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

import './App.css';
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import UserHome from './pages/home/userHome'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import MealDiaryPage from './pages/meal-diary-page/meal-diary-page.component'
import CookBookPage from "./pages/cook-book-page/cook-book-page.component";
import FindCalorieAmountPage from "./pages/find-calorie-amount-page/find-calorie-amount-page.component";
import FindRecipePage from "./pages/find-recipe-page/find-recipe-page.component";
import RecipePage from "./pages/recipe-page/recipe-page.component";
// import Profile from './pages/profile/Profile'


function App() {
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  const fetchUser = () => {
    if (localStorage.getItem('userId')) {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/verify`, {
        headers: {
          Authorization: localStorage.getItem('userId')
        }
      })
      .then((response) => {
        setUser(response.data.user)
      })
    }
  }
  useEffect(fetchUser, [setUser])
  
  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' exact element={<Home />}></Route> 
        <Route path='/userhome' exact element={<UserHome/>}></Route> 
        <Route path='/nutrition' element={user.id ? <MealDiaryPage/> : <Home />} />
        <Route path='/cookbook' element={user.id ? <CookBookPage/> : <Home />} />
        <Route path='/calories' element={user.id ? <FindCalorieAmountPage/> : <Home />} />
        <Route path='/find-recipe' element={user.id ? <FindRecipePage/> : <Home />} />
        <Route path='/recipe/:recipeName' element={user.id ? <RecipePage/> : <Home />} />
        <Route path='/signup' element={user.id ? <Home/> : <Signup />} />
        <Route path='/login' element={user.id ? <UserHome/> : <Login />} />
        {/* <Route path='/profile' element={user.id ? <Home/> : <Profile />} /> */}
      </Routes>
    </div>
      
  );
}
export default App;
