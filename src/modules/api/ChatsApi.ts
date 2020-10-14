import { Api } from './Api';

import { PromiseInterface, ChatsApiInterface } from '../../interfaces';

export class ChatsApi implements ChatsApiInterface {
  constructor(private readonly api: Api) {}

  getChats(): Promise<PromiseInterface> {
    return this.api.get('/chats');
  }

  getChatUsers(body: string): Promise<PromiseInterface> {
    return this.api.get(`/chats/${body}/users`);
  }

  createChat(body: object): Promise<PromiseInterface> {
    return this.api.post('/chats', body);
  }

  addUserToChat(body: object): Promise<PromiseInterface> {
    return this.api.put('/chats/users', body, null);
  }

  deleteUserFromChat(body: object): Promise<PromiseInterface> {
    return this.api.delete('/chats/users', body, null);
  }

  getChatToken(chatId: string): Promise<PromiseInterface> {
    return this.api.post(`/chats/token/${chatId}`, null);
  }

  updateChatAvatar(body: FormData): Promise<PromiseInterface> {
    return this.api.put('/chats/avatar', body, 'multipart/form-data');
  }

  getNewMessages(body: string): Promise<PromiseInterface> {
    return this.api.get(`/chats/new/${body}`);
  }
}
