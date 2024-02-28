"use client";
import React from "react";
import { Card, Col, Row, Typography } from "antd";
import Link from "next/link";
import { HomeOutlined, FileTextOutlined, CarOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const serviceCards = [
  {
    title: "Housing Services",
    description: [
      "Apply for affordable housing",
      "Apply for section 8 voucher",
      "Apply for public housing",
    ],
    icon: <HomeOutlined />,
  },
  {
    title: "Permit Services",
    description: [
      "Apply for affordable housing",
      "Apply for section 8 voucher",
      "Apply for public housing",
    ],
    icon: <FileTextOutlined />,
  },
  {
    title: "Transportation Services",
    description: [
      "Apply for affordable housing",
      "Apply for section 8 voucher",
      "Apply for public housing",
    ],
    icon: <CarOutlined />,
  },
];

const ResidentOverviewSection = () => {
  return (
    <>
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          marginBottom: "40px",
          backgroundColor: "E4E4E4",
        }}
      >
        <Title>Welcome Jane!</Title>
        <Paragraph>
          We are here to help. Select the service you need assistance with.
        </Paragraph>
        {/* <Row gutter={16} justify="center" style={{ marginTop: "50px" }}>
          <Col span={8}>
            <Link href="/residentChatInterface" passHref>
              <Card hoverable>
                <Card.Meta
                  title="Housing"
                  description="Apply for affordable housing, Apply for section 8 voucher, Apply for public housing"
                />
              </Card>
            </Link>
          </Col>

          <Col span={8}>
            <Card hoverable>
              <Card.Meta
                title="Permit"
                description="Apply for affordable housing, Apply for section 8 voucher, Apply for public housing"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable>
              <Card.Meta
                title="Transportation"
                description="Apply for affordable housing, Apply for section 8 voucher, Apply for public housing"
              />
            </Card>
          </Col>
        </Row> */}
        <Row gutter={16} style={{ marginTop: "80px" }}>
          {serviceCards.map((service, index) => (
            <Col span={8} key={index}>
              <Link href="/residentChatInterface" passHref>
                <Card
                  title={service.title}
                  bordered={false}
                  style={{ textAlign: "center" }}
                >
                  <div style={{ fontSize: "80px" }}>{service.icon}</div>
                  <div>
                    {service.description.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default ResidentOverviewSection;
