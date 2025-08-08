import { FC } from "react";
import { IconProps } from "../types";

export const LineFigure: FC<IconProps> = ({ className }) => {
    return (
        <svg width="336" height="24" viewBox="0 0 336 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M16 0H48L32 24H0L16 0Z" fill="currentColor" />
            <path d="M64 0H96L80 24H48L64 0Z" fill="currentColor" />
            <path d="M112 0H144L128 24H96L112 0Z" fill="currentColor" />
            <path d="M160 0H192L176 24H144L160 0Z" fill="currentColor" />
            <path d="M208 0H240L224 24H192L208 0Z" fill="currentColor" />
            <path d="M256 0H288L272 24H240L256 0Z" fill="currentColor" />
            <path d="M304 0H336L320 24H288L304 0Z" fill="currentColor" />
        </svg>
    );
}