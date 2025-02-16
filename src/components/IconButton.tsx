"use client";

import { useState, useRef } from "react";

type IconButtonProps = {
    children: React.ReactNode;
    text: string;
    color?: string;
};

export default function IconButton({ children, text, color = "bg-gray-600" }: IconButtonProps) {
    const [hovered, setHovered] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    return (
        <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`flex p-2 items-center rounded-lg text-white ${color}`}
        >
            {children}
            <div
                style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
                className="overflow-x-hidden transition-all duration-300 ease-out"
            >
                <span ref={ref} className="px-0.4 font-bold text-lg font-sans text-lime-400 [text-shadow:_1.5px_1.5px_1.5px_black]">{text}</span>
            </div>
        </button>
    );
}
