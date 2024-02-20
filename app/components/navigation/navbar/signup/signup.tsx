"use client";

import React from "react";
import { Form, Input, Button, Checkbox, Row, Col, Card } from "antd";
import Link from "next/link";
import styles from "./signup.module.css";

const Signup = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className={styles.authContainer}>
      <Card className={styles.authCard}>
        <h1 className={styles.title}>Sign up</h1>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          layout="vertical"
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input placeholder="Placeholder" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Placeholder text" />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Placeholder" />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
          >
            <Checkbox>
              I agree to the Terms of Service and Privacy Policy
              <span style={{ color: "red", margin: "5px" }}>*</span>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.submitButton}
              block
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: "center", margin: "16px 0" }}>
          Already have an account? <Link href="/login">Login</Link>
        </div>
        <div style={{ textAlign: "center", margin: "16px 0" }}>
          — or log in with —
        </div>
        <div className={styles.socialLogins}>
          <Button className={styles.socialButton}>Google</Button>
          <Button className={styles.socialButton}>Apple</Button>
        </div>
      </Card>
    </div>
  );
};

export default Signup;
