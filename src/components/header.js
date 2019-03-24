import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"
import "./header.css"
const Header = ({ siteTitle }) => (
  <header
  className="header"
    style={{
      background: `#ffffff`,
     
      margin:0,
      height: '95px',
      maxWidth:'100vw',
      width:'100vw',
      flexDirection:'row', 
      display:'flex',
      padding:'0 5%',
      position:'fixed',
      alignItems:'center',
      justifyContent:'flex-start'
      ,zIndex:5,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)'
    }}
  >
  <div style={{width: '154px', height:'30', }}>

   <Link to="/" style={{color:'#80909A',textDecoration:'none'}}>    <Logo /></Link>

  </div>
  <div style={{width: 'calc( 90% - 154px)', height: '100%', display:'flex',
     alignItems:'center',
     justifyContent:'flex-end', 
}}
  
  >
    <div className="links" style={{ textAlign:'center', color:'#80909A', fontSize:'16px', fontFamily:'Banana Grotesk', marginRight:'27px'
  , fontWeight:'bold'  }}>
   <Link to="/about/" style={{color:'#80909A',textDecoration:'none'}}>  About Monify</Link>

  </div>
  <div className="links"  style={{ textAlign:'center', color:'#80909A', fontSize:'16px', fontFamily:'Banana Grotesk', marginRight:'27px',fontWeight:'bold' }}>
  <Link to="/referrals/" style={{color:'#80909A',textDecoration:'none'}}>   Referrals </Link>
  </div>
  
  <div className="links" style={{width:'151px', height:'40px', background:'#31C6AC', borderRadius:'15px', lineHeight:'40px', textAlign:'center', color:'#fff', fontSize:'16px', fontFamily:'Banana Grotesk', fontWeight:'bold'}}>
 
  <Link to="/referrals/" style={{color:'#fff',textDecoration:'none'}}>   Get Early Access</Link>
  </div>
  </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
