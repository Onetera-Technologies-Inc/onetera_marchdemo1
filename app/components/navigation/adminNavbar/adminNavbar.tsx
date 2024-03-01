"use client";
import { Button } from "antd";
import Layout from "antd/lib/layout";
import { LogoutOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Header } = Layout;
const AdminNavbar = () => {
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 16px",
      }}
    >
      <div style={{ color: "white" }}>Onetera</div>
      <Link href="/" passHref>
        <Button type="primary" icon={<LogoutOutlined />}>
          Logout
        </Button>
      </Link>
    </Header>
  );
};

export default AdminNavbar;
