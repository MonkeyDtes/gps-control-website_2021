import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Navigation } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "./swiper.css"
import iconoApps1 from "../../assets/iconoApps1.svg"
import iconoApps2 from "../../assets/iconoApps2.svg"
import iconoApps3 from "../../assets/iconoApps3.svg"
import iconoApps4 from "../../assets/iconoApps4.svg"
import iconoApps5 from "../../assets/iconoApps5.svg"
import iconoApps6 from "../../assets/iconoApps6.svg"

const SwiperApps = (e) => {
    SwiperCore.use([Keyboard, Mousewheel]);
    const [button1, setButton1] = useState(e.button1)
    const [button2, setButton2] = useState(e.button2)
    const [button3, setButton3] = useState(e.button3)
    const [button4, setButton4] = useState(e.button4)
    const [button5, setButton5] = useState(e.button5)
    const [button6, setButton6] = useState(e.button6)

   
  console.log(button1, "alex carechimba")
  console.log(e.button1, "mateo el crack")
  useEffect(() => {
      setButton1(e.button1)
      setButton2(e.button2)
      setButton3(e.button3)
      setButton4(e.button4)
      setButton5(e.button5)
      setButton6(e.button6)

    
  }, [e.button1,e.button2,e.button3,e.button4,e.button5,e.button6]);

    
  return (
    <div
    style={{
        overflow: "hidden",
        alignItems: "center",
      }}>
        <Swiper
          centeredSlides={true}
          navigation={true}
          modules={[ Pagination, Navigation]}
          initialSlide={0}
          mousewheel={true}
          className="swiper_apps">
            {
              button1 ? (
                <SwiperSlide className="swiper_apps_slide_clicked"> 
                    <h1>FLEETRUN</h1>  
                    <img alt="fleetrun" src={iconoApps1}></img>
                    <div className="swiper_apps_buttons_clicked">
                      <button>VIDEO DIDÁCTICO</button>
                      <button>INICIAR SESIÓN </button>
                    </div>
                </SwiperSlide>     
              ):(
                <SwiperSlide className="swiper_apps_slide"> 
                    <h1>FLEETRUN</h1>  
                    <img alt="fleetrun" src={iconoApps1}></img>
                    <div className="swiper_apps_buttons">
                      <button>VIDEO DIDÁCTICO</button>
                      <button>INICIAR SESIÓN </button>
                    </div>
                </SwiperSlide>     
              )
            }
            
            {
              button2 ? (
                <SwiperSlide className="swiper_apps_slide_clicked"> 
                    <h1>FLEETRUN</h1>  
                    <img alt="fleetrun" src={iconoApps2}></img>
                    <div className="swiper_apps_buttons_clicked">
                      <button>VIDEO DIDÁCTICO</button>
                      <button>INICIAR SESIÓN </button>
                    </div>
                </SwiperSlide>     
              ):(
                <SwiperSlide className="swiper_apps_slide"> 
                    <h1>FLEETRUN</h1>  
                    <img alt="fleetrun" src={iconoApps2}></img>
                    <div className="swiper_apps_buttons">
                      <button>VIDEO DIDÁCTICO</button>
                      <button>INICIAR SESIÓN </button>
                    </div>
                </SwiperSlide>     
              )
            }
            {
              button3 ? (
                <SwiperSlide className="swiper_apps_slide_clicked"> 
                    <h1>FLEETRUN</h1>  
                    <img alt="fleetrun" src={iconoApps3}></img>
                    <div className="swiper_apps_buttons_clicked">
                      <button>VIDEO DIDÁCTICO</button>
                      <button>INICIAR SESIÓN </button>
                    </div>
                </SwiperSlide>     
              ):(
                <SwiperSlide className="swiper_apps_slide"> 
                    <h1>FLEETRUN</h1>  
                    <img alt="fleetrun" src={iconoApps3}></img>
                    <div className="swiper_apps_buttons">
                      <button>VIDEO DIDÁCTICO</button>
                      <button>INICIAR SESIÓN </button>
                    </div>
                </SwiperSlide>     
              )
            }
            {
              button4 ? (
                <SwiperSlide className="swiper_apps_slide_clicked"> 
                    <h1>FLEETRUN</h1>  
                    <img alt="fleetrun" src={iconoApps4}></img>
                    <div className="swiper_apps_buttons_clicked">
                      <button>VIDEO DIDÁCTICO</button>
                      <button>INICIAR SESIÓN </button>
                    </div>
                </SwiperSlide>     
              ):(
                <SwiperSlide className="swiper_apps_slide"> 
                    <h1>FLEETRUN</h1>  
                    <img alt="fleetrun" src={iconoApps4}></img>
                    <div className="swiper_apps_buttons">
                      <button>VIDEO DIDÁCTICO</button>
                      <button>INICIAR SESIÓN </button>
                    </div>
                </SwiperSlide>     
              )
            }
            {
              button5 ? (
                <SwiperSlide className="swiper_apps_slide_clicked"> 
                    <h1>FLEETRUN</h1>  
                    <img alt="fleetrun" src={iconoApps5}></img>
                    <div className="swiper_apps_buttons_clicked">
                      <button>VIDEO DIDÁCTICO</button>
                      <button>INICIAR SESIÓN </button>
                    </div>
                </SwiperSlide>     
              ):(
                <SwiperSlide className="swiper_apps_slide"> 
                    <h1>FLEETRUN</h1>  
                    <img alt="fleetrun" src={iconoApps5}></img>
                    <div className="swiper_apps_buttons">
                      <button>VIDEO DIDÁCTICO</button>
                      <button>INICIAR SESIÓN </button>
                    </div>
                </SwiperSlide>     
              )
            }
            {
              button6 ? (
                <SwiperSlide className="swiper_apps_slide_clicked"> 
                    <h1>FLEETRUN</h1>  
                    <img alt="fleetrun" src={iconoApps6}></img>
                    <div className="swiper_apps_buttons_clicked">
                      <button>VIDEO DIDÁCTICO</button>
                      <button>INICIAR SESIÓN </button>
                    </div>
                </SwiperSlide>     
              ):(
                <SwiperSlide className="swiper_apps_slide"> 
                    <h1>FLEETRUN</h1>  
                    <img alt="fleetrun" src={iconoApps6}></img>
                    <div className="swiper_apps_buttons">
                      <button>VIDEO DIDÁCTICO</button>
                      <button>INICIAR SESIÓN </button>
                    </div>
                </SwiperSlide>     
              )
            }                   
        </Swiper>
    </div>
  );
};

export default SwiperApps;