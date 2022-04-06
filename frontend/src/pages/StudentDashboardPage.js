import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import {
    StudentDetail,
    StudentDashboardSidebar,
    StudentDashboardNavbar
} from '../components/index.js';

const drawerWidth = 240;

export default function StudentDashboardPage(props) {
    
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            
            <CssBaseline />
            
            <StudentDashboardNavbar
                handleDrawerToggle={handleDrawerToggle}
                drawerWidth={drawerWidth}
            />
            
            <StudentDashboardSidebar 
                props={props} 
                mobileOpen={mobileOpen} 
                drawerWidth={drawerWidth}
                handleDrawerToggle={handleDrawerToggle}
            />

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <StudentDetail />
            </Box>
        </Box>
    );
}