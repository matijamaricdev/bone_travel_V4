"use client";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Image from "next/image";
import { languages } from "@/data/languages";
import Link from "next/link";
import Language from "./components/Language";

export default function Header2() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`header header-white sticky-bar ${scrolled ? "stick" : ""}`}
    >
      <div className="container-fluid box-header-home4">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo">
              <Link className="d-flex" href="/">
                <Image
                  width={150}
                  height={19}
                  alt="Luxride"
                  src="/assets/imgs/template/logo-black.svg"
                />
              </Link>
            </div>
            <div className="header-nav">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <Nav />
                </ul>
              </nav>
              <div className="burger-icon burger-icon-white">
                <span className="burger-icon-mid"></span>
                <span className="burger-icon-bottom"></span>
              </div>
            </div>
            <div className="header-right">
              <div className="d-none d-xxl-inline-block align-middle mr-10">
                <a
                  className="text-14-medium call-phone color-white hover-up"
                  href="tel:+41227157000"
                >
                  +41 22 715 7000
                </a>
              </div>
              <div className="d-none d-xxl-inline-block box-dropdown-cart align-middle mr-10">
                <Language />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
