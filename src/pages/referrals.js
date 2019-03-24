import React from "react"
import { Link } from "gatsby"
import  Wallet from "../components/wallet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
const SecondPage = ({location}) => (
  <Layout location={location.pathname}>
    <SEO title="Referrals" />
        <div style={{overflow:'hidden', position:'relative'}}>
        <div className="sec2" style={{
  width: '100vw', 
  background:"#FFF",
  
 height:'auto',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
 // background:'#000',
  //display:'block',
  flexWrap:'wrap',
  margin:'100px auto',
paddingTop:'100px'

}}>
<div style={{flexDirection:'row',display:'flex',
    alignItems:'center',width:'1026px',
    justifyContent:'center',marginBottom:'150px', maxWidth:'90vw'}}>
    <div style={{width: '513px',flexDirection:'column',display:'flex', maxWidth:'50%',
    alignItems:'flex-start',
    justifyContent:'center', marginRight:'100px'}}>
    <div style={{fontFamily:'Banana Grotesk', fontSize: '31px', fontWeight:'normal',textAlign:'left', color: '#31C6AC',  display:'block'
    ,paddingBottom:'20px', fontWeight:'bold'
  }}>
About Our Referrals Program
  </div>

  <div style={{fontFamily:'Banana Grotesk', fontSize: '13px', fontWeight:'normal',textAlign:'left', color: '#7F7F7F',  display:'block'
   ,paddingBottom:'20px', 
}}>
  <p style={{marginBottom:'30px'}}>Early Access Users will receive one month FREE of premium account benefits!</p>

  <div style={{fontFamily:'Banana Grotesk', fontSize: '13px', fontWeight:'normal',textAlign:'left', color: '#7F7F7F',  display:'block'
   ,paddingBottom:'5px', paddingLeft:'27px', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start'
}}>
<div style={{width:'7px', height:'7px', borderRadius:'3.5px', background:'#31C6AC', marginRight:'11px'}}>
</div>
  <p>Access to invest in American ETFs</p>
  </div>
  <div style={{fontFamily:'Banana Grotesk', fontSize: '13px', fontWeight:'normal',textAlign:'left', color: '#7F7F7F',  display:'block'
   ,paddingBottom:'5px', paddingLeft:'27px', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start'
}}>
<div style={{width:'7px', height:'7px', borderRadius:'3.5px', background:'#31C6AC', marginRight:'11px'}}>
</div>
  <p>Personalized Recommendations/Advice</p>
  </div>
  <div style={{fontFamily:'Banana Grotesk', fontSize: '13px', fontWeight:'normal',textAlign:'left', color: '#7F7F7F',  display:'block'
   ,paddingBottom:'5px', paddingLeft:'27px', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start'
}}>
<div style={{width:'7px', height:'7px', borderRadius:'3.5px', background:'#31C6AC', marginRight:'11px'}}>
</div>
  <p>Investment Education</p>
  </div>
  </div>
  <div  id="early" style={{width:'423px',maxWidth:'150%',  height:'58px', borderRadius:'15px', border:'1px solid #31C6AC',boxSizing:'border-box', padding:'0 11px',
           background:'rgba(137, 191, 232, 0.1)', flexDirection:'row',marginTop: '32px',justifyContent:'flex-end', alignItems:'center', display:'flex' }}>
              <input  className="getin" type="text" name="early" placeholder="Email Address" style={{width: '300px',paddingRight:'10px',paddingLeft:'10px',
            fontFamily: 'Banana Grotesk',
            fontSize: '16px',
            color: '#80909A', border:0,outline:0,
            background:'transparent'
            }} />
             <div className="getbut" style={{width:'171px', height:'40px', background:'#0097D8', borderRadius:'15px', lineHeight:'40px', textAlign:'center', color:'#fff', fontSize:'16px', fontFamily:'Banana Grotesk', fontWeight:'bold', cursor:'pointer' }}>
              Get Early Access
             </div>
           </div>
    </div>
<Wallet/>
</div>
</div>
        <div style={{position: 'absolute', right: '-680px', top: '-400px', width:'814.81px', height:'754.99px' , borderRadius: '273px', background:'linear-gradient(90deg, #0097D8 0%, #31C6AC 63.54%)', transform: 'matrix(0.56, -0.91, 0.73, 0.59, 0, 0)',
    zIndex:2
        // minWidth:'500px', minHeight:'480px'
      }}>

        </div>
        </div>
  </Layout>
)

export default SecondPage
