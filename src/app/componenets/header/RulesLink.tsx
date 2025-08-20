'use client';

import { RulesIcon } from "@/app/icons";
import { usePopupStore } from "../popups/PopupStore";

export const RulesLink = () => {
    const { openRulesPopup } = usePopupStore();

    return (
        <span onClick={openRulesPopup}>
            <RulesIcon />
            правила
        </span>
    );
}