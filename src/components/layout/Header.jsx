import React from "react";
import { useState } from "react";
import style from "./Header.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const location = useLocation().pathname;
  var eskelebe;
  if (location === "/") {
    eskelebe = (
      <>
        <AnchorLink className={style.link} href="#hero">
          About
        </AnchorLink>
        <AnchorLink className={style.link} href="#skills">
          Skills
        </AnchorLink>
        <AnchorLink className={style.link} href="#portfolio">
          Portfolio
        </AnchorLink>
        <AnchorLink className={style.link} href="#contact">
          Contact
        </AnchorLink>
      </>
    );
  } else {
    eskelebe = (
      <>
        <Link className={style.link} to="/">
          About
        </Link>
        <Link className={style.link} to="/">
          Skills
        </Link>
        <Link className={style.link} to="/">
          Portfolio
        </Link>
        <Link className={style.link} to="/">
          Contact
        </Link>
      </>
    );
  }

  return (
    <div className={style.header}>
      <Link to="/">
        <p className={style.linktxt}>Francis.wxd</p>
      </Link>

      <div className={style.drop}>
        <div className={style.linkarr} id="myDropdown">
          {eskelebe}
        </div>
        {openMenu ? (
          <>
            <div className={style.tit}>
              <AiOutlineClose onClick={toggleMenu} />
              <div className={style.Nslinks}>{eskelebe}</div>
            </div>
          </>
        ) : (
          <div onClick={toggleMenu} className={style.menubtn}>
            <BiMenu />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
