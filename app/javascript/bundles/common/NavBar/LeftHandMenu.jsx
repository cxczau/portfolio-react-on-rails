import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const LeftHandMenu = (handleNavigate) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOverviewNavigation = () => {
    window.location.href = '/health?page=overview';
  }

  const handleDashboardNavigation = () => {
    window.location.href = '/health?page=dashboard';
  }

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={handleMenu}
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={!!anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOverviewNavigation}>Overview</MenuItem>
        <MenuItem onClick={handleDashboardNavigation}>Survey Type A</MenuItem>
        <MenuItem onClick={handleDashboardNavigation}>Survey Type B</MenuItem>
        <MenuItem onClick={handleDashboardNavigation}>Survey Type C</MenuItem>
      </Menu>
    </>
  );
}

export default LeftHandMenu;