import { Api } from './Api';

import { PromiseInterface, ChatsApiInterface } from '../../interfaces';

export class ChatsApi implements ChatsApiInterface {
  constructor(private readonly api: Api) {}

  getChats(): Promise<PromiseInterface> {
    return this.api.get('/chats');
  }

  createChat(body: object): Promise<PromiseInterface> {
    return this.api.post('/chats', body);
  }
}
