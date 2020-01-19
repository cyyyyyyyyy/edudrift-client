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
        <div className={style.inner}>
          <div className={style.log}>
            <img src={logo} alt="" />
          </div>
          <h2 className={style.h2}>Launching Soon in March!</h2>
          <h4 className={style.title}>EDUDRIFT</h4>
          <p className={style.title} style={{ padding: "10px 0 40px 0" }}>
            Global Education Marketplace & Ticketing Platform
          </p>
          <ul className={style.text_list}>
            <li>
              <p className={style.text}>
                To List your programs and receive EduDrift Partnership Benefits
              </p>
              <a href="mailto:partners@edudrift.com" className={style.btn}>
                Become an EduDrift Partner
              </a>
            </li>
            <li>
              <p className={style.text}>
                To learn more about Education Travel and education programs
                across the globe, visit our travel blog
              </p>
              <a
                href="https://footsteps-edudrift.blogspot.com/"
                target="_blank"
                className={style.btn}
              >
                Footsteps by EduDrift
              </a>
            </li>
          </ul>
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
              <a
                href="https://www.youtube.com/channel/UCmzu9ZF0037mYlbsObeqzJg"
                target="_blank"
              >
                <img src={youtube} alt="" />
                <p>YouTube</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ClientIndex;
