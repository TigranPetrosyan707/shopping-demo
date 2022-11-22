import "./style.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logoShop.jpg";
import crossMenu from "../../assets/logo/cross-mark.png";
import linkedin from "../../assets/icon-link/linkedin-logo.png";
import github from "../../assets/icon-link/github.png";
import gmail from "../../assets/icon-link/gmail.png";
import watch from "../../assets/category-logo/watch.png";
import jewellery from "../../assets/category-logo/diamond.png";
import accessory from "../../assets/category-logo/accessory.png";
import footerIcon from "../../assets/logo/down-up-arrow.png";
import volume from "../../assets/logo/volume-up.png";
import { useState } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(true);
  const [menuToggler, setMenuToggler] = useState(false);
  const impulseRef = useRef(null);
  const aboutSectionText =
    "eliteMode is an online shopping company established in 2022 which is a form of electronic commerce which allows consumers to  directly buy goods or services from a seller over the Internet   using a web browser or a mobile app.";
  const readAboutSection = () => {
    const utterance = new SpeechSynthesisUtterance(aboutSectionText);
    speechSynthesis.speak(utterance);
  };
  return (
    <>
      <header id="home">
        <div className="sign-in" onClick={() => navigate("sign")}>
          Sign in
        </div>
        <div
          className={menuToggler ? "menu-toggler" : "menu-toggler-rotate"}
          onClick={() => {
            setOpenMenu(!openMenu);
            setMenuToggler(!menuToggler);
          }}
        >
          <img src={crossMenu} alt="cross-menu" />
        </div>
        <nav
          className={openMenu ? "nav-bar" : "nav-bar-open"}
          onClick={() => {
            setOpenMenu(!openMenu);
            setMenuToggler(!menuToggler);
          }}
        >
          <ul className="nav-list">
            <li>
              <a href="#home" className="nav-link">
                home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                about
              </a>
            </li>
            <li>
              <a href="#category" className="nav-link">
                category
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="landing-text" ref={impulseRef}>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <h6> make it easy / just be the boss</h6>
        </div>
      </header>
      <section className="about" id="about">
        <div className="container">
          <div className="about-details">
            <div className="about-heading">
              <h1>About</h1>
              <h6>Our Shop</h6>
            </div>
            <p className="blockquote">
              eliteMode is an online shopping company established in 2022 which
              is a form of electronic commerce which allows consumers to
              directly buy goods or services from a seller over the Internet
              using a web browser or a mobile app. eliteMode enables the
              customer to browse the firm's range of products and services, view
              photos or images of the products, along with information about the
              product specifications, features and prices. Online stores usually
              enable shoppers to use "search" features to find specific models,
              brands or items. Online customers must have access to the Internet
              and a valid method of payment in order to complete a transaction,
              such as a credit card, an Interac-enabled debit card, or a service
              such as PayPal.
              <img
                src={volume}
                alt="volume"
                className="speaker"
                onClick={readAboutSection}
              />
              <p className="companyName"> eliteMode</p>
            </p>
            <div className="social-media">
              <ul className="nav-list">
                <li>
                  <a href="#" className="icon-link">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" className="icon-link">
                    <img src={gmail} alt="gmail" />
                  </a>
                </li>
                <li>
                  <a href="#" className="icon-link">
                    <img src={github} alt="github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="category" id="category">
        <div className="container">
          <div className="category-heading">
            <h1>category</h1>
            <h6>what do we offer</h6>
          </div>
          <div className="category-types">
            <div
              className="category-type"
              onClick={() => navigate("category/watches")}
            >
              <div className="icon-container">
                <img src={watch} alt="watch" />
              </div>
              <h1>watches</h1>
              <p>
                Watches were developed in the 17th century from spring-powered
                clocks, which appeared as early as the 14th century. During most
                of its history the watch was a mechanical device, driven by
                clockwork, powered by winding a mainspring, and keeping time
                with an oscillating balance wheel.
              </p>
            </div>
            <div className="category-type">
              <div className="icon-container">
                <img src={jewellery} alt="jewellery" />
              </div>
              <h1>jewellery</h1>
              <p>
                Jewellery is one of the oldest types of archaeological artefact
                with 100,000-year-old beads made from Nassarius shells thought
                to be the oldest known jewellery. The basic forms of jewellery
                vary between cultures but are often extremely long-lived.
              </p>
            </div>
            <div className="category-type">
              <div className="icon-container">
                <img src={accessory} alt="accessory" />
              </div>
              <h1>accessories</h1>
              <p>
                In fashion, an accessory is an item used to contribute, in a
                secondary manner, to an individual's outfit. Accessories are
                often chosen to complete an outfit and complement the wearer's
                look.They have the capacity to further express an individual's
                identity and personality.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-heading">
            <h1>contact</h1>
            <h6>let's keep in touch</h6>
          </div>
          <form action="" autoComplete="off">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name..."
              required
            />
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email..."
              required
            />
            <label htmlFor="subject">Subject :</label>
            <textarea
              name="subject"
              id="subject"
              cols={10}
              rows={10}
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
      <footer className="copyright">
        <div
          className="up"
          id="up"
          onClick={() =>
            impulseRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <img src={footerIcon} alt="footerIcon" />
        </div>
        <p>&copy; 2022 eliteMode</p>
      </footer>
    </>
  );
};

export default HomePage;
