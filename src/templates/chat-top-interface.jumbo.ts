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
            <button type="button" class="common chat-top-interface__button">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                class="chat-top-interface__button-image"
              >
                <path
                  d="M22 23V21C22 19.9391 21.5786 18.9217 20.8284 18.1716C20.0783 17.4214 19.0609 17 18 17H10C8.93913 17 7.92172 17.4214 7.17157 18.1716C6.42143 18.9217 6 19.9391 6 21V23"
                  stroke="#787885"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 13C16.2091 13 18 11.2091 18 9C18 6.79086 16.2091 5 14 5C11.7909 5 10 6.79086 10 9C10 11.2091 11.7909 13 14 13Z"
                  stroke="#787885"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
`;
