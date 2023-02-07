import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "../Content1/Item";
import style from './Premiere.module.css';
import { useNavigate } from "react-router-dom";
const breakPoints = [
  { width: 10, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Premiere() {

  const navigate=useNavigate();
  return (
    <>
      <div className={style.outer}>
        <div className={style.Premiere_logo}>
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="img" className={style.logo}/>
        </div>
        <div className={style.heading}>
      <h2>Premieres</h2>
      <div>Brand new releases every Friday</div>
      </div>
      <div className={style.App}>
        <Carousel breakPoints={breakPoints} className={style.wrapper}>
          <Item>
            <div className={style.main}>
                <img onClick={()=> navigate('/Pathaan')} src="https://filmfare.wwmindia.com/content/2022/dec/pathaan21669878743.jpg" alt="img" className={style.img}/>
                <p>Pathan</p>
                <p style={{color:'#ffffff'}}>Action/Thriller</p>
            </div>
          </Item>
          <Item>
            <div className={style.main}>
            <img onClick={()=> navigate('/Pathaan')} src="https://static.toiimg.com/thumb/imgsize-23456,msid-96541939,width-600,resizemode-4/96541939.jpg" alt="img" className={style.img}/>
                <p>Gandhi Godse Ek Yudh</p>
                <p style={{color:'#ffffff'}}>Drama/Historical/Political</p>
            </div>
          </Item>
          <Item>
            <div className={style.main}>
            <img onClick={()=> navigate('/Pathaan')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfiZhskO1PyzmPLxPhqXbk_pxW5se-tzMEvg&usqp=CAU" alt="img" className={style.img}/>
                <p>Avatar: The Way of Water</p>
                <p style={{color:'#ffffff'}}>Action/Adventure/Fantasy/Sci-Fi</p>
            </div>
          </Item>
          <Item>
            <div className={style.main}>
            <img onClick={()=> navigate('/Pathaan')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKyE05NLQpIJM9D2IGpbD1aDioWDKOOjG0Ma5e5gdGLRSiTJk7Av1-pbd9ppqoqZ2aQ8w&usqp=CAU" alt="img" className={style.img}/>
                <p>Push In Boots: The Last Wish</p>
                <p style={{color:'#ffffff'}}>Adventure/Animation/Comedy</p>
            </div>
          </Item>
          <Item>
            <div className={style.main}>
            <img onClick={()=> navigate('/Pathaan')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8l9mNAAcQBiwgmvBshPu9YjbuOfnKkMGoCIoeLX3OFsyqXm9MdnP29GF7OSAAyPLH9oc&usqp=CAU" alt="img" className={style.img}/>
                <p>BTS Yet To Come In Cinema</p>
                <p style={{color:'#ffffff'}}>Musical</p>
            </div>
          </Item>
          <Item>
            <div className={style.main}>
            <img onClick={()=> navigate('/Pathaan')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAY7mL7SroLcfh4ABNu2ICWSG4wqpRDFVLzA&usqp=CAU" alt="img" className={style.img}/>
                <p>Alone (Malayalam)</p>
                <p style={{color:'#ffffff'}}>Mystery/Thriller</p>
            </div>
          </Item>
          <Item>
            <div className={style.main}>
            <img onClick={()=> navigate('/Pathaan')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ17CL3Bd5hf0rEg2mHMkHBWcAQkl96x9kdRHIReZpW0axgSzpZ6vLgAFOII6PNKAbCTs&usqp=CAU" alt="img" className={style.img}/>
                <p>M3GAN</p>
                <p style={{color:'#ffffff'}}>Horror/Mystery/Thriller</p>
            </div>
          </Item>
          <Item>
            <div className={style.main}>
            <img onClick={()=> navigate('/Pathaan')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSscxtGJq2OGDu5V7_vo73HokboC7d0z6-GUk7b7gRdSu1QGrO9yp5oESPdf4A9nb4UoF0&usqp=CAU" alt="img" className={style.img}/>
                <p>Varisu (Hindi)</p>
                <p style={{color:'#ffffff'}}>Action/Drama</p>
            </div>
          </Item>
        </Carousel>
      </div>
      </div>
    </>
  );
}
