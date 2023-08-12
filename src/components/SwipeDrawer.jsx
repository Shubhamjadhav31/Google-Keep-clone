import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';

// components
import HeaderBar from './HeaderBar';
import NavList from './NavList';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));



const SwipeDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <HeaderBar 
        open={open}
        handleDrawer={handleDrawer}
      />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>
        <NavList/>
      </Drawer>
    </Box>
  );
}

export default SwipeDrawer;