'use client';

import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadRequestOption } from 'rc-upload/lib/interface';
import { uploadFile } from '@/pages/api/file';
import { notify } from '@/lib/toast';
import { useFileStore } from '@/stores/fileStore';

function UploadFile() {
  const { addFile } = useFileStore();

  const handleUpload = async (options: UploadRequestOption) => {
    const { file, onSuccess, onError } = options;

    try {
      const fileUpload = await uploadFile(file as File);
      addFile(fileUpload);
      notify.success('Tải lên thành công!');
      onSuccess?.('OK');
    } catch (error) {
      notify.error('Tải lên thất bại!');
      onError?.(error);
    }
  };

  return (
    <Upload showUploadList={false} customRequest={handleUpload}>
      <div className='flex bg-primary hover:bg-primary/90 items-center justify-around px-5 py-2 rounded-md  gap-2 hover:cursor-pointer'>
        <UploadOutlined className='text-white' />
        <button className=' text-white font-semibold '>Tải lên</button>
      </div>
    </Upload>
  );
}

export default UploadFile
