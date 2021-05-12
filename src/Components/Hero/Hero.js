import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function Hero () {
    return (
        <div>
            <Jumbotron style={{padding: 0}}>
            <video className="video-background" preload="true" muted="true" autoplay="true" loop="true">
                <source src="https://www.freshmealplan.com/Themes/FMPNewTheme/Content/assets/videos/fmp-banner.mp4" type="video/mp4" />
            </video>
            <div className="form-container">
                <Form>
                    <h2 className="main-tagline">Deliciously Healthy Prepared Meals.</h2>
                    <h4 className="second-tagline">Right to your door.</h4>
                    <br />
                    <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" style={{ width: 340 }}/>
                    <br />
                    <Form.Control type="text" placeholder="Zip Code" style={{ width: 340 }} />
                    <br />
                    <Button className="get-started" variant="primary"><Link to="/order" style={{color:"white"}}>Get Started!</Link></Button>
                    </Form.Group>
                    <p class="account-holder">Already have an account?</p>
                    <Button className="login" variant="success">Log In!</Button>
                </Form>
            </div>
            </Jumbotron>
        </div>
    )
}

export default Hero;