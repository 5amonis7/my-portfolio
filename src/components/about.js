import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const about = () => {
    const github ={url: "https://www.github.com/5amonis7"}
    const facebook = {url: "https://www.facebook.com/andrew.monis/"}
    const linkedin = {url: "https://www.linkedin.com/in/andrew-monis-022681209"}
    return (
    <div>
        <div className="about">
            <h1 className="about-text">About:</h1>
        </div>
            <div className="about-me">
                <h3 className="about-me_text">Since July of 2021, I have been driven to excel in creating responsive applications. I am a self taught programmer learning all that I can to create efficient projects and software. Being able to create something from scratch and watch it all come together is something I enjoy. I will be expanding my knowledge and gaining more skillsets to create all kinds of applications.</h3>
                <div className="about-me_line"></div>
                <div className="about-icons">
                    <a rel={'noreferrer'} target="_blank" href={facebook.url}><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a rel={'noreferrer'} target="_blank" href={github.url}><FontAwesomeIcon icon={faGithub} /></a>
                    <a rel={'noreferrer'} target="_blank" href={linkedin.url}><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>                
            </div>
    </div>    
    )
}

export default about
