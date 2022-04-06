import React,{
    useState
} from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SignInButton from './SignInButton';
import ForgotPassword from './ForgotPassword';
import NoAccount from './NoAccount';
export default function StudentLogin({width , isCRC}) {
    console.log(width , isCRC);
    const [values,setValues] = useState({
        enrol : '',
        password : ''
    })

    const inputFieldWidth = '70%';

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log( values );
    };
    
    const handleClickShowPassword = () => {
        setValues({
        ...values,
        showPassword: !values.showPassword,
        });
    };    

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="login-form" >
            <TextField
                id="standard-search"
                label="Enrollment Number"
                type="search"
                variant="standard"
                sx={{ m: 1, width: inputFieldWidth }}
                value={values.enrol}
                onChange={handleChange('enrol')}
            />
            <FormControl sx={{ m: 1, width: inputFieldWidth }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControl>
            <ForgotPassword />
            <SignInButton />
            {
                !isCRC && <NoAccount/>
            }


        </div>
    )
}
