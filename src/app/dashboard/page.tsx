'use client';

import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { ColumnsType } from 'antd/es/table';
import { notify } from '@/lib/toast';
import { getFiles } from '@/pages/api/file';
import { useFileStore } from '@/stores/fileStore';
import { IFile } from '@/interface/file';

import { mapMimeTypeToFileType } from '@/utils/mimeTypes';
import UploadFile from '@/components/Shared/UI/UploadFile';
import DropDownCustom from '@/components/Shared/UI/DropDown';

export default function Dashboard() {
  const { files, setFiles } = useFileStore();
  const [loading, setLoading] = useState(true);

  const fetchFiles = async () => {
    try {
      setLoading(true);
      const res = await getFiles();
      const { files } = res;
      setFiles(
        files.map((file: IFile) => ({
          ...file,
          createdTime: new Date(file.createdTime),
        })),
      );
    } catch (error) {
      notify.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const columns: ColumnsType<IFile> = [
    {
      title: 'Tên tệp',
      dataIndex: 'name',
      key: 'name',
      align: 'match-parent',
      width: '60%',
    },
    {
      title: 'Loại',
      dataIndex: 'mimeType',
      key: 'mimeType',
      align: 'center',
      render: (text) => mapMimeTypeToFileType(text),
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdTime',
      key: 'createdTime',
      align: 'center',

      render: (text) => new Date(text).toLocaleDateString('vi-VN'),
    },
    {
      title: '',
      key: 'actions',
      align: 'center',
      render: (_text, record) => <DropDownCustom fileId={record.id} fileName={record.name} />,
    },
  ];

  return (
    <>
      <Content className='p-6 max-h-screen'>
        <div className='flex justify-end items-center mb-6'>
          <UploadFile />
        </div>
        <Table
          columns={columns}
          dataSource={files}
          loading={loading}
          pagination={{ pageSize: 7, showSizeChanger: false, className: 'pr-4' }}
          rowKey='id'
          bordered
          className='bg-white rounded-xl shadow'
        />
      </Content>
    </>
  );
}
