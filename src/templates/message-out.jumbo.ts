export const messageOutTemplate = `<div data-user-id="{{user_id}}" class="messages-container__group messages-container__group_out">
              <div class="messages-container__avatar">
                <img
                  class="messages-container__image"
                  src="{{avatar}}"
                  alt="Игорь"
                />
                <div class="messages-container__status"></div>
              </div>
              <div
                class="messages-container__wrapper messages-container__wrapper_out"
              >
              <p class="messages-container__login">{{login}}</p>
                <p class="messages-container__text">{{content}}</p>
                <p class="messages-container__time">{{time}}</p>
              </div>
            </div>`;
