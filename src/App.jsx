import React, { useState } from 'react'
import {LoginPage} from "./pages/login";

const MainPage = ({ routeTo }) => {
    return (
        <div>
            MainPage
            <button onClick={() => routeTo("login")}>Login</button>
        </div>
    )
}

export const App = () => {
    const [page, setPage] = useState('login')

    const routeTo = (page) => {
        setPage(page)
    }

    return (
        <div>
            {page === 'main' ? <MainPage routeTo={routeTo} /> : null}
            {page === 'login' ? <LoginPage routeTo={routeTo} /> : null}
        </div>
    )
}
