export type LaunchParameters = {
  tgWebAppData: InitData;
  tgWebAppVersion: string;
  tgWebAppPlatform: "android" | "ios" | "macos" | "tdesktop" | "weba" | "web";
  tgWebAppThemeParams: ThemeParameters;
};

export type ThemeParameters = {
  accent_text_color: string;
  bg_color: string;
  button_color: string;
  button_text_color: string;
  destructive_text_color: string;
  header_bg_color: string;
  hint_color: string;
  link_color: string;
  secondary_bg_color: string;
  section_bg_color: string;
  section_header_text_color: string;
  subtitle_text_color: string;
  text_color: string;
};

export type User = {
  allows_write_to_pm: boolean;
  first_name: string;
  id: number;
  language_code: string;
  last_name: string;
  photo_url: string;
  username: string;
};

export type InitData = {
  auth_date: string;
  hash: string;
  query_id: string;
  signature: string;
  user: User;
};

export type WebMessage = {
  eventType: "theme_changed";
  eventData: { theme_params: ThemeParameters };
};

export type Events = { theme_changed: { theme_params: ThemeParameters } };
