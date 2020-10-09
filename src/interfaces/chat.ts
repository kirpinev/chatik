export interface ChatInterface {
  chat: HTMLElement;
  getContent(): HTMLElement;
  setListeners(): void;
  openUserInfo(): void;
  openChatDialog(): void;
  show(): void;
  hide(): void;
  setInfo(): void;
  setAvatarAndName(): void;
  setChatsMessages(): void;
  clearMessagesList(): void;
}
