import style from './Navbar.module.css'
import {IoIosSearch} from 'react-icons/io';
import {RxHamburgerMenu} from 'react-icons/rx';
import { useState } from 'react';
import Menubar from '../Menu/Menubar/Menubar';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../Atom/CustomButton';
import Login from '../Login/Login';



export default function Navbar(){

  const navigate=useNavigate();
  const [isOpen, setIsOpen]= useState(false);

  const handleclick=()=>{
    setIsOpen(!isOpen);
    
  }
    return(
        <>
        <nav className={style.main}>
          <div className={style.leftContainer}>
        <div onClick={()=>navigate('/')} className={style.logo}>
          book <span style={{color:'red'}}>my</span> show
      </div>
      <div className={style.menu}>
      <div className={style.search}>
        <span  className={style.icon}>
      <IoIosSearch/>
      </span>
      <input className={style.input} 
      placeholder='Search for Movies, Events, Plays, Sports and Activies'
      />
      </div>
      </div>
      </div>
      
      <div className={style.button}>
       <h3 onClick={()=>alert('clicked')}>Location</h3> 
    
      {/* <CustomButton
      btntext='Signin'
      style={style.btn}/> */}
      <Login/>

      {
      isOpen ? 
      <Menubar/> 
      : null
      }
      <RxHamburgerMenu className={style.hamburger} onClick={handleclick}/>
    
      </div>
      </nav>

       
      </>
    )
}