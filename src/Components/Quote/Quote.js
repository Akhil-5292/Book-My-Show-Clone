import style from './Quote.module.css'

export default function Quote(){
    return(
        <div className={style.container}>
            <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png' alt='quote' className={style.img}/>
        </div>
    )
}