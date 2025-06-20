import gapi from '@/lib/http';
import gapiUpload from '@/lib/httpUpload';

export const getFiles = async () => {
  const response = await gapi.get('/', {
    params: {
      fields: 'files(id,name,mimeType,createdTime,thumbnailLink)',
    },
  });
  return response;
};

export const uploadFile = async (file: File) => {
  const metadata = { name: file.name };
  const form = new FormData();
  form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
  form.append('file', file);
  const response = await gapiUpload.post('/', form, {
    params: {
      uploadType: 'multipart',
      fields: 'id,name,mimeType,createdTime,thumbnailLink',
    },
  });
  return response;
};

export const renameFile = async (fileId: string, name: string) => {
  const response = await gapi.patch(`/${fileId}`, { name });
  return response;
};

export const deleteFile = async (fileId: string) => {
  const response = await gapi.delete(`/${fileId}`);
  return response;
};
