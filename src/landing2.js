import React from 'react';
import Header2 from './header2';
import './landing2.css';
import Slider from 'react-slick';
import Footer from './footer';

const Landing2=()=>{
    const NextArrow=(props)=>{
        const { className, style, onClick } = props;
        return(
          <img src='/Vector.svg' className={className} style={{ height:'10vh'}} onClick={onClick}/>
        )
      }
      const PrevArrow=(props)=>{
        return null;
      }
        var settings = {
            
            infinite: true,
            adaptiveHeight:true,
            
            
            
            arrows:true,
            speed: 700,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            nextArrow:<NextArrow/>,
            prevArrow:<PrevArrow/>,
            responsive: [
              {
                breakpoint: 1930,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  centerMode:true,
                  centerPadding:'5vw'
                }
              },
              {
                breakpoint: 1700,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  centerMode:true,
                  centerPadding:'9vw'
                }
              },
              {
                breakpoint: 1500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  centerMode:true,
                  centerPadding:'9vw'
                }
              },
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  centerMode:true,
                  centerPadding:'5vw'
                }
              },
             
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2,
                  centerMode:true,
                  centerPadding:'1vw'
                }
              },
              {
                breakpoint: 680,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2,
                  
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode:true,
                  centerPadding:'3vw'
                }
              }
            ]
          };
    return(
        <div>
            <Header2  />
            <div className='elysiart'>
                    <div className='elysText'>
                        <h3 style={{color:'#FFC973',marginBottom:'6vh',textAlign:'center'}}>WHAT IS ELYSIART?</h3>
                        <p style={{color:'white',fontSize:'1.5rem', textAlign:'center', marginBottom:'8vh'}}>Elysian-Creators Nirvana leads and advances the network of organizations and individuals who cultivate, promote and sustain and support the arts and creative contents in Bangladesh</p>
                        <p style={{textAlign:'center'}}><button className='btn btn-lg' style={{color:'black', background:'yellow',}}>Join the community</button></p>
                    </div>
                        
                    <div>
                        <div style={{textAlign:'center'}}><img src='/Collab-amico 1.svg' style={{marginTop:'4vh', }} /></div>
                    </div>
            </div>



            <div className='mission'>
                <div style={{textAlign:'center'}}>
                    <h3 style={{color:'#FFC973',marginBottom:'6vh',}}>Our Mission</h3>
                    <img src='/Team goals-bro 1.svg' />
                </div>
                <div className='missionText'>
                    <p style={{color:'white',fontSize:'1.4rem', marginBottom:'5vh',}}>Our mission is to build recognition and support for the extraordinary and dynamic value of all kinds of arts and to lead, serve and advance the diverse network of organizations and individuals who cultivate the art in Bangladesh.</p>
                    <p style={{color:'white',fontSize:'1.4rem',}}>Connecting your best ideas and leaders from the arts, contests and communities, together we can work to ensure that every Bangladeshi has access to the transformative power of the arts.</p>
                </div>
            </div>

            <div className='slider' style={{marginBottom:'5vh', marginTop:'5vh'}}>
                <h3 style={{color:'#FFC973',marginBottom:'6vh',}}>ELYSIART TV</h3>
                <div className='slidesImg'>
                <Slider {...settings}  >
                <div>
                    <img  src='/Group 40.svg' className='sliderimg'/>
                </div>
                <div>
                    <img  src='/Group 40.svg' className='sliderimg'/>
                </div>
                <div>
                    <img  src='/Group 40.svg' className='sliderimg'/>
                </div>

                <div>
                    <img  src='/Group 40.svg' className='sliderimg' />
                </div>
                <div>
                    <img  src='/Group 40.svg'className='sliderimg' />
                </div>
            </Slider>
            </div>
            </div>

            <div className='slider' style={{marginBottom:'5vh', marginTop:'5vh'}}>
                <h3 style={{color:'#FFC973',marginBottom:'6vh',}}>SHOWCASE</h3>
                <div className='slidesImg'>
                <Slider {...settings}  >
                <div>
                    <img  src='/Group 40.svg' className='sliderimg'/>
                </div>
                <div>
                    <img  src='/Group 40.svg' className='sliderimg'/>
                </div>
                <div>
                    <img  src='/Group 40.svg' className='sliderimg'/>
                </div>

                <div>
                    <img  src='/Group 40.svg' className='sliderimg' />
                </div>
                <div>
                    <img  src='/Group 40.svg'className='sliderimg' />
                </div>
            </Slider>
            </div>
            </div>


            <div className='heroes' style={{marginTop:'5vh'}}>
            <h3 style={{color:'#FFC973',marginBottom:'6vh',}}>Our heroes</h3>
            <div className='heroesImg'>
              <div><img src='/Group 6.svg' className='img' /></div>
              <div><img src='/Group 6.svg'  className='img' /></div>
              <div><img src='/Group 6.svg'  className='img' /></div>
            </div>
            </div>
            <div className='bottom' style={{}}>
              
              <div style={{marginTop:'15vh'}}><p><button className='btn btn-primary' style={{color:'black', background:'yellow', width:'25vw', fontWeight:'600'}}>SEE ALL</button></p></div>
              <div style={{ textAlign:'center', marginTop:'4vh'}}><img  src='/Group 59.svg' style={{width:'70vw', height:'50vh',}}  /></div>
            </div>
            <Footer/>
        </div>
    )
}
export default Landing2