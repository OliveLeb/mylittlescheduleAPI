import React from 'react';



const Footer = () => {

    const footerStyle = {
        color:'#fff',
        background: 'linear-gradient(90deg,rgba(131, 58, 180, 1) 0%,rgba(253, 29, 29, 1) 50%,rgba(252, 176, 69, 1) 100%)'
    };
    const footerLink = {
        color:'#fff'
    };

    return (
        <footer style={footerStyle}>           
            Créé par {' '}
            <a href='https://cv.lebelolivier.fr' target='_blank'
            rel='noopener noreferrer' style={footerLink}>Olivier Lebel</a>
            {' '} - 2020 &copy;
        </footer>
    )
}

export default Footer;
