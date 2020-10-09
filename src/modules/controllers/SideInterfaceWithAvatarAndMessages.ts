import { Avatar, Search, Favorites } from '../views';
import { MessagesList } from './MessagesList';

import { InterfaceWithAvatarAndMessages } from '../../interfaces';

export class SideInterfaceWithAvatarAndMessages implements InterfaceWithAvatarAndMessages {
  private interface: HTMLElement;

  constructor(
    public avatar: Avatar,
    public search: Search,
    public favorites: Favorites,
    public messagesList: MessagesList,
  ) {}

  getContent(): HTMLElement {
    this.interface = document.createElement('section');

    this.interface.classList.add('left');
    this.interface.appendChild(this.avatar.getContent());
    this.interface.appendChild(this.search.getContent());
    this.interface.appendChild(this.favorites.getContent());
    this.interface.appendChild(this.messagesList.getContent());

    return this.interface;
  }
}
