import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll window utama
    const root = document.scrollingElement || document.documentElement;
    root.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // scroll semua container scrollable (misal main-content)
    const scrollables = document.querySelectorAll(
      "body, html, .main-content, [data-scrollable]"
    );
    scrollables.forEach(el => {
      el.scrollTop = 0;
      el.scrollLeft = 0;
    });
  }, [pathname]);

  return null;
}
