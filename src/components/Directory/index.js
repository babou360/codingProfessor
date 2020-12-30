import React, { useRef,useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import './styles.css'


const Home = () => {
    let about = useRef(null);
    let tech = useRef(null);
    let service = useRef(null);

    useEffect(() => {
        TweenMax.to(
            about,
            .8,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut
            }
        )
        TweenMax.to(
            tech,
            .8,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut,
                delay: .7
            }
        )
        TweenMax.to(
            service,
            .8,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut,
                delay: .99
            }
        )
    })
    return <div>
        <div className='hero'>
            <div className='hero-content'>
            <div className='hero-logo'>
                <h6>CP</h6>
            </div>
            <div className='hero-desc'>
                <h1>Hi I'm Babou</h1>
                <p>Mobile & Web Development</p>
                <h1 className="engineer">Engineer</h1>

                <div className='buttons'>
                    <a href="https://www.youtube.com/channel/UCXpnPBN-NgX13EKcccOeL3Q?view_as=subscriber" target='_blank' rel='noopener noreferer'>
                        <div className='youtube'>
                            <p className='watch'>Watch me </p>
                            <i className='icon-u' className='far fa-play-circle' />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/babou360" target='_blank' rel='noopener noreferer'>
                        <div className='youtube'>
                            <p className='watch'>Follow On</p>
                            <i className='icon-u' class="fab fa-instagram"></i>
                        </div>
                    </a>
                </div>
            </div>
            </div>
        </div>
        <div className='about-container'>
            <div className='about-me' ref={el => {about = el}}>
                <h1>ABOUT</h1>
                <p><span>Coding Professor</span> was found by <span>Babou</span> a Software Development Engineer born and raised in the city of <span>Arusha</span> in Tanzania.He went to <span>University of Dodoma</span> at the college of Informatics and Virtual Education from 2016 and graduated in 2019 but did not attend the Graduation ceremony</p>
            </div>
            <div className='about-me' ref={el => {tech = el}}>
                <h1>TECHNOLOGIES</h1>
                <p>Here at Coding Professor we use a variety of Technologies and Programming Languages from Javascript(React & Node ), Dart(Flutter) Sequelize(MySql, PostgreSql, MariaDb, Oracle etc), Online based Servers such as Firebase & MongoDb and Backend Development Frameworks such as GraphQl & Restful Api</p>
            </div>
            <div className='about-me' ref={el => {service = el}}>
                <h1>SERVICES</h1>
                <div className='service-container'>
                    <div className='service-item'>
                        <i class="fas fa-mobile-alt fa-2x"></i>
                        <h4>MOBILE DEVELOPMENT</h4>
                        <p>We make Both Android and IOS mobile Applications </p>
                    </div>
                    <div className='service-item'>
                        <i class="fas fa-globe-europe fa-2x"></i>
                        <h4>WEB DEVELOPMENT</h4>
                        <p>We make Both websites and Web Applications </p>
                    </div>
                    <div className='service-item'>
                        <i class="fas fa-pencil-alt fa-2x"></i>
                        <h4>UI/UX DESIGN</h4>
                        <p>We make Designs that lead to a great user experience  </p>
                    </div>
                    <div className='service-item'>
                        <i class="fas fa-search-location fa-2x"></i>
                        <h4>SEO</h4>
                        <p>We make your site available on Search Engines(Google,Being,Yahoo etc) in no time </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Home;