'use client';

import React from 'react';
import { Avatar, Space } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useAuthStore } from '@/stores/authStore';

export default function DashboardHeader() {
  const { user } = useAuthStore();

  return (
    <Header className='bg-white px-6 flex justify-between items-center shadow'>
      <div className='p-4 text-center font-bold text-lg text-primary'>File Manager</div>
      <Space>
        <Avatar src={user?.image} />
      </Space>
    </Header>
  );
}
