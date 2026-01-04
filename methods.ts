import type { Methods } from "./types";

class TelegramMethodSender {
  constructor() {}

  private _post<T extends keyof Methods>(method: T, data: Methods[T]) {}
}

export const methods = new TelegramMethodSender();
