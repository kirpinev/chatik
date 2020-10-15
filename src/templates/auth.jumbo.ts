export const auth = `
<form class="form form_auth" name="auth" id="auth" novalidate="">
   <fieldset class="form__fieldset" name="fieldset">
      <legend class="form__legend">Авторизация</legend>
      <div class="form__container">
         <label for="authorization-email" class="form__label">Почта</label>
         <input type="text" name="login" class="input form__input form__input_auth" id="authorization-email" placeholder="{{loginPlaceholder}}" pattern="{{loginPattern}}" required>
         <p class="error error_type_login" id="login"></p>
      </div>
      <div class="form__container">
      <label for="authorization-password" class="form__label">Пароль</label>
        <input type="password" name="password" class="input form__input form__input_auth" id="authorization-password" placeholder="{{passPlaceholder}}" pattern="{{passPattern}}" required>
        <p class="error error_type_password" id="password"></p>
    </div>
    <p class="error error_type_auth-error" id="reg-error"></p>
      <div class="form__container"><button type="submit" class="common form__button" disabled>
         {{button}}</button>
      </div>
      <div class="form__container">
         <button id="reg-form" type="button" class="form__link">{{link}}</button>
      </div>
   </fieldset>
</form>`;
