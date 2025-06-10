export function getWindowSize() {
    if (typeof window === "undefined") {
        return { scrollY: 0 };
    }
    return window.scrollY;
}
