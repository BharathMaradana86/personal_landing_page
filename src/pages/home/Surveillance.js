import React from 'react'
import { ModeContext } from '../../components/Navbar'
import './Action.css';
import AI from '../../images/aivideo.jpg';
import { Link } from 'react-router-dom';
import survaillancepic from '../../images/survaillancepic.png';
import sur2 from '../../images/sur2.png';


function Surveillance() {
    const {mode} =React.useContext(ModeContext)
  return (
    <div>
      <div className='actionrow'>
        <div className='actioncol' >
            <div className='actionhead'>
            <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Hypervise Surveillance</span>
            <p > AI Monitoring of Facilities</p>
            <p className='survpara'>Get a real-time view of your facility like never before, ensuring enhanced safety, security, and compliance.</p>
            </div>
        </div>
        <div className='actioncol'   >
            <div className='actionimg' >
                <img src={survaillancepic} alt="Action-recognition" loading='lazy' height='400' width='600' />
            </div>
        </div>
      </div>
{/* 
      <div className='aboutaction'  >
        <div className='aboutactionhead'>
        <p className='h'><span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Hypervise Surveillance</span></p>
         <p className='p'>The Future of Safety and Security</p>
        </div>
        <div className='aboutactionpara'>
            <p>Experience the power of AI-driven surveillance that transforms the way you safeguard your premises. With Hypervise Surveillance,
                 you get a real-time view of your facility like never before, ensuring enhanced safety, security, and compliance.</p>
        </div>
      </div> */}
      
      <div className='benefit'>
        <div className='benefithead' style={{backgroundColor: mode?'#142044' : '#ffffff',boxShadow:!mode && '0px 3px 5px grey'}} >Key Features</div>
        <div className='brow'>
          <div className='bcol' style={{backgroundColor: mode?'#142044' : '#ffffff', boxShadow: !mode && '0px 2px 3px grey'}} >

              <div className='matters'><span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>AI Video Analytics</span> <br /><br />Our advanced algorithms analyze video streams to detect potential security threats and safety breaches.</div>
          </div>
          <div className='bcol' style={{backgroundColor: mode?'#142044' : '#ffffff', boxShadow: !mode && '0px 2px 3px grey'}} >

              <div className='matters'><span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Proactive Alerts</span> <br /><br />Receive instant notifications for suspicious activities, ensuring quick action and prevention.</div>
          </div>
        </div>
        <div className='brow'>
          <div className='bcol' style={{backgroundColor: mode?'#142044' : '#ffffff', boxShadow: !mode && '0px 2px 3px grey'}} >

              <div className='matters'><span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>24/7 Monitoring</span> <br /><br />Stay vigilant round-the-clock with AI-powered surveillance that never rests.</div>
          </div>
          <div className='bcol' style={{ backgroundColor: mode?'#142044' : '#ffffff', boxShadow: !mode && '0px 2px 3px grey'}} >

              <div className='matters'><span style={{color: mode ? '#69b3e7': '#1e2d5b'}} >Customizable Solutions</span> <br /><br /> Tailor our surveillance to meet your specific security needs and objectives.</div>
          </div>
        </div>
      </div>

      <div className='acd' style={{width:'100%'}} >
        <div className='acdhead'>
        <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Unlock the Future of Surveillance</span>
        </div>
        <div className='acdpara'>
        Don't be limited by traditional security methods. Embrace the future of surveillance with Hypervise and gain the confidence to protect your people, assets, and reputation. <br/><br/>
        <p>Ready to Secure Your Premises?</p>
        </div>
        
        <div className='box'>
        <span style={{borderBottom:mode?'1px solid #69b3e7':'1px solid #1e2d5b',borderRight:mode?'1px solid #69b3e7':'1px solid #1e2d5b'}}></span>
        <span style={{borderBottom:mode?'1px solid #69b3e7':'1px solid #1e2d5b',borderRight:mode?'1px solid #69b3e7':'1px solid #1e2d5b'}}></span>
        <span style={{borderBottom:mode?'1px solid #69b3e7':'1px solid #1e2d5b',borderRight:mode?'1px solid #69b3e7':'1px solid #1e2d5b'}}></span>
        </div>
        <Link to='https://calendly.com/ajith-nair-er/30min' className='linkbtn' ><button className='acdbtn' style={{border:mode?'2px solid white' : '2px solid transparent'}}>Schedule a Demo Now</button></Link>
      </div> 

    </div>
  )
}

export default Surveillance
