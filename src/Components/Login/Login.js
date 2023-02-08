import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import style from './Login.module.css'
import CustomButton from "../Atom/CustomButton";
import { SiApple } from 'react-icons/si';
import Signup from "../Register/Signup";
  
export default function Login() {
  const [open, setOpen] = React.useState(false);
  const [signup, setSignup] = useState(false)
 
  
  const handleSignup=()=>{
    setSignup(true)
  }
  
  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };
  
  return (
    <div className={style.wrapper} stlye={{}}>
      <Button
              onClick={handleClickToOpen}>
        Signin
      </Button>
     
      <Dialog open={open} onClose={handleToClose}>
        <div className={style.nav}>
          <div className={style.title}>{"Get Started"} 
         
        </div>
        <CustomButton
        btntext='X'
        onClick={handleToClose}
        style={style.close}
        />
        </div>

    
        
            <div className={style.container}>
            <CustomButton 
            icon = {<img src="https://in.bmscdn.com/webin/common/icons/googlelogo.svg" alt='img' className={style.google}/>}
            btntext='Continue with Google'
            onClick={()=>alert('clicked')}
            style={style.btn}/>

             <CustomButton 
            icon = {<img src="https://in.bmscdn.com/webin/common/icons/email.svg" alt='img' className={style.google}/>}
            btntext='Continue with Email'
            onClick={()=>alert('clicked')}
            style={style.btn}/>

             <CustomButton
             icon = {<SiApple className={style.apple}/>} 
            btntext='Continue with Apple'
            onClick={()=>alert('clicked')}
            style={style.btn}/>
            </div>
            <div className={style.section}>OR</div>
            
            <div className={style.input_div}>
            <img src="https://in.bmscdn.com/webin/common/icons/indianflag.svg" alt="India"/>
            <p style={{fontSize:'14px', color:'#777777'}}>+91</p> 
            <input className={style.input}
              placeholder='Continue with mobile number'/>
            </div>

            <div className={style.signup}>Already have an account? <p onClick={handleSignup}>signup</p> {signup ? <Signup/> : ''}</div>       
            <div className={style.bottom}>I agree to the&nbsp;
            <a href="/terms-and-conditions" target="_blank" className={style.link}>Terms &amp; Conditions</a>
            &nbsp;&&nbsp;
            <a href="/privacy" target="_blank"  className={style.link}>Privacy Policy</a></div>        
        
      </Dialog>
    </div>
  );
}