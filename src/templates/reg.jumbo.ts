export const reg = `
<form class="form form_reg" name="reg" id="reg" novalidate>
    <fieldset class="form__fieldset" name="fieldset">
      <legend class="form__legend">Регистрация</legend>
    </fieldset>
    <div class="form__container">
      <label for="registration-first-name" class="form__label">Имя</label>
      <input type="text" name="first_name" class="input form__input form__input_reg" id="registration-first-name" placeholder="{{firstNamePlaceholder}}" pattern="{{secondNamePattern}}" required>
      <p class="error error_type_email" id="first_name"></p>
    </div>
    <div class="form__container">
      <label for="registration-second-name" class="form__label">Фамилия</label>
      <input type="text" name="second_name" class="input form__input form__input_reg" id="registration-second-name" placeholder="{{secondNamePlaceholder}}" pattern="{{secondNamePattern}}" required>
      <p class="error error_type_email" id="second_name"></p>
    </div>
    <div class="form__container">
    <label for="registration-login" class="form__label">Логин</label>
      <input type="text" name="login" class="input form__input form__input_reg" id="registration-login" placeholder="{{loginPlaceholder}}" pattern="{{loginPattern}}" required>
      <p class="error error_type_login" id="login"></p>
    </div>
    <div class="form__container">
      <label for="registration-email" class="form__label">Почта</label>
      <input type="email" name="email" class="input form__input form__input_reg" id="registration-email" placeholder="{{mailPlaceholder}}" pattern="{{mailPattern}}" required>
      <p class="error error_type_email" id="email"></p>
    </div>
    <div class="form__container">
      <label for="registration-password" class="form__label">Пароль</label>
      <input type="password" name="password" class="input form__input form__input_reg" id="registration-password" placeholder="{{passPlaceholder}}" pattern="{{passPattern}}" required>
      <p class="error error_type_password" id="password"></p>
    </div>
    <div class="form__container">
    <label for="registration-phone" class="form__label">Телефон</label>
      <input type="tel" name="phone" class="input form__input form__input_reg" id="registration-phone" placeholder="{{phonePlaceholder}}" pattern="{{phonePattern}}" required>
      <p class="error error_type_email" id="phone"></p>
    </div>
    <div class="form__container">
      <p class="error error_type_reg-error" id="reg-error"></p>
      <button type="submit" class="common form__button" disabled>{{button}}</button>
    </div>
    <div class="form__container">
      <button id="auth-form" type="button" class="form__link">{{link}}</button>
    </div>
  </form>`;
