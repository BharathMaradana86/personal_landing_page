import React from 'react'
import { ModeContext } from '../../components/Navbar'
import './Action.css';
import Ins from '../../images/inspection.jpg';
import { Link } from 'react-router-dom';

function Inspection() {
    const {mode} =React.useContext(ModeContext)
  return (
    <div>
      <div className='actionrow'>
        <div className='actioncol'  >
            <div className='actionhead'>
            <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Hypervise Inspection</span>
            <p>AI Assisted Quality Control</p>
            <p className='survpara'>Automate inspection, identify defects in real time and run predictive analytics on production quality.</p>
            </div>
        </div>
        <div className='actioncol'   >
            <div className='actionimg' >
                <img src={Ins} alt="ACtion-recognition" loading='lazy' height='400' width='600' />
            </div>
        </div>
      </div>

      {/* <div className='aboutaction'  >
        <div className='aboutactionhead'>
        <p className='h'><span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Hypervise Inspection</span></p>
         <p className='p'>Elevating Quality Control</p>
        </div>
        <div className='aboutactionpara'>
            <p>Experience the future of quality control with AI-driven inspection that ensures flawless products every time.
                 Witness how our cutting-edge computer vision detects defects and streamlines your inspection processes.</p>
        </div>
      </div> */}
      
      <div className='benefit'>
        <div className='benefithead' style={{backgroundColor: mode?'#142044' : '#ffffff',boxShadow:!mode &&'0px 3px 5px grey'}} >Key Features</div>
        <div className='brow'>
          <div className='bcol' style={{backgroundColor: mode?'#142044' : '#ffffff', boxShadow: !mode && '0px 2px 3px grey'}} >

              <div className='matters'><span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Automated Inspection</span> <br /><br />AI-powered algorithms perform meticulous inspections with unrivaled precision.</div>
          </div>
          <div className='bcol' style={{backgroundColor: mode?'#142044' : '#ffffff', boxShadow: !mode && '0px 2px 3px grey'}} >

              <div className='matters'><span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Consistent Quality</span> <br /><br /> Eliminate manual errors and maintain consistent product quality throughout.</div>
          </div>
        </div>
        <div className='brow'>
          <div className='bcol' style={{backgroundColor: mode?'#142044' : '#ffffff', boxShadow: !mode && '0px 2px 3px grey'}} >

              <div className='matters'><span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Faster Production</span> <br /><br /> Accelerate your production line with faster and reliable inspection processes.</div>
          </div>
          <div className='bcol' style={{ backgroundColor: mode?'#142044' : '#ffffff', boxShadow: !mode && '0px 2px 3px grey'}} >

              <div className='matters'><span style={{color: mode ? '#69b3e7': '#1e2d5b'}} >Flexible Integration</span> <br /><br />Seamlessly integrate our inspection solutions into your manufacturing setup.</div>
          </div>
        </div>
      </div>

      <div className='acd' style={{width:'100%'}} >
        <div className='acdhead'>
        <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Unleash the Potential of Quality Control</span>
        </div>
        <div className='acdpara'>
        Never compromise on product quality. Elevate your quality control with Hypervise Inspection and deliver excellence to your customers.<br/><br/>
        <p>Ready to Enhance Your Quality Control?</p>
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

export default Inspection
