export const chatTopInterfaceTemplate = `<div data-chat-id="{{id}}" class="chat-top-interface">
          <div class="chat-top-interface__user-wrapper">
            <div class="chat-top-interface__avatar">
              <img
                class="chat-top-interface__avatar-image"
                src="{{avatar}}"
                alt="{{title}}"
              />
            </div>
            <div class="chat-top-interface__info-wrapper">
              <h2 class="chat-top-interface__name">{{title}}</h2>
            </div>
          </div>

          <div class="chat-top-interface__button-wrapper">
            <button type="button" id="chat-top-interface-settings" class="common chat-top-interface__button">
              <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.214 11a.786.786 0 101.572 0 .786.786 0 00-1.572 0zM10.214 16.5a.786.786 0 101.572 0 .786.786 0 00-1.572 0zM10.214 5.5a.786.786 0 101.572 0 .786.786 0 00-1.572 0z" stroke="#787885" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>

          <ul id="list-navigation-chat" class="list-navigation">
            <li class="list-navigation__item">
              <button type="button" id="chat-avatar-button" class="common list-navigation__button">
                <svg width="22" height="22" fill="none" class="list-navigation__icon" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 3.929h-11c-.868 0-1.571.703-1.571 1.571v11c0 .868.703 1.571 1.571 1.571h11c.868 0 1.571-.703 1.571-1.571v-11c0-.868-.703-1.571-1.571-1.571z" stroke="#787885" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.25 9.429a1.179 1.179 0 100-2.358 1.179 1.179 0 000 2.358zM18.071 13.357L14.143 9.43 5.5 18.07" stroke="#787885" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Обновить аватар
              </button>
            </li>
            <li class="list-navigation__item">
              <button type="button" id="chat-add-users-button" class="common list-navigation__button">
                <svg width="22" height="22" fill="none" class="list-navigation__icon" xmlns="http://www.w3.org/2000/svg"><path d="M14.143 18.071V16.5A3.143 3.143 0 0011 13.357H5.5A3.143 3.143 0 002.357 16.5v1.571M8.25 10.214a3.143 3.143 0 100-6.286 3.143 3.143 0 000 6.286zM17.286 7.857v4.714M19.643 10.214h-4.714" stroke="#787885" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Добавить пользователя
              </button>
            </li>
            <li class="list-navigation__item">
              <button type="button" id="chat-about-button" class="common list-navigation__button">
                <svg width="22" height="22" fill="none" class="list-navigation__icon" xmlns="http://www.w3.org/2000/svg"><path d="M11 18.857a7.857 7.857 0 100-15.714 7.857 7.857 0 000 15.714zM11 14.143V11" stroke="#787885" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="11" cy="7.857" r=".5" stroke="#787885" stroke-width=".571"/></svg>
                Инфо о чате
              </button>
            </li>
          </ul>
</div>
`;
