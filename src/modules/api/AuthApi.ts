import { Api } from './Api';

import { PromiseInterface } from '../../interfaces';

export class AuthApi {
  constructor(private readonly api: Api) {}

  signUp(body: object): Promise<PromiseInterface> {
    return this.api.post('/auth/signup', body);
  }

  signIn(body: object): Promise<PromiseInterface> {
    return this.api.post('/auth/signin', body);
  }

  getUserInfo(): Promise<PromiseInterface> {
    return this.api.get('/auth/user');
  }

  logout(): Promise<PromiseInterface> {
    return this.api.post('/auth/logout', undefined);
  }
}
