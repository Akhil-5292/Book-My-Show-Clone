import Button from '../Atom/CustomButton'
import Navbar from '../Navbar/Navbar'
import Tab from '../Tab/Tab'
import style from './Pathan.module.css'

export default function Pathan(){
    return(
        <>
        <Navbar/>
        <Tab/>
        <div className={style.container}>
        <div className={style.wrapper}> 
        <div className={style.img}>
            <div className={style.cinema}>
            <img className={style.img1} src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pathaan-et00323848-1674372556.jpg' alt='pathan'/>
            In cinemas</div>
        <div className={style.title}>
                   <h1>Pathaan</h1>
                   <p>8.5/10</p>
                   <p> 263.2k votes</p>
                   <div className={style.rate}>
                    <h4>Add your rating & review <br/>
                    <span style={{color:'#CCCCCC', fontSize:'16px', marginLeft:'-80px'}}>Your rating matter</span></h4>
                    <div><Button
                    btntext= 'Rate Now'
                    style={style.btn}/></div>
                   </div>
                  <div className={style.link}>
                  <div className={style.anchor}>
                    <a>2D,</a>
                    <a>IMAX 2D,</a>
                    <a>ICE,</a>
                    <a>4DX</a>
                   </div>
                   <div className={style.anchor}>
                    <a>Hindi,</a>
                    <a>Tamil,</a>
                    <a>Telugu</a>
                   </div>
                  </div>
                  <div className={style.duration}>2h 26m . Action, Thriller . UA . 25 Jan,2023</div>
                  <Button
                  onClick={()=>alert('clicked')}
                  btntext='Book tickets'
                  style={style.btn2}/>
        </div>
        </div>
        </div>            
        </div>
        </>
    )
}