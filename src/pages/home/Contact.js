import React from 'react'
import './Contact.css'
import { ModeContext } from '../../components/Navbar'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

function Contact() {
    const {mode} =React.useContext(ModeContext)

    const [emailError, setEmailError] = React.useState('');
    const [phoneError, setPhoneError] = React.useState('');
    const [firstNameError, setFirstNameError] = React.useState('');
    const [lastNameError, setLastNameError] = React.useState('');

    const [alert, setAlert] = React.useState(false);

    const [alert1, setAlert1] = React.useState(false);

 

    const handleCloseAlert = () => {
      setAlert(false);
    };

    const handleCloseAlert1 = () => {
      setAlert1(false);
    };
  


    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNo: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
        
  if (name === 'email') {
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  }

  if (name === 'contactNo') {
    if (!/^\d{10,}$/.test(value)) {
      setPhoneError('Phone number must have 10 or more digits');
    } else {
      setPhoneError('');
    }
  }

    if (name === 'firstName') {
      if (!value) {
        setFirstNameError('First name is required');
      } else {
        setFirstNameError('');
      }
    }
  
    if (name === 'lastName') {
      if (!value) {
        setLastNameError('Last name is required');
      } else {
        setLastNameError('');
      }
    }
  
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();


        let firstNameError = '';
        let lastNameError = '';
        let emailError = '';
        let phoneError = '';
      
        if (formData.firstName === '') {
          firstNameError = 'First Name is required';
        }
        if (formData.lastName === '') {
          lastNameError = 'Last Name is required';
        }
        if (formData.email === '') {
          emailError = 'Email is required';
        }
        if (formData.contactNo === '') {
          phoneError = 'Contact Number is required';
        }
      
        setFirstNameError(firstNameError);
        setLastNameError(lastNameError);
        setEmailError(emailError);
        setPhoneError(phoneError);

        if (!firstNameError && !lastNameError && !emailError && !phoneError){
          setAlert(true)
          try{
      const call= await fetch('https://api.hypervise.ai/',{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
      },
      body:JSON.stringify(formData)
    }
    
      )
      if(call.ok){
        console.log('email sent')
      }
      else{
        console.log('something went wrong')
        setAlert1(true)
      }
    
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          contactNo: '',
          message: ''
        });
      }catch{
        console.log('error while submitting form!');
      }
    }
      };

  return (
    <form onSubmit={handleSubmit} >
    <div style={{height:'100vh',background:mode ? '#060b28' : '#ededed'}} className='contactparent'>
      <Dialog open={alert} onClose={handleCloseAlert} 
      PaperProps={{
        style: {
          background: mode ? '#060b28' : '#ededed',
        },
      }}>
        <DialogTitle sx={{color:mode?'white':'black'}}>Thank You! <ThumbUpOffAltIcon /></DialogTitle>
        <DialogContent>
          <DialogContentText sx={{color:mode?'white':'black'}}>
          Thank you for reaching out to us! We appreciate your interest. We will get in touch with you shortly.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAlert} color="primary" sx={{fontWeight:'bold'}}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={alert1} onClose={handleCloseAlert1} 
      PaperProps={{
        style: {
          background: mode ? '#060b28' : '#ededed',
        },
      }}>
        <DialogTitle sx={{color:mode?'white':'black'}}>Sorry! <SentimentDissatisfiedIcon /></DialogTitle>
        <DialogContent>
          <DialogContentText sx={{color:mode?'white':'black'}}>
              Sorry! Please try submitting the form again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAlert1} color="primary" sx={{fontWeight:'bold'}}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div className='conrow'>
        <div className='concol1' style={{color:mode?'white':'black'}}>
          <p className='p111' style={{color: mode ? '#69b3e7': '#1e2d5b'}}>Contact Us</p>
          <p className='p222' style={{color : mode && '#878fa9'}}>Want to know more about Hypervise ? Submit your information and we’ll reach out to you.</p>
        </div>
        <div className='concol2 ' style={{caretColor:mode?'#115ffb':'black'}}>
            <div className='formrow'>
                <div className='formcol'>
                    <label htmlFor="fname">First Name</label>
                    <input id="fname" type='text' name='firstName' value={formData.firstName}
                  onChange={handleChange} style={{background:mode &&  '#E5EEFF0D' ,border:mode &&' 1px solid  #115ffb',color:mode?'white':'black' }} className={!mode && 'blur'}/>
                 {firstNameError && <p className="error-message">{firstNameError}</p>}
                </div>
                <div className='formcol'>
                    <label htmlFor="lname">Last Name</label>
                    <input id="lname" type='text' name="lastName"
                  value={formData.lastName}
                  onChange={handleChange} style={{background:mode&& '#E5EEFF0D',border:mode &&' 1px solid  #115ffb',color:mode?'white':'black' }} className={!mode && 'blur'} />
                 {lastNameError && <p className="error-message">{lastNameError}</p>}
                </div>
            </div>
            <div className='formrow'>
                <div className='formcol'>
                    <label htmlFor="mail">Email</label>
                    <input id="mail" type='email' name="email"
                  value={formData.email}
                  onChange={handleChange} style={{background:mode&& '#E5EEFF0D',border:mode &&' 1px solid  #115ffb',color:mode?'white':'black' }} className={!mode && 'blur'} />
                  {emailError && <p className="error-message">{emailError}</p>}
                </div>
                <div className='formcol'>
                    <label htmlFor="num">Contact No</label>
                    <input id="num" type='text' name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}  style={{background:mode&& '#E5EEFF0D',border:mode &&' 1px solid  #115ffb',color:mode?'white':'black' }} className={!mode && 'blur'} />
                  {phoneError && <p className="error-message">{phoneError}</p>}
                </div>
            </div>
            <div className='formrow'>
                <div className='formcol colend'>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"
                  value={formData.message}
                  onChange={handleChange}  rows="8" cols="50" style={{background:mode&& '#E5EEFF0D',border:mode &&' 1px solid  #115ffb',color:mode?'white':'black' }} className={!mode && 'blur'} >
                    </textarea>
                </div>
            </div>
            <div className='formrow'>
                <div className='formcol colend'>
                    <button className='formsubmit' type='submit' style={{border:mode?'2px solid white' : '2px solid transparent'}} >Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
    </form>

  )
}

export default Contact






