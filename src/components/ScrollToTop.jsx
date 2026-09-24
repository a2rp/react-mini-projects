import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 320);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        window.scrollTo({ top: 0, behavior: "auto" });
        return () => window.removeEventListener("scroll", onScroll);
    }, [pathname]);

    if (!visible) return null;
    return <button className="goTopButton" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Go to top" title="Go to top"><MdKeyboardArrowUp aria-hidden="true" /></button>;
}