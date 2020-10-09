export const pass = `
<form class="form form_pass" name="pass" id="pass" novalidate="">
   <fieldset class="form__fieldset" name="fieldset">
    <legend class="form__legend">Смена пароля</legend>
    <div class="form__container">
        <input type="password" name="oldPassword" class="input form__input form__input_pass" id="old-password" placeholder="{{oldPassword}}" pattern="{{passPattern}}" required>
        <p class="error error_type_password" id="oldPassword"></p>
    </div>
    <div class="form__container">
        <input type="password" name="newPassword" class="input form__input form__input_pass" id="new-password" placeholder="{{newPassword}}" pattern="{{passPattern}}" required>
        <p class="error error_type_password" id="newPassword"></p>
    </div>
    <p class="error error_type_pass-error" id="pass-error"></p>
      <div class="form__container"><button id="" type="submit" class="common form__button" disabled>
         {{button}}</button>
      </div>
      <div class="form__container">
         <button id="pass-form" type="button" class="form__link">{{link}}</button>
      </div>
   </fieldset>
</form>`;
