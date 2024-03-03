import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import { Link as LinkRoute } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCart';

import { useSelector } from 'react-redux';

export default function NavBar() {
    const cartProducts = useSelector(state => state.Mycart)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ mr: 8 }}>
                        Redux ToolKit
                    </Typography>
                    <Link to="/dashboard" as={LinkRoute} underline="none" color={'white'} sx={{ flexGrow: 1 }}>
                        Products
                    </Link>
                    <Link to='/cart' as={LinkRoute} sx={{color:'white'}} underline="none">
                        <IconButton sx={{color:'white'}}>
                            <ShoppingCartOutlinedIcon/>
                        </IconButton>
                        {cartProducts.length}
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}