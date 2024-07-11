import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import "../menu/menu.css";
import logo from "../../../../public/logo.png";

gsap.registerPlugin(CSSRulePlugin);

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let activeItemIndicator = CSSRulePlugin.getRule(
      ".menu-item p#active::after"
    );

    gsap.set(".menu-item p", { y: 225 });

    const timeline = gsap.timeline({ paused: true });

    timeline.to(".overlay", {
      duration: 1.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
    });

    timeline.to(
      ".menu-item p",
      {
        duration: 1.5,
        y: 0,
        stagger: 0.2,
        ease: "power4.out",
      },
      "-=1"
    );

    timeline.to(
      activeItemIndicator,
      {
        width: "100%",
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
      },
      "<"
    );

    timeline.to(
      ".sub-nav",
      {
        bottom: "10%",
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
      },
      "<"
    );

    const handleToggle = () => {
      if (isOpen) {
        timeline.reverse();
      } else {
        timeline.play();
      }
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const toggleButton = document.querySelector(".burguer");
    if (toggleButton) {
      toggleButton.addEventListener("click", handleToggle);
    }

    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener("click", handleToggle);
      }
    };
  }, [isOpen]);

  return (
    <>
      <nav>
        <div className="info">
          <p>02.2024</p>
        </div>
        <div className="logo">
          <p>
            <a href="#">
              <img src="logo.png" alt="logo" className="logo" />
            </a>
          </p>
        </div>
        <div className="toggle-btn">
          <button className={`burguer ${isOpen ? "active" : ""}`}></button>
        </div>
      </nav>
      <div className={`overlay ${isOpen ? "open" : ""}`}>
        <div className="overlay-menu">
          <div className="menu-item">
            <p id="active">
              <a href="#">Home</a>
            </p>
          </div>
          <div className="menu-item">
            <p>
              <a href="#">Portfolio</a>
            </p>
          </div>
          <div className="menu-item">
            <p>
              <a href="#">About</a>
            </p>
          </div>
          <div className="menu-item">
            <p>
              <a href="#">Blog</a>
            </p>
          </div>
          <div className="menu-item">
            <p>
              <a href="#">Contact</a>
            </p>
          </div>

          <div className="sub-nav">
            <p>
              <a href="https://www.instagram.com/blacksheepfilmes/">
                Instagram
              </a>
            </p>
            <p>.</p>
            <p>
              <a href="https://vimeo.com/blcksheepfilmes">Vimeo</a>
            </p>
            <p>.</p>
            <p>
              <a href="https://www.linkedin.com/company/blacksheepfilmes">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
