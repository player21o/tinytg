import type { Methods } from "./types.js";

declare global {
  interface Window {
    TelegramWebviewProxy?: {
      postEvent?: (event: string, data: string) => any;
    };
    // @ts-ignore
    external?: {
      notify: (event_data: string) => any;
    };
  }
}

class TelegramMethodSender {
  constructor() {}

  public post<T extends keyof Methods>(method: T, data?: Methods[T]["params"]) {
    if (
      window["TelegramWebviewProxy"] != undefined &&
      window.TelegramWebviewProxy.postEvent != undefined
    ) {
      window.TelegramWebviewProxy.postEvent(method, JSON.stringify(data));
    } else if (
      window["external"] != undefined &&
      // @ts-ignore
      window["external"].notify != undefined
    ) {
      // @ts-ignore
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
