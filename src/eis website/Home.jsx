import React from "react"
import emf from "../Images/Group 3608.png"
import building from "../Images/Group 2 (1).png"
import black from "../Images/Group 13780.png"
import about from "../Images/ABOUT COMPANY.png"
import Union_2 from "../Images/Union_2.png"
import mask from  "../Images/Mask group.png"
import image from "../Images/IMG_20190326_125922 1.png"
import Add from "../Images/Add On.png"
import fujii from "../Images/Fuji NXTII 1.png"
function Home(){
    return(
        <div>
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
            
            {/* Section-1 */}
            <section className="container-fluid  position-relative" id="home_header" >

                <div className="container " >
                    <div className="row ">
                        <div className="col-12 col-lg-6 mb-5 padding" >
                            <h6 className="ps-lg-3 mb-3 text-uppercase">EMBEDDED IT SOLUTIONS</h6>
                            <h1 className="display-3">A Electronic Manufacturing Services Company</h1>
                            <div className="col-9 my-5">
                            <p className="mb-4">
                                “Embedded IT Solutions (India) Pvt. Ltd., As A Recognized Electronic Manufacturing Services Solutions From Low Volume
                                Needs To High End Markets...”
                            </p>
                            <div className=" bg-black rectangle">
                                <p className="text-nowrap get"><span>Get</span> to know us +</p>
                            </div>
                        </div>
                        </div>
                    
                        <div className="col-12 col-lg-6 py-5">
                            <div className="position-absolute bottom-0 end-0">
                                <img className="img-fluid " src={emf}  alt=""></img>
                            </div>
                            <div className="scroll">
                                <div className="" >
                                    <img className="scroll-img" src={building} alt=""></img>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>

            </section>
            {/* section-2*/}
            <section className="container-fluid position-relative" id="home_section_2">
                <div className="row">
                    <div className="col-12 col-lg-8 pt-5">
                        <img src={about} className="img-fluid ps-5 pt-5 position-absolute name"  alt=""></img>
                    </div>
                </div>
                
                <div className="container ps-lg-5 padding" >
                    <div className="py-5">
                        <h6 className="mb-5 ps-lg-3">ABOUT COMPANY</h6>
                        <p className="ps-lg-4">Embedded IT Solutions (India) Pvt. Ltd., provide services that include new product prototyping with
                            FMEA, simple to high technology PCBA manufacturing capability and build-to-order systems assembly. Our products are
                            manufactured by high-end SMT technology machines to meet global quality standards and are supported by a dedicated
                            after market services and repairs.</p>
                    </div>
                </div>

                <div className="container  py-5" id="sub_row">
                    <div className="row ps-lg-5 ">
                        <div className="col-12 col-lg-5">
                            <img src={black} className="img-fluid"  alt=""></img>
                        </div>

                        <div className="col-12 col-lg-4 ">
                            <div className="d-flex flex-row justify-content-lg-center">
                                <ul className="d-flex flex-column text-white py-3  py-lg-5 " >
                                    <li>
                                        New Product Introduction
                                    </li>
                                    <li>
                                        PCB Assembly & Box Build
                                    </li>
                                    <li>
                                        Flexible volume High Mix Manufacturing
                                    </li>
                                    <li>
                                        Electronic Manufacturing
                                    </li>
                                    <li>
                                        Product Testing
                                    </li>
                                    <li>
                                        After-Sales Support & Warranty Services
                                    </li>
            
                                </ul>
                            </div>
                        </div>

                        <div className="bg-black rectangle  position-absolute bott" >
                            <p className="text-nowrap"><span className="span">Get</span> to know us +</p>
                        </div>

                    </div>
                </div>
            </section>
            {/* section-3 */}
            <section className="container-fluid position-relative" id="home_section_3">
                <div className="container py-5 ">
                    <div className="row gap-lg-4 py-5   ">
                        <div className="col-12 col-lg-5">
                            <div className="head">
                                <h6 className="mb-3">WHAT WE DO - Capabilities</h6>
                                <p className="eis ">
                                    EIS's array of services encompasses contract manufacturing, cutting-edge new product prototyping supported by FMEA
                                    analysis, mid-range volume production, PCBA manufacturing with POP capabilities, as well as complete turnkey solutions
                                    for build-to-order (BTO) and configure-to-order (CTO) systems assembly.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-2 padding">
                            <div className="">
                                <img src={mask} className="img-fluid width" alt=""></img>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 npi">
                            <div className="sub_head">
                                <h1 className="pro">NPI / Prototyping</h1>
                                <p>
                                    EIS is a leading company in the production of prototypes and industrialization. Our NPI project Team can act as your
                                    partner throughout the entire process – from concept to finished product.
                                </p>
                                <ul>
                                <li>Partner from concept to finished product</li>
                                <li>Dedicated project manager for each customer</li>
                                <li>Prototype experts</li>
                                <li>Component specialists</li>
                                <li>Design for Excellence</li>
                                <li>Test development</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="union">
                        <img src={Union_2} className="img-fluid position-absolute bottom-0" height="152px" width="190.92px" alt=""></img>
                    </div>

                    <div className="scroll">
                        <img src={building} className="img-fluid position-absolute scroll" alt=""></img>
                    </div>

                </div>
            </section>
            {/* error */}
            
            {/* section-5 */}
            <section className="container-fluid p-2 p-sm-3 p-md-4 p-lg-5 position-relative" id="home_section_5">
        
                <div className="container py-5">
                    <div className="head">
                        <h6>OUR EQUIPMENT AND PROCESS</h6>
                    </div>

                    <div className="container pt-5">


                        <div className="row ">
                            <div className="col-12 col-lg-6" >
                                <ul className="one_ul">
                                    <li>Latest fuji (AIMEX IIIC)</li>
                
                                    <li>3D solder paste inspection</li>
                                        
                                    <li>Automated Optical Inspection (AOI)</li>
                                        
                                    <li>2.5D X-ray inspection</li>
                                        
                                    <li>RoHS compliance, Lead-free with nitrogen capability</li>
                                        
                                    <li>System integration and box-build capability</li>
                                        
                                    <li>Low volume high mix/high volume low mix manufacturing</li>  
                                </ul>

                            </div>

                            <div className="col-12 col-lg-6" >
                                <ul className="two_ul">

                                    <li>Build To Order (BTO), Configure To Order (CTO) systems</li>

                                    <li>Mounting 4 million Components/day</li>
                                        
                                    <li>Placement accuracy of ±50µ for chips and ±40µ for ICs</li>
                                        
                                    <li>2.5D X-ray inspection</li>
                                        
                                    <li>Ability to handle tiniest chip size of 01005</li>
                                        
                                    <li>PCB handling capability from 0.4mm to 2.6mm thickness</li>
            
                                </ul>
                            </div>
                            
                        </div>

                        <div className=" pt-5">
                            <div className="row">
                                <div className="col-12 col-lg-4 mb-4 mb-lg-2">
                                    <img src={image} className="img-fluid w-100" alt=""></img>
                                </div>

                                <div className="col-12 col-lg-4 mb-4 mb-lg-2">
                                    <img src={Add} className="img-fluid w-100" alt=""></img>
                                </div>

                                <div className="col-12 col-lg-4 mb-4 mb-lg-2">
                                    <img src={fujii} className="img-fluid w-100" alt=""></img>
                                </div>

                            </div>                    
                        </div>

                    </div>

                    <div className="scroll">
                        <img src={building} className="img-fluid position-absolute height" alt=""></img>
                    </div>

                </div>
                
            </section>
            {/* section-6 */}
            <section className="container-fluid pt-5"  id="home_section_6">
        
                <div className="container pt-5 py-5 ">
                        <div className="row">
                            <div className="col-12 col-lg-4  position-relative">
                                    <div className="head py-5">
                                        <h6 className="">OUR FACILITY </h6>
                                        <p className="ms-4 pt-3 ems">Recognized Electronic Manufacturing Service (EMS) provider with state of the art facilities.</p>
                                    </div>
                                    <div className="bg-black rectangle">
                                        <p className="text-nowrap ms-4 mt-3"><span  className="color" >View </span><span className="span" /*style="color: #1AC664;"*/>gallery <span className="ms-3 text-white">+</span></span></p>
                                    </div>

                            </div>
                                <div className="col-12 col-lg-3 ps-4 pt-5">
                                    <div className="image1 mb-5">
                                        <img src="IMG_20180820_143020 1.png" className="img-fluid w-100" height="197px" alt=""></img>
                                    </div>
                                    <div className="image2 mb-5">
                                        <img src="IMG_20180820_143027 1.png" className="img-fluid w-100" height="197px" alt=""></img>
                                    </div>
                                    <div className="image3 mb-5">
                                        <img src="Rectangle 1425.png" className="img-fluid w-100" height="197px" alt=""></img>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-4">
                                    
                                    <ul className="pt-5">
                                        <li>Import/Export tax free</li>
                                        <li>Contract manufacturing located in SEZ</li>
                                        <li>ISO 9001:2015 certified</li>
                                        <li>ISO 14001:2015 certified</li>
                                        <li>IATF 16949:2016 certified</li>
                                        <li>Close proximity to airport & seaport</li>
                                        <li>Nearest seaport krishnapatnam, Chennai & Mumbai</li>
                                        <li>Sprawling area of 10 acres</li>
                                        <li>50K sq.ft. of available floor area</li>
                                        <li>Deployable area for future expansion</li>
                                        <li>Sophisticated manufacturing lines</li>
                                        <li>Automatic DG set for 100% Power Back-up</li>
                                        <li>Environment friendly premises</li>
                                        <li>20mins to Hyderabad international airport</li>
                                            
                                    </ul>
                                    
                                </div>

                                            
                        </div>


                </div>
                
            </section>
            {/* section-7 */}
            <section className="py-5" id="home_section_7" >
                <div className="container py-5">
                    <h6 className="setion7-heading">OUR PRODUCT RANGE</h6>
                    <div className="row ps-lg-5 mt-5 pb-lg-5">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <p className="des-heading">Our boards are being used in sophisticated
                                products catering for various commercial
                                    and industrial segments.</p>
                            <img className="mt-4 px-2 pt-3 pb-5 flex" src="P1143581 1.png" alt=""></img>

                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="container-fluid">
                                <div className="row ps-lg-5  pt-2 pt-sm-4 pt-lg-5">
                                    <div className="col-12 col-md-6 section7-svg">
                                        <div className="d-flex flex-column gap-4">
                                            <div className="d-flex mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="32" viewBox="0 0 47 38" fill="none">
                                                    <path d="M23.7984 34.671C24.673 34.671 25.3819 33.962 25.3819 33.0875C25.3819 32.2129 24.673 31.5039 23.7984 31.5039C22.9238 31.5039 22.2148 32.2129 22.2148 33.0875C22.2148 33.962 22.9238 34.671 23.7984 34.671Z" fill="#01813B" stroke="#01813B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M44.3831 12.5013C39.0372 6.75078 31.6414 3.33733 23.797 3C15.9527 3.33733 8.55689 6.75078 3.21094 12.5013" stroke="#01813B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M38.0488 18.8361C34.3216 14.9247 29.1978 12.6474 23.7968 12.502C18.3959 12.6474 13.2721 14.9247 9.54492 18.8361" stroke="#01813B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M31.7163 25.1689L31.6371 25.248C30.6078 24.2186 29.3858 23.402 28.0408 22.8449C26.6959 22.2877 25.2544 22.001 23.7986 22.001C22.3428 22.001 20.9013 22.2877 19.5564 22.8449C18.2114 23.402 16.9894 24.2186 15.96 25.248L15.8809 25.1689" stroke="#01813B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                    <h6 className="icon-content mt-2 ms-3"  >Wi-Fi modules</h6>
                                            </div>
                                            <div className="d-flex mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47" viewBox="0 0 48 47" fill="none">
                                                    <path d="M36.0701 4.33683H32.9884V1.50868C32.9884 0.675894 32.2981 0 31.4476 0H16.5536C15.703 0 15.0127 0.675894 15.0127 1.50868V4.33698H11.9312C9.94456 4.33698 8.33594 5.91301 8.33594 7.85729V43.4797C8.33594 45.4239 9.94441 47 11.9312 47H36.0699C38.0564 47 39.665 45.424 39.665 43.4797V7.85714C39.6652 5.91401 38.0566 4.33683 36.0701 4.33683ZM28.1094 7.85714V4.33683V3.01745H29.9071V4.33706V7.85737V11.1885H28.1094V7.85714ZM18.0945 7.85714V4.33683V3.01745H23.7439V4.33706V7.85737V11.1885H18.0945V7.85714ZM19.0364 42.8703C19.0364 43.704 18.3461 44.3791 17.4955 44.3791H15.0129C14.1623 44.3791 13.472 43.7041 13.472 42.8703V40.2733C13.472 39.4396 14.1623 38.7646 15.0129 38.7646H17.4955C18.3461 38.7646 19.0364 39.4395 19.0364 40.2733V42.8703ZM19.0364 35.2846C19.0364 36.1183 18.3461 36.7933 17.4955 36.7933H15.0129C14.1623 36.7933 13.472 36.1184 13.472 35.2846V32.6877C13.472 31.854 14.1623 31.179 15.0129 31.179H17.4955C18.3461 31.179 19.0364 31.8539 19.0364 32.6877V35.2846ZM19.0364 27.7001C19.0364 28.5338 18.3461 29.2088 17.4955 29.2088H15.0129C14.1623 29.2088 13.472 28.5338 13.472 27.7001V25.1022C13.472 24.2684 14.1623 23.5935 15.0129 23.5935H17.4955C18.3461 23.5935 19.0364 24.2684 19.0364 25.1022V27.7001ZM26.7832 42.8703C26.7832 43.704 26.093 44.3791 25.2424 44.3791H22.7588C21.9082 44.3791 21.218 43.7041 21.218 42.8703V40.2733C21.218 39.4396 21.9082 38.7646 22.7588 38.7646H25.2424C26.093 38.7646 26.7832 39.4395 26.7832 40.2733V42.8703ZM26.7832 35.2846C26.7832 36.1183 26.093 36.7933 25.2424 36.7933H22.7588C21.9082 36.7933 21.218 36.1184 21.218 35.2846V32.6877C21.218 31.854 21.9082 31.179 22.7588 31.179H25.2424C26.093 31.179 26.7832 31.8539 26.7832 32.6877V35.2846ZM26.7832 27.7001C26.7832 28.5338 26.093 29.2088 25.2424 29.2088H22.7588C21.9082 29.2088 21.218 28.5338 21.218 27.7001V25.1022C21.218 24.2684 21.9082 23.5935 22.7588 23.5935H25.2424C26.093 23.5935 26.7832 24.2684 26.7832 25.1022V27.7001ZM34.5294 42.8703C34.5294 43.704 33.8392 44.3791 32.9886 44.3791H30.5059C29.6554 44.3791 28.9651 43.7041 28.9651 42.8703V40.2733C28.9651 39.4396 29.6554 38.7646 30.5059 38.7646H32.9886C33.8392 38.7646 34.5294 39.4395 34.5294 40.2733V42.8703ZM34.5294 35.2846C34.5294 36.1183 33.8392 36.7933 32.9886 36.7933H30.5059C29.6554 36.7933 28.9651 36.1184 28.9651 35.2846V32.6877C28.9651 31.854 29.6554 31.179 30.5059 31.179H32.9886C33.8392 31.179 34.5294 31.8539 34.5294 32.6877V35.2846ZM34.5294 27.7001C34.5294 28.5338 33.8392 29.2088 32.9886 29.2088H30.5059C29.6554 29.2088 28.9651 28.5338 28.9651 27.7001V25.1022C28.9651 24.2684 29.6554 23.5935 30.5059 23.5935H32.9886C33.8392 23.5935 34.5294 24.2684 34.5294 25.1022V27.7001ZM34.5294 18.8905C34.5294 20.3137 33.3502 21.4674 31.8968 21.4674H16.1039C14.6505 21.4674 13.4723 20.3137 13.4723 18.8905V16.2283C13.4723 14.804 14.6505 13.6505 16.1039 13.6505H31.8967C33.3501 13.6505 34.5294 14.8042 34.5294 16.2283L34.5294 18.8905Z" fill="#01813B"/>
                                                    </svg>
                                                    <h6 className="icon-content mt-2 ms-3"  >Point-of-sale terminals</h6>
                                            </div>
                                            <div className="d-flex mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                                    <path d="M27.6591 13.7241H13.935V27.4481H27.6591V13.7241ZM23.0844 22.8734H18.5097V18.2988H23.0844V22.8734ZM41.3831 18.2988V13.7241H36.8085V9.14938C36.8085 6.6333 34.7498 4.57469 32.2338 4.57469H27.6591V0H23.0844V4.57469H18.5097V0H13.935V4.57469H9.36032C6.84424 4.57469 4.78563 6.6333 4.78563 9.14938V13.7241H0.210938V18.2988H4.78563V22.8734H0.210938V27.4481H4.78563V32.0228C4.78563 34.5389 6.84424 36.5975 9.36032 36.5975H13.935V41.1722H18.5097V36.5975H23.0844V41.1722H27.6591V36.5975H32.2338C34.7498 36.5975 36.8085 34.5389 36.8085 32.0228V27.4481H41.3831V22.8734H36.8085V18.2988H41.3831ZM32.2338 32.0228H9.36032V9.14938H32.2338V32.0228Z" fill="#01813B"/>
                                                    </svg>
                                                    <h6 className="icon-content mt-2 ms-3"  >LED drivers</h6>
                                            </div>
                                            <div className="d-flex mb-1" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="49" viewBox="0 0 46 49" fill="none">
                                                    <path d="M44.4399 9.39536L25.3756 0.605771C24.647 0.208285 23.8303 0 23.0004 0C22.1704 0 21.3537 0.208285 20.6252 0.605771L1.56088 9.39536C1.23304 9.54648 0.978656 9.82163 0.85369 10.1603C0.728724 10.499 0.743412 10.8734 0.894525 11.2013C1.04564 11.5291 1.3208 11.7835 1.65947 11.9085C1.99814 12.0334 2.37258 12.0187 2.70042 11.8676L21.8077 3.05811C21.8387 3.04371 21.8693 3.0282 21.8989 3.01183C22.2355 2.82336 22.6147 2.7244 23.0004 2.7244C23.3861 2.7244 23.7653 2.82336 24.1018 3.01183C24.1315 3.02822 24.1621 3.04373 24.1931 3.05811L43.3003 11.8676C43.4627 11.9424 43.6382 11.9846 43.8168 11.9916C43.9954 11.9986 44.1736 11.9703 44.3413 11.9085C44.509 11.8466 44.6629 11.7523 44.7941 11.6309C44.9254 11.5096 45.0314 11.3636 45.1062 11.2013C45.1811 11.0389 45.2232 10.8635 45.2302 10.6848C45.2372 10.5062 45.209 10.328 45.1471 10.1603C45.0852 9.99261 44.9909 9.83875 44.8696 9.7075C44.7482 9.57625 44.6022 9.47019 44.4399 9.39536Z" fill="#01813B"/>
                                                    <path d="M39.7869 22.8818C39.6081 22.8818 39.4311 22.917 39.266 22.9854C39.1008 23.0538 38.9508 23.1541 38.8244 23.2805C38.698 23.4069 38.5978 23.5569 38.5294 23.722C38.461 23.8872 38.4258 24.0642 38.4258 24.2429V29.6872C38.4258 30.0482 38.5692 30.3944 38.8244 30.6496C39.0797 30.9049 39.4259 31.0483 39.7869 31.0483C40.1478 31.0483 40.494 30.9049 40.7493 30.6496C41.0045 30.3944 41.1479 30.0482 41.1479 29.6872V24.2429C41.1479 24.0642 41.1127 23.8872 41.0443 23.722C40.9759 23.5569 40.8757 23.4069 40.7493 23.2805C40.6229 23.1541 40.4729 23.0538 40.3077 22.9854C40.1426 22.917 39.9656 22.8818 39.7869 22.8818Z" fill="#01813B"/>
                                                    <path d="M6.21459 22.4277C6.03584 22.4277 5.85885 22.4629 5.69371 22.5313C5.52858 22.5997 5.37853 22.7 5.25214 22.8264C5.12575 22.9527 5.0255 23.1028 4.9571 23.2679C4.8887 23.4331 4.85351 23.6101 4.85352 23.7888V29.2331C4.85352 29.5941 4.99691 29.9403 5.25216 30.1955C5.50741 30.4508 5.85361 30.5942 6.21459 30.5942C6.57556 30.5942 6.92176 30.4508 7.17701 30.1955C7.43226 29.9403 7.57565 29.5941 7.57565 29.2331V23.7888C7.57566 23.6101 7.54047 23.4331 7.47207 23.2679C7.40367 23.1028 7.30342 22.9527 7.17703 22.8264C7.05064 22.7 6.90059 22.5997 6.73546 22.5313C6.57032 22.4629 6.39333 22.4277 6.21459 22.4277Z" fill="#01813B"/>
                                                    <path d="M34.797 11.3535H11.2051C10.3631 11.3545 9.55593 11.6894 8.96056 12.2848C8.36519 12.8801 8.03028 13.6874 8.0293 14.5293V41.7507C8.03028 42.5927 8.36519 43.3999 8.96056 43.9953C9.55593 44.5907 10.3631 44.9256 11.2051 44.9266H12.5662V46.2876C12.5662 46.7689 12.7574 47.2305 13.0977 47.5709C13.4381 47.9112 13.8997 48.1024 14.381 48.1024H18.0105C18.4918 48.1024 18.9534 47.9112 19.2937 47.5709C19.634 47.2305 19.8252 46.7689 19.8252 46.2876V44.9266H26.6306V46.2876C26.6306 46.7689 26.8218 47.2305 27.1621 47.5709C27.5024 47.9112 27.964 48.1024 28.4453 48.1024H32.0749C32.5562 48.1024 33.0178 47.9112 33.3581 47.5709C33.6984 47.2305 33.8896 46.7689 33.8896 46.2876V44.9266H34.797C35.639 44.9256 36.4462 44.5907 37.0416 43.9953C37.6369 43.3999 37.9718 42.5927 37.9728 41.7507V14.5293C37.9718 13.6874 37.6369 12.8801 37.0416 12.2848C36.4462 11.6894 35.639 11.3545 34.797 11.3535ZM35.2507 41.7507C35.2506 41.871 35.2027 41.9864 35.1177 42.0714C35.0326 42.1565 34.9173 42.2043 34.797 42.2044H11.2051C11.0848 42.2043 10.9695 42.1565 10.8845 42.0714C10.7994 41.9864 10.7516 41.871 10.7514 41.7507V14.5293C10.7516 14.4091 10.7994 14.2937 10.8845 14.2087C10.9695 14.1236 11.0848 14.0758 11.2051 14.0757H34.797C34.9173 14.0758 35.0326 14.1236 35.1177 14.2087C35.2027 14.2937 35.2506 14.4091 35.2507 14.5293V41.7507Z" fill="#01813B"/>
                                                    <path d="M15.2885 40.3896C16.7919 40.3896 18.0107 39.1708 18.0107 37.6675C18.0107 36.1641 16.7919 34.9453 15.2885 34.9453C13.7851 34.9453 12.5664 36.1641 12.5664 37.6675C12.5664 39.1708 13.7851 40.3896 15.2885 40.3896Z" fill="#01813B"/>
                                                    <path d="M30.7124 40.3896C32.2158 40.3896 33.4345 39.1708 33.4345 37.6675C33.4345 36.1641 32.2158 34.9453 30.7124 34.9453C29.209 34.9453 27.9902 36.1641 27.9902 37.6675C27.9902 39.1708 29.209 40.3896 30.7124 40.3896Z" fill="#01813B"/>
                                                    <path d="M32.0751 16.7979H13.9275C13.5666 16.7982 13.2207 16.9418 12.9655 17.1969C12.7103 17.4521 12.5668 17.7981 12.5664 18.1589V30.8622C12.5668 31.2231 12.7103 31.5691 12.9655 31.8242C13.2207 32.0794 13.5666 32.2229 13.9275 32.2233H32.0751C32.4359 32.2229 32.7819 32.0794 33.0371 31.8242C33.2922 31.5691 33.4357 31.2231 33.4361 30.8622V18.1589C33.4357 17.7981 33.2922 17.4521 33.0371 17.1969C32.7819 16.9418 32.4359 16.7982 32.0751 16.7979ZM31.6214 30.4085H14.3812V18.6126H31.6214V30.4085Z" fill="#01813B"/>
                                                    </svg>
                                                    <h6 className="icon-content mt-2 ms-3"  >Train collision avoidance systems</h6>
                                            </div>
                                            <div className="d-flex mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="44" viewBox="0 0 38 44" fill="none">
                                                    <path d="M34.6584 0.683594H14.216C12.7019 0.683594 11.4629 1.92255 11.4629 3.43673V21.0566H13.1838V3.43673C13.1838 2.88597 13.6656 2.40438 14.2161 2.40438H18.4146L20.4107 4.33127H28.3949L30.391 2.40404H34.5895C35.1402 2.40404 35.6218 2.88592 35.6218 3.4364V40.6043C35.6218 41.1551 35.14 41.6367 34.5895 41.6367L18.6211 41.637L18.0703 42.1878L17.038 41.637H14.2848L13.7341 43.289C13.8718 43.289 14.0093 43.3579 14.1471 43.3579H34.5894C36.1036 43.3579 37.3425 42.1189 37.3425 40.6048V3.43683C37.4114 1.92265 36.1724 0.683688 34.6582 0.683688L34.6584 0.683594Z" fill="#01813B"/>
                                                    <path d="M26.6052 38.0577C26.6052 39.2359 25.6499 40.1912 24.4714 40.1912C23.2931 40.1912 22.3379 39.2359 22.3379 38.0577C22.3379 36.879 23.2932 35.9238 24.4714 35.9238C25.65 35.9238 26.6052 36.8791 26.6052 38.0577Z" fill="#01813B"/>
                                                    <path d="M16.7617 9.90625H32.1793V14.8618H16.7617V9.90625Z" fill="#01813B"/>
                                                    <path d="M16.7617 18.3037H32.1793V23.2593H16.7617V18.3037Z" fill="#01813B"/>
                                                    <path d="M19.7207 28.4906C19.8585 28.8347 20.0648 29.1788 20.2026 29.5918L22.9557 30.4867V31.6568H32.11V26.7012H20.6849L19.7207 28.4906Z" fill="#01813B"/>
                                                    <path d="M22.2687 34.1343V30.9681L19.6533 30.1421C19.447 29.5914 19.2403 29.0409 18.9651 28.4901L20.204 26.0122L17.9327 23.8098L15.4548 25.0487C14.904 24.7735 14.3536 24.5669 13.8028 24.3605L12.9768 21.7451H9.81064L8.98466 24.3605C8.43389 24.4983 7.88343 24.7735 7.33265 25.0487L4.85474 23.8098L2.58342 26.0122L3.82238 28.4901C3.54716 28.972 3.3405 29.5225 3.13417 30.1421L0.65625 30.9681V34.1343L3.27165 34.9603C3.40942 35.5111 3.68465 36.0615 3.95987 36.6123L2.72091 39.0902L4.99222 41.3615L7.47014 40.1226C7.95202 40.3978 8.50249 40.6044 9.12214 40.8108L9.94813 43.4262H13.1143L13.9403 40.8108C14.4911 40.6044 15.0415 40.3978 15.5923 40.1226L18.0702 41.3615L20.3415 39.0902L19.1026 36.6123C19.3778 36.0615 19.5844 35.5111 19.7908 34.9603L22.2687 34.1343ZM11.4621 36.1993C9.46598 36.1993 7.81406 34.5473 7.81406 32.5513C7.81406 30.5552 9.46606 28.9032 11.4621 28.9032C13.4582 28.9032 15.1101 30.5552 15.1101 32.5513C15.179 34.5473 13.527 36.1993 11.4621 36.1993Z" fill="#01813B"/>
                                                    </svg>
                                                    <h6 className="icon-content mt-2 ms-3"  >UPS and power supply solutions</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mt-2">
                                        <div className="d-flex flex-column gap-4 section7-svg">
                                            <div className="d-flex mb-3 mb-lg-0 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="52" viewBox="0 0 30 52" fill="none">
                                                    <path d="M14.509 29.018C6.50961 29.018 0 22.5084 0 14.509C0 6.50961 6.50961 0 14.509 0C22.5084 0 29.018 6.50961 29.018 14.509C29.018 22.5084 22.5084 29.018 14.509 29.018ZM14.509 3.22422C8.28615 3.22422 3.22422 8.28615 3.22422 14.509C3.22422 20.7318 8.28615 25.7938 14.509 25.7938C20.7318 25.7938 25.7938 20.7318 25.7938 14.509C25.7938 8.28615 20.7318 3.22422 14.509 3.22422Z" fill="#01813B"/>
                                                    <path d="M14.5082 19.3455C11.8418 19.3455 9.67188 17.1756 9.67188 14.5092C9.67188 11.8428 11.8418 9.67285 14.5082 9.67285C17.1746 9.67285 19.3445 11.8428 19.3445 14.5092C19.3445 17.1756 17.1746 19.3455 14.5082 19.3455ZM14.5082 12.8971C13.6215 12.8971 12.8961 13.6193 12.8961 14.5092C12.8961 15.3991 13.6215 16.1213 14.5082 16.1213C15.3949 16.1213 16.1203 15.3991 16.1203 14.5092C16.1203 13.6193 15.3949 12.8971 14.5082 12.8971Z" fill="#01813B"/>
                                                    <path d="M14.509 51.5879C13.948 51.5879 13.4255 51.2946 13.1322 50.8174L0.267594 29.7633C-0.151628 29.0763 -0.000126705 28.1864 0.618804 27.6772C1.2345 27.1677 2.14064 27.1903 2.73076 27.7319C5.91325 30.6401 10.0983 32.2426 14.5093 32.2426C18.9232 32.2426 23.105 30.6401 26.2841 27.7319C26.8808 27.1903 27.78 27.1644 28.3993 27.6772C29.0183 28.1864 29.1698 29.0763 28.7505 29.76L15.8859 50.8141C15.5926 51.2945 15.0701 51.5878 14.5092 51.5878L14.509 51.5879ZM6.5902 33.9219L14.509 46.8833L22.4277 33.9219C17.4784 35.9435 11.5428 35.9435 6.59038 33.9219H6.5902Z" fill="#01813B"/>
                                                    </svg>
                                                    <h6 className="icon-content mt-2 ms-3">GPS tracking devices</h6>
                                            </div>
                                            <div className="d-flex mb-3 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                                    <path d="M11.7239 23.2125H12.5857V24.3615C12.5857 24.9963 13.0998 25.5105 13.7346 25.5105H16.607C17.2418 25.5105 17.756 24.9963 17.756 24.3615V23.2125H18.6177C19.8866 23.2125 20.9156 22.1835 20.9156 20.9146V4.82923C20.9156 3.56035 19.8866 2.53131 18.6177 2.53131V1.38236C18.6177 0.747557 18.1035 0.233398 17.4687 0.233398H12.8729C12.2381 0.233398 11.7239 0.747557 11.7239 1.38236V2.53131C10.4551 2.53131 9.42603 3.56035 9.42603 4.82923V20.9146C9.42603 22.1835 10.4551 23.2125 11.7239 23.2125ZM33.5541 32.4042H33.4615C35.6539 29.962 37.001 26.7456 37.001 23.2125C37.001 15.6093 30.8168 9.42506 23.2135 9.42506V14.0209C28.2819 14.0209 32.4052 18.1442 32.4052 23.2125C32.4052 28.2809 28.2819 32.4042 23.2135 32.4042H3.68125C1.77757 32.4042 0.234375 33.9474 0.234375 35.8511C0.234375 36.4859 0.748533 37 1.38333 37H35.8521C36.4869 37 37.001 36.4859 37.001 35.8511C37.001 33.9474 35.4578 32.4042 33.5541 32.4042ZM7.7026 30.1063H22.639C22.9564 30.1063 23.2135 29.8492 23.2135 29.5318V28.3829C23.2135 28.0655 22.9564 27.8084 22.639 27.8084H7.7026C7.3852 27.8084 7.12812 28.0655 7.12812 28.3829V29.5318C7.12812 29.8492 7.3852 30.1063 7.7026 30.1063Z" fill="#01813B"/>
                                                    </svg>
                                                    <h6 className="icon-content mt-2 ms-3"  >Biomedical devices</h6>
                                            </div>
                                            <div className="d-flex ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="33" viewBox="0 0 46 33" fill="none">
                                                    <path d="M23.6623 16.08C23.6623 15.4818 23.1774 14.9968 22.5792 14.9968C21.981 14.9968 21.4961 15.4818 21.4961 16.08C21.4961 16.6782 21.981 17.1631 22.5792 17.1631C23.1774 17.1631 23.6623 16.6782 23.6623 16.08Z" fill="#01813B" stroke="#01813B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M8.49873 1.99995C4.56548 5.6565 2.23073 10.7151 2 16.0805C2.23073 21.446 4.56548 26.5046 8.49873 30.1611" stroke="#01813B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M12.8305 6.3329C10.1552 8.88223 8.59756 12.3868 8.49805 16.081C8.59756 19.7752 10.1552 23.2798 12.8305 25.8291" stroke="#01813B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M17.1629 10.6649L17.217 10.719C16.5129 11.4231 15.9544 12.2589 15.5733 13.1789C15.1922 14.0988 14.9961 15.0848 14.9961 16.0805C14.9961 17.0762 15.1922 18.0622 15.5733 18.9821C15.9544 19.902 16.5129 20.7379 17.217 21.4419L17.1629 21.4961" stroke="#01813B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M21.5173 16.0812C21.5173 16.6794 22.0023 17.1643 22.6005 17.1643C23.1987 17.1643 23.6836 16.6794 23.6836 16.0812C23.6836 15.483 23.1987 14.998 22.6005 14.998C22.0023 14.998 21.5173 15.483 21.5173 16.0812Z" fill="#01813B" stroke="#01813B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M36.681 30.1612C40.6142 26.5046 42.949 21.446 43.1797 16.0806C42.949 10.7152 40.6142 5.65655 36.681 2" stroke="#01813B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M32.3472 25.8282C35.0226 23.2789 36.5802 19.7743 36.6797 16.0801C36.5802 12.386 35.0226 8.88136 32.3472 6.33203" stroke="#01813B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M28.0168 21.4963L27.9626 21.4421C28.6668 20.7381 29.2253 19.9022 29.6064 18.9823C29.9875 18.0624 30.1836 17.0764 30.1836 16.0807C30.1836 15.0849 29.9875 14.0989 29.6064 13.179C29.2253 12.2591 28.6668 11.4232 27.9626 10.7192L28.0168 10.665" stroke="#01813B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                    <h6 className="icon-content  ms-3"  >Wireless communication systems</h6>
                                            </div>
                                            <div className="d-flex mb-3 " >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="46" viewBox="0 0 32 46" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.6694C0 7.02892 7.02944 0 15.6694 0C24.3094 0 31.3388 7.02892 31.3388 15.6695C31.3388 21.4312 28.126 26.736 23.0694 29.4656V32.699C23.0694 33.6006 22.3386 34.3313 21.4371 34.3313H9.84778C8.94628 34.3313 8.21555 33.6005 8.21555 32.699V29.4612C3.19213 26.7207 0 21.4181 0 15.6694ZM19.8044 28.4552C19.8044 27.8153 20.1782 27.2348 20.7603 26.9698C25.2033 24.9459 28.0744 20.5101 28.0744 15.6694C28.0744 8.82925 22.5096 3.26446 15.6694 3.26446C8.82924 3.26446 3.26445 8.82925 3.26445 15.6694C3.26445 20.5024 6.11657 24.9394 10.5306 26.9725C11.1089 27.2386 11.48 27.818 11.48 28.4552V31.0668H19.8044V28.4552ZM11.1536 36.5075C10.2521 36.5075 9.52135 37.2382 9.52135 38.1397C9.52135 39.0413 10.252 39.772 11.1536 39.772H20.1852C21.0867 39.772 21.8175 39.0413 21.8175 38.1397C21.8175 37.2382 21.0867 36.5075 20.1852 36.5075H11.1536ZM12.1329 43.526C12.1329 42.6246 12.8637 41.8938 13.7652 41.8938H17.5736C18.4752 41.8938 19.2059 42.6246 19.206 43.526C19.206 44.4276 18.4752 45.1583 17.5737 45.1583H13.7652C12.8637 45.1583 12.1329 44.4276 12.1329 43.526Z" fill="#01813B"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.16016 15.9837C6.16016 21.4014 10.5678 25.8091 15.9856 25.8091C21.4035 25.8091 25.8111 21.4014 25.8111 15.9837C25.8111 10.5659 21.4035 6.1582 15.9856 6.1582C10.5678 6.1582 6.16016 10.5659 6.16016 15.9837ZM8.80615 15.9837C8.80615 12.0249 12.0268 8.8042 15.9856 8.8042C19.9445 8.8042 23.1651 12.0249 23.1651 15.9837C23.1651 19.9424 19.9444 23.1631 15.9856 23.1631C12.0269 23.1631 8.80615 19.9424 8.80615 15.9837Z" fill="#01813B"/>
                                                    </svg>
                                                    <h6 className="icon-content mt-2 ms-3"  >Smart lighting control systems</h6>
                                            </div>
                                            <div className="d-flex mb-3 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="44" viewBox="0 0 48 44" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.173828 38.4505H5.82978V0.60325C5.82978 0.272808 6.10259 0 6.43303 0H25.591C25.9215 0 26.1943 0.272808 26.1943 0.60325V14.7931H43.1468C43.4772 14.7931 43.75 15.0659 43.75 15.3963V38.4466H47.3887V43.4379H0.173828V38.4505ZM10.6712 5.69438H14.5904C14.7095 5.69438 14.8094 5.79428 14.8094 5.91339V10.6625C14.8094 10.7817 14.7095 10.8816 14.5904 10.8816H10.6712C10.552 10.8816 10.4521 10.7817 10.4521 10.6625V5.91339C10.4521 5.79428 10.552 5.69438 10.6712 5.69438ZM17.3107 29.3172H21.23C21.3491 29.3172 21.449 29.4171 21.449 29.5362V34.2854C21.449 34.4045 21.3491 34.5044 21.23 34.5044H17.3107C17.1916 34.5044 17.0917 34.4045 17.0917 34.2854V29.5362C17.0917 29.4133 17.1916 29.3172 17.3107 29.3172ZM10.6712 29.3172H14.5904C14.7095 29.3172 14.8094 29.4171 14.8094 29.5362V34.2854C14.8094 34.4045 14.7095 34.5044 14.5904 34.5044H10.6712C10.552 34.5044 10.4521 34.4045 10.4521 34.2854V29.5362C10.4521 29.4133 10.552 29.3172 10.6712 29.3172ZM17.3107 21.4404H21.23C21.3491 21.4404 21.449 21.5403 21.449 21.6594V26.4085C21.449 26.5277 21.3491 26.6276 21.23 26.6276H17.3107C17.1916 26.6276 17.0917 26.5277 17.0917 26.4085V21.6632C17.0917 21.5403 17.1916 21.4404 17.3107 21.4404ZM10.6712 21.4404H14.5904C14.7095 21.4404 14.8094 21.5403 14.8094 21.6594V26.4085C14.8094 26.5277 14.7095 26.6276 14.5904 26.6276H10.6712C10.552 26.6276 10.4521 26.5277 10.4521 26.4085V21.6632C10.4521 21.5403 10.552 21.4404 10.6712 21.4404ZM17.3107 13.5674H21.23C21.3491 13.5674 21.449 13.6673 21.449 13.7864V18.5355C21.449 18.6547 21.3491 18.7546 21.23 18.7546H17.3107C17.1916 18.7546 17.0917 18.6547 17.0917 18.5355V13.7864C17.0917 13.6673 17.1916 13.5674 17.3107 13.5674ZM10.6712 13.5674H14.5904C14.7095 13.5674 14.8094 13.6673 14.8094 13.7864V18.5355C14.8094 18.6547 14.7095 18.7546 14.5904 18.7546H10.6712C10.552 18.7546 10.4521 18.6547 10.4521 18.5355V13.7864C10.4521 13.6673 10.552 13.5674 10.6712 13.5674ZM17.3107 5.69438H21.23C21.3491 5.69438 21.449 5.79428 21.449 5.91339V10.6625C21.449 10.7817 21.3491 10.8816 21.23 10.8816H17.3107C17.1916 10.8816 17.0917 10.7817 17.0917 10.6625V5.91339C17.0917 5.79428 17.1916 5.69438 17.3107 5.69438ZM9.07657 2.81261H22.8783C23.1166 2.81261 23.3125 3.04699 23.3125 3.33133V36.3257C23.3125 36.61 23.1166 36.8444 22.8783 36.8444H9.07657C8.83835 36.8444 8.64239 36.61 8.64239 36.3257V3.33133C8.64239 3.04699 8.83835 2.81261 9.07657 2.81261ZM28.0732 20.5297H31.9924C32.1115 20.5297 32.2114 20.6296 32.2114 20.7487V25.4979C32.2114 25.617 32.1115 25.7169 31.9924 25.7169H28.0732C27.9541 25.7169 27.8542 25.617 27.8542 25.4979V20.7487C27.8542 20.6296 27.9541 20.5297 28.0732 20.5297ZM34.7128 29.3172H38.632C38.7511 29.3172 38.851 29.4171 38.851 29.5362V34.2854C38.851 34.4045 38.7511 34.5044 38.632 34.5044H34.7128C34.5937 34.5044 34.4938 34.4045 34.4938 34.2854V29.5362C34.4938 29.4133 34.5937 29.3172 34.7128 29.3172ZM28.0732 29.3172H31.9924C32.1115 29.3172 32.2114 29.4171 32.2114 29.5362V34.2854C32.2114 34.4045 32.1115 34.5044 31.9924 34.5044H28.0732C27.9541 34.5044 27.8542 34.4045 27.8542 34.2854V29.5362C27.8542 29.4133 27.9541 29.3172 28.0732 29.3172ZM34.7128 20.5297H38.632C38.7511 20.5297 38.851 20.6296 38.851 20.7487V25.4979C38.851 25.617 38.7511 25.7169 38.632 25.7169H34.7128C34.5937 25.7169 34.4938 25.617 34.4938 25.4979V20.7487C34.4938 20.6296 34.5937 20.5297 34.7128 20.5297ZM26.6323 17.6057H40.4341C40.6723 17.6057 40.8683 17.8401 40.8683 18.1244V36.3257C40.8683 36.61 40.6723 36.8444 40.4341 36.8444H26.6323C26.3941 36.8444 26.1981 36.61 26.1981 36.3257V18.1244C26.1981 17.8401 26.3941 17.6057 26.6323 17.6057Z" fill="#01813B"/>
                                                    </svg>
                                                    <h6 className="icon-content mt-2 ms-3"  >Home Appliances</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* section-8 */}
            <section className="container-fluid pt-5 position-relative" id="home_section_8">
                <div className="container  py-5">
                    <div class="head">
                        <h6>CERTIFICATIONS & COMPLIANCES</h6>
                        <h5 class="pt-4 ps-lg-5">Our Recognition & Awards</h5>
                    </div>

                    <div class="container ms-lg-5 mt-5 py-5" id="logo">
                        <div class="row ">
                            <div class="col-12 col-md-3">
                            <div class="card mb-3 mb-lg-5 bg-transparent border-0">
                                    <div class="card-img-top">
                                        <img src="GIC-ISO2015-300x216 3.png" height="94.17px" width="160px" alt=""></img>
                                    </div>
                                    <div class="card-text mt-4">
                                        <p className="iso">Certified for ISO 9001:2015 Quality Management Systems</p>
                                    </div>
                            </div>

                            <div class="card mb-3 mb-lg-5 bg-transparent border-0">
                                <div class="card-img-top">
                                    <img src="GIC-ISO2015-300x216 2.png" height="94.17px" width="160px" alt=""></img>
                                </div>
                                <div class="card-text mt-4">
                                    <p className="iso">Certified for 14001:2015 Environmental Management Systems</p>
                                </div>
                            </div>

                            </div>

                            <div class="col-12 col-md-3">
                                <div class="card mb-3 mb-lg-5 bg-transparent border-0">
                                        <div class="card-img-top">
                                            <img src="iqas.png" height="94.17px" width="160px" alt=""></img>
                                        </div>
                                        <div class="card-text mt-4">
                                            <p className="iso">Certified for IATF 16949:2016 International Automotive Task Force</p>
                                        </div>
                                </div>
            
                                <div class="card mb-3 mb-lg-5 bg-transparent border-0">
                                    <div class="card-img-top">
                                        <img src="GIC-ISO2015-300x216 7.png" height="94.17px" width="160px" alt=""></img>
                                    </div>
                                    <div class="card-text mt-4">
                                        <p className="iso">Certified for 45001:2018 health and safety Systems</p>
                                    </div>
                                </div>
            
                            </div>

                            <div class="col-12 col-md-3">
                            <div class="card mb-3 mb-lg-5 bg-transparent border-0">
                                    <div class="card-img-top">
                                        <img src="GIC-ISO2015-300x216 9.png" height="94.17px" width="160px" alt=""></img>
                                    </div>
                                    <div class="card-text mt-4">
                                        <p className="iso">Compliance with ANSI / ESD 520.20-2021 Requirements Standards</p>
                                    </div>
                            </div>

                            <div class="card mb-3 mb-lg-5 bg-transparent border-0">
                                <div class="card-img-top">
                                    <img src="1 1.png" height="94.17px" width="160px" alt=""></img>
                                </div>
                                <div class="card-text mt-4">
                                    <p className="iso">Certified for ISO / IEC 27002-2013</p>
                                </div>
                            </div>

                            </div>

                            <div class="col-12 col-md-3">
                                <div class="card mb-5 bg-transparent border-0">
                                    <div class="card-img-top">
                                        <img src="GIC-ISO2015-300x216 4.png" height="94.17px" width="160px" alt=""></img>
                                    </div>
                                    <div class="card-text mt-4">
                                        <p className="iso">Certified for Responsible Business Alliance</p>
                                    </div>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
                    <div class="bg-black rectangle  position-absolute right">
                        <p class="text-nowrap"><span className="span">Get</span> to know us +</p>
                    </div>
            </section>
            {/* section-9 */}
            <section className="py-5" id="home_section-9">  
            <div>
                <h6 className="ourclient">OUR CLIENTS</h6>
                <h6 className="growth">Growth Enablers</h6>
                <div className="container d-none d-md-block">
                    <div className="row ">
                        <div className="col-12 col-lg-6">
                        <div className="container-fluid">
                            <div className="row">
                            <h6 className="my-5 base p3-growth-row1">International Customer Base</h6>
                            <div className="col-4">
                                <div className="card my-4">
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="silicon.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4">
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="statron.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4">
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="tenpao.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4">
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="dtds.png" alt=""></img>
                                </div>
                                </div>
            
                            </div>
                            <div className="col-4">
                                <div className="card my-4">
                                <div className="d-flex flex-column justify-content-center">
                                    <img className="" src="proxim.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4">
                                <div className="  d-flex flex-column justify-content-center ">
                                    <img className="" src="microsemi.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4">
                                <div className="d-flex flex-column justify-content-center ">
                                    <img className="" src="Wi2Wi.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4">
                                <div className=" d-flex flex-column justify-content-center ">
                                    <img className="" src="quintessential.png" alt=""></img>
                                </div>
                                </div>
            
                            </div>
                            <div className="col-4">
                                <div className="card my-4">
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="wipro.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4">
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="eximus.png" alt=""></img>
                                </div>
                                </div>

                            </div>
                            </div>
            
                        </div>
            
                        </div>
                        <div className="col-12 col-lg-6">
                        <div className="container-fluid">
                            <div className="row">
                            <h6 className="my-5 base p3-growth-row1">Domestic Customer Base</h6>
                            <div className="col-4">
                                <div className="card my-4">
                                <div className="d-flex flex-column justify-content-center">
                                    <img className="" src="bs-techno.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4">
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="visiontek.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4">
                                <div className="d-flex flex-column justify-content-center">
                                    <img className="" src="hbl.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4">
                                <div className="d-flex  justify-content-center">
                                    <img className="" src="image 13.png" alt=""></img>
                                </div>
                                </div>
            
                            </div>
                            <div className="col-4">
                                <div className="card my-4">
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="ecil.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4">
                                <div className=" d-flex flex-column justify-content-center ">
                                    <img className="" src="totaka.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4">
                                <div className="d-flex justify-content-center ">
                                    <img className=" " src="image 11.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4">
                                <div className="d-flex  justify-content-center ">
                                    <img className="mt-4" src="image 14.png" alt=""></img>
                                </div>
                                </div>
            
                            </div>
                            <div className="col-4">
                                <div className="card my-4">
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="vedang.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4">
                                <div className="d-flex flex-column justify-content-center">
                                    <img className="" src="kernex.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4">
                                <div className="d-flex  justify-content-center">
                                    <img className="mt-4" src="image 12.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4">
                                <div className="d-flex  justify-content-center">
                                    <img className=" mt-4" src="download.png" alt=""></img>
                                </div>
                                </div>
                            </div>
                            </div>
            
                        </div>
            
                        </div>
            
                    </div>
               
                    <p className="my-5 all p3-client-decs">All company, product and service names of the third 
                        party companies used in this website are for
                        identification purposes only. All these
                        product names, logos and brands belong
                        to their respective owners.</p>
            
                    </div>
            </div>
            </section>
            {/* section-10 */}
            <section className="container-fluid position-relative py-5 " id="section_10">
                <div className="container">
                    <h6 className="news pt-5">News And Updates</h6>
                    <div className="row mt-5">
                        <div className="col-12 col-lg-5 ps-lg-5 pe-lg-5 mb-5">
                            <h6 className="annual">Annual Medical Camp for Employees</h6>
                            <img className="src" src="IMG_20190326_125922 8.png" alt=""></img>
                            <p className="section9-row-decs mt-4">Employee well-being programs [1] (also referred to as employee wellness programs) are structured initiatives put together by employers to...</p>
                            <p className="times">September 09, 2023</p>
                        </div>
                        <div className="col-12 col-lg-7 ps-lg-5">
                            <div className="d-flex flex-column gap-4">
                                <div className="container-fluid p-0">
                                    <div className="row">
                                        <img className="img-fluid col-12 col-md-6" src="IMG_20190326_125922 9.png"  alt=""></img>
                                        <div className="ps-lg-4 my-3 my-lg-0 col-12 col-md-6">
                                            <h6 className="annual">Dussehra Celebrations</h6>
                                            <p className=" section9-row2-decs">Dussehra is celebrated on the tenth day or Dashami tithi of the shukla paksha of Ashwin month on the Hindu calendar. Navratri 2023...</p>
                                            <h6 className="section9-time">October 15, 2023,</h6>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="container-fluid p-0">
                                    <div className="row">
                                        <img className=" img-fluid col-12 col-md-6" src="IMG_20190326_125922 10.png"  alt=""></img>
                                        <div className="ps-lg-4 my-3 my-lg-0 col-12 col-md-6">
                                            <h6 className="annual">Kaizen Program</h6>
                                            <p className=" section9-row2-decs">Successful Kaizen program management involves a number of different elements. There is no single change or improvement that transforms a business.</p>
                                            <h6 className="section9-time">June 12, 2023,</h6>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="container-fluid p-0">
                                    <div  className="row ">
                                        <img className=" img-fluid col-12 col-md-6" src="IMG_20190326_125922 11.png"  alt=""></img>
                                        <div className="ps-lg-4 my-3 my-lg-0 col-12 col-md-6">
                                            <h6 className="annua">MES workshop technology awareness program </h6>
                                            <p className=" section9-row2-decs">Timely delivery capacity of the factory, improving the circulation performance of materials, but also improving the rate of return on production.</p>
                                            <h6 className="section9-time">October 12, 2023,</h6>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
        
                    </div>
                </div>
                
            </section>
            {/* footer */}
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
export default Home