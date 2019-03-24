import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Cashout from "../components/cashout"
import Wealth from "../components/wealth"
import Invest from "../components/invest"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout style={{}}>
    <SEO title="About Monify" />
    <div style={{overflow:'hidden', position:'relative'}}>
    <div style={{position: 'absolute', left: '-742px', top: '450px', width:'814.81px', height:'754.99px' , borderRadius: '273px', background:'linear-gradient(90deg, #0097D8 0%, #31C6AC 63.54%)', transform: 'rotate(-55deg)',
    zIndex:2
        // minWidth:'500px', minHeight:'480px'
      }}>
      
        </div>
        <div style={{position: 'absolute', right: '-742px', top: '60px', width:'814.81px', height:'754.99px' , borderRadius: '273px', background:'linear-gradient(90deg, #0097D8 0%, #31C6AC 63.54%)', transform: 'rotate(-55deg)',
    zIndex:2
        // minWidth:'500px', minHeight:'480px'
      }}>

        </div>
    <div style={{
    background:"#EBF3FB",
    width:'200%',
     left:'-50%',
    top:'0%',
   height:'100%',
    overflow:'hidden',
    position:'relative',
    borderRadius:'0 0 50% 50%',
   

}}>
<div className="sec2" style={{
  width: '1000px', 
 minHeight:'527px', 
  maxWidth:'100vw',
   margin: '20px 0',
   height:'100%',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
 // background:'#000',
  //display:'block',
  margin:'70px auto',
  marginBottom:0
  
 

}}>
<h1 style={{maxWidth:'90%', height:'124px', fontSize:'31px', lineHeight:'41px', width:'793px',fontFamily:'Banana Grotesk', fontWeight:'bold', textAlign:'center', color:'#31C6AC', display:'block', margin:'0 auto', zIndex:2, paddingTop:'30px'}}>
        At Monify, our mission is to help a growing class of Africans build wealth through safe and advised investing.
        </h1>
        <Cashout />
</div>

</div>

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
  margin:'0 auto',
  marginTop:'100px',
  paddingBottom:'200px'

}}>
<Wealth/>
<h1 style={{maxWidth:'90%', height:'124px', fontSize:'31px', lineHeight:'41px', width:'793px',fontFamily:'Banana Grotesk', fontWeight:'bold', textAlign:'center', color:'#31C6AC', display:'block', margin:'0 auto', zIndex:2}}>
We wish to take Africans on a journey of wealth building by increasing investment culture across the continent. By breaking the barriers to local and foreign markets, we hope to give opportunities to the many which was previously only afforded to a few. 


        </h1>
</div>
<div className="sec2" style={{
  width: '100vw', 
  background:"#EBF3FB",
 minHeight:'527px', 
 marginTop:'250px',
  display:'flex',
  flexDirection:'column',
  alignItems:'flex-end',
  justifyContent:'center',
 // background:'#000',
  //display:'block',
  flexWrap:'wrap',
position:'relative',
  paddingBottom:'100px'

}}

>
<div style={{width:'322px', height:'249px', display:'flex', alignItems:'center', justifyContent:'center',position:'absolute', top:'-124.5px', zIndex:1,
left:'calc( 50vw - 161px )'
}}>
<Invest/>
</div>

<h1 style={{maxWidth:'90%', height:'124px', fontSize:'31px', lineHeight:'41px', width:'793px',fontFamily:'Banana Grotesk', fontWeight:'bold', textAlign:'center', color:'#31C6AC', display:'block', margin:'0 auto', zIndex:2}}>
Through investment education and personalized investment advisory, we hope to grow investment knowledge and leave a lasting impact on wealth building for Africans today and future generations to come. 


        </h1>
</div>
    </div>
  
  </Layout>
)

export default SecondPage
