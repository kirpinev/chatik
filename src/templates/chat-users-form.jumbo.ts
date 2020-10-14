export const chatUsersForm = `<form class="form form_chat-users" name="chat-users" id="myChatUsersForm" novalidate="">
   <fieldset class="form__fieldset" name="fieldset">
      <legend class="form__legend">Добавить пользователей</legend>
      <div class="form__container">
         <input id="chat-users" type="text" name="chatUsers" class="input form__input form__input_auth" placeholder="Введите логин пользователя" accept="image/*" required>
         <p class="error error_type_chat-users" id="chatUsers"></p>
      </div>
      <div class="form__users-container"></div>
      <div class="form__container">
         <button id="chat-users-form" type="button" class="form__link">{{link}}</button>
      </div>
   </fieldset>
</form>`;
