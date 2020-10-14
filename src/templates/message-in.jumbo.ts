export const messageInTemplate = `<div class="messages-container__group">
              <div class="messages-container__avatar">
                <img
                  class="messages-container__image"
                  src="{{avatar}}"
                  alt="Игорь"
                />
                <div class="messages-container__status"></div>
              </div>
              <div
                class="messages-container__wrapper messages-container__wrapper_in"
              >
                <p class="messages-container__text">{{content}}</p>
                <p class="messages-container__time">{{time}}</p>
              </div>
            </div>`;
