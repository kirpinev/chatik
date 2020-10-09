import { Form } from './Form';

import { Templator } from '../models';

import { userInfo as userTempl } from '../../templates/user-info.jumbo';

import { UserInfoInterface } from '../../interfaces';

export class UserInfo extends Form implements UserInfoInterface {
  public render(): string {
    return new Templator(userTempl).compile(this.data);
  }

  public setListeners(): void {
    this.setInitialListeners();

    this.submit();

    this.setRouter();
  }

  setRouter(): void {
    const formReg = document.querySelector(this.props.form) as HTMLElement;

    if (!formReg) {
      return;
    }

    formReg.addEventListener('click', event => {
      const target = event.target as HTMLElement;

      if (target.getAttribute('id') === 'exit-button') {
        this.logoutFromChat();
      } else if (target.getAttribute('id') === 'chat-button') {
        this.props.router.go(this.props.path.chat);
      }
    });
  }

  private async logoutFromChat() {
    try {
      const res = await this.props.authApi.logout();

      if (res.status === 200) {
        this.props.router.go(this.props.path.auth);
      }
    } catch (error) {
      console.log(error);
    }
  }

  submit(): void {
    const form = document.querySelector(this.props.form);

    if (!form) {
      return;
    }

    form.addEventListener('submit', async event => {
      event.preventDefault();

      const formData = this.props.getDataOnSubmit(
        this.props.validation,
        this.props.form,
      );

      if (formData.status) {
        try {
          const res = await this.props.userApi.updateProfile(formData.data);

          if (res.status === 200) {
            this.props.router.go(this.props.path.chat);
          } else {
            form.querySelector(this.props.error).textContent = JSON.parse(
              res.response,
            ).reason;
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  async setInfo() {
    try {
      const res = await this.props.authApi.getUserInfo();

      if (res.status === 200) {
        const { avatar } = JSON.parse(res.response);

        this.setProps({
          ...JSON.parse(res.response),
          avatar: avatar
            ? `https://ya-praktikum.tech${avatar}`
            : 'https://dmitrovipoteka.ru/wp-content/uploads/2016/09/default-user-img.jpg',
        });

        this.setListeners();
      } else {
        this.props.router.go('/auth');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
