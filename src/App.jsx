import React, { useState } from 'react'
import { Button } from "./components/Button";

const MainPage = ({ routeTo }) => {
    return (
        <div>
            MainPage
            <button onClick={() => routeTo("about")}>Go to About page</button>
        </div>
    )
}

const AboutPage = ({ routeTo }) => {
    return (
        <div>
            About Page
            <button onClick={() => routeTo("main")}>Go to Main page</button>
        </div>
    )
}

export const App = () => {
    const [page, setPage] = useState('main')

    const routeTo = (page) => {
        window.location.replace(`/${page}`)
        setPage(page)
    }

    return (
        <div>
            {page === 'main' ? <MainPage routeTo={routeTo} /> : null}
            {page === 'about' ? <AboutPage routeTo={routeTo} /> : null}
        </div>
    )
}
