export const messageInTemplate = `<div data-user-id="{{user_id}}" class="messages-container__group">
              <div class="messages-container__avatar">
                <img
                  class="messages-container__image"
                  src="{{avatar}}"
                  alt="Игорь"
                />
              </div>
              <div
                class="messages-container__wrapper messages-container__wrapper_in"
              >
              <p class="">{{login}}</p>
                <p class="messages-container__text">{{content}}</p>
                <p class="messages-container__time">{{time}}</p>
              </div>
            </div>`;
