import { Navbar } from 'react-bootstrap'
import ButtonMode from './ButtonMode'
import { useState } from "react";

function Header() {
    const [darkTheme, setDarkTheme] = useState(false)

    return (
        <Navbar className={darkTheme ? 'navbar-dark bg-dark' : 'navbar-white bg-white'}>
            <Navbar.Brand href="home">
                Cours React
            </Navbar.Brand>
            <ButtonMode
                darkTheme={darkTheme}
                setDarkTheme={setDarkTheme} />
        </Navbar>
    )
}

export default Header;