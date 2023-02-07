import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import style from './Content2.module.css';

const breakPoints = [
  { width: 10, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Content2() {
  return (
    <>
      <div className={style.outer}>
        <div className={style.heading}>
      <h2>The Best Of Live Events</h2>
      </div>
      <div className={style.App}>
        <Carousel breakPoints={breakPoints} className={style.wrapper}>
          <Item>
            <div className={style.main}>
                <img onClick={()=>{alert('clicked')}} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MzUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png" alt="img" className={style.img}/>
                {/* <p>Pathan</p>
                <p style={{color:'#666666'}}>Action/Thriller</p> */}
            </div>
          </Item>
          <Item>
            <div className={style.main}>
            <img onClick={()=>{alert('clicked')}} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/stay-fit-collection-202211140440.png" alt="img" className={style.img}/>
                {/* <p>Gandhi Godse Ek Yudh</p>
                <p style={{color:'#666666'}}>Drama/Historical/Political</p> */}
            </div>
          </Item>
          <Item>
            <div className={style.main}>
            <img onClick={()=>{alert('clicked')}} src="	https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png" alt="img" className={style.img}/>
                {/* <p>Avatar: The Way of Water</p>
                <p style={{color:'#666666'}}>Action/Adventure/Fantasy/Sci-Fi</p> */}
            </div>
          </Item>
          <Item>
            <div className={style.main}>
            <img onClick={()=>{alert('clicked')}} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png" alt="img" className={style.img}/>
                {/* <p>Push In Boots: The Last Wish</p>
                <p style={{color:'#666666'}}>Adventure/Animation/Comedy</p> */}
            </div>
          </Item>
          <Item>
            <div className={style.main}>
            <img onClick={()=>{alert('clicked')}} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NDArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202211140440.png" alt="img" className={style.img}/>
                {/* <p>BTS Yet To Come In Cinema</p>
                <p style={{color:'#666666'}}>Musical</p> */}
            </div>
          </Item>
          <Item>
            <div className={style.main}>
            <img onClick={()=>{alert('clicked')}} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png" alt="img" className={style.img}/>
                {/* <p>Alone (Malayalam)</p>
                <p style={{color:'#666666'}}>Mystery/Thriller</p> */}
            </div>
          </Item>
          <Item>
            <div className={style.main}>
            <img onClick={()=>{alert('clicked')}} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/upskill-collection-202211140440.png" alt="img" className={style.img}/>
                {/* <p>M3GAN</p>
                <p style={{color:'#666666'}}>Horror/Mystery/Thriller</p> */}
            </div>
          </Item>
          <Item>
            <div className={style.main}>
            <img onClick={()=>{alert('clicked')}} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/food-drinks-collection-202211140440.png" alt="img" className={style.img}/>
                {/* <p>Varisu (Hindi)</p>
                <p style={{color:'#666666'}}>Action/Drama</p> */}
            </div>
          </Item>
          
        </Carousel>
      </div>
      </div>
    </>
  );
}
