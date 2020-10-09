import { Avatar, Favorites, Search } from '../modules/views';
import { MessagesList } from '../modules/controllers';

export interface InterfaceWithAvatarAndMessages {
  avatar: Avatar;
  search: Search;
  favorites: Favorites;
  messagesList: MessagesList;
  getContent(): HTMLElement;
}
