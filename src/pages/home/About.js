import React from 'react'
import './About.css'
import { ModeContext } from '../../components/Navbar';
import { Link } from 'react-router-dom';




function About() {

    const {mode} = React.useContext(ModeContext)
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} className='aboutparent'>
      <div className='aboutrow'>
        <div className='aboutcol1'  style={{color: mode ? '#69b3e7': '#1e2d5b'}}>
          Company
        </div>
        <div className='aboutcol2 ' >
        <span className='hyp' style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Hypervise</span> is designed, developed and operated by <span style={{color: mode ? '#69b3e7': '#1e2d5b'}} className='hyp'>Eternal Robotics</span>. Founded in 2019 in the vibrant city of Hyderabad by four BITSians, we are on a quest to usher in the new era of Industrial operations with <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Robotics and AI. </span>

Our passion for disruptive engineering pushes us to solve the complex problems faced by industrial businesses across the world. 

We aim to deliver the <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>promise of AI</span> and lead the transition into <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Industry 5.0</span> where the focus shifts from data back to people. 

Our multidisciplinary team of senior leadership, business consultants, solution architects, developers and engineers is backed by seasoned investors and mentors from all over the world. <br />

<Link to='https://eternalrobotics.com/' className='linkbtn' ><button className='joinbtn' style={{border:mode?'2px solid white' : '2px solid transparent',marginTop:'15px'}}>Visit Eternal Robotics</button></Link>


        </div>
      </div>

      <div className='join' style={{backgroundColor: mode?'#0a1234' : '#ffffff',boxShadow:!mode&&'0px 3px 5px grey'}} >
        <div className='joinhead'>
        Ready to <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}> Elevate Your Manufacturing Game? </span>
        </div>
        <div className='joinpara'>
        Discover the power of AI-driven solutions tailored to your business. Schedule a demo with our team today.        </div>
        <Link to='https://calendly.com/ajith-nair-er/30min' className='linkbtn' ><button className='joinbtn' style={{border:mode?'2px solid white' : '2px solid transparent'}}>Schedule a Demo Now</button></Link>
      </div>
     
 
      
    </div>
  )
}

export default About




