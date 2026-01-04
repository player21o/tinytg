import type { Methods } from "./types";

declare global {
  interface Window {
    TelegramWebviewProxy?: {
      postEvent?: (event: string, data: string) => any;
    };
    external?: {
      notify: (event_data: string) => any;
    };
  }
}

class TelegramMethodSender {
  constructor() {}

  public post<T extends keyof Methods>(method: T, data: Methods[T]["params"]) {
    if (
      window["TelegramWebviewProxy"] != undefined &&
      window.TelegramWebviewProxy.postEvent != undefined
    ) {
      window.TelegramWebviewProxy.postEvent(method, JSON.stringify(data));
    } else if (
      window["external"] != undefined &&
      window["external"].notify != undefined
    ) {
      window["external"].notify(
        JSON.stringify({ eventType: method, eventData: data })
      );
    } else {
      window.parent.postMessage(
        JSON.stringify({ eventType: method, eventData: data }),
        "https://web.telegram.org"
      );
    }
  }
}

export const methods = new TelegramMethodSender();
