"use client";
import React from "react";
import { Card, Col, Row, Typography } from "antd";
import Link from "next/link";

const { Title, Paragraph } = Typography;

const ResidentOverviewSection = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Title>Welcome Jane!</Title>
        <Paragraph>
          We are here to help. Select the service you need assistance with.
        </Paragraph>
      </div>

      <Row gutter={16} justify="center">
        <Link href="/residentChatInterface" passHref>
          <Col span={8}>
            <Card hoverable>
              <Card.Meta
                title="Housing"
                description="Apply for affordable housing, Apply for section 8 voucher, Apply for public housing"
              />
            </Card>
          </Col>
        </Link>
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
      </Row>
    </>
  );
};

export default ResidentOverviewSection;
