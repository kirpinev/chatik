import { PromiseInterface } from './promise';

export interface UsersApiInterface {
  updateProfile(body: Record<string, string>): Promise<PromiseInterface>;
  updatePass(body: object): Promise<PromiseInterface>;
  updateAvatar(body: Element): Promise<PromiseInterface>;
  searchUser(body: null): Promise<PromiseInterface>;
}
