export const chatForm = `
<form class="form form_chat" name="chatForm" id="chatForm" novalidate="">
   <fieldset class="form__fieldset" name="fieldset">
    <legend class="form__legend">{{legend}}</legend>
    <div class="form__container">
      <input type="text" name="title" class="input form__input form__input_chat-title" id="chatTitle" placeholder="{{placeholder}}" pattern="^([\\w\\W]{8,30})$" required>
      <p class="error error_type_email" id="title"></p>
    </div>
    <p class="error error_type_chat-error" id="chat-error"></p>
      <div class="form__container"><button id="" type="submit" class="common form__button" disabled>
         {{button}}</button>
      </div>
      <div class="form__container">
         <button id="chat-form-button" type="button" class="form__link">{{link}}</button>
      </div>
   </fieldset>
</form>`;
