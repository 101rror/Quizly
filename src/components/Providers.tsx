"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";
import { ThemeProvider } from "next-themes";


const Providers = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem {...props}>
            <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
    );
};

export default Providers;