"use client";
import { LoginOutlined, UserAddOutlined } from "@ant-design/icons";
import Layout from "antd/lib/layout";

const { Header } = Layout;
const AdminNavbar = () => {
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      Onetera
    </Header>
  );
};

export default AdminNavbar;
