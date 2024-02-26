import React from "react";
import { Layout } from "antd";
import AdminWelcomePage from "@/app/containers/landingPage/adminLandingPage/adminLanding";

const { Header, Content } = Layout;

const AdminLayout = ({ children }: { children: any }) => {
  return <AdminWelcomePage />;
};

export default AdminLayout;
