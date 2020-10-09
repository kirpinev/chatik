import { expect } from 'chai';

import { Api, AuthApi } from '../src/modules/api';

(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

describe('Апи авторизации', () => {
  const api = new Api('https://ya-praktikum.tech/api/v2');

  const authApi = new AuthApi(api);

  it('корректно создает экземпляр класса', () => {
    expect(authApi).to.be.an('object');
  });

  it('содержит все необходимые методы', () => {
    expect(authApi).to.have.property('signUp');

    expect(authApi).to.have.property('signIn');

    expect(authApi).to.have.property('getUserInfo');

    expect(authApi).to.have.property('logout');
  });
});
