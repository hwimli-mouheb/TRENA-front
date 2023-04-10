import React from 'react'
import classes from './Coach.module.css';
import { Line } from '../../UI/line/Line';
import coachs from '../../common/data/Coachs.json'

export const Coach = () => {
  const animationDelay = (id) => {
   
      return id-2
    

  }
  return (
    <div className={classes.coachSection}>
        <div className={classes.title}>
            <Line color="#6BC4A6" />
            <h2>Coachs Personnels</h2>
        </div>
        <div className={classes.coachWrapper}>
          <div className={classes.wrapper}>
            <div className={classes.outer}>
                  {/* <div className={classes.card} style={{animationDelay:`-3s`} }>
                      <div className={classes.content}>
                        <div className={classes.img}>
                            <img src={process.env.PUBLIC_URL + `/coachs/coach1.png`} alt="" />
                        </div>
                        <div className={classes.details}>
                          
                            <span className={classes.name}>coach1</span>
                            <span className={classes.name}>coach1</span>
                            <p>coach football</p>
                        </div>
                      </div>
                    </div>
                    <div className={classes.card} style={{animationDelay:`0s`} }>
                      <div className={classes.content}>
                        <div className={classes.img}>
                            <img src={process.env.PUBLIC_URL + `/coachs/coach2.png`} alt="" />
                        </div>
                        <div className={classes.details}>
                          
                            <span className={classes.name}>coach2</span>
                            <span className={classes.name}>coach2</span>
                            <p>coach football</p>
                        </div>
                      </div>
                    </div>
                    <div className={classes.card} style={{animationDelay:`3s`} }>
                      <div className={classes.content}>
                        <div className={classes.img}>
                            <img src={process.env.PUBLIC_URL + `/coachs/coach3.png`} alt="" />
                        </div>
                        <div className={classes.details}>
                          
                            <span className={classes.name}>coach3</span>
                            <span className={classes.name}>coach3</span>
                            <p>coach football</p>
                        </div>
                      </div>
                    </div>
                    <div className={classes.card} style={{animationDelay:`6s`} }>
                      <div className={classes.content}>
                        <div className={classes.img}>
                            <img src={process.env.PUBLIC_URL + `/coachs/coach4.png`} alt="" />
                        </div>
                        <div className={classes.details}>
                          
                            <span className={classes.name}>coach4</span>
                            <span className={classes.name}>coach4</span>
                            <p>coach football</p>
                        </div>
                      </div>
                    </div>
            
                    <div className={classes.card} style={{animationDelay:`9s`} }>
                      <div className={classes.content}>
                        <div className={classes.img}>
                            <img src={process.env.PUBLIC_URL + `/coachs/coach5.png`} alt="" />
                        </div>
                        <div className={classes.details}>
                          
                            <span className={classes.name}>coach5</span>
                            <span className={classes.name}>coach5</span>
                            <p>coach football</p>
                        </div>
                      </div>
                    </div>*/}
                    
                    
                    
                    
                    
                {
                  coachs[0].map((coach) => (
                    
                    
                    <div key={coach.id} className={classes.card} style={{animationDelay:`calc(3s*${animationDelay(coach.id)})`}}>
                
                      <div className={classes.content}>
                        <div className={classes.img}>
                            <img src={process.env.PUBLIC_URL + `/coachs/coach${coach.id}.png`} alt="" />
                        </div>
                        <div className={classes.details}>
                          
                            <span className={classes.name}>{coach.firstname}</span>
                            <span className={classes.name}>{coach.lastname}</span>
                            <p>{coach.profession}</p>
                        </div>
                      </div>
                    </div>
                  ))
                   }
            </div>
          </div>
          <div className={classes.intro}>
            <h2 className={classes.title}>Coach Coach</h2>
            <h4 className={classes.desc}>Lorem ipsum, dolor sit amet consectetur psum, dolor sit amet consectetur ad psum, dolor sit amet consectetur ad psum, dolor sit amet consectetur ad adipisicing elit. Fugit, fuga.</h4>
          </div>
        </div>
    </div>
  )
}
