import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer() {
    return (
        <div className="site-footer">
            <p>©Galleria 2021</p>
            <p><FacebookIcon/><InstagramIcon/></p>
        </div>
    )
}

export default Footer
