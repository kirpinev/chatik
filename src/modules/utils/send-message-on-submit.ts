import { sanitize } from './sanitize';

import { Validation } from '../models';

export const sendMessageOnSubmit = (
  validation: Validation,
  elem: string,
  socket: WebSocket,
  chatId: any,
) => {
  const form = document.querySelector(elem);

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (validation.checkAllInputs()) {
      const formData: { text?: string } = Array.from(
        form.querySelectorAll('input') as NodeListOf<HTMLInputElement>,
      ).reduce((acc, curr) => {
        acc[curr.name] = sanitize(curr.value);

        return acc;
      }, {});

      socket.send(
        JSON.stringify({
          content: formData.text,
          type: 'message',
        }),
      );

      form.querySelector('input').value = '';

      validation.disableButton();
    }
  });
};
