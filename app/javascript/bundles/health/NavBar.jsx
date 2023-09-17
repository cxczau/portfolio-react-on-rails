import React, { useReducer, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LeftHandMenu from '../common/NavBar/LeftHandMenu';
import RightHandMenu from '../common/NavBar/RightHandMenu';

const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <LeftHandMenu />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          iStrive
        </Typography>
        <div>
          <RightHandMenu />
        </div>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;