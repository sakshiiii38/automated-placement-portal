import React from 'react'

export default function NoAccount() {
    return (
        <div 
            className="no-account" 
        >
            Don't have account ? 
            <span 
                className="register-now bold-red"
                onClick={() => {
                    console.log('User clicked in register now');
                }}
            > Register now</span>
        </div>
    )
}
