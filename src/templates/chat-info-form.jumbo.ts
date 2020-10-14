export const chatInfoForm = `<form class="form form_chat-avatar" name="chat-avatar" id="myChatAvatarForm" novalidate="">
   <fieldset class="form__fieldset" name="fieldset">
      <legend class="form__legend">{{legend}}</legend>
      <div class="form__container">
      <img class="avatar avatar_medium form__avatar" src="{{avatar}}" alt="{{display_name}}">
         <input id="chat-avatar" type="file" name="chatAvatar" class="input form__input form__input_auth" accept="image/*" required>
         <p class="error error_type_ava-file" id="chatAvatar"></p>
      </div>
      <p class="error error_type_chat-avatar-error" id="chat-avatar-error"></p>
      <div class="form__container"><button type="submit" class="common form__button" disabled>
         {{button}}</button>
      </div>
      <div class="form__container">
         <button id="chat-avatar-form" type="button" class="form__link">{{link}}</button>
      </div>
   </fieldset>
</form>
`;
