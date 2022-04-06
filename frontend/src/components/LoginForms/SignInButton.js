import React from 'react'
import Button from '@mui/material/Button';
export default function SignInButton() {
    return (
        <Button 
            variant="contained"
            color="primary"
            sx={{
                borderRadius: '40px',
                marginTop: '20px',
                marginBottom: '20px',
                '&:hover': {
                    backgroundColor: '#f50057',
                    color: '#fff'
                }
            }}
            onClick={() => {
                console.log('User clicked in sign in button');
            }}
        >
            Sign IN
        </Button>
    )
}
