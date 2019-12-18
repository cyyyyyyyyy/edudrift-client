import React from "react";

import style from "./index.module.scss";

import logo from "../../static/images/logo@2x.png";
import facebook from "../../static/images/FaceBook@2x.png";
import ins from "../../static/images/ins@2x.png";
import youtube from "../../static/images/you-tube@2x.png";

const ClientIndex = props => {
  return (
    <>
      <section className={style.main}>
        <div className={style.log}>
          <img src={logo} alt="" />
        </div>
        <h2 className={style.h2}>To Be Launched Soon!</h2>
        <h4 className={style.title}>EDUDRIFT</h4>
        <p className={style.text}>
          You can follow the latest developments of edurift through these
          Networks
        </p>
        <a href="mailto:partners@edudrift.com" className={style.btn}>Become an EduDrift Partner</a>
        <ul className={style.list}>
          <li>
            <a
              href="https://www.facebook.com/edudrift.official"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={facebook} alt="" />
              <p>Facebook</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/edudrift.official"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={ins} alt="" />
              <p>Instagram</p>
            </a>
          </li>
          <li>
            <img src={youtube} alt="" />
            <p>YouTube</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default ClientIndex;
