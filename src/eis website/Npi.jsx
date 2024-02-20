import React from "react";
import ticks from "../Images/Group.png"
import our from "../Images/Union (2).svg"
import Group_3599 from  "../Images/Group 3599.png"
import connection from "../Images/connection.png"
import image2 from "../Images/point-of-sale-terminal-pos 1.png"
import image3 from "../Images/Group 13700.png"
import image4 from "../Images/train stop.svg"
import image5 from "../Images/Group (1).png"
import image6 from "../Images/Group (2).png"
import image7 from "../Images/Group 13725.png"
import image8 from "../Images/Group 13726.png"
import image9 from "../Images/Group 12176.png"
import image10 from "../Images/Group (5).png"
import img1 from "../Images/IMG_20190326_125922 6.png"
import img2 from "../Images/IMG_20190326_125922 3.png"
import img3 from "../Images/Rectangle 1445.png"
import img4 from "../Images/Rectangle 1456.png"
import img5 from "../Images/Rectangle 1447.png"
import img6 from "../Images/Rectangle 1450.png"
import annual  from "../Images/IMG_20190326_125922 8.png"
import employee from "../Images/IMG_20190326_125922 9.png"
import dussera from "../Images/IMG_20190326_125922 10.png"
import success from "../Images/IMG_20190326_125922 11.png"

function Npi() {
  return (
    <div className="npibody">

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
                throughout the entire process â€“ from concept to finished
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
                                    <img className="ticks " src={ticks}></img>
                                    <p className="words">Support in procurement of
                                        NPI BOM parts</p>
                                </div>
                            </div>
                            <div className="boxes mb-3 demo2" /*style=" background: #00A94D !important;"*/>
                                <div className="d-flex gap-3 mb-4 p-5">
                                    <img className="ticks " src={ticks}></img>
                                    <p className="words">Provide support in
                                        arranging of PCB based on gerber files and feedback</p>
                                </div>
                            </div>


                        </div>

                        <div className="col-12 col-md-4 ps-3 ">
                            <div className=" box mb-3 demo3" /*style="  background: #00A94D !important;"*/>
                                <div className="d-flex gap-3 mb-4 p-5 ">
                                <img className="ticks" src={ticks} alt="Ticks Image" />

                                    <p className="words">Provide lead times for all
                                        the parts & commit deliveries based on lead times</p>
                                </div>
                            </div>
                            <div className="boxes  mb-3 demo4" /*style=" background-color: #01813B !important;"*/>
                                <div className="d-flex gap-3 mb-4 p-5">
                                    <img className="ticks" src={ticks}></img>
                                    <p className="words ">Keep track of customer
                                        supplied parts and provide quality feedback</p>
                                </div>
                            </div>

                            <div className=" lastbox mb-3 demo5" /*style="  background: #00A94D !important;"*/>
                                <div className="d-flex gap-3 mb-4 p-5 ">
                                    <img className="ticks  " src={ticks}></img>
                                    <p className="words">Quotation for NPI and pilot
                                        run production</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4  ">
                            <div className="box  mb-3 demo6" /*style=" background-color: #01813B !important;"*/>
                                <div className="d-flex gap-3 mb-4 p-4 ">
                                    <img className="ticks  " src={ticks}></img>
                                    <p className="words ">Keep record of alternates
                                        due to non-availability of parts/design and changes/upgrading</p>
                                </div>
                            </div>
                            <div className=" boxes mb-3 demo7" /*style="background: #00A94D !important;"*/>
                                <div className="d-flex gap-3 p-4 ">
                                    <img className="ticks " src={ticks}></img>
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
                            <img className="ticks  " src={ticks}></img>
                            <div>
                                <div>
                                    <p className=" words mt-0 mb-3 ">Latest Fuji NXT & AIMEX SMT Line</p>

                                </div>
                            </div>

                        </div>
                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src={ticks}></img>
                            <div>
                                <div>
                                    <p className="words mt-0 mb-3">In-line Automated Optical Inspection (AOI) SMT Line
                                    </p>

                                </div>
                            </div>

                        </div>
                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src={ticks}></img>
                            <div>
                                <div>
                                    <p className="words mt-0 mb-3">2.5Dx X-Ray Inspection SMT Line</p>

                                </div>
                            </div>

                        </div>
                        <div className="  d-flex gap-4 mb-3">
                            <img className="ticks" src={ticks}></img>
                            <div>
                                <div>
                                    <p className="words mt-0 mb-3">In-line Solder Paste Height
                                        Measurement & Inspection</p>

                                </div>
                            </div>

                        </div>

                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src={ticks}></img>
                            <div>
                                <div>
                                    <p className=" words mb-3">Laser marking for PCBA, Shield, & ICs</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className=" col-12 col-md-4 p-2 mt-5">
                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src={ticks}></img>
                            <div>
                                <div>
                                    <p className="words mt-0 mb-3">RoHS Compliance, Lead-Free
                                        with Nitrogen Capability</p>
                                </div>
                            </div>

                        </div>
                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src={ticks}></img>
                            <div>
                                <div>
                                    <p className="words mt-2 mb-3">Wave Soldering</p>
                                </div>
                            </div>

                        </div>
                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src={ticks}></img>
                            <div>
                                <div>
                                    <p className="words mt-0 mb-3">System Integration and BoxBuild
                                        Capability</p>
                                </div>
                            </div>

                        </div>
                        <div className="  d-flex gap-4 mb-3">
                            <img className="ticks " src={ticks}></img>
                            <div>
                                <div>
                                    <p className="words mt-0 mb-3">Low-Volume, High-Mix /HighVolume,
                                        Low-Mix
                                        Manufacturing</p>

                                </div>
                            </div>

                        </div>

                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src={ticks}></img>
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
                            <img className="ticks " src={ticks}></img>
                            <div>
                                <div>
                                    <p className="words mt-2 mb-3">Clean/No-Clean Processes</p>

                                </div>
                            </div>

                        </div>
                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src={ticks}></img>
                            <div>
                                <div>
                                    <p className="words mt-2 mb-3">Conformal Coating</p>
                                </div>
                            </div>

                        </div>
                        <div className=" d-flex gap-4 mb-3">
                            <img className="ticks " src={ticks}></img>
                            <div>
                                <div>
                                    <p className="words mt-2 mb-3">Ultrasonic welding</p>

                                </div>
                            </div>

                        </div>
                        <div className="  d-flex gap-4 mb-3">
                            <img className="ticks" src={ticks}></img>
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
            <img className="img-fluid mb-5 " src={our}></img>
        </div>

        <div className="container">
            <div className="row   ">


                <div className="col-12 col-md-4 ">
                    <ul className="speedline ">

                        <li>Speedline MPM 125 Screen printer</li>
                        <li>GKG â€“ titan Screen printer</li>
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
                        <img className="img-fluid mt-5" src={Group_3599}></img>
                    </div>
                </div>

                <div className="col-12 col-md-6 p-5 ps-5">
                    <div className="row d-flex gap-0">

                        <div className="col-12 col-lg-6 col-md-6 ">
                            <div className="d-flex flex-row wifi mb-4 ">
                                <img   src={connection} className="image1" alt=""></img>
                                <p className="px-3">Wi-Fi modules</p>
                            </div>

                            <div className="d-flex flex-row wifi mb-4">
                                <img src={image2} className="image2" alt=""></img>
                                <p className="px-3">Point-of-sale terminals</p>
                            </div>

                            <div className="d-flex flex-row wifi mb-4">
                                <img  src={image3}  className="image3" alt=""></img>
                                <p className="px-3">LED drivers</p>
                            </div>

                            <div className="d-flex flex-row wifi mb-4">
                                <img src={image4} className="image4" alt=""></img>
                                <p className="px-3">Train collision avoidance systems</p>
                            </div>

                            <div className="d-flex flex-row wifi mb-4">
                                <img src={image5}  className="image5" alt=""></img>
                                <p className="px-3">UPS and power supply solutions</p>
                            </div>

                        </div>

                        <div className="col-12 col-md-6 ">
                            <div className="d-flex flex-row wifi  mb-4 ">
                                <img src={image6} className="image6" alt=""></img>
                                <p className="mx-3">GPS tracking devices</p>
                            </div>

                            <div class="d-flex flex-row wifi mb-4">
                                <img src={image7} className="image7" alt=""></img>
                                <p class="mx-3">Biomedical devices</p>
                            </div>

                            <div className="d-flex flex-row wifi  mb-4">
                                <img src={image8} className="image8" alt=""></img>
                                <p className="mx-3">Wireless communication </p>
                            </div>

                            <div className="d-flex flex-row wifi mb-4">
                                <img src={image9} className="image9" alt=""></img>
                                <p className="mx-3">Smart lighting control systems</p>
                            </div>

                            <div className="d-flex flex-row wifi  mb-4">
                                <img src={image10} className="image10" alt=""></img>
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
                                <img className="w-100 mb-4" src={img1} alt=""></img>
                                <img className="w-100 mb-4" src={img2} alt=""></img>
                            </div>
                            <div className="col-12 col-lg-4">
                                <img className="w-100 mb-4" src={img3} alt=""></img>
                                <img className="w-100 mb-4" src={img4} alt=""></img>
                            </div>
                            <div className="col-12 col-lg-4">
                                <img className="w-100 mb-4" src={img5} alt=""></img>
                                <img className="w-100 mb-4" src={img6} alt=""></img>
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
                    <img className="mt-5  img-fluid" src={annual} alt=""></img>
                    <p className="employee mt-4">Employee well-being programs [1] (also referred to as employee wellness
                        programs) are structured initiatives put together by employers to...</p>
                    <h6 className="time">September 09, 2023</h6>
                </div>
                <div className="col-12 col-lg-7 ps-lg-5">
                    <div className="d-flex flex-column gap-4">

                        <div className="row">
                            <img className="img-fluid col-12 col-md-6" src={employee} alt=""></img>
                            <div className="ps-lg-4   col-12 col-md-6">
                                <h6 className="head">Dussehra Celebrations</h6>
                                <p className=" para">Dussehra is celebrated on the tenth day or Dashami tithi of the shukla
                                    paksha of Ashwin month on the Hindu calendar. Navratri 2023...</p>
                                <h6 className="time">October 15, 2023,</h6>
                            </div>
                        </div>



                        <div className="row">
                            <img className=" img-fluid col-12 col-md-6" src={dussera} alt=""></img>
                            <div className="ps-lg-4  col-12 col-md-6">
                                <h6 className="head">Kaizen Program</h6>
                                <p className=" para">Successful Kaizen program management involves a number of different
                                    elements. There is no single change or improvement that transforms a business.</p>
                                <h6 className="time">June 12, 2023,</h6>
                            </div>
                        </div>



                        <div className="row ">
                            <img className=" img-fluid col-12 col-md-6" src={success} alt=""></img>
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


    </div>

    
  );
}

export default Npi;