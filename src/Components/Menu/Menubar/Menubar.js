import CustomButton from '../../Atom/CustomButton'
import MenuItems from '../MenuItems/MenuItems'
import style from './Menubar.module.css'

export default function Menubar(){
    return(
        <div className={style.wrapper}>
            <nav className={style.nav}>
                <div className={style.main}>
                    <p>Hey!
                      </p> 
                </div>
                </nav>
                <div className={style.tab}>
                    {/* <div className={style.img}> */}
                    <img className={style.img} src='https://in.bmscdn.com/webin/movies/superstar/rewards_login.png' alt='img'/>
                    {/* </div> */}
                    <div className={style.middle}>
                     Unlock special offer & great benefits
                    </div>
                    <div className={style.Btn}>
                    <CustomButton
                    style={style.Btn}
                    btntext="Login / Register"/>
                    </div>
                   </div>
                   <div className={style.menu}>
                        <MenuItems/>
                    </div>
            
        </div>
    )
}