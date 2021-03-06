import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Phone1 from "../components/phone1"
import Phone2 from "../components/phone2"
import Phone3 from "../components/phone3"
import Coin from "../components/coin"
import Arrow from "../components/arrow"
import Teaching from "../components/teaching"
import Realtime from "../components/realtime"
import Customer from "../components/customer"
import Ease from "../components/ease"
import Baloon from "../components/baloon"
import Star from "../components/star"
import Security from "../components/security"
import Grow from "../components/grow"
import One from "../components/one"
import SEO from "../components/seo"
import "./index.css"
import ReactModal from 'react-modal'

class IndexPage extends React.PureComponent{
  constructor(props){
    super(props)
   this.state={isModalOpen: false}
  }
  handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  render(){
    return (

  <Layout style={{

    padding:0,
    margin:0,
    }}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
     <div className="begin" style={{background:'#F9F9F9',height:'700px', width: '100vw',position:'relative', overflow:'hidden',position:'relative'}}>
        <div className="phone1">
        <Phone1 />
        </div>
       
        <div className="phone4" style={{
          position: 'absolute',
          width: '814.81px',
          height:'504.99px',
          right: '-445.86px',
          top: '-500.11px',
          
          background: 'linear-gradient(90deg, #0097D8 0%, #31C6AC 63.54%)',
          borderRadius: '273px',
          transform: 'rotate(-68.84deg)'
        }}>
        </div>
        <div className="phone3">
        <Phone3 />
        </div>
      
        <div className="phone2" style={{position:'relative'}}>
        <Phone2 />
        </div>
     

        <div style={{position:'absolute', width:'100%', height:'100%', zIndex: 3,display: 'flex',top: '95px', flexDirection:'column',
        justifyContent:'flex-start', alignItems:'center'
      }}>
           <h1 className="head" style={{ fontSize:'46px',  color:'#31C6AC', fontFamily:'Banana Grotesk Bold', textAlign:'center', 
          maxWidth:'50%', paddingTop: '100px', fontWeight:'900',lineHeight:'52px', wordSpacing: '0px', marginBottom:'0'
          }}>
          <span style={{color:'#0097D8'}}>Invest in American ETFs.<br/>
            </span>Protect the real value of your money.
           </h1>
          
           <div className="inputbox" style={{width:'423px', maxWidth:'80%', height:'58px', borderRadius:'15px', border:'1px solid #31C6AC',boxSizing:'border-box', padding:'0 11px',
           background:'rgba(137, 191, 232, 0.1)',flexDirection:'row',marginTop: '32px',justifyContent:'space-between', alignItems:'center', display:'flex' }}>
              <input className="getin" type="text" name="early" placeholder="Enter your Email Address" style={{width:'204px',paddingRight:'10px',paddingLeft:'10px',
            fontFamily: 'Banana Grotesk Regular',
            borderWidth:0,
            fontSize: '16px',
            fontWeight:'normal',
            color: '#80909A', border:0,outline:0,
            background:'transparent'
            }} />
             <div className="getbut" style={{width:'171px', minWidth:'171px', height:'40px', background:'#0097D8',  borderRadius:'15px', lineHeight:'40px', textAlign:'center', color:'#fff', fontSize:'16px', fontFamily:'Banana Grotesk Medium', cursor:'pointer' }}>
              Get Early Access
             </div>
           </div>
           <h3 style={{ height:'58px', boxSizing:'border-box', padding:'0 11px',
           flexDirection:'row',marginTop: '22px',justifyContent:'flex-end', alignItems:'center', display:'flex' , 
           color:'#80909A', fontSize:'16px', fontWeight: 'normal', fontFamily:'Banana Grotesk',fontWeight:'400', lineHeight:'normal'
           }}>
             Refer a friend. <span style={{color:'#0097D8', textDecoration:'underline', paddingLeft:'5px', cursor:'pointer', fontWeight:'600'}}> Get benefits</span> 
           </h3>
        </div>
        
      
       

     </div>
     <div style={{background:'#FFF',minHeight:'452px', height:'auto', width: '100vw',position:'relative', 
 
  overflow:'hidden',

  }}>
     <div style={{
    background:"#EBF3FB",
    width:'150%',
     left:'-25%',
    top:'0%',
   height:'100%',
    overflow:'hidden',
    position:'relative',
    borderRadius:'0 0 50% 50%',
   

}}>
<div className="sec2" style={{
  width: '1026px', 
 minHeight:'452px', 
  maxWidth:'100vw',
   margin: '0px 0',
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  margin:'10px auto',
  flexWrap:'wrap'

}}>
<div className="padr" style={{width: '255px', minHeight:'259px', marginRight:'50px', 
  alignItems:'center',
  justifyContent:'center',} }>
  <Coin/>
  <h4 style={{fontFamily:'Banana Grotesk Bold', fontSize: '22px', fontWeight:'normal',textAlign:'center', color: '#31C6AC', fontWeight:'bold'}}>
   Local & Foreign Funds
  </h4>
  <h5 style={{fontFamily:'Banana Grotesk Regular', fontSize: '16px', lineHeight:'24px', fontWeight:'normal',textAlign:'center', color: '#7F7F7F',  }}>
  Daily access to invest in local & international funds in real time
  </h5>
</div>
<div  className="padr" style={{width: '255px', minHeight:'259px',marginRight:'50px',padddingTop: 23 , 
  alignItems:'center',
  justifyContent:'center',  paddingTop:'26px'}}>
  <Arrow/>
   <h4 style={{fontFamily:'Banana Grotesk Bold', fontSize: '22px', fontWeight:'normal',textAlign:'center', color: '#31C6AC',  fontWeight:'bold'}}>
   Constant Advisory
  </h4>
  <h5 style={{fontFamily:'Banana Grotesk Regular', fontSize: '16px', lineHeight:'24px', fontWeight:'normal',textAlign:'center', color: '#7F7F7F', }}>
  Get personalized investment advice to help you know how and where to invest,
  </h5>
</div>
<div className="onebase"  style={{width: '288px', minHeight:'259px', padddingTop: 23, 
  alignItems:'center',
  justifyContent:'center', paddingTop:'60px'}}>
    <One/>
    <h4 style={{fontFamily:'Banana Grotesk Bold', fontSize: '22px', fontWeight:'normal',textAlign:'center',lineHeight:'normal', color: '#31C6AC', fontWeight:'bold'}}>
    Investment Education
  </h4>
  <h5 style={{fontFamily:'Banana Grotesk Regular', fontSize: '16px', lineHeight:'24px', fontWeight:'normal',textAlign:'center', color: '#7F7F7F',  }}>
  Learn about investing through simple language and relatable scenarios to help you understand complex financial language
  </h5>
</div>
</div>
</div>

       
     </div>
     <div style={{background:'#FFF',minHeight:'452px',padding:'0', marginTop:'80px', width: '100vw',position:'relative', overflow:'hidden',
    display:'flex', flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    }}
>
<div className="grow2" style={{width:'158.11px', height:'100%',marginBottom:'30px'}}><Grow/></div>

<div  style={{flexDirection:'row',display:'flex',
    alignItems:'center',
    justifyContent:'center',marginBottom:'150px', width:'779.11px', maxWidth:'80vw'}}>
    
    <div className="growText" style={{width: '513px',display:'block', margin:'0 auto', maxWidth:'513px',flexDirection:'column',display:'flex',
    alignItems:'flex-start',
    justifyContent:'center', marginRight:'100px', }}>
    <div style={{fontFamily:'Banana Grotesk Bold', fontSize: '31px', fontWeight:'normal',textAlign:'left', color: '#31C6AC',  display:'block'
    ,paddingBottom:'20px', fontWeight:'bold'
  }}>
    Grow Your Wealth
  </div>
  <div style={{fontFamily:'Banana Grotesk Regular', fontSize: '16px', fontWeight:'normal',textAlign:'left', color: '#0097D8', display:'block'
   ,paddingBottom:'20px', 
}}>
  Grow your wealth through personalized investment advice
  </div>
  <div style={{fontFamily:'Banana Grotesk Regular', fontSize: '16px', fontWeight:'normal',textAlign:'left', color: '#7F7F7F',  display:'block'
   ,paddingBottom:'20px', lineHeight:'24px'
}}>
  Based on your personality, income and lifestyle, trust our robo advisor to make recommendations that work best for you. Monify teaches you financial planning and discipline through goal based savings and investments.
  </div>
  <div style={{height: '40px', width:'171px', minWidth:'171px',borderRadius:'15px',boxSizing:'border-box',border:'1px solid #31C6AC', color:'#0097D8',
fontFamily:'Banana Grotesk', fontSize: '16px', lineHeight:'40px', textAlign:'center', cursor:'pointer', fontWeight:'600'
}}>
  Get Early Access
  </div>
    </div>
 <div className="grow" style={{width:'158.11px', height:'100%',}}>
 <Grow/>
</div>   

</div>
<div className="teaching2" style={{width:'369px', height:'100%',marginBottom:'30px'}}><Teaching/></div>
<div style={{flexDirection:'row',display:'flex',
    alignItems:'center',
    justifyContent:'center',marginBottom:'150px', width:'951px', maxWidth:'80vw'}}>
  <div className="teaching" style={{width:'369px', height:'100%',marginRight:'96px'}}><Teaching/></div>

<div className="teachText" style={{
    width: '456px',display:'block', maxWidth:'456px',flexDirection:'column',display:'flex',
    alignItems:'flex-start',
    justifyContent:'center',  }}>
    <div style={{fontFamily:'Banana Grotesk Bold', fontSize: '31px', fontWeight:'normal',textAlign:'left', color: '#31C6AC',  display:'block'
    ,paddingBottom:'20px', fontWeight:'bold'
  }}>
   Learn on the Go
  </div>
  <div style={{fontFamily:'Banana Grotesk Regular', fontSize: '16px', fontWeight:'normal',textAlign:'left', color: '#0097D8', display:'block'
   ,paddingBottom:'20px', 
}}>
  Learn something every time you use Monify
  </div>
  <div style={{fontFamily:'Banana Grotesk Regular', fontSize: '16px', fontWeight:'normal',textAlign:'left', color: '#7F7F7F',  display:'block'
   ,paddingBottom:'20px',  lineHeight:'24px'
}}>
  We know understanding investment terms may be difficult. We break down complex financial language into friendly, digestible pieces to help you make more informed decisions about your money
  </div>
  <div style={{height: '40px', width:'171px',borderRadius:'15px',boxSizing:'border-box',border:'1px solid #31C6AC', color:'#0097D8',
fontFamily:'Banana Grotesk', fontSize: '16px', lineHeight:'40px', textAlign:'center', cursor:'pointer', fontWeight:'bold'
}}>
  Get Early Access
  </div>
    </div>
</div>
<div className="realtime2" style={{width:'375px', height:'100%',marginBottom:'30px'}}><Realtime/></div>
<div style={{flexDirection:'row',display:'flex',
    alignItems:'center',
    justifyContent:'center',marginBottom:'66px', width:'955px', maxWidth:'80vw'}}>
      <div className="realText" style={{width: '435px',display:'block', margin:'0 auto', maxWidth:'435px',flexDirection:'column',display:'flex',
    alignItems:'flex-start',
    justifyContent:'center', marginRight:'100px', }}>
    <div  style={{fontFamily:'Banana Grotesk Bold', fontSize: '31px', fontWeight:'normal',textAlign:'left', color: '#31C6AC',  display:'block'
    ,paddingBottom:'20px' ,fontWeight:'bold'
  }}>
    Access in Real Time
  </div>
  <div style={{fontFamily:'Banana Grotesk Regular', fontSize: '16px', fontWeight:'normal',textAlign:'left', color: '#0097D8', display:'block'
   ,paddingBottom:'20px', 
}}>
  Access the performance of your invested capital in real time
  </div>
  <div style={{fontFamily:'Banana Grotesk Regular', fontSize: '16px', fontWeight:'normal',textAlign:'left', color: '#7F7F7F',  display:'block'
   ,paddingBottom:'20px', lineHeight:'24px'
}}>
 Through our app, you can monitor how your investment is growing. You always know where your money is and how it is being used. This level of transparency helps you make decisions about your investments in real time.
  </div>
  <div style={{height: '40px', width:'171px',borderRadius:'15px',boxSizing:'border-box',border:'1px solid #31C6AC', color:'#0097D8',
fontFamily:'Banana Grotesk', fontSize: '16px', lineHeight:'40px', textAlign:'center', cursor:'pointer', fontWeight:'bold'
}}>
  Get Early Access
  </div>
    </div>
<div className="realtime" style={{width:'375px', height:'100%'}}><Realtime/></div>

</div>

</div>
<div className="back" style={{width:'100%' ,height:'1063px',}}>
<div className="sec2" style={{
  width: '1007px', 
  maxWidth:'100%',
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  margin:'0 auto',
  flexWrap:'wrap'

}}>
<div className="padr" style={{width: '252px', height:'383px', marginRight:'50px', 
//padddingTop: 23, 

  alignItems:'center',
  justifyContent:'center',} }>
  <Ease/>
  <h4 style={{fontFamily:'Banana Grotesk Bold', fontSize: '31px', fontWeight:'normal',textAlign:'left', color: '#31C6AC', fontWeight:'normal'}}>
  Ease of Use
  </h4>
  <h5 style={{fontFamily:'Banana Grotesk Regular', fontSize: '16px', fontWeight:'normal',textAlign:'left', color: '#7F7F7F', lineHeight:'24px' }}>
  Your user experience is important to us. Our app is simple & friendly and allows you to navigate effortlessly. Investing simply and learning as you go.
  </h5>
</div>
<div  className="padr" style={{width: '306px', height:'346px',marginRight:'50px',
  justifyContent:'center',  paddingTop:'60px'}}>
  <Customer/>
   <h4 style={{fontFamily:'Banana Grotesk Bold', fontSize: '31px', fontWeight:'normal',textAlign:'left', color: '#31C6AC',  fontWeight:'bold'}}>
   24/7 Customer Care
  </h4>
  <h5 style={{fontFamily:'Banana Grotesk Regular', fontSize: '16px',width:'267px', fontWeight:'normal',textAlign:'left', color: '#7F7F7F',lineHeight:'24px'}}>
  Great relationships are built through care, communication, and availability. Our customer representatives are available round the clock to offer support
  </h5>
</div>
<div className="onebase"  style={{paddingTop:'30px',width:'269px',  height:'374px',  }}>
    <Security/>
    <h4 style={{fontFamily:'Banana Grotesk Bold', fontSize: '31px', fontWeight:'normal',textAlign:'left', color: '#31C6AC', }}>
    Security
  </h4>
  <h5 style={{fontFamily:'Banana Grotesk Regular', fontSize: '16px', fontWeight:'normal',textAlign:'left', color: '#7F7F7F', lineHeight:'24px' }}>
  We know how important your money is to you. At Monify, the security of your money is paramount. With us, your money is safe, insured, and available upon request.
  </h5>
</div>
</div>
</div>
   
          <ReactModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="Example Modal In Gatsby"
          style={{overlay: {zIndex: 999999,},
          content : {
           /**  top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'**/
            borderColor:'#6C67FC', borderWidth:0,
            background:'#EBF3FB', paddingTop:'100px',
       
          }}}
        >
        <div style={{position:'absolute', right:'10%',top:'20px', maxWidth:'15%'}}>
        <Baloon/>
        </div>
        <div style={{position:'absolute', left:'-10%',top:'-20px', maxWidth:'40%'}}>
        <Star/>
        </div>
        
        <div style={{position:'absolute', right:'-10%',bottom:'-20px', maxWidth:'20%'}}>
        <Star/>
        </div>
            <div style={{width:'705px',maxWidth:"90%",  position:'relative', margin:'0px auto', display:'flex',zIndex:3,
            alignItems:'center', justifyContent:'center', flexDirection:'column', padding:'20px 0'
          }}>
            <h1 className="tit" style={{color:'#0097D8',fontFamily:'Banana Grotesk', fontWeight:'600', fontSize:'31px', maxWidth:'100%', width:'437px', textAlign:'center'}}> 
            Congratulations! You’re the 125th on the list
              </h1>
              <h2 style={{color:'#31C6AC',fontFamily:'Banana Grotesk', fontWeight:'400',lineHeight: '28px', fontSize:'20px', width:'100%', textAlign:'center'}}>
              We are giving 300 people early access to Monify!
              
              </h2>
              <h2 style={{color:'#535461',fontFamily:'Banana Grotesk', fontWeight:'400',lineHeight: '28px', fontSize:'20px', width:'386px', maxWidth:'100%',textAlign:'center'}}>
              To climb up the list, refer a friend. The more you refer, the higher you climb
              
              </h2>
              <div onClick={()=>{
               this.handleModalOpen();
             }}  className="getbut" style={{width:'151px', height:'40px', background:'#0097D8', borderRadius:'15px', lineHeight:'40px', textAlign:'center', color:'#fff', fontSize:'16px', fontFamily:'Banana Grotesk', fontWeight:'bold', cursor:'pointer', marginTop:'15px' }}>
              Copy Referral Link
             </div>
            
          </div>
        </ReactModal>
  </Layout>
)
          }
          }
export default IndexPage

