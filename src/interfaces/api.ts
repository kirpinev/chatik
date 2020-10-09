import { Options } from './options';
import {PromiseInterface} from './promise';


export interface ApiInterface {
  request(
    options: Options,
    timeout: number,
  ): Promise<PromiseInterface>;
  get(path: string): Promise<PromiseInterface>;
  post(path: string, body: object): Promise<PromiseInterface>;
  put(path: string, body: object, contentType: string): Promise<PromiseInterface>;
  delete(path: string, body: object): Promise<PromiseInterface>;
}
