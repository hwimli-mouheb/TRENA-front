import React, { useState } from 'react'
import classes from './TerrainsSlider.module.css';
import { Line } from '../../UI/line/Line';
import terrains from '../../common/data/Terrains.json';
import { TerrainCard } from '../terrain/TerrainCard';
import SwiperCore, { EffectCoverflow, Pagination , Autoplay} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Swiper.css";
import img1 from '../../assets/terrains/1.jpg'
import { Button } from '../../UI/button/Button';
import Popup from '../../UI/popup/Popup';
import { useNavigate } from 'react-router-dom';


export const TerrainsSlider = () => {

    SwiperCore.use([EffectCoverflow, Pagination,Autoplay])

    const [modalIsOpen,setModalIsOpen] = useState(false);
    const navigate = useNavigate();
    
  return (
    <div className={classes.terrainWrapper}>
         <div className={classes.title}>
            <Line color="#6BC4A6" />
            <h2>Terrains Sportifs</h2>
        </div>
        <div className={classes.terrainSlider} style={{backgroundImage:`url(${img1})`}}>
            <div className={classes.container}>
                <div className={classes.btn}>
                    <Button content="Voir Plus" color="#6BC4A6" onClick={() => navigate('/terrains')} />
                </div>
                <div >
                <Swiper
                    autoplay
                    loop={true}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 6,
                    slideShadows: false,
                    }}
                    className="mySwiper"
                  
                   
                >
        
     
  
                {terrains.map((val,key) => {
                    return <div >
                        <SwiperSlide>
                            <TerrainCard setModalIsOpen={setModalIsOpen} id={val.id} title={val.title} description={val.description} address={val.address} surface={val.surface} image={process.env.PUBLIC_URL + `/terrains/terrain${val.id}.jpg`} review={val.review}  />
                        </SwiperSlide>
                        
                    </div> 

                } )}
                 </Swiper>
                </div>
            </div>
           
            

        </div>
      

    </div>
  )
}
