// Type declarations

declare module "tailwindcss/lib/util/flattenColorPalette" {
  export default function flattenColorPalette(
    pallette: Record<string, string>
  ): Record<string, string>;
}

export interface NavLink {
  name: string;
  to: string;
}

export type ThemeContext = {
  theme: string;
  toggleTheme: () => void;
};
