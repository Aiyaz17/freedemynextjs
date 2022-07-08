import React from "react";
import Link from "next/link";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import LinkedIn from "@material-ui/icons/LinkedIn";

function Footer() {
  var defaultStyle = {
    color: "inherit",
    textDecoration: "none",
  };
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-about-us footer-child">
          <p className="footer-heading">About us</p>
          <p className="footer-about">
            Freedemy is a platform where you can find all (More than 5k) free
            courses provided by udemy and google.
            <br /> Here you can search between courses from all categories and
            field and start learning for free. New courses gets added everyday.
          </p>
          <p style={{ marginTop: "20px" }}>© 2021 Freedemy</p>
        </div>
        <div className="footer-contact-us footer-child">
          <p className="footer-heading">Legals</p>
          <Link href="/terms-and-condition" style={defaultStyle}>
            <p className="legals-child">Terms & Conditions</p>
          </Link>
          <Link href="/privacy-policy" style={defaultStyle}>
            <p className="legals-child">Privacy Policy</p>
          </Link>
        </div>
        <div className="footer-contact-us footer-child">
          <p className="footer-heading">Contact Us</p>
          <p>qureshi.aiyaz123@gmail.com</p>
          <div className="footer-icons">
            <p>
              <a
                href="https://www.facebook.com/aiyaz.qureshi.9"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit" }}
              >
                <Facebook />
              </a>
            </p>
            <p>
              <a
                href="https://twitter.com/AiyazQureshi"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit" }}
              >
                <Twitter />
              </a>
            </p>

            <p>
              <a
                href="https://www.linkedin.com/in/aiyaz-qureshi-b1abb8210/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit" }}
              >
                <LinkedIn />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
