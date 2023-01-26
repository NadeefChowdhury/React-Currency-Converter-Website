import React, {useState}  from 'react';
import './header2.css';
import FontAwesome from 'react-fontawesome';
import SideNav from 'react-simple-sidenav'
const Header2=()=>{
    const [showNav, setShowNav] = useState();
    return(
        <div>
            <nav class="navbar navbar-expand">
                
                <div class="collapse navbar-collapse">
                <p id='bars'  onClick={()=>setShowNav(true)}> <FontAwesome name='bars'  style={{color:'white', fontSize:'2rem', cursor:'pointer'}}/></p>
                    <ul class="navbar-nav">
                        <li class="nav-item" id='navLogo'><a href="#" class="nav-link" style={{textDecoration:'none', color:'white',fontSize:'1.3rem'}}><img  src='/dp 1.svg'style={{height:'8vh'}} /> Elysiart</a></li>
                        <li class="nav-item" id='item'><a href="#" class="nav-link" style={{textDecoration:'none', color:'white',fontSize:'1.3rem'}}>Showcase</a></li>
                        <li class="nav-item" id='item'><a href="#" class="nav-link" style={{textDecoration:'none', color:'white',fontSize:'1.3rem'}}>TV</a></li>
                        <li class="nav-item" id='item'><a href="#" class="nav-link" style={{textDecoration:'none', color:'white',fontSize:'1.3rem'}}>Events</a></li>
                        <li class="nav-item" id='item'><a href="#" class="nav-link" style={{textDecoration:'none', color:'white',fontSize:'1.3rem'}}>Our Shops</a></li>
                        <li class="nav-item" id='item'><a href="#" class="nav-link" style={{textDecoration:'none', color:'yellow',fontSize:'1.3rem'}} id='sign'>Sign In/Sign Up</a></li>
                        <li class='nav item'></li>
                    </ul>
                    
                </div>
            </nav>
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
        


        </div>
    )
}
export default Header2;