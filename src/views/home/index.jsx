import React from "react";
import { Input, Row, Col } from "antd";
import { Switch, Route } from "react-router-dom";

import StoreIndex from "../store-index";

import log from "../../static/images/logo2@2x.png";
import style from "./index.module.scss";
import facebook from "../../static/images/FaceBook@2x.png";
import ins from "../../static/images/ins@2x.png";
import youtube from "../../static/images/you-tube@2x.png";

const Home = () => {
  const router = () => {
    return (
      <Switch>
        <Route path="/store" component={StoreIndex} />
      </Switch>
    );
  };

  return (
    <>
      <header className={style.header}>
        <div className={style.inner}>
          <ul className={style.header_inner}>
            <li>
              <img src={log} alt="" className={style.log} />
            </li>
            <li>
              <Input.Search
                style={{ float: "left", width: 200, marginTop: 16 }}
              />
              <a>Log in</a>
              <a>Sign up</a>
            </li>
          </ul>
        </div>
      </header>
      {router()}
      <footer className={style.footer}>
        <div className={style.footer_inner}>
          <Row>
            <Col span={6}>
              <ul className={style.list}>
                <li className={style.title}>EDUDRIFT</li>
                <li>Alexgothken@gmail.com</li>
                <li>010 1274 9786</li>
              </ul>
            </Col>
            <Col span={6}>
              <ul className={style.list}>
                <li className={style.title}>EduDrift</li>
                <li>About</li>
                <li>Policies</li>
                <li>Careers</li>
                <li>Advertise</li>
                <li>with us</li>
              </ul>
            </Col>
            <Col span={6}>
              <ul className={style.list}>
                <li className={style.title}>Partners</li>
                <li>Our Program Partners</li>
                <li> Work Portfolio</li>
                <li>Team</li>
                <li>Plan & Pricing</li>
                <li>News</li>
              </ul>
            </Col>
            <Col span={6}>
              <ul className={style.list}>
                <li className={style.title}>Partners</li>
                <li>Our Address</li>
                <li>3 Tianfu Road Apt. 728 CHENGDU, CHINA</li>
                <li className={style.client}>
                  <a
                    href="https://www.facebook.com/edudrift.official"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src={facebook} alt="" />
                  </a>
                  <a
                    href="https://www.instagram.com/edudrift.official"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src={ins} alt="" />
                  </a>
                  <a>
                    <img src={youtube} alt="" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Home;
