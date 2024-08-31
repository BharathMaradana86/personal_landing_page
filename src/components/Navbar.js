import './Navbar.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../images/hypervise-head-white.png';
import LogoBlue from '../images/hypervise-head-darkblue.png';
import {  Outlet} from 'react-router-dom';
import About from '../pages/home/About';
import {Link} from 'react-router-dom';
import YourImage from '../images/hypervise-logo.png';
import YourImageWhite from '../images/Logo V-19.png';
import apple from '../images/apple-touch-icon.png';
import icon from '../images/hypervise-head-white.png';


const drawerWidth = 240;

export const ModeContext = React.createContext();





function Navbar({children,window}) {


  // const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setIsDropdownOpen(true);
  // };

  // const handleClose = () => {
  //   setIsDropdownOpen(false);
  // };


  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [mode, setMode] = React.useState(() => {
    const appmode = localStorage.getItem('appmode');
    return appmode !== null ? JSON.parse(appmode) : true;
  });
  
  const handleMode = () => {
    setMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('appmode', JSON.stringify(newMode));
      return newMode;
    });
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  const drawer = (
    
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        Mui
      </Typography>
      <Divider /> */}
      <List>
      <ListItem disablePadding >
              <ListItemButton  component={Link} to={"/"}
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',           
                  px: 2.5,
                  paddingTop:5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: 'center',
                  }}
                >
                <img src={mode? apple : apple} alt="logo" style={{ width: '100%', height: '200px'}} loading='lazy' /> 

                </ListItemIcon>
              </ListItemButton>
            </ListItem>

          <ListItem disablePadding className='sidebarelement' sx={{marginTop:'5px',color:mode?'white':'#1e2d5b'}}>
            <ListItemButton component={Link} to="/surveillance" sx={{ py:2 }}>
                <p style={{fontSize:'20px',marginLeft:'40px',marginTop:'5px'}}>Surveillance</p>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding className='sidebarelement' sx={{color:mode?'white':'#1e2d5b'}}>
            <ListItemButton component={Link} to="/action" sx={{ py:2 }}>
                <p style={{fontSize:'20px',marginLeft:'10px'}}>Action Recognition</p>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding className='sidebarelement' sx={{color:mode?'white':'#1e2d5b'}}>
            <ListItemButton component={Link} to="/inspection" sx={{ py:2 }}>
                <p style={{fontSize:'20px',marginLeft:'45px'}}>Inspection</p>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding className='sidebarelement' sx={{color:mode?'white':'#1e2d5b'}}>
            <ListItemButton component={Link} to="/about" sx={{ py:2 }}>
                <p style={{fontSize:'20px',marginLeft:'50px'}}>Company</p>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding className='sidebarelement' sx={{color:mode?'white':'#1e2d5b'}}>
            <ListItemButton sx={{ py:2 }} component={Link} to="/contact">
                <p style={{fontSize:'20px',marginLeft:'43px'}}>Contact Us</p>
            </ListItemButton>
          </ListItem>

      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ModeContext.Provider value={{mode}}>
    <Box sx={{ display: 'flex' , flexDirection: 'column', height: '100vh',background:mode ? '#060b28' : '#ededed',color:mode?'white':'black',paddingLeft:{xs : '20px',sm: '50px'},paddingRight:{xs : '20px',sm: '50px'}}}>
      <CssBaseline />
      <AppBar component="nav" sx={{background:mode ? '#060b28' : '#ededed',color:mode?'white':'black',paddingLeft:{xs : '20px',sm: '50px'},paddingRight:{xs : '20px',sm: '50px'},boxShadow:'none',paddingTop:'5px'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' }}}
              
            >
              <MenuOpenIcon sx={{ fontSize: '35px' }} />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              component={Link}
              to='/'
              sx={{ mr: 2, display: { sm: 'none' }}}
              
            >
            <img src={icon} alt='icon' loading='lazy'  style={{width:'160px',height:'50px'}}/>
            </IconButton>
            <Box
              sx={{ display: { xs: 'none', sm: 'block' } }} component={Link}
              to='/'
            >
            <img
            src={!mode ? LogoBlue : Logo}
            alt="logo"
            style={{
                height: '40px',
                width: '120px',
                paddingTop:'5px'
                
                
            }}
            loading='lazy'
            
            />    
            </Box>    
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                marginLeft: 5,
              }}
            >
               <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: 'transparent',
          color: mode ? 'white' : 'black',
          textTransform: 'capitalize',
          marginRight: 5,
        }}
        endIcon={<ArrowDropDownIcon />}
      >
        Solutions
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <MenuItem disabled>Solutions</MenuItem> */}
        <MenuItem component={Link} to="/surveillance">
          Surveillance
        </MenuItem>
        <MenuItem component={Link} to="/action">
          Action Recognition
        </MenuItem>
        <MenuItem component={Link} to="/inspection">
          Inspection
        </MenuItem>
      </Menu>
            {/* <Select
                label='Solutions'
                displayEmpty={false} 
                outlined={false} 
                open={isDropdownOpen}
                onOpen={handleOpen}
                onClose={handleClose}
                sx={{
                    backgroundColor: 'transparent',
                    color: mode ? 'white' : 'black',
                    textTransform: 'capitalize',
                    '& .MuiSelect-icon': {
                      color: mode ? 'white' : 'black', 
                    },
                    '. MuiOutlinedInput-notchedOutline' : {
                        border:'none !important',
                    },
                    marginRight: 5,
                  }}
                IconComponent={ArrowDropDownIcon} 
                >
                {/* {!isDropdownOpen && <MenuItem value="solutions" disabled>
                    Solutions
                </MenuItem>} 
                <MenuItem value="surveillance" component={Link} to='/surveillance' >Surveillance</MenuItem>
                <MenuItem value="actionRecognition" component={Link} to='/action'>Action Recognition</MenuItem>
                <MenuItem value="inspection" component={Link} to='/inspection'>Inspection</MenuItem>
            </Select> */}
            <Button sx={{  marginRight: 5,color:mode?'white':'black',textTransform:'capitalize'}} component={Link} to='/about'>
                Company
            </Button>
            </Box>
          </Box>
          <Box sx={{ display: {xs:'none' ,sm:'flex'}, alignItems: 'center' }}>
            <Button className='stm' sx={{marginRight:5,textTransform:'capitalize',border: mode ? '2px solid white' : '2px solid transparent'}} component={Link} to='/contact'>Contact Us</Button>
            {/* <label class="switch">
            <input type="checkbox" checked={mode} onChange={handleMode} defaultChecked/>
            <span class="slider"></span>
          </label> */}
          </Box>
          {/* <Box sx={{ display:{xs:'flex' ,sm:'none'}, alignItems: 'center' }}>
          <label class="switch">
            <input type="checkbox"  checked={mode} onChange={handleMode} defaultChecked/>
            <span class="slider"></span>
          </label>
          </Box> */}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth , background:mode ? '#060b28' : 'white',color:mode?'white':'black'},
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 0}}>
        <Toolbar />
        
        {children}
        <Outlet />
      </Box>
    </Box>
    </ModeContext.Provider>
  );
}



export default Navbar;
