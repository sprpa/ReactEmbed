import React from "react";

import Group_2 from "../Images/Group 2.png"

function Customer(){
    return(
        <div className="customer-login">
            

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
                    <img src={Group_2} alt=""></img>
                </div>
            </section>

            

        </div>
    )
}
export default Customer