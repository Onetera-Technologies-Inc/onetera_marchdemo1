"use client";
import { LoginOutlined, UserAddOutlined } from "@ant-design/icons";
import Layout from "antd/lib/layout";
import Space from "antd/lib/space";
import Link from "next/link";
import { Button } from "antd";

const { Header } = Layout;
const Navbar = () => {
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link href="/">
        {/* <img
          src="/path-to-your-logo.png"
          alt="Company Logo"
          style={{ maxHeight: "32px", cursor: "pointer" }}
        /> */}
      </Link>

      <Space size="large">
        <Link href="/login" passHref>
          <Button icon={<LoginOutlined />} type="primary">
            Login
          </Button>
        </Link>
        <Link href="/signup" passHref>
          <Button icon={<UserAddOutlined />} type="primary">
            Sign Up
          </Button>
        </Link>
      </Space>
    </Header>
  );
};

export default Navbar;
