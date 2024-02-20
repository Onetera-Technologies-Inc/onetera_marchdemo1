"use client";

import React from "react";
import { Card, Form, Input, Button, Checkbox } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../../navbar/Navbar.module.css";

const Login = () => {
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    router.push("");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.authContainer}>
      <Card className={styles.authCard}>
        <h1 className={styles.title}>Login</h1>

        {/* <div className={styles.logo}>
          <img
            src="/path-to-your-logo.png"
            alt="Company Logo"
            style={{ maxHeight: "32px" }}
          />
        </div> */}

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log In
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: "center", margin: "16px 0" }}>
          <Link href="/forgot-password">Forgot Password?</Link>
        </div>

        <div style={{ textAlign: "center", margin: "16px 0" }}>
          Do not have an account? <Link href="/signup">Sign Up</Link>
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

export default Login;
