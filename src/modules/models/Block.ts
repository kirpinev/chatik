import { EventBus } from './EventBus';

import { EVENTS } from '../constants';

import { BlockInterface } from '../../interfaces';

export class Block implements BlockInterface {
  _element = null;

  _meta: {
    tagName: string;
    data: object;
  } | null = null;

  eventBus: EventBus;

  data: Record<string, string | number>;

  constructor(tagName = 'div', data = {}) {
    this._meta = {
      tagName,
      data,
    };

    this.data = this._makePropsProxy(data);

    this.eventBus = new EventBus();

    this._registerEvents(this.eventBus);

    this.eventBus.emit(EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus): void {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources(): void {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init(): void {
    this._createResources();
    this.eventBus.emit(EVENTS.FLOW_CDM);
  }

  _componentDidMount(): void {
    this.eventBus.emit(EVENTS.FLOW_RENDER);
  }

  _componentDidUpdate(oldProps: string, newProps: string): void {
    const response = this._checkProps(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  _checkProps(oldProps: string, newProps: string): boolean {
    return oldProps !== newProps;
  }

  setProps = (nextProps: object) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.data, nextProps);
  };

  get element(): HTMLElement {
    return this._element;
  }

  _render(): void {
    const block = this.render();

    this._element.innerHTML = '';

    this._element.insertAdjacentHTML('beforeend', block);
  }

  render() {}

  getContent(): HTMLElement {
    return this.element;
  }

  _makePropsProxy(props) {
    return new Proxy(props, {
      get: (target, prop) => {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop, value) => {
        const prevProp = target[prop];

        target[prop] = value;

        this.eventBus.emit(EVENTS.FLOW_CDU, prevProp, target[prop]);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  show(): void {
    this.getContent().style.display = 'block';
  }

  hide(): void {
    this.getContent().style.display = 'none';
  }
}
