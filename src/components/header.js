import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"
import More from "../components/more"
import Cancel from "../components/cancel"
import "./header.css"


class Header extends React.PureComponent{
   propTypes = {
    siteTitle: PropTypes.string,
  }
  
  defaultProps = {
    siteTitle: ``,
  }
  constructor(props){
   super(props);
   this.state={};
  }
  render(){
    let { siteTitle }= this.props;
    return (
  <header
  className="header"
    style={{
      background: `#ffffff`,
     
      margin:0,
      height: '5em',
      maxHeight:'95px',
      maxWidth:'100vw',
      width:'100vw',
      flexDirection:'row', 
      display:'flex',
      position:'fixed',
      alignItems:'center',
      justifyContent:'flex-start'
      ,zIndex:5,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)'
    }}
  >
  <div style={{ width:'991px',maxWidth:'991px', height:'100%', flexDirection:'row', 
      display:'flex',justifyContent:'center', alignItems:'center', margin:'0 auto'}}>
 <div style={{width: '154px', height:'30', }}>

<Link to="/" style={{color:'#80909A',textDecoration:'none'}}>    <Logo /></Link>

</div>
<div className="main" style={{width: 'calc( 90% - 154px)', height: '100%', display:'flex',
  alignItems:'center',
  justifyContent:'flex-end', 
}}

>
 <div className="links" style={{ textAlign:'center', color:'#80909A', fontSize:'16px', fontFamily:'Banana Grotesk Medium', marginRight:'27px'
 }}>
<Link to="/about/" style={{color:'#80909A',textDecoration:'none'}}>  About Monify</Link>

</div>
<div className="links"  style={{ textAlign:'center', color:'#80909A', fontSize:'16px', fontFamily:'Banana Grotesk Medium', marginRight:'27px' }}>
<Link to="/referrals/" style={{color:'#80909A',textDecoration:'none'}}>   Referrals </Link>
</div>

<div className="links" style={{width:'171px', height:'40px', background:'#31C6AC', borderRadius:'15px', lineHeight:'40px', textAlign:'center', color:'#fff', fontSize:'16px', fontFamily:'Banana Grotesk Medium', fontWeight:'normal'}}>

<Link to="/referrals/" style={{color:'#fff',textDecoration:'none'}}>   Get Early Access</Link>
</div>
</div>
<div className="more" onClick={()=>{
  this.setState({
    pop: !this.state.pop
  })
}} style={{width: 'calc( 90% - 154px)', display:'flex', justifyContent:'flex-end'}}>
{!this.state.pop?
<More/>:<Cancel/>
}
</div>

  </div>
  { this.state.pop?
  <div className="popover" style={{position:'absolute', zIndex:8,right:'20px',
  top:'47px', height:'180px',width:'209px',
background: '#FFFFFF',
border: '1px solid #E5E5E5',
boxSizing: 'border-box',
boxShadow: '0px 9px 16px rgba(0, 0, 0, 0.1)',
borderRadius: '15px',
padding:'27px 19px'
}}>
<div className="links" style={{ textAlign:'center', color:'#80909A', fontSize:'16px', fontFamily:'Banana Grotesk Medium',  marginBottom:'25px'
 }}>
<Link to="/about/" style={{color:'#80909A',textDecoration:'none',}}>  About Monify</Link>

</div>
<div className="links"  style={{ textAlign:'center', color:'#80909A', fontSize:'16px', fontFamily:'Banana Grotesk Medium',  marginBottom:'25px' }}>
<Link to="/referrals/" style={{color:'#80909A',textDecoration:'none',}}>   Referrals </Link>
</div>

<div className="links" style={{width:'171px', height:'40px', background:'#31C6AC', borderRadius:'15px', lineHeight:'40px', textAlign:'center', color:'#fff', fontSize:'16px', fontFamily:'Banana Grotesk Medium', fontWeight:'normal'}}>

<Link to="/referrals/" style={{color:'#fff',textDecoration:'none'}}>   Get Early Access</Link>
</div>
  </div>:''
  }
 

  </header>
)
  }
}



export default Header
