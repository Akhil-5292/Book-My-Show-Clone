import { CiBellOn } from 'react-icons/ci';
import {HiOutlineShoppingBag } from 'react-icons/hi';
import {CiMonitor } from 'react-icons/ci';
import {AiOutlineCreditCard } from 'react-icons/ai';
import {BsChatDots } from 'react-icons/bs';
import {AiOutlineSetting } from 'react-icons/ai';
import {CiGift } from 'react-icons/ci';
import {HiOutlineTicket } from 'react-icons/hi';
import {BiChevronRight } from 'react-icons/bi';
import style from './MenuItems.module.css'


export default function MenuItems(){

    const MenuItems=[
        {icon:<CiBellOn/>, text:'Notification', arrow:<BiChevronRight/>},
        {icon:<HiOutlineShoppingBag/>, text:'Orders', arrow:<BiChevronRight/>},
        {icon:<CiMonitor/>, text:'Stream Library', arrow:<BiChevronRight/>},
        {icon:<AiOutlineCreditCard/>, text:'Play Credit Card', arrow:<BiChevronRight/>},
        {icon:<BsChatDots/>, text:'Help & Support', arrow:<BiChevronRight/>},
        {icon:<AiOutlineSetting/>, text:'Accounts & Settings', arrow:<BiChevronRight/>},
        {icon:<CiGift/>, text:'Rewards', arrow:<BiChevronRight/>},
        {icon:<HiOutlineTicket/>, text:'BookASmile', arrow:<BiChevronRight/>}
    ]
    return(
        <div className={style.wrapper}>
        {
            MenuItems.map((menu)=>{
                return(
                    <div className={style.menu}>
                <div className={style.div1}>
                <div className={style.icon}>{menu.icon}</div>
                <div>{menu.text}</div>
                </div>
                <div>{menu.arrow}</div>

                </div>
            )})
        }
        </div>
    )
}