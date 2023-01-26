import './header.css';
import React, {useState} from 'react';
import FontAwesome from 'react-fontawesome';
import SideNav from 'react-simple-sidenav';
const Header=()=> {
    const [showNav, setShowNav] = useState();
   
  return (
    <div className="App" >
      <div className='Nav'>
      <header id='header' classname='container-fluid' >
        <div id='headerOpt'>
          <div><img  src='/dp 1.svg' style={{height:'8.5vh',marginTop:'3px'}}/></div>
          <div style={{fontSize:'1.3rem', marginLeft:'2vw',}} id='headerItem'><p ><a href='' style={{textDecoration:'none', color:'white'}}>Elysiart</a></p></div>
          <div style={{fontSize:'1.3rem', color:'white', marginLeft:'6vw',}} id='headerItem'><p ><a href='' style={{textDecoration:'none', color:'white'}}>Showcase</a></p></div>
          <div style={{fontSize:'1.3rem', color:'white', marginLeft:'5vw',}} id='headerItem'><p ><a href='' style={{textDecoration:'none', color:'white'}}>TV</a></p></div>
          <div style={{fontSize:'1.3rem', color:'white', marginLeft:'5vw',}} id='headerItem'><p ><a href='' style={{textDecoration:'none', color:'white'}}>Events</a></p></div>
          <div style={{fontSize:'1.3rem', color:'white', marginLeft:'5vw',}} id='headerItem'><p ><a href='' style={{textDecoration:'none', color:'white'}}>Our Shops</a></p></div>
          <div style={{fontSize:'1.3rem', color:'white', marginLeft:'6vw',}} id='headerItem'><p ><a href='' style={{textDecoration:'none', color:'#FFC937'}}>Sign In/Sign Up</a></p></div>
          
        </div>
        
       <p className='bars' style={{textAlign:'right'}}> <FontAwesome name='bars'  style={{color:'white', fontSize:'2rem',marginRight:'2vw', cursor:'pointer',textAlign:'right',}} onClick={()=>setShowNav(true)} /></p>
       <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        navStyle={{background:'#410F57', maxWidth:'300px'}}
      >
          <div style={{marginTop:'8vh'}}><p ><a href='' style={{textDecoration:'none', color:'white',marginLeft:'60px', fontSize:'1.6rem'}}>Elysiart</a></p></div>
          <div><p ><a href='' style={{textDecoration:'none', color:'white',marginLeft:'60px', fontSize:'1.6rem', }}>Showcase</a></p></div>
          <div><p ><a href='' style={{textDecoration:'none', color:'white',marginLeft:'60px', fontSize:'1.6rem'}}>TV</a></p></div>
          <div><p ><a href='' style={{textDecoration:'none', color:'white',marginLeft:'60px', fontSize:'1.6rem'}}>Events</a></p></div>
          <div><p ><a href='' style={{textDecoration:'none', color:'white',marginLeft:'60px', fontSize:'1.6rem'}}>Our shops</a></p></div>
          <div><p ><a href='' style={{textDecoration:'none', color:'yellow',marginLeft:'60px', fontSize:'1.6rem'}}>Sign In/Sign up</a></p></div>
      </SideNav>    
      </header>
      </div>
    </div>
  );
}

export default Header;
