import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useWindowDimensions from '../../custom hooks/useWindowDimensions';
import './LoginForms.scss'
import StudentLogin from './StudentLogin';
import RecruiterLogin from './RecruiterLogin';
import CoordinatorLogin from './CoordinatorLogin';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function LoginForms() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    
    const {height , width} = useWindowDimensions();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className="login-forms-container center" >
            <Box sx={{ 
                bgcolor: 'background.paper', 
                width: width < 500 ? 1 : 2/3
            }}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                <Tab label="Student" {...a11yProps(0)} />
                <Tab label="Recruiter" {...a11yProps(1)} />
                <Tab label="CRC" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <StudentLogin width={width} isCRC={false} />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <RecruiterLogin />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <StudentLogin width={width} isCRC={true}/>
                </TabPanel>
            </SwipeableViews>
            </Box>
        </div>
    );
}
