import {create} from "zustand/react";

interface AsideStore {
    isAsideOpen: boolean;
    toggleAside: () => void;
    closeAside: () => void;
}

const useAsideStore = create<AsideStore>((set) => ({
    isAsideOpen: false,
    toggleAside: () => set((state) => ({isAsideOpen: !state.isAsideOpen})),
    closeAside: () => set({ isAsideOpen: false }),
}));

export default useAsideStore;