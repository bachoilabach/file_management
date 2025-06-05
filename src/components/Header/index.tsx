"use client";

import React, { useEffect } from "react";
import { Avatar, Button, Space } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { useSession } from "next-auth/react";
import { useAuthStore } from "@/stores/authStore";

export default function DashboardHeader() {
  const { data: session } = useSession();
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    if (session?.user) {
      setUser({
        id: session.user.email || "default-id",
        email: session.user.email || "unknown-email",
      });
    }
  }, [session]);
  return (
    <Header className="bg-white px-6 flex justify-between items-center shadow">
      <Space>
        <Avatar icon={<UserOutlined />} />
        <span>Xin chào, Người dùng {session?.user?.name}</span>
      </Space>
      <Button icon={<LogoutOutlined />} danger>
        Đăng xuất
      </Button>
    </Header>
  );
}
