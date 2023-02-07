import Content1 from '../Content1/Content1';
import Quote from '../Quote/Quote';
import Content2 from '../Content2/Content2';
import Navbar from '../Navbar/Navbar';
import style from './Home.module.css'
import Tab from '../Tab/Tab';
import Premiere from '../Premiere/Premiere';
import Footer from '../Footer/Footer';
import Content3 from '../Content3/Content3';


export default function Home(){
    return(
        <div>
            <Navbar/>
            <Tab/>
        <div className={style.Container}>
       <div>
        <Content1/>
       </div>

       <Quote/>

       <div className={style.Content2}>
       <Content2/>
       </div>
       </div>
       <div className={style.Premiere}>
       <Premiere/>
       </div>
       <div>
        <Content3/>
       </div>
       <Footer/>
       </div>
    )
}