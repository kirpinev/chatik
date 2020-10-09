import { PromiseInterface } from './promise';

export interface ChatsApiInterface {
  getChats(): Promise<PromiseInterface>;
  createChat(body: object): Promise<PromiseInterface>;
}
