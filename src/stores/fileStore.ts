import { IFile } from "@/interface/file";
import { create } from "zustand";

interface FileStore {
  files: IFile[];
  setFiles: (files: IFile[]) => void;
  addFile: (file: IFile) => void;
  updateFileName: (fileId: string, newName: string) => void;
  removeFile: (fileId: string) => void;
  clearFiles: () => void;
}

export const useFileStore = create<FileStore>((set) => ({
  files: [],

  setFiles: (files) => set({ files }),

  addFile: (file) =>
    set((state) => ({
      files: [file, ...state.files],
    })),
  updateFileName: (fileId, newName) =>
    set((state) => ({
      files: state.files.map((file) =>
        file.id === fileId ? { ...file, name: newName } : file
      ),
    })),
  removeFile: (fileId) => {
    set((state) => ({
      files: state.files.filter((file) => file.id !== fileId),
    }));
  },

  clearFiles: () => set({ files: [] }),
}));
