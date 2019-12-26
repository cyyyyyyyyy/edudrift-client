import React from "react";
import {
  Breadcrumb,
  Carousel,
  Tabs,
  InputNumber,
  Typography,
  Row,
  Col,
  List,
  Icon,
  Avatar,
  Rate
} from "antd";

import style from "./index.module.scss";

import log from "../../static/images/logo2@2x.png";

const { TabPane } = Tabs;
const { Text } = Typography;

const StoreIndex = () => {
  const renderTabs = () => {
    const list = () => {
      return (
        <Row gutter={[16, 16]}>
          {[1, 2, 3, 4, 5, 6].map(() => (
            <Col span={12}>
              <InputNumber style={{ width: "100%" }} />
            </Col>
          ))}
        </Row>
      );
    };

    return (
      <Tabs>
        <TabPane tab="Student" key="1">
          {list()}
        </TabPane>
        <TabPane tab="Adjudicator" key="2">
          {list()}
        </TabPane>
        <TabPane tab="Observer" key="3">
          {list()}
        </TabPane>
      </Tabs>
    );
  };

  const renderOrderInfo = () => {
    return (
      <ul className={style.orderInfo}>
        <li className={style.orderInfo_left}>
          <Carousel className={style.carousel} autoplay>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
          <ul className={style.order_left_list}>
            <li>12</li>
            <li>12</li>
            <li>12</li>
            <li>12</li>
            <li>12</li>
            <li>12</li>
            <li>12</li>
          </ul>
        </li>
        <li className={style.orderInfo_right}>
          <div>
            <h2 className={style.order_right_h2}>
              National University of Singapore Global Leadership & Talent
              Program (Summer 2019)
              <span className={style.order_right_tag}>Certified</span>
              <span className={style.order_right_tag}>Own product</span>
            </h2>
            <ul className={style.time}>
              <li>01 May 2019 - 14 May 2019</li>
              <li>Project deadline 01 May 2019</li>
            </ul>
            <p style={{ padding: "12px 0" }}>NUS Education</p>
            <ul className={style.tag}>
              <li>Singapore</li>
              <li>Study tour</li>
              <li>high school</li>
            </ul>
            <ul className={style.description}>
              <li>Product feature description 1</li>
              <li>Product feature description 2</li>
              <li>Product feature description 3</li>
            </ul>
            <ul className={style.price}>
              <li className={style.price_li_1}>
                <p>Price</p>
                <div className={style.price_num}>$3388- 13388</div>
                <span>Sold 123</span>
                <span>Price description</span>
              </li>
              <li>
                <p>Discount</p>
                <ul className={style.price_bird}>
                  <li>
                    <span className={style.ex_tag}>Early bird -500</span>
                    <span>Early bird privilege, only 7 days left</span>
                  </li>
                  <li>
                    <span
                      className={style.ex_tag}
                      style={{
                        background: "rgba(255,96,96,0.1)",
                        color: "rgba(255,96,96,1)"
                      }}
                    >
                      20%OFF
                    </span>
                    <span>New user benefits</span>
                  </li>
                </ul>
              </li>
            </ul>
            {renderTabs()}
            <ul className={style.total}>
              <li className={style.total_text}>Total</li>
              <li className={style.price_num} style={{ width: 426 }}>
                $13388
              </li>
              <li>
                <a className={style.total_btn}>application now</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    );
  };

  const renderNav = () => {
    return (
      <Tabs style={{ padding: "40px 0 20px 0" }}>
        <TabPane tab="INTRODUCTION" key="1" />
        <TabPane tab="ACTIVITIES" key="2" />
        <TabPane tab="accommodation" key="3" />
        <TabPane tab="ITINERARY/SCHEDULE" key="4" />
        <TabPane tab="COMMENTS" key="5" />
      </Tabs>
    );
  };

  const renderIntroduction = () => {
    return (
      <section>
        <header className={style.info_header}>INTRODUCTION</header>
        <ul className={style.info}>
          <li>
            项目名称 Program Name/Title (E.g. Global Leadership Program 2019)
          </li>
          <li>组织机构/学校 National University of Singapore</li>
          <li>项目时间 01 May 2019 - 14 May 2019</li>
          <li>报名截至时间 E.g. 01 May 2019</li>
          <li>目的地 City, Country</li>
          <li>可报名人员类型 学员 观摩人员 教员</li>
          <li>成团要求: 不少于30位学员</li>
          <li>
            <h3>学校/场地 简介</h3>
          </li>
          <li>
            <p>
              It is the world's leading university in Singapore. The university
              is a member of the Pacific Rim University Alliance, the Asian
              University Alliance, the Asia Pacific International Education
              Association, the International Research University Alliance,
              Universitas 21 and other well-known university alliances, and has
              also passed AACSB and EQUIS certification. Its research in the
              fields of engineering, life science, biomedicine, social science
              and natural science enjoys a world reputation.
            </p>
          </li>
          <li className={style.photo}>
            <Row gutter={[16, 16]}>
              {[1, 2, 3].map(() => (
                <Col span={8}>
                  <a>11</a>
                </Col>
              ))}
            </Row>
          </li>
          <li>
            <h3>项目描述</h3>
          </li>
          <li>
            <p>
              It is the world's leading university in Singapore. The university
              is a member of the Pacific Rim University Alliance, the Asian
              University Alliance, the Asia Pacific International Education
              Association, the International Research University Alliance,
              Universitas 21 and other well-known university alliances, and has
              also passed AACSB and EQUIS certification. Its research in the
              fields of engineering, life science, biomedicine, social science
              and natural science enjoys a world reputation.
            </p>
          </li>
          <li className={style.photo}>
            <Row gutter={[16, 16]}>
              {[1, 2, 3].map(() => (
                <Col span={8}>
                  <a>11</a>
                </Col>
              ))}
            </Row>
          </li>
          <li>
            <h3>项目特色标题1，也可以比较长，差不多就这个长度</h3>
          </li>
          <li>
            <p>
              It is the world's leading university in Singapore. The university
              is a member of the Pacific Rim University Alliance, the Asian
              University Alliance
            </p>
          </li>
          <li className={style.photo}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <a style={{ height: 495 }}>11</a>
              </Col>
            </Row>
          </li>
          <li>
            <h3>项目特色标题1，也可以比较长，差不多就这个长度</h3>
          </li>
          <li>
            <p>
              It is the world's leading university in Singapore. The university
              is a member of the Pacific Rim University Alliance, the Asian
              University Alliance
            </p>
          </li>
          <li className={style.photo}>
            <Row gutter={[16, 16]}>
              {[1, 2].map(() => (
                <Col span={12}>
                  <a style={{ height: 240 }}>11</a>
                </Col>
              ))}
            </Row>
          </li>
          <li>
            <h3>Certificate</h3>
          </li>
          <li>
            <p>
              It is the world's leading university in Singapore. The university
              is a member of the Pacific Rim University Alliance, the Asian
              University Alliance
            </p>
          </li>
          <li className={style.photo}>
            <Row gutter={[16, 16]}>
              {[1, 2].map(() => (
                <Col span={12}>
                  <a style={{ height: 240 }}>11</a>
                </Col>
              ))}
            </Row>
          </li>
          <li>
            <h3>Travel</h3>
          </li>
          <li>
            <p>
              It is the world's leading university in Singapore. The university
              is a member of the Pacific Rim University Alliance, the Asian
              University Alliance, the Asia Pacific International Education
              Association, the International Research University Alliance,
              Universitas 21 and other well-known university alliances, and has
              also passed AACSB and EQUIS certification. Its research in the
              fields of engineering, life science, biomedicine, social science
              and natural science enjoys a world reputation.
            </p>
          </li>
          <li className={style.photo}>
            <Row gutter={[16, 16]}>
              {[1, 2, 3].map(() => (
                <Col span={8}>
                  <a>11</a>
                </Col>
              ))}
            </Row>
          </li>
          <li>
            <h3>Accommodation</h3>
          </li>
          <li>
            <p>
              It is the world's leading university in Singapore. The university
              is a member of the Pacific Rim University Alliance, the Asian
              University Alliance
            </p>
          </li>
          <li className={style.photo}>
            <Row gutter={[16, 16]}>
              {[1, 2, 3, 4, 5, 6].map(() => (
                <Col span={8}>
                  <a>11</a>
                </Col>
              ))}
            </Row>
          </li>
        </ul>
      </section>
    );
  };

  const renderSchedule = () => {
    return (
      <section>
        <header className={style.info_header}>ITINERARY/SCHEDULE</header>
        <div className={style.schedule}>
          <ul>
            <li>D 01</li>
            <li>D 02</li>
            <li>D 03</li>
            <li>D 04</li>
          </ul>
          <ul className={style.schedule_main}>
            <li className={style.schedule_main_title}>day01 title</li>
            <li className={style.schedule_main_sub}>Morning (0900H - 1200H)</li>
            <li className={style.schedule_main_list}>
              <div>Activity Line 01</div>
              <div>Activity Line 02</div>
              <div>Activity Line 03</div>
            </li>
            <li className={style.schedule_main_sub}>Morning (0900H - 1200H)</li>
            <li className={style.schedule_main_list}>
              <div>Activity Line 01</div>
              <div>Activity Line 02</div>
              <div>Activity Line 03</div>
            </li>
            <li className={style.schedule_main_sub}>Morning (0900H - 1200H)</li>
            <li className={style.schedule_main_list}>
              <div>Activity Line 01</div>
              <div>Activity Line 02</div>
              <div>Activity Line 03</div>
            </li>
          </ul>
        </div>
      </section>
    );
  };

  const renderPay = () => {
    return (
      <section>
        <header className={style.info_header}>购买须知</header>
        <ul className={style.info}>
          <li>
            <p>
              本商品需二次确认，支付完成后商家会在9个工作小时内（工作日9:00-18:00）确认是否预定成功
              超时未确认可申请退款，申请后系统自动退款，预计1-7个工作日退还到支付账户
              本商品提供出团通知书/确认单，商家最晚在出行日期前1天发送，如未收到请及时与商家联系
            </p>
          </li>
        </ul>
      </section>
    );
  };

  const renderRefund = () => {
    return (
      <section>
        <header className={style.info_header}>退款须知</header>
        <ul className={style.info}>
          <li>
            <p>使用日期前15天 17:00之前 20%</p>
          </li>
          <li>
            <p>使用日期前7天 17:00之前 40%</p>
          </li>
          <li>
            <p>使用日期前3天 17:00之前 80%</p>
          </li>
          <li>
            <p>使用日期前3天 17:00之前 100%</p>
          </li>
        </ul>
      </section>
    );
  };

  const renderRefundWay = () => {
    return (
      <section>
        <header className={style.info_header}>退款政策</header>
        <ul className={style.info}>
          <li>
            <p>产品服务信息 该旅游产品由 北京风淼国际旅行社有限公司</p>
          </li>
        </ul>
      </section>
    );
  };

  const renderYouLink = () => {
    return (
      <section>
        <header className={style.info_header}>Maybe you like</header>
        <Row>
          {[1, 2, 3, 4].map(() => (
            <Col span={6}>
              <div className={style.card}>
                <div className={style.image}>123123</div>
                <div className={style.card_info}>
                  <h3>Singapore</h3>
                  <span>01 August 2019 - 08 August 2019</span>
                  <p>
                    National University of Singapore Global Leadership & Talent
                    Program (Summer 2019)
                  </p>
                  <div className={style.card_footer}>
                    <a className={style.card_btn}>Register</a>
                    <span>S$1, 380</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    );
  };

  const renderComments = () => {
    return (
      <section>
        <header className={style.info_header}>Comments</header>
        <List
          itemLayout="vertical"
          size="large"
          actions={[
            <Icon type="star-o" key="list-vertical-star-o" />,
            <Icon type="like-o" key="list-vertical-like-o" />,
            <Icon type="message" key="list-vertical-message" />
          ]}
          pagination={{
            pageSize: 6
          }}
          dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={item => (
            <List.Item key={item.title}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={
                  <div>
                    <span>LING</span>
                    <span>2019-12-05 18:00</span>
                    <Rate style={{ paddingLeft: 20 }} />
                  </div>
                }
              />
              A write-up about the program organiser’s previous experience, the
              years in the industry, the range of other programs offered and
              information that may contribute to the reliability of the program
              and the fulfiling of promises made in the program details offered.
            </List.Item>
          )}
        />
      </section>
    );
  };

  return (
    <section>
      <div className={style.inner}>
        <Breadcrumb style={{ margin: "24px 0" }}>
          <Breadcrumb.Item>商城首页</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Short Study Tour</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">
              National University of Singapore Global Leadership & Talent
              Program (Summer 2019)
            </a>
          </Breadcrumb.Item>
        </Breadcrumb>
        {renderOrderInfo()}
        {renderNav()}
        {renderIntroduction()}
        {renderSchedule()}
        {renderPay()}
        {renderRefund()}
        {renderRefundWay()}
        {renderComments()}
        {renderYouLink()}
      </div>
    </section>
  );
};

export default StoreIndex;
