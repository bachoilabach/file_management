'use client';

import { Layout, Button } from 'antd';
import Sidebar from '@/components/Shared/UI/Sidebar';
import DashboardHeader from '@/components/Shared/UI/Header';

const { Content } = Layout;

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className='max-h-screen min-h-screen'>
      <DashboardHeader />
      <Layout>
        <Sidebar />
        <Content className='p-6 bg-white w-full overflow-auto'>{children}</Content>
      </Layout>
    </Layout>
  );
}
export default MainLayout;
