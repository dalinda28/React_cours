function ButtonMode({ darkTheme, setDarkTheme }) {
    const iconStyle = {
        position: 'absolute',
        top: '5px',
        right: '20px',
    }

    const changeTheme = () => {
        setDarkTheme(prevTheme => !prevTheme);
    }

    return (
        <div>
            <i style={iconStyle}
                aria-hidden="true"
                className={darkTheme ? "fa fa-sun-o fa-6" : "fa fa-moon-o fa-6"}
                onClick={() => changeTheme()}>
            </i>
        </div >
    )
}


export default ButtonMode