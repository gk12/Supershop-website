import React from "react";
import "./aboutSection.css";
import {Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import LinkedinIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  // const visitInstagram = () => {
  //   window.location = "https://www.instagram.com/__gauravjha__/";
  // };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>


          <div>
          <span>
              This is an E-commerece website(Supershop) made by using MERN stack where user can buy and checkout product.
              And add review and rating for the product. 
            </span>
            {/* comment avtar */}
          {/* <Avatar
              style={{ width: "20vmax", height: "20vmax", margin: "2vmax 0" }}
              //put founder image at abc.png
              src="https://res.cloudinary.com/gk35044/image/upload/v1664183793/avatars/logo_qqqtid.png"
              alt="Website Logo"
            /> */}
          </div>

          <div>
          <h1>Designed and Developed By</h1>

             {/* src commented and alt and h2 */}

            <Avatar
              style={{ width: "15vmax", height: "15vmax", margin: "2vmax 0" }}
              //put founder image at abc.png
              // src="https://res.cloudinary.com/gk35044/image/upload/v1664181456/avatars/WhatsApp_Image_2022-09-26_at_2.07.00_PM_ubggul.jpg"
              // alt="Founder"
            />
            {/* <h2>Gaurav Kumar</h2> */}
            <h2>Group of People</h2>
          
          
          </div> 
        </div>
      </div>
    </div>
  );
};

export default About;
