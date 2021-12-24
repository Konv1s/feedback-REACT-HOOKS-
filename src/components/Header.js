import React from 'react';
import PropTypes from 'prop-types'

function Header({text, bgBack}) {

    const stylesHeader = {
        backgroundColor: bgBack
    }

    return (
        <>
            <header style={stylesHeader}>
                    <h2>{text}</h2>
            </header>
        </>
    )
}

Header.defaultProps = {
    text: 'Default props'
}

Header.propTypes = {
    text: PropTypes.string,
    bgBack: PropTypes.string,
}

export default Header;