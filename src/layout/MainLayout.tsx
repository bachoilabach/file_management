"use client";

import React from "react";
import { Layout } from "antd";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/Header";

const { Content } = Layout;

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout className="min-h-screen">
      <Sidebar />
      <Layout>
        <DashboardHeader />
        <Content className="p-6 bg-gray-50">{children}</Content>
      </Layout>
    </Layout>
  );
}
