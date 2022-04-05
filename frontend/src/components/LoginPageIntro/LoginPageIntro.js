import React from 'react'
import './LoginPageIntro.scss'
export default function LoginPageIntro() {
    return (
        <div className="login-page-intro" >
            <h1 className="login-page-title" >
                One stop portal for students & companies for placements at 
                <span className="college-name" > National Institute of Technology Srinagar.</span>
            </h1>
            <br/>
            <br/>
            <img
                src="./assets/images/logo.png"
                alt="NIT Srinagar Logo"
                height="200"
                width="200"
            />
        </div>
    )
}
