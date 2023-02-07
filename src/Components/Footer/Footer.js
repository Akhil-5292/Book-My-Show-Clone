import style from './Footer.module.css'
import { RiCustomerService2Line } from 'react-icons/ri';
import { GiTicket } from 'react-icons/gi';
import { ImNewspaper } from 'react-icons/im';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialInstagram } from 'react-icons/ti';
import { AiFillYoutube } from 'react-icons/ai';
import { ImPinterest2 } from 'react-icons/im';
import { GrLinkedinOption } from 'react-icons/gr';

export default function Footer(){
    return(
        <div className={style.wrapper}>
        <div className={style.icon}>
            <a href='https://support.bookmyshow.com/support/home?regionCode=NCR'><RiCustomerService2Line className={style.customer}/>24/7 CUSTOMER CARE</a>
            <a><GiTicket className={style.customer}/>RESEND BOOKING CONFIRMATION</a>
            <a><ImNewspaper className={style.customer}/>SUBSCRIBE TO THE NEWSLETTER</a>
        </div>
        <div className={style.line}>
        <div className={style.hr}></div>
            <p>book<span style={{color:'red'}}>my</span>Show</p>
        <div className={style.hr}></div>
        </div>
        <div className={style.link}>
            <a href='https://www.facebook.com/BookMyShowIN'><BsFacebook/></a>
            <a href='https://twitter.com/BookMyShow/'><AiFillTwitterCircle/></a>
            <a href='https://www.instagram.com/bookmyshowin/'><TiSocialInstagram/></a>
            <a href='https://www.youtube.com/user/BookMyShow/featured'><AiFillYoutube/></a>
            <a href='https://www.pinterest.com/bookmyshow/'><ImPinterest2/></a>
            <a href='https://www.linkedin.com/company/bookmyshow/'><GrLinkedinOption/></a>
        </div>
        <div className={style.copyright}>
        Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
            <div className={style.base}>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</div></div>
        </div>
    )
}