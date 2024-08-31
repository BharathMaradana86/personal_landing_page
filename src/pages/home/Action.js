import React from 'react'
import { ModeContext } from '../../components/Navbar'
import './Action.css';
import AI from '../../images/AI-CCTV-2.webp';
import { Link } from 'react-router-dom';
import action1 from '../../images/action1.png';

function Action() {
    const {mode} =React.useContext(ModeContext)
  return (
    <div>
      <div className='actionrow'>
        <div className='actioncol'  >
            <div className='actionhead'>
            <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Hypervise Action Recognition </span>
            <p >AI Powered Human Productivity</p>
            <p className='survpara'>Monitor critical actions, optimize cycle time and ensure SOP compliance to deliver improved productivity.</p>
            </div>
        </div>
        <div className='actioncol'>
            <div className='actionimg' >
                <img src={action1} alt="ACtion-recognition" loading='lazy' height='400' width='600'  />
            </div>
        </div>
      </div>

      {/* <div className='aboutaction'  >
        <div className='aboutactionhead'>
        <p className='h'><span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Hypervise Action Recognition</span></p>
         <p className='p'>Empowering Productivity and Quality</p>
        </div>
        <div className='aboutactionpara'>
            <p>Boost your manufacturing processes with AI-powered action recognition that ensures compliance and efficiency.
            Witness how our technology identifies critical actions and optimizes your operations for unmatched productivity.</p>
        </div>
      </div> */}
      
      <div className='benefit'>
        <div className='benefithead' style={{backgroundColor: mode?'#142044' : '#ffffff',boxShadow:!mode&&'0px 3px 5px grey'}} >Key Features</div>
        <div className='brow'>
          <div className='bcol' style={{backgroundColor: mode?'#142044' : '#ffffff', boxShadow: !mode && '0px 2px 3px grey'}} >

              <div className='matters'><span style={{color: mode ? '#69b3e7': '#1e2d5b'}}> Real-Time Monitoring</span> <br /><br /> Track and analyze crucial actions as they happen, enabling proactive decision-making.</div>
          </div>
          <div className='bcol' style={{backgroundColor: mode?'#142044' : '#ffffff', boxShadow: !mode && '0px 2px 3px grey'}} >

              <div className='matters'><span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>SOP Adherence</span> <br /><br /> Ensure compliance with standard operating procedures for consistent quality.</div>
          </div>
        </div>
        <div className='brow'>
          <div className='bcol' style={{backgroundColor: mode?'#142044' : '#ffffff', boxShadow: !mode && '0px 2px 3px grey'}} >

              <div className='matters'><span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Continuous Improvement</span> <br /><br />  Identify bottlenecks and inefficiencies to drive continuous process improvement.</div>
          </div>
          <div className='bcol' style={{ backgroundColor: mode?'#142044' : '#ffffff', boxShadow: !mode && '0px 2px 3px grey'}} >

              <div className='matters'><span style={{color: mode ? '#69b3e7': '#1e2d5b'}} >Seamless Integration</span> <br /><br /> Our user-friendly solutions integrate seamlessly with your existing systems.</div>
          </div>
        </div>
      </div>

      <div className='acd' style={{width:'100%'}} >
        <div className='acdhead'>
        <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Take Control of Your Production Line</span>
        </div>
        <div className='acdpara'>
        Empower your team with real-time insights and drive productivity to new heights with Hypervise Action Recognition. <br/><br/>
        <p>Ready to Optimize Your Operations?</p>
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

export default Action
