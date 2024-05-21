import {AppBar, Button, Tab, Tabs, TextField, Toolbar, Typography } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const [value,setValue] = useState();
  return (
    <React.Fragment>
        <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
           <LiveTvIcon/>
           <Tabs textColor='inherit' value={value} onChange={(e,value)=>setValue(value)}>
              <Tab label="Movies"/>
              <Tab label="TvShows"/>
              <Tab label="Sports"/>
              <Tab label="Favorites"/>
              <Tab label="WatchLater"/>
              <Tab/>
              <Typography sx={{ display: 'flex', alignItems: 'center', width:"200px",
                 justifyContent:"center", mr: 2, background:"inherit",position:"relative"}}>
                <SearchIcon sx={{ mr: 1 ,color:"white",
                position:"absolute",Top:"2px",left:"0px",cursor:"pointer"}} size="small"/>
              <TextField 
                hiddenLabel
                id="filled-hidden-label-small"
                variant="filled" 
                sx={{marginLeft:"20px",background:"white",height:"37px",width:"207px"}}
                />
           </Typography>
           </Tabs>
           <Button sx={{marginLeft:"auto"}} variant='contained'>Login</Button>
           <Button variant='contained' sx={{marginLeft:"10px"}}>SignUp</Button>
      </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Header
