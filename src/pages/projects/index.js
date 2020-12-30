import React,{} from 'react';
import Coder from './../../assets/coder.jpg';
import store from './../../assets/store1.jpg';
import house from './../../assets/house2.png';
import date from './../../assets/date1.jpg';
import './styles.css';

const Projects = () => {
    return (
        <div>
            <div className='projects'>
                <div className='project'>
                    <div className='items'>
                        <h2>Elegant Store</h2>
                        <p>This is a web application made using React js a javascript library for web development and Firebase for backend it is a replica of Elegant Store web application</p>
                        <div className='buttons'>
                            <a href='https://errandiaga-d0e2e.firebaseapp.com/' className='live'>see Live</a>
                            <a href='https://github.com/babou360/' className='source'>Source Code</a>
                        </div>
                    </div>
                    <div className='project-image'>
                        <img src={store}/>
                    </div>
                </div>

                <div className='project'>
                    <div className='items'>
                        <h2>Dayas Dating</h2>
                        <p>The Dayas Dating website is Dating site developed using React js a javascript library and Hosted on Firebase.</p>
                        <div className='buttons'>
                            <a href='https://www.dayasdating.com/' className='live'>see Live</a>
                            <a href='https://github.com/babou360/' className='source'>Source Code</a>
                        </div>
                    </div>
                    <div className='project-image'>
                        <img src={date}/>
                    </div>
                </div>

                <div className='project'>
                    <div className='items'>
                        <h2>Land Lord Tanzania</h2>
                        <p>This is Android Mobile Application developed using Dart Programming language and Firebase as a Back end you can find it on Google Play.</p>
                        <div className='buttons'>
                            <a href='https://play.google.com/store/apps/details?id=com.babou360.landlordtanzania&hl=en' className='live'>see Live</a>
                            <a href='https://github.com/babou360/' className='source'>Source Code</a>
                        </div>
                    </div>
                    <div className='project-image'>
                        <img src={house}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;