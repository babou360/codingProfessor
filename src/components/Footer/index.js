import React from 'react';
import './styles.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='contact-wrapper'>
                <h2>Connect</h2>
                <div className='social-icons'>
                    <a href='https://www.facebook.com/babou360/' target='_blank' rel='noopener noreferer'>
                        <div className="back">
                        <i class="fab fa-facebook-f fa-1x"></i>
                        </div>
                    </a>
                    <a href='https://api.whatsapp.com/send?phone=+255755865470' target='_blank' rel='noopener noreferer'>
                        <div className="back">
                        <i class="fab fa-whatsapp fa-1x"></i>
                        </div>
                    </a>
                    <a href='https://www.twitter.com/babou360/' target='_blank' rel='noopener noreferer'>
                        <div className="back">
                        <i class="fab fa-twitter"></i>
                        </div>
                    </a>
                    <a href='mailto:leebabou@gmail.com' target='_blank' rel='noopener noreferer'>
                        <div className="back">
                        <i class="fas fa-envelope fa-1x"></i>
                        </div>
                    </a>
                </div>
            </div>
            <div className='all-rights'>
                <div className='para'>
                <p>All Rights Reserved @Coding Professor| 2020</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
