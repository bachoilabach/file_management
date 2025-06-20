import { extension } from 'mime-types';

export const mapMimeTypeToFileType = (mime: string): string => {
  const ext = extension(mime);
  return typeof ext === 'string' ? ext : '';
};
