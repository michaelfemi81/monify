import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Facebook from "../components/facebook"
import Instagram from "../components/instagram"
import Twitter from "../components/twitter"
import Youtube from "../components/youtube"
import Logo2 from "../components/logo2"
import "./footer.css"
const Footer = ({ siteTitle, location }) => (
  <footer
    style={{
      background: `#31C6AC`,
      overflow:'hidden',
      margin:0,
      height: 'auto',
      marginTop:'-10px',
      flexDirection:'row',
      padding:'0 0 20px 0'
      ,zIndex:5,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)'
    }}
  >
{ location.indexOf('referrals')<=-1?
  <div style={{height:'283px', position:'relative', overflow:'hidden',      background: `#224293`,}}>
  <div className="joinus" style={{position:'absolute', width:'100%', height:'100%', maxWidth:'99vw', zIndex:1,display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'row'}}>

  <h1 className="join" style={{fontFamily: 'Banana Grotesk Bold', fontSize:'46px',color:'#fff', paddingRight:'40px', paddingTop:'25px'}}>
  Join Us
  </h1>
  <div className="inputbox" style={{width:'423px', maxWidth:'80%', height:'58px', borderRadius:'15px', border:'1px solid #80909A',boxSizing:'border-box', padding:'0 11px',
           background:'#f7f7f7', flexDirection:'row',marginTop: '32px',justifyContent:'space-between', alignItems:'center', display:'flex' }}>
              <input className="getin" type="text" name="early" placeholder="Enter your Email Address" style={{width:'204px',paddingRight:'10px',paddingLeft:'10px',
            fontFamily: 'Banana Grotesk Regular',
            borderWidth:0,
            fontSize: '16px',
            fontWeight:'normal',
            color: '#80909A', border:0,outline:0,
            background:'transparent'
            }} />
             <div className="getbut" style={{width:'171px', minWidth:'171px', height:'40px', background:'#31C6AC', borderRadius:'15px', lineHeight:'40px', textAlign:'center', color:'#fff', fontSize:'16px', fontFamily:'Banana Grotesk Medium', cursor:'pointer' }}>
              Get Early Access
             </div>
           </div>
  </div>
  <div className="lrub" style={{position: 'absolute', left: '-660px', bottom: '-472.35px', width:'815px', height:'755.35px' , borderRadius: '273px', background:'linear-gradient(90deg, #0097D8 0%, #31C6AC 63.54%)', transform: 'matrix(0.57, -0.82, 0.82, 0.57, 0, 0)',
        // minWidth:'500px', minHeight:'480px'
      }}>
      </div>
      <div  className="rrub" style={{position: 'absolute', right: '-590px', top: '-462.35px', width:'815px', height:'755.35px' , borderRadius: '273px', background:'linear-gradient(90deg, #0097D8 0%, #31C6AC 63.54%)', transform: 
      'matrix(0.57, -0.84, 0.8, 0.58, 0, 0',
        // minWidth:'500px', minHeight:'480px'
      }}>
      </div>
  </div>:''}
  
  <div className="mainfoot" style={{height:'calc( 100% - 283px )',  display:'flex',
flexDirection:'row',alignContent:'flex-start', justifyContent:'space-between', flexWrap:'wrap',  width:'100vw'
}}>
    <div className="aa" style={{width:'500px', maxWidth:'90%',paddingLeft:'19%',}}>
       <h1 style={{fontFamily:'Banana Grotesk Bold', fontSize:'24px', lineHeight: '25px',}}>
       Disclaimer
       </h1>
       <h2  style={{fontFamily:'Banana Grotesk Regular',width:'551px',maxWidth:'90vw', fontSize:'12px', lineHeight: '25px',fontWeight:'normal' }}>
       Getting “early access” to options or Web is defined as signing up with a valid email address for a spot in Monify’s respective waitlist queues for certain offerings.
       <br/>
       <br/>
       All investments involve risk and the past performance of a security, or financial product does not guarantee future results or returns. Keep in mind that while diversification may help spread risk it does not assure a profit, or protect against loss, in a down market. There is always the potential of losing money when you invest in securities, or other financial products. Investors should consider their investment objectives and risks carefully before investing.
       </h2>
    </div>
    <div className="abc" style={{width:'220px', height:'250px', margin:'0px auto', paddingLeft:'80px',  display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between',}}>
    <h1 style={{fontFamily:'Banana Grotesk Bold', fontSize:'24px', lineHeight: '25px',textAlign:'left', paddingLeft:'20px',  width:'100%'}}>
      Follow Us
       </h1>
       <div style={{height:'88.89px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <a href="#" onClick={()=>{
            window.open('http://facebook.com')
        }}><Facebook/></a>
         <a href="#" onClick={()=>{
            window.open('http://twitter.com')
        }}><Twitter/></a>
       </div>
       <div style={{height:'88.89px', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
    
        <a href="#" onClick={()=>{
            window.open('http://instagram.com')
        }}><Instagram/></a>
         <a href="#" onClick={()=>{
            window.open('http://youtube.com')
        }}><Youtube/></a>
    
       </div>
    </div>
    <div className="aa" style={{width:'659px', display:'flex', flexDirection:'row', justifyContent:'space-between', maxWidth:'80%', minHeight:'88px',margin:'50px 0'}}>
    <div style={{}}>
    <h1 style={{fontFamily:'Banana Grotesk', fontSize:'18px', lineHeight: '25px',}}>
    Contact
       </h1>

         <a href="mailto:care@monify.app>"  style={{fontFamily:'Banana Grotesk Regular', fontSize:'16px', lineHeight: '25px',color:'#fff' }}>care@monify.app</a> 

    </div>
    <div style={{width:'179px'}}>
    <h1 style={{fontFamily:'Banana Grotesk', fontSize:'18px', lineHeight: '25px',}}>
    Lagos
       </h1>

         <h3 style={{fontFamily:'Banana Grotesk Regular', fontSize:'16px',fontWeight:'normal', lineHeight: '25px',color:'#fff', maxWidth:'179px' }}>70, Olonode Street, Yaba, Lagos, Nigeria</h3> 

    </div>
    <div style={{width:'179px', }}>
    <h1 style={{fontFamily:'Banana Grotesk', fontSize:'18px', lineHeight: '25px',paddingBottom:'7px'}}>
    Links
       </h1>

         <h3 style={{fontFamily:'Banana Grotesk Regular', fontSize:'16px',fontWeight:'normal', lineHeight: '11px',color:'#fff', maxWidth:'179px' }}><Link to="/referrals/" style={{color:'#fff',textDecoration:'none'}}>   Referrals</Link></h3> 
         <h3 style={{fontFamily:'Banana Grotesk Regular', fontSize:'16px',fontWeight:'normal', lineHeight: '11px',color:'#fff', maxWidth:'179px' }}><Link to="/about/" style={{color:'#fff',textDecoration:'none'}}>   About Monify</Link></h3> 

    </div>
    </div>
    <div className="aa a2" style={{width:'950px', display:'flex', flexDirection:'row', justifyContent:'space-between', maxWidth:'80vw', 
   height:'25px'}}>

  <Link to="/" style={{color:'#80909A',textDecoration:'none', width:'122px'}}>    <Logo2 /></Link>
  <h3  style={{fontFamily:'Banana Grotesk',  fontSize:'12px', lineHeight: 'normal',height:'25px',width:'200px'}}>
  © 2019 Monify. All Rights Reserved.
  </h3>
  </div>
  </div>


  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
  location:''
}

export default Footer
