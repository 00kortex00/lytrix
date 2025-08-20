import { ReactNode } from "react";
import { create } from "zustand";
import { About } from "./about/About";
import { HowToStart } from "./howToStart/HowToStart";
import { Rules } from "./rules/Rules";

interface PopupStore {
    popup: ReactNode | null;
    closePopup: () => void;
    openAboutPopup: () => void;
    openStartPopup: () => void;
    openRulesPopup: () => void;
}

export const usePopupStore = create<PopupStore>((set) => ({
    popup: null,
    closePopup: () => set({ popup: null }),
    openAboutPopup: () => set({ popup: <About /> }),
    openStartPopup: () => set({ popup: <HowToStart /> }),
    openRulesPopup: () => set({ popup: <Rules /> })
}))