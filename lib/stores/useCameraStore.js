import { create } from 'zustand';


export const useCameraStore = create((set) => ({
  selectedImages: [],

  addSelectedImage: (image) => {
    set((state) => ({ selectedImages: [...state.selectedImages, image] }));
  },

  clearImages: () => set({ selectedImages: [] }),
}));
