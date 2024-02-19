import React from "react";




function About(){
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
            {/* section-1 */}
            <section className="py-5 style" id="about_section-1">
                <div className="container">
                    <p className="about">About Company</p>
                    <h6 className="one">One of the Largest EMS Facilities in India</h6>
                </div>
            </section>
            
            <section className="p2-image position-relative image" id="about_section-1">
                <div className="d-flex justify-content-center">
                    <div className=" container position-absolute p-2 p-md-4 p-lg-5 background">
                    <h6 className=" two font">ABOUT COMPANY</h6>
                    <p className="three">Embedded IT Solutions (India) 
                            Pvt. Ltd., provide services that include new product 
                            prototyping with FMEA, simple to high technology PCBA 
                            manufacturing capability and build-to-order systems 
                            assembly. Our products are manufactured by high-end
                            SMT technology machines to meet global quality standards
                            and are supported by a dedicated after market services and repairs.</p>
                     </div>
                </div>
                <div className="position-absolute pos">
                    <img src="Group 2.png" alt=""></img>
                </div>
            </section>
           {/* section-2 */}
            <section className="container-fluid p-0 py-5" id="about_section-2">
                <div className="container p-2 p-md-4 p-lg-5" id="head">
                    <h6 className="text-center">QUALITY POLICY</h6>
                    <h5 className="text-center pt-5">“ We at EMBEDDED IT SOLUTIONS (INDIA) PVT. LTD. aim to achieve total customer satisfaction through manufacture &
                    supply of electronic assemblies and products to meet the Customer, statutory and regulatory requirements.”</h5>
                </div>
                <div className="container py-5">
                    <div className="row">
                            <div className="col-12 col-lg-4 mb-4">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src="IMG_20190326_125922 1 (1).png" className="img-fluid" alt=""></img>
                                </div>
                            </div>
                        <div className="col-12 col-lg-4 mb-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src="image 22.png" className="img-fluid " alt=""></img>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mb-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src="Add On (1).png" className="img-fluid" alt=""></img>
                            </div>
                        </div>
                    </div>

                    <div className="row py-5" id="row">
                        <div className="col-12 col-lg-4 mb-3 ">
                            <div className="bg-success color1">
                                <h6>10</h6>
                                <p>
                                Acres Land Area
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 mb-3 ">
                            <div className="bg-success color2">
                                <h6>50000</h6>
                                <p>
                                SFT Floor Area
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 mb-3 ">
                            <div className="bg-success color3">
                                <h6>250</h6>
                                <p>
                                Skilled Workers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section-3 */}
            <section className="container-fluid p-0 py-5 position-relative" id="about_section-3">
                <div className="container py-5" id="head">
                    <h6 className="text-center driving-force">DRIVING FORCE</h6>
                    <h5 className="text-center team">Management Team</h5>
                </div>
                <div className="container py-5">

                    <div className="row">
                    <div className="col-12 col-lg-4 mb-5">
                        <div className="d-flex justify-content-center ms-lg-5 align-items-center">
                        <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img className="img-fluid" src="Group 13786.png" height="286px" alt=""></img>
                        </a>
                        </div>
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl modal-dialog-centered">
                            <div className="modal-content ">
                            <div className=" d-flex justify-content-end pe-3 pt-3">
                                <button type="button " className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body pb-3 position-relative">
                                <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-4 col-lg-3">
                                    <img className="img-fluid" src="Group 13786.png"  alt=""></img>
                                    </div>
                                    <div className="col-12 col-sm-8 col-lg-9 pt-4">
                                    <h6 className=" board-semhead">Board Members</h6>
                                    <h6 className=" board-head">S. Pulla Reddy</h6>
                                    <p className=" member-designation-popup">Founder and Managing Director</p>
                                    <div className="border-bottom bg-warning mt-3 mb-2 demo"></div>

                                        <div className="pt-4">

                                        <h6 className="board-members-content"> Mr. Pulla Reddy has over 30 years of experience
                                            in leading enterprise Software & IT Services Industry. 
                                            He is an Engineering graduate in Computer Science
                                            from Nagarjuna University (1985-1989 batch). 
                                            He started his career with Binary Semantics and 
                                            Embee Software, New Delhi. Then, he moved to
                                            Hyderabad in 1995 and started SP Software. </h6>

                                        <h6  className="board-members-content" > Mr. Pulla Reddy was awarded the Bharat Nirman
                                            Excellence Award. Recently, he received the 
                                            Rashtriya Rattan Award for his role in the 
                                            Socio-Economic Development of the company. </h6>

                                        <h6 className="board-members-content" > He has a deep understanding of the organization
                                            and IT Industry. He is an expert in overseeing global
                                            delivery with strategic direction, nurturing 
                                            customer relationships and spearheading the
                                            strategic use of human resources for 
                                            competitive advantage. </h6>

                                        </div>

                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="position-absolute p-2 demo1">
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="pt-5 d-flex flex-column justify-content-center ms-lg-5 align-items-center">
                        <h6 className="pt-3 name">S. Pulla Reddy</h6>
                        <p className="designation">Founder and Managing Director</p>
                        <img src="Group 13757.png" height="68px" width="68px" className="mt-4" alt=""></img>
                        </div>

                    </div>

                    <div className="col-12 col-lg-4 mb-5 ">
                        <div className="d-flex justify-content-center align-items-center ">
                        <img className="d-none d-lg-inline demo2" src="Union.png"  height="286.9px" alt=""></img>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 mb-5">
                        <div className="d-flex justify-content-center me-lg-5 align-items-center">
                        <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            <img className="img-fluid" src="Group 13785.png" height="286px" alt=""></img>
                        </a>
                        </div>
                        <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl modal-dialog-centered">
                            <div className="modal-content ">
                            <div className=" d-flex justify-content-end pe-3 pt-3">
                                <button type="button " className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body pb-3 position-relative">
                                <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-4 col-lg-3">
                                    <img className="img-fluid" src="Group 13785.png"  alt=""></img>
                                    </div>
                                    <div className="col-12 col-sm-8 col-lg-9 pt-4">
                                    <h6 className=" board-semhead">Board Members</h6>
                                    <h6 className=" board-head">Kalyana Putrevu</h6>
                                    <p className=" member-designation-popup">Chief Operating Officer (COO)</p>
                                    <div className="border-bottom bg-warning mt-3 mb-2 demo3" ></div>

                                        <div className="pt-4">

                                        <h6 className="board-members-content" > Mr. Pulla Reddy has over 30 years of experience
                                            in leading enterprise Software & IT Services Industry. 
                                            He is an Engineering graduate in Computer Science
                                            from Nagarjuna University (1985-1989 batch). 
                                            He started his career with Binary Semantics and 
                                            Embee Software, New Delhi. Then, he moved to
                                            Hyderabad in 1995 and started SP Software. </h6>

                                        <h6  className="board-members-content" > Mr. Pulla Reddy was awarded the Bharat Nirman
                                            Excellence Award. Recently, he received the 
                                            Rashtriya Rattan Award for his role in the 
                                            Socio-Economic Development of the company. </h6>

                                        <h6 className="board-members-content" > He has a deep understanding of the organization
                                            and IT Industry. He is an expert in overseeing global
                                            delivery with strategic direction, nurturing 
                                            customer relationships and spearheading the
                                            strategic use of human resources for 
                                            competitive advantage. </h6>

                                        
                                            </div>

                                        </div>
                                </div>
                                </div>
                                
                            </div>
                            <div className="position-absolute p-2 demo4">
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="pt-5 d-flex flex-column justify-content-center  align-items-center">
                        <h6 className="pt-3 name">Kalyana Putrevu </h6>
                        <p className="designation">Chief Operating Officer (COO)</p>
                        <img src="Group 13757.png" height="68px" width="68px" className="mt-4" alt=""></img>
                        </div>

                    </div>
                    </div>
                </div>
                <div className="scroll">
                    <img src="Group 13759.png" className="img-fluid position-absolute demo5" alt=""></img>
                </div>
            </section>
            {/* section-4 */}
            <section className="container-fluid p-0  position-relative demo6" id="about_section-4">
      
                <div className="container-fluid py-5 p-0 demo7">
                    <div className="container demo8">
                    <div className="head">
                        <h6>Why EMBEDDED IT SOLUTIONS (INDIA) PVT. LTD.</h6>
                        <div className="row pt-3 ps-lg-5">
                        <div className="col-12 col-lg-6">
                            <h5>Benefit’s working with EIS as
                            your Trusted EMS Partner</h5>
                            </div>
                        </div>
                        </div>

                        <div className="row pt-5 ps-lg-5 ">
                        <div className="col-12 col-lg-4">
                            <div className="d-flex mb-3">
                            <div className=" icon-img">
                                <img src="Group.png" height="41.55px" width="42.28px" alt=""></img>
                            </div>
                            <div className="ms-4">
                                <p>End to End Manufacturing operations
                                running on Digital Automation / MES</p>
                            </div>
                            </div>

                            <div className="d-flex mb-3">
                            <div className="icon-img">
                                <img src="Group.png" height="41.55px" width="42.28px" alt=""></img>
                            </div>
                            <div className="ms-4">
                                <p>Professional knowledge and experienced
                                Professionals</p>
                            </div>
                            </div>

                            <div className="d-flex mb-3">
                            <div className="icon-img">
                                <img src="Group.png" height="41.55px" width="42.28px" alt=""></img>
                            </div>
                            <div className="ms-4">
                                <p>New Product Development and Scaling Up
                                Support</p>
                            </div>
                            </div>

                            <div className="d-flex mb-3">
                            <div className="icon-img">
                                <img src="Group.png" height="41.55px" width="42.28px" alt=""></img>
                            </div>
                            <div className="ms-4">
                                <p>Reduce product costs with our value engineering</p>
                            </div>
                            </div>
                            
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="d-flex mb-3">
                            <div className="icon-img">
                                <img src="Group.png" height="41.55px" width="42.28px" alt=""></img>
                            </div>
                            <div className="ms-4">
                                <p>Our expert support in seamless transition
                                from the design phase to the manufacturing phase</p>
                            </div>
                            </div>

                            <div className="d-flex mb-3">
                            <div className="icon-img">
                                <img src="Group.png" height="41.55px" width="42.28px" alt=""></img>
                            </div>
                            <div className="ms-4">
                                <p>Expert help in case you have any technical
                                requirements for the desired module with
                                our design for excellence (DFX) support.</p>
                            </div>
                            </div>

                            <div className="d-flex mb-3">
                            <div className="icon-img">
                                <img src="Group.png" height="41.55px" width="42.28px" alt=""></img>
                            </div>
                            <div className="ms-4">
                                <p>Robotic and manual Testing Infrastructure</p>
                            </div>
                            </div>
                            
                        </div>

                        <div className="col-12 col-lg-4">

                            <div className="d-flex mb-3">
                            <div className="icon-img">
                                <img src="Group.png" height="41.55px" width="42.28px" alt=""></img>
                            </div>
                            <div className="ms-4">
                                <p>Automatic equipment for inserting and
                                selecting appropriate components on the
                                assembly line, guarantees on-time delivery
                                with the highest production quality</p>
                            </div>
                            </div>

                            <div className="d-flex mb-3">
                            <div className="icon-img">
                                <img src="Group.png" height="41.55px" width="42.28px" alt=""></img>
                            </div>
                            <div className="ms-4">
                                <p>Modern lines suitable for the production of
                                all types of circuits from simple to the
                                most complex</p>
                            </div>
                            </div>
                            
                        </div>

                        </div>

                    </div>
                </div>
                
            </section>
            {/* section-5 */}
            <section className="container-fluid p-0 py-5 position-relative" id="about_section-5">
                <div className="container  pt-5">
                    <div className="head">
                        <h6>OUR FACILITIES</h6>
                    </div>

                    <div className="container pb-5">
                        <div className="row ms-lg-4 my-5">
                        <div className="col-12 col-lg-6 ps-0">
                            <ul>
                            <li>Latest fuji (AIMEX IIIC)</li>

                            <li>3D solder paste inspection</li>
                                
                                <li>Automated Optical Inspection (AOI)</li>
                                
                                <li>2.5D X-ray inspection</li>
                                
                                <li>RoHS compliance, Lead-free with nitrogen capability</li>
                                
                                <li>System integration and box-build capability</li>
                                
                                <li>Low volume high mix/high volume low mix manufacturing</li>
                                
                                <li>Build To Order (BTO), Configure To Order (CTO) systems</li>
                                
                                <li>Mounting  4 million Components/day</li>
                                
                                <li>Placement accuracy of ±50µ for chips and ±40µ for ICs</li>
                                
                                <li>Ability to handle tiniest chip size of 01005</li>
                                
                                <li>PCB handling capability from 0.4mm to 2.6mm thickness</li>
                                
                                <li>Component placement capacity with 0.3mm pitch</li>
                            </ul>
                        </div>

                        <div className="col-12 col-lg-6 my-2 ps-0">
                            <ul className="ms-lg-5 ps-lg-5">
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

                    <div className="">
                        <img  src="P1143588 1.png" class="w-100" alt=""></img>
                    </div>


                    <div className="scroll">
                        <img src="Group 13760.png" class="img-fluid position-absolute demo9"alt=""></img>
                    </div>
                
                </div>
            </section>
            {/* section-6 */}
            <section className="contact" id="about_section-6">
                <section className="py-5">
                    <div className="container ">
                    <h6 className="advantages" >ADVANTAGES</h6>
                    <p className=" sez">Special Economic Zone (SEZ) Location</p>

                    <div className="d-none d-xl-block">
                        <div className="position-relative demo10" >
                            <div className="position-absolute demo11" >
                            <img className="position-relative demo12" src="Ellipse 4.png" alt=""></img>
                            <img className="position-absolute demo13"   src="Ellipse 5.png" alt=""></img>
                            
                            <div className="position-absolute demo14">
                                <img  src="Ellipse 6.png" alt=""></img>
                                <div className="position-absolute demo15">
                                    <h6 className="text-center text-white demo16" >EIS Location</h6>
                                    <h6 className="text-center text-white demo17">SEZ</h6>
                                </div>
                                <div className="position-absolute demo18">
                                    <img   src="Vector 7.png" alt=""></img>
                                    <div className="position-absolute demo19">
                                        <h6 className="p3-dia-heading colo" >Exports to overseas customer</h6>
                                        <h6 className="p3-dia-decs">Zero Customs Duty & Taxes</h6>
                                    </div>
                                </div>
                                <div className="position-absolute demo20">
                                    <img  src="Vector 8.png" alt=""></img>
                                    <div className="position-absolute demo21">
                                        <h6 className="p3-dia-heading colo" >Foreign Supplier</h6>
                                        <h6 className=" p3">Zero customs duty</h6>
                                    </div>
                                </div>

                                <div className="position-absolute demo22">
                                    <img src="Vector 6.png" alt=""></img>
                                    <div className="position-absolute demo23">
                                        <h6 className="text-end p3-dia-heading colo">Domestic supplier
                                            in another SEZ</h6>
                                            <h6 className="text-end p3-dia-decs" >Zero customs duty</h6>
                                    </div>
                                </div>
                                <div  className="position-absolute demo24">
                                    <img src="Vector 6.png" alt=""></img>
                                    <div className="position-absolute demo25">
                                        <h6 className="text-start p3-dia-heading colo">Customer in another SEZ location in India</h6>
                                            <h6 className="text-start p3-dia-decs" >Zero customs Duty & Taxes</h6>
                                    </div>
                                </div>
                                <div className="position-absolute demo26">
                                    <img src="Vector 1.png" alt=""></img>
                                </div>
                                <div className="position-absolute demo27">
                                    <img src="Frame 13745.png" alt=""></img>
                                    <div className="position-absolute demo28">
                                        <h6 className="text-end colo">Domestic Supplier in Non-SEZ area</h6>
                                            <h6 className="text-end p3-dia-decs" >Zero customs duty IGST May Applicable</h6>
                                    </div>
                                </div>
                                <div className="position-absolute demo29">
                                    <img src="Vector 3.png" alt=""></img>
                                    <div className="position-absolute demo30">
                                        <h6 className="text-start p3-dia-heading colo">Local customer in Non-SEZ area</h6>
                                            <h6 className="text-start p3-dia-decs" >Customs Duty / IGST as Applicable</h6>
                                    </div>
                                </div>
                                <div className="position-absolute demo31">
                                    <img className="position-relative demo32" src="Union (1).png" alt=""></img>
                                    <div className="position-absolute demo33">
                                        <h6 className="text-end zero-tax" >Zero Inbound Duty & Tax</h6>
                                    </div>
                                    <div className="position-absolute demo34">
                                        <h6 className="service-goods text-end">Incoming Goods & Services</h6>
                                    </div>
                                </div>
                                <div className="position-absolute demo35">
                                    <img className="position-relative demo36" src="Union (2).png" alt=""></img>
                                    <div className="position-absolute demo37" >
                                        <h6 className="text-start zero-tax" >Faster Clearances
                                            at Ports</h6>
                                    </div>
                                    <div className="position-absolute demo38">
                                        <h6 className="service-goods">Outgoing Goods & Services</h6>
                                    </div>
                                </div>

                                <div className="position-absolute demo39" >
                                    <h6 className="text-end p3-dia-row1 demo40">Zero duties and taxes on almost all </h6>
                                    <h6  className="text-end p3-dia-row1">Incoming and outgoing goods and services</h6>
                                </div>
                                <div className="position-absolute demo41">
                                    <h6 className="text-start p3-dia-row1 demo42">In-house customs officers provide speedy  </h6>
                                    <h6 className="text-start p3-dia-row1">onsite documentation clearance</h6>
                                </div>
                                
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="d-xl-none my-5">
                        <img className="w-100 " src="Group 13787.png" alt=""></img>
                    </div>
                    <div className="d-flex flex-wrap  h-100  py-5">
                        <div className="col-12 col-lg-4 p-2 " >
                        <div className="p-2 p-md-3 px-lg-5 pt-lg-5 mb-4 demo43">
                            <p className="p3-dia-boxes text-white">Embedded IT Solutions (EIS) is located in Fabcity - Special Economic Zone (SEZ) a duty free zone for export and import, near Hyderabad International Airport</p>
                        </div>
                        </div>
                        <div className="col-12 col-lg-4 p-2" >
                        <div className="p-2 p-md-3 px-lg-5 pt-lg-5 mb-4 demo44">
                            <p className="p3-dia-boxes text-white ">The plant has been setup in a 10 acre campus with an initial manufacturing floor area of 50,000 sq. ft. built with green building concepts</p>
                        </div>
                        </div>
                        <div className="col-12 col-lg-4 p-2" >
                        <div className="p-2 p-md-3 px-lg-5 pt-lg-5 mb-4 demo45">
                            <p className="p3-dia-boxes text-white">SEZ on filing on BOE, Shipping Bill (Export), DTA procurement, DTA Sales and Sub-contracting clearance on daily basis due to presence of customer officer</p>
                        </div>
                        </div>
                    </div>

                    </div>
                </section>
            </section>
            {/* section-7 */}
            <section className="container-fluid p-0 emf" id="about_section-7">
                <div className="demo46" >
                    <div className="container py-5">
                        <div className="row">
                                <div className="col-12 col-lg-6">
                                    <h6 className="certificates mt-5 color">CERTIFICATIONS & COMPLIANCES</h6>
                                    <div className="ps-lg-3">
                                        <h6 className=" recognition mt-4 color">Our Recognition & Awards</h6>
                                        <div>
                                            <h6 className="certified mt-5 color"> Certified for IATF 16949:2016 International Automotive Task Force</h6>
                                            <h6 className="certified mt-3 color">Certified for ISO 9001:2015 Quality Management Systems</h6>
                                            <h6 className="certified mt-3 color">Compliance with ANSI / ESD 520.20-2021 Requirements Standards</h6>
                                            <h6 className="certified mt-3 color">Certified for 14001:2015 Environmental Management Systems</h6>
                                            <h6 className="certified mt-3 color">Certified for 45001:2018 health and safety Systems</h6>
                                            <h6 className="certified mt-3 color">Certified for ISO / IEC 27002-2013</h6>
                                            <h6 className="certified mt-3 color">Certified for Responsible Business Alliance</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <h6 className="certificates mt-5 color" >Our Gallery</h6>
                                    <div className="ps-lg-3">
                                        <h6 className=" recognition mt-4 color">FUTURE READY INFRASTRUCTURE AND STATE OF THE ART FACILITIES.</h6>
                                        <div className="row my-5">
                                            <div className="col-12 col-sm-4 col-lg-4 mb-3 section8-images">
                                                <div className="d-flex flex-column gap-3">
                                                    <img className="w-100 demo47"  src="IMG_20190326_125922 3.png" alt=""></img>
                                                    <img className="w-100 demo48"  src="IMG_20190326_125922 7.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-4 col-lg-4 mb-3 section8-images">
                                                <div className="d-flex flex-column gap-3">
                                                    <img className="w-100 col-12 demo49"  src="Rectangle 1445.png" alt=""></img>
                                                    <img className="w-100 demo50" src="Rectangle 1447.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-4 col-lg-4 mb-3 section8-images">
                                                <div className="d-flex flex-column gap-3">
                                                    <img className="w-100 demo51"  src="Rectangle 1450.png" alt=""></img>
                                                    <img className="w-100 demo52"  src="Rectangle 1456.png" alt=""></img>
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
            <section className="py-5 demo53"  id="about_section-8">  
            <div>
                <h6 className="our">OUR CLIENTS</h6>
                <h6 className="growth">Growth Enablers</h6>
                <div className="container d-none d-md-block">
                    <div className="row ">
                        <div className="col-12 col-lg-6">
                        <div className="container-fluid">
                            <div className="row">
                            <h6 className="my-5 base">International Customer Base</h6>
                            <div className="col-4">
                                <div className="card my-4 zero1">
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="silicon.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4 zero1" >
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="statron.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4 zero1">
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="tenpao.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4 zero1" >
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="dtds.png" alt=""></img>
                                </div>
                                </div>
            
                            </div>
                            <div className="col-4">
                                <div className="card my-4 zero1" >
                                <div className="d-flex flex-column justify-content-center">
                                    <img className="" src="proxim.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4 zero1" >
                                <div className="  d-flex flex-column justify-content-center ">
                                    <img className="" src="microsemi.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4 zero1" >
                                <div className="d-flex flex-column justify-content-center ">
                                    <img className="" src="Wi2Wi.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4 zero1" >
                                <div className=" d-flex flex-column justify-content-center ">
                                    <img className="" src="quintessential.png" alt=""></img>
                                </div>
                                </div>
            
                            </div>
                            <div className="col-4">
                                <div className="card my-4 zero1" >
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="wipro.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4 zero1" >
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
                            <h6 className="my-5 base">Domestic Customer Base</h6>
                            <div className="col-4">
                                <div className="card my-4 zero1" >
                                <div className="d-flex flex-column justify-content-center">
                                    <img className="" src="bs-techno.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4 zero1" >
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="visiontek.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4 zero1" >
                                <div className="d-flex flex-column justify-content-center">
                                    <img className="" src="hbl.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4 zero1" >
                                <div className="d-flex  justify-content-center">
                                    <img className="" src="image 13.png" alt=""></img>
                                </div>
                                </div>
            
                            </div>
                            <div className="col-4">
                                <div className="card my-4 zero1" >
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="ecil.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4 zero1" >
                                <div className=" d-flex flex-column justify-content-center ">
                                    <img className="" src="totaka.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4 zero1" >
                                <div className="d-flex justify-content-center ">
                                    <img className=" " src="image 11.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4 zero1" >
                                <div className="d-flex  justify-content-center ">
                                    <img className="mt-4" src="image 14.png" alt=""></img>
                                </div>
                                </div>
            
                            </div>
                            <div className="col-4">
                                <div className="card my-4 zero1">
                                <div className=" d-flex flex-column justify-content-center">
                                    <img className="" src="vedang.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4 zero1">
                                <div className="d-flex flex-column justify-content-center">
                                    <img className="" src="kernex.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4 zero1">
                                <div className="d-flex  justify-content-center">
                                    <img className="mt-4" src="image 12.png" alt=""></img>
                                </div>
                                </div>
                                <div className="card my-4 zero1">
                                <div className="d-flex  justify-content-center">
                                    <img className=" mt-4" src="download.png" alt=""></img>
                                </div>
                                </div>
                            </div>
                            </div>
            
                        </div>
            
                        </div>
            
                    </div>
               
                    <p className="my-5 all">All company, product and service names of the third 
                        party companies used in this website are for
                        identification purposes only. All these
                        product names, logos and brands belong
                        to their respective owners.</p>
            
                    </div>
            </div>
            </section>
            {/* section-9 */}
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
export default About