import React from 'react'
import { 
    LoginPageIntro,
    LoginForms
} from '../components/index.js';
export default function LoginPage() {
    return (
        <div className="flex-row" >
            <LoginPageIntro />
            <LoginForms />
        </div>
    )
}
