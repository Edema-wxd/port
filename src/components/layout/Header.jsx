import React from "react";
import { useState } from "react";
import style from "./Header.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className={style.header}>
      <p className={style.linktxt}>Francis.wxd</p>

      <div className={style.drop}>
        <div className={style.linkarr} id="myDropdown">
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
        </div>
        {openMenu ? (
          <>
            <div className={style.tit}>
              <AiOutlineClose onClick={toggleMenu} />
              <div className={style.Nslinks}>
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
              </div>
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
