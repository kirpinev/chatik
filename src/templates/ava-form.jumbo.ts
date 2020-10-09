export const avaForm = `
<form class="form form_ava" name="ava" id="myAvatarForm" novalidate="">
   <fieldset class="form__fieldset" name="fieldset">
      <legend class="form__legend">Обновить аватар</legend>
      <div class="form__container">
         <input id="avatar" type="file" name="avatar" class="input form__input form__input_auth" accept="image/*" required>
         <p class="error error_type_ava-file" id="avaFile"></p>
      </div>
    <p class="error error_type_ava-error" id="chat-form-error"></p>
      <div class="form__container"><button type="submit" class="common form__button" disabled>
         {{button}}</button>
      </div>
      <div class="form__container">
         <button id="ava-form" type="button" class="form__link">{{link}}</button>
      </div>
   </fieldset>
</form>`;
