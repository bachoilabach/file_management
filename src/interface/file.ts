export interface IFile {
  id: string;
  name: string;
  mimeType: string;
  kind: string;
  createdTime: Date;
  thumbnailLink: string;
}

export interface IFileRes {
  files: IFile[];
  incompleteSearch: boolean;
  kind: string;
  nextPageToken?: string;
}
