import React, { useState } from "react";
import { Modal, Form, Select, Input, Button } from "antd";

import style from "./index.scss";

import logo from "../../static/images/logo.png";

const ClientIndex = props => {
  return (
    <>
      <header className={style.header}>
        <div className={style.inner}>
          <ul className={style.log_bar}>
            <li>
              <img className={style.log} src={logo} alt="" />
            </li>
          </ul>
          <h3 className={style.header_h3}>List your Event on EduDrift</h3>
          <p className={style.header_p}>
            Expand your admission pool by listing your event for free on
            EduDrift.
          </p>
          <a className={style.header_btn}>LIST YOUR EVENT</a>
        </div>
      </header>
      <footer className={style.footer}>
        <p>
          EduDrift Pte. Ltd. (Singapore) Company Registration Number: 201830263E
          Email:partners@edudrift.com
        </p>
      </footer>
    </>
  );
};

export default ClientIndex;
