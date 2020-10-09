import { method as regMethod } from './methods';

import { ApiInterface, Options, PromiseInterface } from '../../interfaces';

export class Api implements ApiInterface {
  constructor(private readonly url: string) {}

  request(options: Options, timeout = 10000): Promise<PromiseInterface> {
    const { method, body, path, contentType } = options;

    return new Promise((res, rej) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, this.url + path);

      xhr.withCredentials = true;

      if (!contentType) {
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      }

      xhr.timeout = timeout;

      xhr.onload = function onload() {
        res(xhr);
      };

      xhr.onabort = rej;

      xhr.onerror = rej;

      xhr.ontimeout = rej;

      if (method === 'GET' || !body) {
        xhr.send();
      } else if (contentType === 'multipart/form-data') {
        xhr.send(new FormData(body));
      } else {
        xhr.send(JSON.stringify(body));
      }
    });
  }

  get(path: string): Promise<PromiseInterface> {
    return this.request({
      path,
      method: regMethod.get,
    });
  }

  post(path: string, body: object): Promise<PromiseInterface> {
    return this.request({
      path,
      body,
      method: regMethod.post,
    });
  }

  put(
    path: string,
    body: object,
    contentType: string,
  ): Promise<PromiseInterface> {
    return this.request({
      path,
      body,
      method: regMethod.put,
      contentType,
    });
  }

  delete(path: string, body: object): Promise<PromiseInterface> {
    return this.request({
      path,
      body,
      method: regMethod.delete,
    });
  }
}
