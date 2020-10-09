export const chatBottomTemplate = `<form id="message" class="form form_chat chat-bottom-interface" novalidate>
          <input
            type="text"
            name="text"
            class="form__input form__input_chat chat-bottom-interface__input"
            placeholder="Написать сообщение..."
            minlength="1"
            maxlength="499"
            required
          />
          <div class="chat-bottom-interface__wrapper">
            <button
              type="button"
              class="common chat-bottom-interface__button chat-bottom-interface__button_photo"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                class="chat-bottom-interface__image"
              >
                <path
                  d="M25 21C25 21.5304 24.7893 22.0391 24.4142 22.4142C24.0391 22.7893 23.5304 23 23 23H5C4.46957 23 3.96086 22.7893 3.58579 22.4142C3.21071 22.0391 3 21.5304 3 21V10C3 9.46957 3.21071 8.96086 3.58579 8.58579C3.96086 8.21071 4.46957 8 5 8H9L11 5H17L19 8H23C23.5304 8 24.0391 8.21071 24.4142 8.58579C24.7893 8.96086 25 9.46957 25 10V21Z"
                  stroke="#787885"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 19C16.2091 19 18 17.2091 18 15C18 12.7909 16.2091 11 14 11C11.7909 11 10 12.7909 10 15C10 17.2091 11.7909 19 14 19Z"
                  stroke="#787885"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              class="common chat-bottom-interface__button chat-bottom-interface__button_file"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                class="chat-bottom-interface__image"
              >
                <path
                  d="M24 21C24 21.5304 23.7893 22.0391 23.4142 22.4142C23.0391 22.7893 22.5304 23 22 23H6C5.46957 23 4.96086 22.7893 4.58579 22.4142C4.21071 22.0391 4 21.5304 4 21V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H11L13 8H22C22.5304 8 23.0391 8.21071 23.4142 8.58579C23.7893 8.96086 24 9.46957 24 10V21Z"
                  stroke="#787885"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              class="common chat-bottom-interface__button chat-bottom-interface__button_location"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                class="chat-bottom-interface__image"
              >
                <path
                  d="M19.3469 10.3673C19.3469 16.0816 12 20.9796 12 20.9796C12 20.9796 4.65302 16.0816 4.65302 10.3673C4.65302 8.4188 5.42707 6.55007 6.80488 5.17225C8.1827 3.79444 10.0514 3.02039 12 3.02039C13.9485 3.02039 15.8172 3.79444 17.195 5.17225C18.5728 6.55007 19.3469 8.4188 19.3469 10.3673Z"
                  stroke="#787885"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 12.8163C13.3525 12.8163 14.449 11.7198 14.449 10.3673C14.449 9.01478 13.3525 7.91833 12 7.91833C10.6475 7.91833 9.55103 9.01478 9.55103 10.3673C9.55103 11.7198 10.6475 12.8163 12 12.8163Z"
                  stroke="#787885"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              type="submit"
              class="common form__button chat-bottom-interface__button chat-bottom-interface__button_send" disabled
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                class="chat-bottom-interface__image"
              >
                <path
                  d="M7 14H21"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 7L21 14L14 21"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>`;
