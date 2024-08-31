import React from 'react';
import { ModeContext } from '../../components/Navbar';
import './Home.css';
import comp from '../../images/comp.svg';
import enhance from '../../images/Enhance.svg'
import data from '../../images/data.svg'
import aidata from '../../images/aidata.svg'
import { Link } from 'react-router-dom';
import survaillance from '../../images/survideo.png';
import survaillancewhite from '../../images/survideowhite.png';
import aiblue from '../../images/aiblue.png';
import aiw from '../../images/aiw.png';
import ins1 from '../../images/ins1.png';
import inswhite1 from '../../images/inswhite1.png';
import tata from '../../images/Tata_Projects-removebg-preview.png';
import mahindra from '../../images/Tata_Projects__1_-removebg-preview.png';
import Ashok from '../../images/Ashok.png';
import denso from '../../images/denso-removebg-preview.png';
import cnh from '../../images/cnh.png';
import bellsonica from '../../images/bellsonica-removebg-preview.png';
import virupaksha from '../../images/virupaksha.png';
import maf from '../../images/maf.png';
import taco from '../../images/taco.png';


function Home() {
  const { mode } = React.useContext(ModeContext);

 

  



  const [count4, setCount4] = React.useState(1400);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount4(prevCount => (prevCount === 1500 ? 1400 : prevCount + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [count5, setCount5] = React.useState(100);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount5(prevCount => (prevCount === 200 ? 100 : prevCount + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [count6, setCount6] = React.useState(50);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount6(prevCount => (prevCount === 100 ? 50 : prevCount + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [count7, setCount7] = React.useState(900);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount7(prevCount => (prevCount === 1000 ? 900 : prevCount + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',textAlign:'center' }} className='sec1' >
        <p style={{  marginBottom: '20px' }} className='head1'>Welcome to <span className='head1' style={{color: mode ? '#69b3e7': '#1e2d5b'}} >Hypervise.ai</span></p>
        <p style={{ fontSize: '24px', marginBottom: '30px',textAlign:'center' }} className='head2 '>Where manufacturing meets tomorrow</p>

        <Link to='https://calendly.com/ajith-nair-er/30min' className='linkbtn'><button className='button' style={{border:mode?'2px solid white' : '2px solid transparent'}} >
          Schedule a Demo
      </button></Link>
      </div>

      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'13vh'}} >
      <p style={{ fontSize: '24px', marginBottom: '30px',color: mode ? '#69b3e7': '#1e2d5b' }}  >  Our Clients</p>
      {/* <div className='benefithead' style={{backgroundColor: mode?'#142044' : '#ffffff',boxShadow:!mode && '0px 3px 5px grey', marginBottom: '5vh'}} >Our Clients</div> */}
      <div className="partner-logos" >
        <div className='logo'>
        <img src={taco} alt='tataprojects' className='logoimage' style={{width:'120px'}}/>
        <h2 className='headfade'>Tata AutoComp</h2>
        </div>
        <div className='logo'>
        <img src={mahindra} alt='mahindra' className='logoimage'/>
        <h2 className='headfade'>Mahindra & Mahindra</h2>
        </div>
        <div className='logo'>
        <img src={Ashok} alt='ashok' className='logoimage'/>
        <h2 className='headfade'>Ashok Leyland</h2>
        </div>
        <div className='logo'>
        <img src={denso} alt='denso' className='logoimage' style={{width:'200px'}}/>
        <h2 className='headfade'>Denso</h2>
        </div>
        <div className='logo'>
        <img src={cnh} alt='cnh' className='logoimage' style={{width:'150px'}}/>
        <h2 className='headfade'>CNH</h2>
        </div>
        {/* <div className='logo'>
        <img src={tata} alt='tatamotors' className='logoimage' />
        <h2 className='headfade'>Tata Motors</h2>
        </div> */}
        <div className='logo'>
        <img src={bellsonica} alt='bellsonica' className='logoimage' style={{width:'200px'}}/>
        <h2 className='headfade'>Bellsonica</h2>
        </div>
        <div className='logo'>
        <img src={virupaksha} alt='virupaksha' className='logoimage' style={{width:'100px'}}/>
        <h2 className='headfade'>Virupaksha</h2>
        </div>
        {/* <div className='logo'>
        <img src={maf} alt='maf' className='logoimage' style={{width:'250px'}}/>
        <h2 className='headfade'>MAF Carrefour</h2>
        </div> */}
      </div>
      </div>

    {/* <ScrollTrigger onEnter={()=>setIsCounting(true)} onExit={()=>setIsCounting(false)}> */}
      <div className='numbers '  >
        <div className='num1row'>
          <div className='numcol' >
            
            <h2 className='numcount headfade'>{150}+</h2>
            <h2 className='numhead'>Cameras Integrated</h2>
          </div>
          <div className='numcol' >
            <h2 className='numcount headfade'>{25}+</h2>
            <h2 className='numhead'>Stations Revamped</h2>

          </div>
          <div className='numcol'>
            <h2 className='numcount headfade'>{36}+</h2>
            <h2 className='numhead'>Processes Digitized</h2>

          </div>
          <div className='numcol' >
            <h2 className='numcount headfade'>{12}+</h2>
            <h2 className='numhead'>Models Deployed</h2>

          </div>
        </div>
        <div className='num2row' >
          <div className='numcol' >
            <h2 className='numcount headfade'>{count4}+</h2>
            <h2 className='numhead'>Rework Hours avoided</h2>

          </div>
          <div className='numcol' >
            <h2 className='numcount headfade'>{count5}+</h2>
            <h2 className='numhead'>Hours of Video Processed</h2>

          </div>
          <div className='numcol'>
            <h2 className='numcount headfade'>{count6}+</h2>
            <h2 className='numhead'>Accidents Prevented</h2>

          </div>
          <div className='numcol' >
            <h2 className='numcount headfade'>{count7}+</h2>
            <h2 className='numhead'>Incidents Reported</h2>

          </div>
        </div>
      </div>
    {/* </ScrollTrigger> */}

      
      {/* <div style={{background:!mode&&'#ffffff'}} className='parentrow' > */}
      <div className='row1' >
        <div className='col1' >
          Why Choose <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}> Hypervise </span>
        </div>
        <div className='col2 ' >
        <b style={{color:mode ? 'white' : 'black', fontSize:'20px'}}>Unleashing Manufacturing's Full Potential! </b><br />
        At Hypervise, we understand the challenges faced by modern manufacturing businesses.
         Our unique value proposition lies in providing tailor-made AI solutions that address your specific
          pain points and streamline your operations. By leveraging our platform, you gain access to -  Surveillance: Enhancing Safety and Security, 
          Action Recognition: Optimizing Productivity and Quality, Inspection: Elevating Quality Control.

        </div>
      </div>

      <div className='benefit'>
        <div className='benefithead' style={{backgroundColor: mode?'#142044' : '#ffffff',boxShadow:!mode && '0px 3px 5px grey'}} >Benefits of Hypervise Platform</div>
        <div className='brow'>
          <div className='bcol' style={{backgroundColor: mode?'#142044' : '#ffffff',  boxShadow: !mode && '0px 2px 3px grey'}} >
            <div className='icon' style={{backgroundColor: mode ? '#062876': '#ededed',boxShadow:!mode&&'0px 3px 5px grey' }}>
              <img src={aidata} width='30px' height='30px'  loading='lazy' alt='AIData' />
            </div>
            {/* <div className='matter'> */}
              {/* <div className='matterhead'></div> */}
              <div className= {mode ? 'matter matter1 ' : 'matter matter2'}>
                <p style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Boost Efficiency</p>
                <p className='subtext'>Leverage AI-driven insights to remove bottlenecks.</p>
              </div>
            {/* </div> */}
          </div>
          <div className='bcol' style={{backgroundColor: mode?'#142044' : '#ffffff',  boxShadow: !mode && '0px 2px 3px grey'}} >
          <div className='icon' style={{backgroundColor: mode ? '#062876': '#ededed',boxShadow:!mode&&'0px 3px 5px grey'}}>
              <img src={comp} width='30px' height='30px'  loading='lazy' alt='Competition'/>
            </div>
            {/* <div className='matter'> */}
              {/* <div className='matterhead'></div> */}
              <div className= {mode ? 'matter matter1 ' : 'matter matter2'}>
                <p style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Reduce Cost</p>
                <p className='subtext'>Discover downtime and cost overruns in live production.</p>
              </div>
            {/* </div> */}
          </div>
        </div>
        <div className='brow'>
          <div className='bcol' style={{backgroundColor: mode?'#142044' : '#ffffff',  boxShadow: !mode && '0px 2px 3px grey'}} >
          <div className='icon' style={{backgroundColor: mode ? '#062876': '#ededed',boxShadow:!mode&&'0px 3px 5px grey' }}>
              <img src={enhance} width='30px' height='30px' loading='lazy' alt='Enhance' />
            </div>
            {/* <div className='matter'> */}
              {/* <div className='matterhead'></div> */}
              <div className= {mode ? 'matter matter1 ' : 'matter matter2'}>
                <p style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Enhance Quality</p>
                <p className='subtext'>Identify, track and control defects in real time for increased standards compliance.</p>
              </div>
            {/* </div> */}
          </div>
          <div className='bcol' style={{ backgroundColor: mode?'#142044' : '#ffffff',  boxShadow: !mode && '0px 2px 3px grey'}} >
          <div className='icon' style={{backgroundColor: mode ? '#062876': '#ededed',boxShadow:!mode&&'0px 3px 5px grey' }}>
              <img src={data} width='30px' height='30px' loading='lazy' alt='Data Insights' />
            </div>
            {/* <div className='matter'> */}
              {/* <div className='matterhead'></div> */}
              <div className= {mode ? 'matter matter1 ' : 'matter matter2'}>
                <p style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Data-driven Decisions</p>
                <p className='subtext'>To drive continuous process improvement.</p>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* </div> */}


      <div className='tech'>
        <div className='techhead' style={{backgroundColor: mode?'#142044' : '#ffffff',boxShadow:!mode && '0px 3px 5px grey'}} >Technology & Architecture</div>
        <div className='techpara' ><span style={{color: mode ? '#69b3e7': '#1e2d5b'}}> Hypervise.ai </span> is built on a robust and scalable architecture,
         enabling seamless integration into your existing systems. <br />
          Our platform is powered by <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>state of the art AI models</span>, ensuring <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}> accuracy</span> and <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>precision</span>.
        </div>
      </div>


     

      <div className='explore'>
        <div className='explorehead' style={{backgroundColor: mode?'#0a1234' : '#ffffff',boxShadow:!mode && '0px 3px 5px grey'}} >Explore Our Solutions</div>
        <div className='erow'>
          <div className='ecol '   style={{backgroundColor: mode?'#0a1234' : '#ffffff',boxShadow:mode ? '1px 1px 7px  #115ffb,1px 1px 7px  #115ffb ' : '0px 3px 5px grey'}}>
            <div className='ecolhead' style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Surveillance</div>
            <div className='ecolpara'> Upgrade security, safety, and compliance of your premises through automated surveillance.
            </div>
             <Link to='surveillance'> <button className={mode?'ecolbtn more':'ecolbtn morel'} style={{border:mode?'2px solid white':'2px solid transparent',width:'85%',} } >Know more</button></Link>
          </div>
          <div className='ecol '  style={{backgroundColor: mode?'#0a1234' : '#ffffff',boxShadow:mode ? '1px 1px 7px  #115ffb,1px 1px 7px  #115ffb ' : '0px 3px 5px  grey'}}>
          <div className='ecolhead' style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Action Recognition</div>
            <div className='ecolpara'> Improve adherence to SOPs and identify bottlenecks to enhance overall plant productivity.
            </div>
           <Link to='/action'> <button className={mode?'ecolbtn more':'ecolbtn morel'} style={{border:mode?'2px solid white':'2px solid transparent' ,width:'85%'}} >Know more</button></Link>
          </div>
          <div className='ecol '  style={{backgroundColor: mode?'#0a1234' : '#ffffff',boxShadow:mode ? '1px 1px 7px  #115ffb,1px 1px 7px  #115ffb ' : '0px 3px 5px grey'}}>
          <div className='ecolhead' style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Inspection</div>
            <div className='ecolpara'>Automate quality control processes and reduce defects to increase customer satisfaction.
            </div>
            <Link to='/inspection'><button className={mode?'ecolbtn more':'ecolbtn morel'} style={{border:mode?'2px solid white':'2px solid transparent',width:'85%'}} component={Link} to='/inspection'>Know more</button></Link>
          </div>
        </div>
      </div>

      <div>
      <div className='demo'   >
        <div className='demohead'>
        Ready to <span style={{color: mode ? '#69b3e7': '#1e2d5b'}} > Elevate Your Manufacturing Game? </span>
        </div>
        <div className='demopara'>
        Discover the power of <span style={{color: mode ? '#69b3e7': '#1e2d5b'}} >AI-driven solutions</span> tailored to your business. Schedule a demo with our team today.
        </div>
        <Link to='https://calendly.com/ajith-nair-er/30min' className='linkbtn'><button className='demobtn' style={{border:mode?'2px solid white' : '2px solid transparent'}} >Schedule a Demo Now</button></Link>
      </div>

      
      {/* <div className='contact'  >
        <div className='contacthead'  >
         Get in touch
        </div>
        <div className='contactpara'>
        Discover the power of <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>AI-driven solutions</span> tailored to your business. 
        Contact us today to learn more about how we can <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>elevate your performance</span> ,  
        <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>optimize your processes</span>, and <span style={{color: mode ? '#69b3e7': '#1e2d5b'}}>unlock new opportunities for growth.</span>
        </div>
        <Link to='/contact'><button className='contactbtn' style={{border:mode?'2px solid white':'1px solid transparent' ,marginTop:'5px'}} >Contact Us</button></Link>
      </div> */}
      </div>

    </>
  );
}

export default Home;
