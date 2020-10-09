export class EventBus {
  public readonly listeners: object;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: (arg: number | string) => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: (arg: number | string) => void): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback,
    );
  }

  emit(event: string, ...args: [number?, string?]): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach(function emit(listener) {
      listener(...args);
    });
  }
}
