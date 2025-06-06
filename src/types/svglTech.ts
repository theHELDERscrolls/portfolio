export type ThemeOptions = {
  dark: string;
  light: string;
};

export interface iSVG {
  id: number;
  title: string;
  route: string | ThemeOptions;
  wordmark?: string | ThemeOptions;
  url: string;
}
