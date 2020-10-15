export const userInfo = `
<form class="form form_user" name="user" id="user" novalidate>
   <div class="form__container"><img class="avatar avatar_large form__avatar" src="{{avatar}}" alt="{{display_name}}"></div>
   <fieldset class="form__fieldset" name="fieldset">
      <div class="form__container">
        <label for="user-first-name" class="form__label">Имя</label>
         <input type="text" name="first_name" class="input form__input form__input_user" id="user-first-name" placeholder="Введите имя" pattern="^([\\w\\W]{8,30})$" value="{{first_name}}" required>
         <p class="error error_type_first-name" id="first_name"></p>
      </div>
      <div class="form__container">
         <label for="user-second-name" class="form__label">Фамилия</label>
         <input type="text" name="second_name" class="input form__input form__input_user" id="user-second-name" placeholder="Введите фамилию" pattern="^([\\w\\W]{8,30})$" value="{{second_name}}" required>
         <p class="error error_type_second-name" id="second_name"></p>
      </div>
      <div class="form__container">
         <label for="user-display-name" class="form__label">Отображаемое имя</label>
         <input type="text" name="display_name" class="input form__input form__input_user" id="user-display-name" placeholder="Введите отображаемое имя" pattern="^([\\w\\W]{8,30})$" value="{{display_name}}" required>
         <p class="error error_type_display-name" id="display_name"></p>
      </div>
      <div class="form__container">
         <label for="user-email" class="form__label">Почта</label>
         <input type="email" name="email" class="input form__input form__input_user" id="user-email" placeholder="{{emailPlaceholder}}" pattern="{{emailPattern}}" value="{{email}}" required>
         <p class="error error_type_email" id="email"></p>
      </div>
      <div class="form__container">
         <label for="user-login" class="form__label">Логин</label>
         <input type="text" name="login" class="input form__input form__input_user" id="user-login" placeholder="{{loginPlaceholder}}" pattern="{{loginPattern}}" value="{{login}}" required>
         <p class="error error_type_email" id="login"></p>
      </div>
      <div class="form__container">
         <label for="user-phone" class="form__label">Телефон</label>
         <input type="tel" name="phone" class="input form__input form__input_user" id="user-phone" placeholder="Введите телефон" pattern="^(\\+7((\\(\\d{3}\\)\\s?\\d{3}-\\d{2}-\\d{2})|(\\s\\d{3}-\\d{3}-\\d{2}-\\d{2})|(\\d{10})))|(8\\d{10})$" value="{{phone}}" required>
         <p class="error error_type_email" id="phone"></p>
      </div>
      <div class="form__container"><button type="submit" class="common form__button" disabled>
         {{button}}</button>
      </div>
      <div class="form__container">
         <button id="exit-button" type="button" class="form__link form__link_exit">{{link}}</button>
         <button id="chat-button"  type="button" class="form__link form__link_chat">{{linkChat}}</button>
      </div>
   </fieldset>
</form>
`;
