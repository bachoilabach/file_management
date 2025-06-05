"use client";

import React from "react";
import { Avatar, Button, Space } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { useAuthStore } from "@/stores/authStore";
import { signOut } from "next-auth/react";

export default function DashboardHeader() {
  const { user } = useAuthStore();
  const handleSignOut = () => {
    signOut({callbackUrl: '/login'});
  };

  return (
    <Header className="bg-white px-6 flex justify-between items-center shadow">
      <Space>
        <Avatar src={user?.image} />
        <span>Xin chào, Người dùng {user?.name}</span>
      </Space>
      <Button icon={<LogoutOutlined />} onClick={handleSignOut} danger>
        Đăng xuất
      </Button>
    </Header>
  );
}
