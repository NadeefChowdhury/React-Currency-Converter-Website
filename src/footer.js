import React from 'react';
import './footer.css';
const Footer=()=>{
    return(
    <div className='footer'>
        <div className='foot'>
            <div className='social'>
                <p><a href='' style={{textDecoration:'none', color:'#FFC973'}}>SOCIAL</a></p>
                <div className='logo'>
                <img  src='/footer_fb.svg' style={{margin:'1vmax'}}  />
                <img src='/footer_ig.svg' style={{margin:'1vmax'}}   />
                <img src='/footer_yt.svg' style={{margin:'1vmax'}}   />
                </div>
            </div>



            <div className='about' style={{paddingBottom:'5vh'}}>
                <p><a href='' style={{textDecoration:'none', color:'#FFC973'}}>About Us</a></p>
                <p><a href='' style={{textDecoration:'none', color:'#FFC973'}}>Terms And Conditions</a></p>
                <p><a href='' style={{textDecoration:'none', color:'#FFC973'}}>Board Of Directors</a></p>
                <p><a href='' style={{textDecoration:'none', color:'#FFC973'}}>Recruitment</a></p>
                <p style={{color:'#FFC973'}}>©Copyright 2021 Elysiart</p>
            </div>



            <div className='contact' >
                <p><a href='' style={{textDecoration:'none', color:'#FFC973'}}>CONTACT US</a></p>
                <div className='logo'>
                <img  src='/phone-call 1.svg' style={{margin:'1vmax', marginRight:'4vw'}}  />
                <img src='/email 1.svg' style={{margin:'1vmax'}}   />
                
                </div>
            </div>


        </div>
    </div>
    )
}
export default Footer;