import React, { useState } from 'react'
import classes from './TerrainCard.module.css';
import { Icon } from '@iconify/react';



export const TerrainCard = ({setModalIsOpen,id,title,address,image,surface,type,available,description,review}) => {

    const [bannerIsOpen,setBannerIsOpen] = useState(false);
  return (
    <div className={classes.cardWrapper}>
        <div className={classes.card} /* onMouseEnter={()=>{setBannerIsOpen(true)}} onMouseLeave={()=>{setBannerIsOpen(false)}}*/>
            <img src={image}  alt=""  />
           { bannerIsOpen && 
                <div className={classes.banner}>
                    <Icon onClick={setModalIsOpen(true)} icon="clarity:eye-line" color="white" width="30px" height="30px" alt />
                    <Icon icon="iconoir:favourite-book" color="white" width="30px" height="30px"  />
                    <Icon icon="bxs:book-add" color="white" width="30px" height="30px"  />
                </div>
           }
        </div>
        <div className={classes.detail}>
            <h2>{title}</h2>
            <h4>{address}</h4>
            <span>Note : </span>
            {
                review.map((review) => {
                    if(review === 1){
                        return <Icon icon="ant-design:star-filled" color="#6BC4A6" />
                    } else if(review === 0) {
                        return <Icon icon="ant-design:star-outlined" color="white" />
                    } else if(review === 0.5) {
                        return <Icon icon="bi:star-half" color="#6BC4A6" />
                    }
                } )
            }
        </div>


    </div>
  )
}
