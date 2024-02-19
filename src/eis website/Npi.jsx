import React from "react";


function Npi() {
  return (
    <div className="npibody">

        {/* navbar */}
        <nav className="navbar navbar-expand-xl sticky-top style " id="navbar">
   
    <div className="container-fluid">
      <a className="navbar-brand me-auto ps-lg-5 ps-3" href="index.html">
        <img src="Subtract.png" alt="Logo" className="img-fluid"></img>
        <span className="text-black-50 ms-5 fs-6 fw-bold d-none d-md-inline">Call US:</span> <span
          className="text-black fs-6 fw-bold d-none d-md-inline">+91 70326 66100</span>
      </a>
      <div className="pe-3">
        <span><img src="Union.svg" className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"
            alt=""></img></span>
      </div>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav position-relative mx-auto mb-2 mb-lg-0 gap-0 gap-xxl-3">
          <li className="nav-item ">
            <a className="nav-link fw-bold text-black-50" href="aboutus.html">About Us</a>
          </li>
          <li className="nav-item dropdown ">
            <a className="nav-link fw-bold text-black-50 " role="button" data-bs-toggle="dropdown" aria-expanded="false"
              href="#">Capabilities <span className="fs-6 ">+</span></a>
            <ul className="dropdown-menu position-absolute rounded-0 round " >
              <li className=""><a className="dropdown-item  px-5 " href="npi.html">New Product Introduction</a></li>
              <li className=""><a className="dropdown-item px-5 " href="pcb.html">PCB Assembly & Box Build</a></li>
              <li className=""><a className="dropdown-item px-5 " href="Electroinc-manufacturing.html">Electronic
                  Manufacturing</a></li>
              <li className=""><a className="dropdown-item px-5 " href="#">Flexible Volume High Mix</a></li>
              <li className=""><a className="dropdown-item px-5 " href="Product-testing.html">Product Testing</a></li>
              <li className=""><a className="dropdown-item px-5 " href="After_sales.html">After Sales & Warranty</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown ">
            <a className="nav-link fw-bold text-black-50 " role="button" data-bs-toggle="dropdown" aria-expanded="false"
              href="#">Customer & Partners</a>
            <ul className="dropdown-menu position-absolute rounded-0 round " >
              <li className=""><a className="dropdown-item  px-5 " href="Customer_Login.html">Customer Login</a></li>
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

        <ul className="navbar-nav  ms-auto gap-2 me-3 mb-2 d-none d-xxl-flex mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-brands fa-facebook-square fs-5 text-black-50"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fa-brands fa-instagram fs-5 text-success"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-brands fa-twitter fs-5 text-black-50"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-brands fa-youtube fs-5 text-black-50"></i></a>
          </li>
        </ul>

        <span className="navbar-text">
          <img src="Images/Group 3597.svg" className="img-fluid d-none d-xxl-flex" alt=""></img>
        </span>

      </div>

    </div>
  </nav>
        {/* page-1 */}
      <section className="position-relative" id="header_page-1">
        <div className="container-fluid back">
          <div className="container">
            <div className="col-12 col-lg-12 p-1">
              <p className=" capabilities">CAPABILITIES</p>
              <h6 className="one">New Product Introduction</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-sm-12 col-lg-12">
          <div className="d-flex justify-content-center p-5 mt-5">
            <div className="container position-absolute front">
              <p className="overlays p-3">
                EIS is a leading company in the production of prototypes and
                industrialization. Our NPI project Team can act as your partner
                throughout the entire process – from concept to finished
                product. We work closely with our customers, and each project
                has a dedicated program manager
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* page-2 */}
        <section id="npi_section-2">

            <div className="container-fluid  py-5 demo" /*style="background-color:#E3E3E3;"*/>

                <p className="p-5 mb-0 our">OUR SERVICES OFFERINGS</p>
                <h2 className="eis">EIS New Product Introduction (NPI) offers:</h2>
                <p className="key">New product introduction is one of the key areas, our expert team will work closely with
                    customers to support the below aspects</p>

                <div className="container-fluid">
                    <div className="row my-5">
                        <div className="col-12 col-md-4 ps-3 ">
                            <div className=" box  mb-3 demo1" /*style=" background-color: #01813B !important;"*/>
                                <div className="d-flex gap-3 mb-4 p-5">
                                    <img className="ticks " src="Group.png"></img>
                                    <p className="words">Support in procurement of
                                        NPI BOM parts</p>
                                </div>
                            </div>
                            <div className="boxes mb-3 demo2" /*style=" background: #00A94D !important;"*/>
                                <div className="d-flex gap-3 mb-4 p-5">
                                    <img className="ticks " src="Group.png"></img>
                                    <p className="words">Provide support in
                                        arranging of PCB based on gerber files and feedback</p>
                                </div>
                            </div>


                        </div>

                        <div className="col-12 col-md-4 ps-3 ">
                            <div className=" box mb-3 demo3" /*style="  background: #00A94D !important;"*/>
                                <div className="d-flex gap-3 mb-4 p-5 ">
                                <img className="ticks" src="Group.png" alt="Ticks Image" />

                                    <p className="words">Provide lead times for all
                                        the parts & commit deliveries based on lead times</p>
                                </div>
                            </div>
                            <div className="boxes  mb-3 demo4" /*style=" background-color: #01813B !important;"*/>
                                <div className="d-flex gap-3 mb-4 p-5">
                                    <img className="ticks" src="Group.png"></img>
                                    <p className="words ">Keep track of customer
                                        supplied parts and provide quality feedback</p>
                                </div>
                            </div>

                            <div className=" lastbox mb-3 demo5" /*style="  background: #00A94D !important;"*/>
                                <div className="d-flex gap-3 mb-4 p-5 ">
                                    <img className="ticks  " src="Group.png"></img>
                                    <p className="words">Quotation for NPI and pilot
                                        run production</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4  ">
                            <div className="box  mb-3 demo6" /*style=" background-color: #01813B !important;"*/>
                                <div className="d-flex gap-3 mb-4 p-4 ">
                                    <img className="ticks  " src="Group.png"></img>
                                    <p className="words ">Keep record of alternates
                                        due to non-availability of parts/design and changes/upgrading</p>
                                </div>
                            </div>
                            <div className=" boxes mb-3 demo7" /*style="background: #00A94D !important;"*/>
                                <div className="d-flex gap-3 p-4 ">
                                    <img className="ticks " src="Group.png"></img>
                                    <p className="words">Provide NPI report along
                                        with DFM issues, if any based on the initial builds and suggestions for improvements
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
{/* page-4 */}
        <section id="npi_section-4">
    <div className="container-fluid p-0 mb-0 image">
        <div className="  container-fluid color" >
            <p className="features">OUR FEATURES</p>
            <div className="container  text-white">
                <div className="row ">
                    <div className=" col-12 col-md-4 p-2 mt-5 ">


                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks  " src="Group.png"></img>
                            <div>
                                <div>
                                    <p className=" words mt-0 mb-3 ">Latest Fuji NXT & AIMEX SMT Line</p>

                                </div>
                            </div>

                        </div>
                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src="Group.png"></img>
                            <div>
                                <div>
                                    <p className="words mt-0 mb-3">In-line Automated Optical Inspection (AOI) SMT Line
                                    </p>

                                </div>
                            </div>

                        </div>
                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src="Group.png"></img>
                            <div>
                                <div>
                                    <p className="words mt-0 mb-3">2.5Dx X-Ray Inspection SMT Line</p>

                                </div>
                            </div>

                        </div>
                        <div className="  d-flex gap-4 mb-3">
                            <img className="ticks" src="Group.png"></img>
                            <div>
                                <div>
                                    <p className="words mt-0 mb-3">In-line Solder Paste Height
                                        Measurement & Inspection</p>

                                </div>
                            </div>

                        </div>

                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src="Group.png"></img>
                            <div>
                                <div>
                                    <p className=" words mb-3">Laser marking for PCBA, Shield, & ICs</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className=" col-12 col-md-4 p-2 mt-5">
                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src="Group.png"></img>
                            <div>
                                <div>
                                    <p className="words mt-0 mb-3">RoHS Compliance, Lead-Free
                                        with Nitrogen Capability</p>
                                </div>
                            </div>

                        </div>
                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src="Group.png"></img>
                            <div>
                                <div>
                                    <p className="words mt-2 mb-3">Wave Soldering</p>
                                </div>
                            </div>

                        </div>
                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src="Group.png"></img>
                            <div>
                                <div>
                                    <p className="words mt-0 mb-3">System Integration and BoxBuild
                                        Capability</p>
                                </div>
                            </div>

                        </div>
                        <div className="  d-flex gap-4 mb-3">
                            <img className="ticks " src="Group.png"></img>
                            <div>
                                <div>
                                    <p className="words mt-0 mb-3">Low-Volume, High-Mix /HighVolume,
                                        Low-Mix
                                        Manufacturing</p>

                                </div>
                            </div>

                        </div>

                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src="Group.png"></img>
                            <div>
                                <div>
                                    <p className="words mt-2 mb-3">Build to Order (BTO), Configure
                                        to Order (CTO) systems</p>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className=" col-12 col-md-4 p-2  mt-5">
                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src="Group.png"></img>
                            <div>
                                <div>
                                    <p className="words mt-2 mb-3">Clean/No-Clean Processes</p>

                                </div>
                            </div>

                        </div>
                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src="Group.png"></img>
                            <div>
                                <div>
                                    <p className="words mt-2 mb-3">Conformal Coating</p>
                                </div>
                            </div>

                        </div>
                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src="Group.png"></img>
                            <div>
                                <div>
                                    <p className="words mt-2 mb-3">Ultrasonic welding</p>

                                </div>
                            </div>

                        </div>
                        <div className="  d-flex gap-4 mb-3">
                            <img className="ticks" src="Group.png"></img>
                            <div>
                                <div>
                                    <p class="words mt-2 mb-3">Robotic Auto-Handler testing
                                        for IoT product</p>

                                </div>
                            </div>

                        </div>



                    </div>

                </div>
            </div>



        </div>









    </div>

</section>
    
    {/* page-5 */}

    <section className="container-fluid bg" id="npi_section-5" >



        <div className="container-fluid style  " >
            <p className="manufacture p-5">Our Manufacturing lines are equipped as shown below (to name a few):</p>
            <img className="img-fluid mb-5 " src="Union (2).svg"></img>
        </div>

        <div className="container">
            <div className="row   ">


                <div className="col-12 col-md-4 ">
                    <ul className="speedline ">

                        <li>Speedline MPM 125 Screen printer</li>
                        <li>GKG – titan Screen printer</li>
                        <li>NXT II M3X2 Modules for chip placing and Optional Glue dispensing head</li>
                        <li>NXT II M6S with Tray unit for chip & IC/ BGA /other Components mounting</li>
                        <li>AIMEX III C with Tray unit for chip & IC/ BGA /other Components mounting</li>

                    </ul>
                </div>


                <div className="col-12 col-md-4 ">
                    <ul className="speedline ">

                        <li>XP 141E for chip mounting</li>
                        <li>XP 142 E for chip mounting</li>
                        <li>XP 242E for fine pitch and BGA component mounting</li>
                        <li>3D SPI off-line checking machine</li>
                        <li>Speedline Omni ES 10 re-flow machine</li>
                        <li>JT WS-450 & WS-350 Wave Soldering machine with a separate pot for lead free processing
                        </li>
                     
                    </ul>
                </div>

                <div className="col-12 col-md-4 ">
                    <ul className="speedline ">

                        <li>Fiber & UV laser machine for permanent marking on the product</li>
                        <li>Keli smart-3500 for PCBA De-panelling</li>
                        <li>GIT Automatic tester with integrated MES for IoT product</li>
                      
                    </ul>
                </div>

            </div>

        </div>
    </section>

{/* page-6 */}
<section className="container-fluid p-5 " id="npi_section-6">
        <p className="productrange p-5">OUR PRODUCT RANGE</p>
        <div className="container ">

            <div className="row">
                <div className="col-12  col-md-6 ">
                    <div className="">
                        <h3 className="boards">Our boards are being used in sophisticated products catering for various
                            commercial and industrial segments.</h3>
                        <img className="img-fluid mt-5" src="Group 3599.png"></img>
                    </div>
                </div>

                <div className="col-12 col-md-6 p-5 ps-5">
                    <div className="row d-flex gap-0">

                        <div className="col-12 col-lg-6 col-md-6 ">
                            <div className="d-flex flex-row wifi mb-4 ">
                                <img   src="connection.png" className="image1" alt=""></img>
                                <p className="px-3">Wi-Fi modules</p>
                            </div>

                            <div className="d-flex flex-row wifi mb-4">
                                <img src="point-of-sale-terminal-pos 1.png" className="image2" alt=""></img>
                                <p className="px-3">Point-of-sale terminals</p>
                            </div>

                            <div className="d-flex flex-row wifi mb-4">
                                <img  src="Group 13700.png"className="image3" alt=""></img>
                                <p className="px-3">LED drivers</p>
                            </div>

                            <div className="d-flex flex-row wifi mb-4">
                                <img src="train stop.svg" className="image4" alt=""></img>
                                <p className="px-3">Train collision avoidance systems</p>
                            </div>

                            <div className="d-flex flex-row wifi mb-4">
                                <img src="Group (1).png"  className="image5" alt=""></img>
                                <p className="px-3">UPS and power supply solutions</p>
                            </div>

                        </div>

                        <div className="col-12 col-md-6 ">
                            <div className="d-flex flex-row wifi  mb-4 ">
                                <img src="Group (2).png" className="image6" alt=""></img>
                                <p className="mx-3">GPS tracking devices</p>
                            </div>

                            <div class="d-flex flex-row wifi mb-4">
                                <img src="Group 13725.png" className="image7" alt=""></img>
                                <p class="mx-3">Biomedical devices</p>
                            </div>

                            <div className="d-flex flex-row wifi  mb-4">
                                <img src="Group 13726.png" className="image8" alt=""></img>
                                <p className="mx-3">Wireless communication </p>
                            </div>

                            <div className="d-flex flex-row wifi mb-4">
                                <img src="Group 12176.png"className="image9" alt=""></img>
                                <p className="mx-3">Smart lighting control systems</p>
                            </div>

                            <div className="d-flex flex-row wifi  mb-4">
                                <img src="Group (5).png"className="image10" alt=""></img>
                                <p className="mx-3">Home Appliances</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>



{/* page-7 */}
<section className="container-fluid " id="npi_section-7">
        <div className="">
            <div className="row p-5">
                <div className="col-12 col-lg-7">

                    <p className="text-uppercase certification mt-5">CERTIFICATIONS & COMPLIANCES</p>

                    <div className="px-4">
                        <p className=" recognition ">Our Recognition & Awards</p>
                        <div className="certified py-5 ">
                            <p>Certified for IATF 16949:2016 International Automotive Task Force</p>
                            <p>Certified for ISO 9001:2015 Quality Management Systems</p>
                            <p>Certified for ISO 9001:2015 Quality Management Systems</p>
                            <p>Compliance with ANSI / ESD 520.20-2021 Requirements Standards</p>
                            <p>Certified for 14001:2015 Environmental Management Systems</p>
                            <p>Certified for 45001:2018 health and safety Systems</p>
                            <p>Certified for ISO / IEC 27002-2013</p>
                            <p>Certified for Responsible Business Alliance</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-5">
                    <p className="text-uppercase certification mt-5">Our Gallery</p>
                    <div className="px-3">
                        <p className=" recognition ">FUTURE READY infrastructure and State of the art facilities.</p>
                        <div className="row  mt-5">
                            <div className="col-12 col-lg-4">
                                <img className="w-100 mb-4" src="IMG_20190326_125922 6.png" alt=""></img>
                                <img className="w-100 mb-4" src="IMG_20190326_125922 3.png" alt=""></img>
                            </div>
                            <div className="col-12 col-lg-4">
                                <img className="w-100 mb-4" src="Rectangle 1445.png" alt=""></img>
                                <img className="w-100 mb-4" src="Rectangle 1456.png" alt=""></img>
                            </div>
                            <div className="col-12 col-lg-4">
                                <img className="w-100 mb-4" src="Rectangle 1447.png" alt=""></img>
                                <img className="w-100 mb-4" src="Rectangle 1450.png" alt=""></img>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </section>

{/* page-8 */}
<section className="container-fluid position-relative py-5 " id="npi_section-8">
        <div className="container">
            <h6 className="news pt-5">News And Updates</h6>
            <div className="row mt-5">
                <div className="col-12 col-lg-5  mb-5">
                    <h6 className="annual">Annual Medical Camp for Employees</h6>
                    <img className="mt-5  img-fluid" src="IMG_20190326_125922 8.png" alt=""></img>
                    <p className="employee mt-4">Employee well-being programs [1] (also referred to as employee wellness
                        programs) are structured initiatives put together by employers to...</p>
                    <h6 className="time">September 09, 2023</h6>
                </div>
                <div className="col-12 col-lg-7 ps-lg-5">
                    <div className="d-flex flex-column gap-4">

                        <div className="row">
                            <img className="img-fluid col-12 col-md-6" src="IMG_20190326_125922 9.png" alt=""></img>
                            <div className="ps-lg-4   col-12 col-md-6">
                                <h6 className="head">Dussehra Celebrations</h6>
                                <p className=" para">Dussehra is celebrated on the tenth day or Dashami tithi of the shukla
                                    paksha of Ashwin month on the Hindu calendar. Navratri 2023...</p>
                                <h6 className="time">October 15, 2023,</h6>
                            </div>
                        </div>



                        <div className="row">
                            <img className=" img-fluid col-12 col-md-6" src="IMG_20190326_125922 10.png" alt=""></img>
                            <div className="ps-lg-4  col-12 col-md-6">
                                <h6 className="head">Kaizen Program</h6>
                                <p className=" para">Successful Kaizen program management involves a number of different
                                    elements. There is no single change or improvement that transforms a business.</p>
                                <h6 className="time">June 12, 2023,</h6>
                            </div>
                        </div>



                        <div className="row ">
                            <img className=" img-fluid col-12 col-md-6" src="IMG_20190326_125922 11.png" alt=""></img>
                            <div className="ps-lg-4 col-12 col-md-6">
                                <h6 className="head">MES workshop technology awareness program </h6>
                                <p className=" para">Timely delivery capacity of the factory, improving the circulation
                                    performance of materials, but also improving the rate of return on production.</p>
                                <h6 className="time">October 12, 2023,</h6>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    </section>
{/* footer */}
<footer className="position-relative footers" >
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
                  <div className="d-flex justify-content-between mt-5 width" >
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
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15245.827696226495!2d78.4921026!3d17.1966093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba4d8b485172d%3A0x935b54b1d7579269!2sEmbedded%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1703761792241!5m2!1sen!2sin"
                       class="border "  allowfullscreen="" loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="customer-login">
          <div className=" whats-app-icon">
            <img className="img-fluid " src="images/Group 3706.png" alt=""></img>
          </div>
        </div>
    
    
        <div class="bgcolor">
          <h6 className="copyright py-4 text-center m-0">© 2023 embedits.com, All rights reserved</h6>
    
        </div>
      </footer>

    </div>

    
  );
}

export default Npi;
