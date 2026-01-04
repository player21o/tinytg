import type { Events } from "./types";

window.addEventListener("message", ({ data }) => {
  const parsedData = JSON.parse(data) as any;

  events.processEvent(parsedData.eventType, parsedData.eventData);
});

declare global {
  interface Window {
    Telegram: {
      WebView: {
        receiveEvent: (event: string, data: any) => void;
      };
    };
  }
}

window.Telegram = {
  WebView: {
    receiveEvent(event, data) {
      events.processEvent(event as any, data);
    },
  },
};

class TelegramEventListener {
  private listeners: { [T in keyof Events]?: ((data: any) => void)[] } = {};

  public on<T extends keyof Events>(event: T, cb: (data: Events[T]) => any) {
    if (!(event in this.listeners)) this.listeners[event] = [];

    this.listeners[event]!.push(cb);
  }

  public off<T extends keyof Events>(event: T, cb: (data: Events[T]) => any) {
    const index = this.listeners[event]!.indexOf(cb);
    this.listeners[event]!.splice(index, 1);
  }

  public processEvent(event: keyof Events, data: any) {
    this.listeners[event]?.forEach((cb) => cb(data));
  }
}

export const events = new TelegramEventListener();
