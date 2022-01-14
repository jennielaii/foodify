import React, { useState, useContext} from 'react'
import { UserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Navlinks from '../nav-links/nav-links.component'


const Navbar = (props) => {
    const { userState } = useContext(UserContext)
    const [ user, setUser ] = userState
    
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            { props.user.id ? 
            <>
            <Navlinks/>
            {/* <Link to='/'>
            <Button href='/' color="inherit">Home</Button>
            </Link>
            {' | '}
            <Link to='/nutrition'>
            <Button color="inherit"> Meal Diary</Button>
            </Link>
            {' | '}
            <Link to='/cookbook'>
            <Button color="inherit"> Cook Book </Button>
            </Link>
            {' | '}
            <Link to='/find-recipe'>
            <Button  color="inherit"> Healthy Recipes </Button>
            </Link>
            {' | '}
            <Link to='/calories'>
            <Button href="/calories" color="inherit"> Calorie Counter </Button>  
            </Link> */}
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            
            <span onClick={() => {
            localStorage.removeItem('userId')
            props.setUser({})
          }}>Logout</span>
            </>
            :
            <>
            <Button href="/" color="inherit"> Home </Button>
            <Button href="/signup" color="inherit"> Sign Up </Button>
            <Button href="/login" color="inherit"> Login </Button>
            </>
            }
            
          </Toolbar>
        </AppBar>
      </Box>
    )
}
export default Navbar