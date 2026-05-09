'use client'

import {useEffect, useState} from "react";

export function useTheme() {
    const [isDark, setIsDark] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        setIsDark(localStorage.getItem("theme") === "dark")
    }, []);

    useEffect(() => {
        if (!mounted) return
        const root = document.documentElement
        if (isDark) {
            root.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            root.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [isDark, mounted])

    return {isDark, mounted, toggle: () => setIsDark(prev => !prev)}
}