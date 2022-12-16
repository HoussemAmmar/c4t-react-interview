import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

export const useMoviesStore = create((set: any, get: any) => ({}));

mountStoreDevtool('useMoviesStore', useMoviesStore as any);
