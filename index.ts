import type { Events, LaunchParameters } from "./types";

export function getLaunchParameters() {
  const hash = window.location.hash.slice(1);
  const params = new URLSearchParams(hash);

  const tgWebAppDataRaw = new URLSearchParams(params.get("tgWebAppData")!);

  const obj: LaunchParameters = {
    tgWebAppData: {
      ...(Object.fromEntries(
        tgWebAppDataRaw
      ) as any as LaunchParameters["tgWebAppData"]),
      user: JSON.parse(
        tgWebAppDataRaw.get("user")!
      ) as LaunchParameters["tgWebAppData"]["user"],
    },
    tgWebAppVersion: params.get("tgWebAppVersion")!,
    tgWebAppPlatform: params.get(
      "tgWebAppPlatform"
    )! as LaunchParameters["tgWebAppPlatform"],
    tgWebAppThemeParams: JSON.parse(params.get("tgWebAppThemeParams")!),
  };

  return obj;
}

export function getThemeParameters() {
  return getLaunchParameters()["tgWebAppThemeParams"];
}

export function applyThemeCss(
  prefix = "tg-theme-",
  theme?: Events["theme_changed"]["theme_params"]
) {
  const params = theme == undefined ? getThemeParameters() : theme;

  document.documentElement.style.cssText =
    Object.keys(params)
      .map(
        (p) =>
          "--" +
          prefix +
          p.replaceAll("_", "-") +
          ": " +
          params[p as keyof typeof params]
      )
      .join("; ") + ";";
}

export function isTMA() {
  return getLaunchParameters().tgWebAppVersion != null;
}
