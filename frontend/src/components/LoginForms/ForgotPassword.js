import React from 'react'

export default function ForgotPassword() {
    return (
        <div 
            className="forgot-password bold-red" 
            onClick={() => {
                console.log('User clicked in forgot password');
            }}
            style={{ marginTop: '20px'}}
        >
            Forgot Password ?
        </div>
    )
}
