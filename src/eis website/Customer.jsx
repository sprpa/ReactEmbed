import React from "react";


function Customer(){
    return(
        <div className="customer-login">
            <nav className="navbar navbar-expand-xl sticky-top back" id="nav-bar">
                <div className="container-fluid">
                <a className="navbar-brand me-auto ps-lg-5 ps-3" href="index.html">
                    <img src="Subtract.png" alt="Logo"  className="img-fluid"></img>
                        <span className="text-black-50 ms-5 fs-6 fw-bold d-none d-md-inline">Call US:</span> <span class="text-black fs-6 fw-bold d-none d-md-inline">+91 70326 66100</span>
                </a>
                <div className="pe-3">
                    <span><img src="Union.svg" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" alt=""></img></span>  
                </div>
        
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav position-relative mx-auto mb-2 mb-lg-0 gap-0 gap-xxl-3">
                    <li className="nav-item ">
                        <a className="nav-link fw-bold text-black-50" href="aboutus.html">About Us</a>
                    </li>
                    <li className="nav-item dropdown ">
                        <a className="nav-link fw-bold text-black-50 " role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">Capabilities <span class="fs-6 ">+</span></a>
                        <ul className="dropdown-menu position-absolute rounded-0 margin">
                        <li className=""><a className="dropdown-item  px-5 " href="Npi-page.html">New Product Introduction</a></li>
                        <li className=""><a className="dropdown-item px-5 " href="pcb-page.html">PCB Assembly & Box Build</a></li>
                        <li className=""><a className="dropdown-item px-5 " href="Electroinc-manufacturing.html">Electronic Manufacturing</a></li>
                        <li className=""><a className="dropdown-item px-5 " href="#">Flexible Volume High Mix</a></li>
                        <li className=""><a className="dropdown-item px-5 " href="Product-testing.html">Product Testing</a></li>
                        <li className=""><a className="dropdown-item px-5 " href="After_sales.html">After Sales & Warranty</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown ">
                        <a className="nav-link fw-bold text-black-50 " role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">Customer & Partners</a>
                        <ul className="dropdown-menu position-absolute rounded-0 top">
                        <li className=""><a class="dropdown-item  px-5 " href="Customer_Login.html">Customer Login</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold text-black-50" href="Galary.html">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold text-black-50" href="Contact_Us.html">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold text-black-50" href="#">Blog</a>
                    </li>
                    </ul>

                    <ul class="navbar-nav  ms-auto gap-2 me-3 mb-2 d-none d-xxl-flex mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fas fa-brands fa-facebook-square fs-5 text-black-50"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa-brands fa-instagram fs-5 text-success"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fas fa-brands fa-twitter fs-5 text-black-50"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fas fa-brands fa-youtube fs-5 text-black-50"></i></a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                    <img src="Group 3597.svg" className="img-fluid d-none d-xxl-flex" alt=""></img>
                    </span>

                </div>

                </div>
            </nav>

            <section className=" py-4 pt-5" id="section_1">
                <div className="container">
                    <h6 className=" heading1 text-uppercase">Customer & Partners</h6>
                    <h6 className="main-heading">Customer Login</h6>
                </div>
            </section>

            <section className="py-5 position-relative" id="section-2">
                <div className="d-flex justify-content-center">
                    <div className=" py-5 ">
                        <div className="p-2 p-sm-3 p-md-4 p-lg-5 ground">
                            <h6 className="login-head">Login</h6>
                            <p className="login-des ">Welcome !  Please enter your login details</p> 

                            <form action="">
                                <div className="p-2 p-sm-3 p-md-4 p-lg-4">
                                    <div className=" mb-4 ">
                                        <label for="exampleFormControlInput1" className="form-label username">User Name <span class="ms-2">*</span> </label>
                                        <input type="email" className="form-control bord" id="exampleFormControlInput1" placeholder="Enter User Name"></input>
                                    </div>
                                    <div className=" mb-4">
                                        <label for="exampleFormControlInput1" className="form-label username">Password <span class="ms-2">*</span> </label>
                                        <input type="password" className="form-control bord" id="exampleFormControlInput1" placeholder="***********"></input>

                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
                                        <label className="form-check-label remeber" for="invalidCheck2">
                                            Remember me
                                        </label>
                                    </div>
                                    <button className="login mt-4 btn w-100 rounded-0 but">LOGIN</button>
                                </div>
                            </form>
                            
                            
                        </div>

                    </div>
                </div>
                <div class="position-absolute d-none d-lg-block grp" >
                    <img src="Group 2.png" alt=""></img>
                </div>
            </section>

            <footer className="position-relative footer">
                <div className="container  p-sm-3 p-md-4 p-lg-5  py-5">
                    <div className="">
                        <div className="row ">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
                                <div className=" address-layout ">
                                    <h6 className="footer-heading mb-4 ">Registered Office</h6>
                                    <p className="plant-address-des">Plot No.25/B, HardwarePark, Kancha
                                        Imarat, Pahadi Shareef, Srisailam 
                                        Highway, Hyderabad – 500005,
                                        Telangana, India.</p>

                                        <h6 className="footer-heading mb-4">Plant Address</h6>
                                    <p className="plant-address-des">Plot No.5, Fab City SEZ, 
                                        Srinagar Village, Maheshwaram Mandal, 
                                        Ranga Reddy District, Hyderabad – 501359,
                                        Telangana, India.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
                                <div className="quicklink-layout">
                                    <h6 className="quick-head">Quick links</h6>
                                    <p className="des-link m-0">Home</p>
                                    <p className="des-link m-0">About us</p>  
                                    <p className="des-link m-0">Capabilities</p> 
                                    <p className="des-link m-0">Facilities</p>
                                    <p className="des-link m-0">Industries</p>
                                    <p className="des-link m-0">Gallery</p>
                                    <p className="des-link m-0">Clients</p>
                                    <p className="des-link m-0">Contact Us</p>
                                    <p className="des-link m-0">Blog</p>

                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
                                <div className="contact-layout">
                                    <h6 className="contact-head">Contact Us</h6>
                                    <h6 className="contact-phone">+91-7032666100</h6>
                                    <h6 className="contact-email">mail: enquiry@embedits.com</h6>
                                    <h6 className="social">Social</h6>
                                    <div className="d-flex justify-content-between mt-5 width">
                                        <i className="fb-layout fas fa-brands fa-facebook-f"></i>
                                        <i className="insta-layout fas fa-brands fa-instagram"></i>
                                        <i className="twi-layout fas fa-brands fa-twitter"></i>
                                        <i className="you-layout fas fa-brands fa-youtube"></i>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
                                <div className="location-layout">
                                    <h6 className="location-head">Location</h6>
                                    <div className="location-map mt-3">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15245.827696226495!2d78.4921026!3d17.1966093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba4d8b485172d%3A0x935b54b1d7579269!2sEmbedded%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1703761792241!5m2!1sen!2sin" width="100%" height="290" /*style="border:0;"*/ allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="customer-login">
                    <div className=" whats-app-icon login">
                        <img className="img-fluid " src="Group 3706.png" alt=""></img>
                    </div> 
                </div>
                

                <div className="copy">
                    <h6 className="copyright py-4 text-center m-0">© 2023 embedits.com, All rights reserved</h6>

                </div>
            </footer>

        </div>
    )
}
export default Customer