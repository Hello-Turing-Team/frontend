import React, {useState} from 'react'
import './login.css'

export const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = () => {
        fetch('https://api.edu-alem.kz/api/login', {
            method: "POST",
            body: JSON.stringify({
                email,
                password
            })
        })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="auth-layout">
            <form className="auth-layout__form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email" onChange={handleEmailChange} />
                <input type="password" placeholder="Password" onChange={handlePasswordChange} />
                <button onClick={onSubmit}>Login</button>
            </form>
        </div>
    )
}
