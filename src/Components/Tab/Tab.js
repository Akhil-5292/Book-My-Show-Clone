import style from './Tab.module.css'


export default function Tab(){

    const TabOption=["Movies","Stream","Events","Plays","Sports","Activities","Buzzz"]
    const TabOption2=["LiveYourShow","Corporates","Offers","Gift Cards"]
    return(
        <div className={style.wrapper}>
            <div className={style.left}>
                {TabOption.map((Tab)=>{
                    return(
                        <div onClick={()=>{alert('clicked')}}>{Tab}</div>
                    )
                })}
             
            </div>
            
            <div className={style.right}>
             {TabOption2.map((Tab)=>{
                return(
                    <div onClick={()=>{alert('clicked')}}>{Tab}</div>
                )
             })}
            </div>
        </div>
    )
}