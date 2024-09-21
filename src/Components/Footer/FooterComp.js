import React from 'react'
import "../Footer/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';




export default function FooterComp() {
  return (
    <div>
          <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="rowf">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                        
                            <div class="cta-text">
                            <FontAwesomeIcon icon={faLocationDot} size="2xl" style={{color: "#b09be6", paddingBottom:'20px'}} />
                                <h4>Find us</h4>
                                <span>80/9, Ganeramba, Beruwala, Sri Lanka.</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                            <FontAwesomeIcon icon={faPhoneVolume} size="2xl" style={{color: "#b09be6", paddingBottom:'20px'}} />  
                                <h4>Call us</h4>
                                <span>+94 77 590 9351</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                            <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "#b09be6", paddingBottom:'20px'}} />
                                <h4>Mail us</h4>
                                <span>contact@eventticket.lk</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src="https://i.ibb.co/1bBxbPC/event-ticketlk-low-resolution-logo-color-on-transparent-background.png" class="img-fluid" alt="logo"/></a>
                            </div>
                            <div class="footer-text-L">
                                <p>Discover the convenience of Ticket Event, your go-to platform for seamless and stress-free ticket booking experiences.</p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><FontAwesomeIcon icon={faFacebook} size="xl"style={{ marginRight:'20px'}}/></a>
                                <a href="#"><FontAwesomeIcon icon={faTwitter} size="xl" style={{ marginRight:'20px'}}/></a>
                                <a href="#"><FontAwesomeIcon icon={faGooglePlus} size="xl" style={{ marginRight:'20px'}}/></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form class="formmail"action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><FontAwesomeIcon icon={faEnvelope} /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2023, All Right Reserved. Developed by <a href="https://github.com/DilumVihanga">Dilum Vihanga</a></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}
