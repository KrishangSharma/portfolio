import { useContext } from "react";
import { ThemeContext } from "@/lib/themeContext";

const ThemeSwitcher = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const handleChange = () => {
    toggleTheme();
  };
  return (
    <button
      className="theme-toggle"
      id="theme-toggle"
      title="Toggle Theme"
      aria-label="auto"
      aria-live="polite"
      onClick={handleChange}
    >
      <svg
        className="sun-and-moon"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <mask className="moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle
          className="sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        />
        <g className="sun-beams" stroke="currentColor">
          <line x1="12" y1="0" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="24" />
          <line x1="3" y1="3" x2="6" y2="6" />
          <line x1="18" y1="18" x2="21" y2="21" />
          <line x1="0" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="24" y2="12" />
          <line x1="3" y1="21" x2="6" y2="18" />
          <line x1="18" y1="6" x2="21" y2="3" />
        </g>
      </svg>
    </button>
  );
};

export default ThemeSwitcher;
